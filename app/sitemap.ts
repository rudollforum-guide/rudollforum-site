import type {MetadataRoute} from "next"; import {articles} from "./articles"; import {siteUrl} from "./site-config";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["",...new Set(["guide","shops/moon-doll-guide",...Object.keys(articles)])].map(x=>({url:siteUrl(x?`/${x}`:"/"),lastModified:new Date("2026-07-24"),changeFrequency:x?"monthly":"weekly",priority:x?0.8:1}))}
