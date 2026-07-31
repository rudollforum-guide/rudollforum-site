import type { Metadata } from "next";
import "./globals.css";
import { AgeGate } from "./age-gate";
import { publicPath, SITE_URL, siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {default:"Rudollforum — TPE и силиконовые куклы",template:"%s"},
  description:"Независимый справочник по выбору, покупке, уходу и хранению силиконовых и ТПЕ-кукол.",
  openGraph:{type:"website",locale:"ru_RU",siteName:"Rudollforum",images:[{url:siteUrl("/og.png"),width:1200,height:630,alt:"Rudollforum — справочник по TPE и силиконовым куклам"}]},
  twitter:{card:"summary_large_image",images:[siteUrl("/og.png")]},
  icons:{icon:publicPath("/favicon.svg")},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru"><body><AgeGate/><div id="site-content">{children}</div></body></html>
}
