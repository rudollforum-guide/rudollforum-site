import type {MetadataRoute} from "next"; import {articles} from "./articles"; import {siteUrl} from "./site-config";
export const dynamic = "force-static";
const newRoutes=new Set(["where-to-buy","buy-tpe-doll","buy-silicone-doll","realistic-dolls","owner-reviews"]);
export default function sitemap():MetadataRoute.Sitemap{return ["",...new Set(["guide","shops/moon-doll-guide","owner-reviews",...Object.keys(articles)])].map(x=>({url:x?`${siteUrl(`/${x}`)}/`:siteUrl("/"),lastModified:new Date(newRoutes.has(x)?"2026-08-01":"2026-07-24"),changeFrequency:x?"monthly":"weekly",priority:x?0.8:1}))}
