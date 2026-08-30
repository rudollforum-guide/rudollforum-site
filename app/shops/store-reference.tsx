import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { publicPath, siteUrl } from "../site-config";

export const sponsoredRel = "noopener noreferrer sponsored";

type StoreReferenceProps = {
  slug: "hanidoll" | "sexdollshop";
  h1: string;
  description: string;
  intro: string;
  heroEmblem?: string;
  children: React.ReactNode;
};

export function CommercialLink({href,children,rel=sponsoredRel,className,iconImage}:{href:string;children:React.ReactNode;rel?:string;className?:string;iconImage?:string}) {
  return <a className={`store-reference-link${className ? ` ${className}` : ""}`} href={href} target="_blank" rel={rel}>
    {iconImage ? <><img className="store-reference-link-icon" src={publicPath(iconImage)} width={48} height={48} alt="" aria-hidden="true"/><span className="store-reference-link-copy">{children}</span></> : children}
  </a>;
}

export function StoreReference({slug,h1,description,intro,heroEmblem,children}:StoreReferenceProps) {
  const canonical=siteUrl(`/shops/${slug}/`);
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Где купить","item":siteUrl("/where-to-buy/")},{"@type":"ListItem","position":3,"name":h1,"item":canonical}]};
  const article={"@context":"https://schema.org","@type":"Article",headline:h1,description,url:canonical,mainEntityOfPage:canonical,inLanguage:"ru-RU",datePublished:"2026-08-08",dateModified:"2026-08-08",author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"}};
  const webPage={"@context":"https://schema.org","@type":"WebPage",name:h1,description,url:canonical,inLanguage:"ru-RU",datePublished:"2026-08-08",dateModified:"2026-08-08"};
  const headingContent=<><span className="eyebrow">Внешний магазин · справочная страница · 18+</span><h1>{h1}</h1><p>{intro}</p></>;
  return <SiteShell><JsonLd data={breadcrumb}/><JsonLd data={article}/><JsonLd data={webPage}/><article className={`article store-reference-page store-reference-page--${slug}`}>
    <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><Link href="/where-to-buy">Где купить</Link><span aria-hidden="true">·</span><span>{h1}</span></nav>
    <header className="article-hero">{heroEmblem ? <div className="article-emblem-heading store-reference-heading">
      <img className="article-hero-emblem" src={publicPath(heroEmblem)} width={128} height={128} alt="" aria-hidden="true" />
      {headingContent}
    </div> : headingContent}</header>
    <aside className="notice">Rudollforum не продаёт товары, не принимает оплату и не является посредником или гарантом сделки. Покупатель самостоятельно проверяет продавца, предложение и условия заказа.</aside>
    <div className="article-body">{children}</div>
    <section className="related"><span className="section-no">Продолжить проверку</span><h2>Связанные материалы</h2><div>
      <Link href="/where-to-buy">Магазины и официальные площадки</Link>
      <Link href="/safe-purchase">Безопасная покупка</Link>
      <Link href="/delivery-check">Проверка доставки</Link>
      <Link href="/brands">Каталог брендов</Link>
    </div></section>
    <MetaLine published="2026-08-08" updated="2026-08-08"/>
  </article></SiteShell>;
}
