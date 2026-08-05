const archiveBase = "/2025/";
const mediaOrigin = "https://wp-studio-alloy-api.s3.eu-central-1.amazonaws.com/";

function prefixSrcset(value) {
  return value
    .split(",")
    .map((candidate) => candidate.replace(/^(\s*)\/(?!\/|2025\/)/, `$1${archiveBase}`))
    .join(",");
}

function archiveHtml(html) {
  if (typeof html !== "string") {
    return html;
  }

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

function archiveAsset(url) {
  if (typeof url === "string" && url.startsWith(mediaOrigin)) {
    return `${archiveBase}media/${url.slice(mediaOrigin.length)}`;
  }

  return url;
}

export default (context, inject) => {
  inject("archiveHtml", archiveHtml);
  inject("archiveAsset", archiveAsset);
};
