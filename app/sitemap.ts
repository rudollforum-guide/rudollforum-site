import type {MetadataRoute} from "next"; import {articles} from "./articles"; import {siteUrl} from "./site-config";
export const dynamic = "force-static";
const routeDates=new Map<string,string>([["where-to-buy","2026-08-08"],["shops/hanidoll","2026-08-08"],["shops/sexdollshop","2026-08-08"],["buy-tpe-doll","2026-08-01"],["buy-silicone-doll","2026-08-01"],["realistic-dolls","2026-08-01"],["owner-reviews","2026-08-01"]]);
export default function sitemap():MetadataRoute.Sitemap{return ["",...new Set(["guide","events","shops/moon-doll-guide","shops/hanidoll","shops/sexdollshop","owner-reviews",...Object.keys(articles)])].map(x=>({url:x?`${siteUrl(`/${x}`)}/`:siteUrl("/"),lastModified:new Date(routeDates.get(x)??"2026-07-24"),changeFrequency:x?"monthly":"weekly",priority:x?0.8:1}))}
