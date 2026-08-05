const fs = require("fs");
const https = require("https");
const path = require("path");

const archiveBase = "/2025/";
const mediaOrigin = "https://wp-studio-alloy-api.s3.eu-central-1.amazonaws.com/";
const mediaPattern = /https:\/\/wp-studio-alloy-api\.s3\.eu-central-1\.amazonaws\.com\/[A-Za-z0-9%_./-]+\.(?:avif|gif|jpe?g|png|svg|webp)(?:\?[A-Za-z0-9%&=_.-]+)?/gi;
const outputDir = path.resolve(__dirname, "../dist");
const obsoleteFiles = [
  "CNAME",
  "README.md",
  "_redirects",
  "graphql.json",
  "netlify.toml",
  "sitemap.xml",
  "sitemap.xml.gz",
];

function prefixSrcset(value) {
  return value
    .split(",")
    .map((candidate) => candidate.replace(/^(\s*)\/(?!\/|2025\/)/, `$1${archiveBase}`))
    .join(",");
}

function prefixArchiveUrls(html) {
  return html
    .replace(
      /\b(href|src|action)=(["'])\/(?!\/|2025(?:\/|["']))/gi,
      `$1=$2${archiveBase}`,
    )
    .replace(/\bsrcset=(["'])(.*?)\1/gi, (match, quote, value) => {
      return `srcset=${quote}${prefixSrcset(value)}${quote}`;
    })
    .replace(/url\((["']?)\/(?!\/|2025\/)/gi, `url($1${archiveBase}`);
}

function localMediaUrl(remoteUrl) {
  return `${archiveBase}media/${remoteUrl.slice(mediaOrigin.length)}`;
}

function localMediaPath(remoteUrl) {
  const remotePath = new URL(remoteUrl).pathname.replace(/^\/+/, "");
  const decodedPath = decodeURIComponent(remotePath);
  const filePath = path.resolve(outputDir, "media", decodedPath);
  const mediaDir = path.resolve(outputDir, "media");

  if (!filePath.startsWith(`${mediaDir}${path.sep}`)) {
    throw new Error(`Unsafe media path: ${remoteUrl}`);
  }

  return filePath;
}

function download(remoteUrl, filePath) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    return Promise.resolve();
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  return new Promise((resolve, reject) => {
    const request = https.get(remoteUrl, { headers: { "User-Agent": "Studio Alloy static archive builder" } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume();
        download(new URL(response.headers.location, remoteUrl).toString(), filePath).then(resolve, reject);
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`Unable to download ${remoteUrl}: HTTP ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on("finish", () => file.close(resolve));
      file.on("error", reject);
    });

    request.on("error", reject);
  });
}

function visit(directory, htmlFiles) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      visit(filePath, htmlFiles);
    } else if (entry.isFile() && path.extname(entry.name) === ".html") {
      htmlFiles.push(filePath);
    }
  });
}

async function main() {
  obsoleteFiles.forEach((file) => {
    const filePath = path.join(outputDir, file);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  const htmlFiles = [];
  visit(outputDir, htmlFiles);

  const remoteMedia = new Set();
  htmlFiles.forEach((file) => {
    const html = fs.readFileSync(file, "utf8");
    (html.match(mediaPattern) || []).forEach((url) => remoteMedia.add(url));
  });

  await Promise.all(
    Array.from(remoteMedia).map((url) => download(url, localMediaPath(url))),
  );

  htmlFiles.forEach((file) => {
    let html = fs.readFileSync(file, "utf8");
    html = prefixArchiveUrls(html);
    html = html.replace(mediaPattern, (url) => localMediaUrl(url));
    fs.writeFileSync(file, html);
  });

  console.log(`Archived ${remoteMedia.size} CMS media files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
