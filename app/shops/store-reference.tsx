import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { siteUrl } from "../site-config";

export const sponsoredRel = "noopener noreferrer sponsored";

type StoreReferenceProps = {
  slug: "hanidoll" | "sexdollshop";
  h1: string;
  description: string;
  intro: string;
  children: React.ReactNode;
};

export function CommercialLink({href,children,rel=sponsoredRel}:{href:string;children:React.ReactNode;rel?:string}) {
  return <a className="store-reference-link" href={href} target="_blank" rel={rel}>{children}<span aria-hidden="true">↗</span></a>;
}

export function StoreReference({slug,h1,description,intro,children}:StoreReferenceProps) {
  const canonical=siteUrl(`/shops/${slug}/`);
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Где купить","item":siteUrl("/where-to-buy/")},{"@type":"ListItem","position":3,"name":h1,"item":canonical}]};
  const article={"@context":"https://schema.org","@type":"Article",headline:h1,description,url:canonical,mainEntityOfPage:canonical,inLanguage:"ru-RU",datePublished:"2026-08-08",dateModified:"2026-08-08",author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"}};
  const webPage={"@context":"https://schema.org","@type":"WebPage",name:h1,description,url:canonical,inLanguage:"ru-RU",datePublished:"2026-08-08",dateModified:"2026-08-08"};
  return <SiteShell><JsonLd data={breadcrumb}/><JsonLd data={article}/><JsonLd data={webPage}/><article className="article store-reference-page">
    <nav className="breadcrumbs"><Link href="/">Главная</Link><span>→</span><Link href="/where-to-buy">Где купить</Link><span>→</span><span>{h1}</span></nav>
    <header className="article-hero"><span className="eyebrow">Внешний магазин · справочная страница · 18+</span><h1>{h1}</h1><p>{intro}</p></header>
    <aside className="notice">Rudollforum не продаёт товары, не принимает оплату и не является посредником или гарантом сделки. Покупатель самостоятельно проверяет продавца, предложение и условия заказа.</aside>
    <div className="article-body">{children}</div>
    <section className="related"><span className="section-no">Продолжить проверку</span><h2>Связанные материалы</h2><div>
      <Link href="/where-to-buy">Магазины и официальные площадки <span>→</span></Link>
      <Link href="/safe-purchase">Безопасная покупка <span>→</span></Link>
      <Link href="/delivery-check">Проверка доставки <span>→</span></Link>
      <Link href="/brands">Каталог брендов <span>→</span></Link>
    </div></section>
    <MetaLine published="2026-08-08" updated="2026-08-08"/>
  </article></SiteShell>;
}
