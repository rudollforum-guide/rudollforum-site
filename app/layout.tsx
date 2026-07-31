import type { Metadata } from "next";
import "./globals.css";
import { AgeGate } from "./age-gate";

export const metadata: Metadata = {
  metadataBase: new URL("https://rudollforum.sites.openai.com"),
  title: {default:"Rudollforum — TPE и силиконовые куклы",template:"%s"},
  description:"Независимый справочник по выбору, покупке, уходу и хранению силиконовых и ТПЕ-кукол.",
  openGraph:{type:"website",locale:"ru_RU",siteName:"Rudollforum",images:[{url:"/og.png",width:1200,height:630,alt:"Rudollforum — справочник по TPE и силиконовым куклам"}]},
  twitter:{card:"summary_large_image",images:["/og.png"]},
  icons:{icon:"/favicon.svg"},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru"><body><AgeGate/><div id="site-content">{children}</div></body></html>
}
