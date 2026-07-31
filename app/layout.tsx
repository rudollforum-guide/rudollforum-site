import type { Metadata } from "next";
import "./globals.css";
import { AgeGate } from "./age-gate";
import { OPEN_GRAPH_IMAGE, publicPath, SITE_URL, TWITTER_IMAGE } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {default:"Rudollforum — TPE и силиконовые куклы",template:"%s"},
  description:"Независимый справочник по выбору, покупке, уходу и хранению силиконовых и ТПЕ-кукол.",
  openGraph:{type:"website",locale:"ru_RU",siteName:"Rudollforum",images:[OPEN_GRAPH_IMAGE]},
  twitter:{card:"summary_large_image",images:[TWITTER_IMAGE]},
  icons:{icon:publicPath("/favicon.svg")},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru"><body><AgeGate/><div id="site-content">{children}</div></body></html>
}
