export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://rudollforum-guide.github.io/rudollforum-site"
).replace(/\/$/, "");

export function publicPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export function siteUrl(path = "/") {
  if (path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const SOCIAL_IMAGE_ALT = "Rudollforum — справочник по силиконовым и TPE-куклам";
export const OPEN_GRAPH_IMAGE = {
  url: siteUrl("/images/rudollforum-og.webp"),
  width: 1200,
  height: 630,
  type: "image/webp",
  alt: SOCIAL_IMAGE_ALT,
};
export const TWITTER_IMAGE = {
  url: OPEN_GRAPH_IMAGE.url,
  alt: SOCIAL_IMAGE_ALT,
};
