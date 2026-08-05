const fs = require("fs");
const path = require("path");

const outputDir = path.resolve(__dirname, "../dist");
const failures = [];
const htmlFiles = [];

function visit(directory) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      visit(filePath);
    } else if (entry.isFile() && path.extname(entry.name) === ".html") {
      htmlFiles.push(filePath);
    }
  });
}

function fail(file, message) {
  failures.push(`${path.relative(outputDir, file)}: ${message}`);
}

visit(outputDir);

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");

  if (!html.includes('name="robots" content="noindex, nofollow"')) {
    fail(file, "missing robots noindex metadata");
  }

  if (path.basename(file) !== "404.html" && !html.includes('<base href="/2025/">')) {
    fail(file, "missing /2025/ base element");
  }

  if (/\b(?:href|src|action)=(["'])\/(?!2025\/|\/)/i.test(html)) {
    fail(file, "contains an unprefixed root-relative URL");
  }

  if (/url\((["']?)\/(?!2025\/|\/)/i.test(html)) {
    fail(file, "contains an unprefixed root-relative CSS URL");
  }

  if (/fonts\.(?:googleapis|gstatic)\.com/i.test(html)) {
    fail(file, "still loads fonts from Google");
  }

  if (/wp-studio-alloy-api\.s3\.eu-central-1\.amazonaws\.com\/[^"' ]+\.(?:avif|gif|jpe?g|png|svg|webp)/i.test(html)) {
    fail(file, "still references a remote CMS image");
  }
});

[
  "CNAME",
  "_redirects",
  "netlify.toml",
  "sitemap.xml",
  "sitemap.xml.gz",
].forEach((file) => {
  const filePath = path.join(outputDir, file);

  if (fs.existsSync(filePath)) {
    fail(filePath, "obsolete or sitemap file should not be in the archive");
  }
});

const robots = fs.readFileSync(path.join(outputDir, "robots.txt"), "utf8");
if (robots !== "User-agent: *\nDisallow: /2025/\n") {
  fail(path.join(outputDir, "robots.txt"), "unexpected robots.txt contents");
}

const htaccess = fs.readFileSync(path.join(outputDir, ".htaccess"), "utf8");
if (!htaccess.includes('X-Robots-Tag "noindex, nofollow"')) {
  fail(path.join(outputDir, ".htaccess"), "missing X-Robots-Tag rule");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${htmlFiles.length} generated HTML files for /2025/.`);
}
