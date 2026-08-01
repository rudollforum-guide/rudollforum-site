import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AgeGate } from "./age-gate";
import { OPEN_GRAPH_IMAGE, publicPath, SITE_URL, TWITTER_IMAGE } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {default:"Rudollforum — TPE и силиконовые куклы",template:"%s"},
  description:"Независимый справочник по выбору, покупке, уходу и хранению силиконовых и ТПЕ-кукол.",
  openGraph:{type:"website",locale:"ru_RU",siteName:"Rudollforum",images:[OPEN_GRAPH_IMAGE]},
  twitter:{card:"summary_large_image",images:[TWITTER_IMAGE]},
  manifest:publicPath("/manifest.webmanifest"),
  icons:{
    icon:[{url:publicPath("/icon-32.png"),type:"image/png",sizes:"32x32"}],
    shortcut:[{url:publicPath("/favicon.ico"),type:"image/x-icon"}],
    apple:[{url:publicPath("/apple-touch-icon.png"),type:"image/png",sizes:"180x180"}],
  },
};

export const viewport: Viewport = {
  themeColor:"#30213d",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru"><body><AgeGate/><div id="site-content">{children}</div></body></html>
}
