import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../articles";
import { FeaturedExternalLink, FeaturedInternalLink, JsonLd, MetaLine, SiteShell } from "../site";
import { StoreDirectory } from "../store-directory";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl } from "../site-config";

function ArticleItem({ item, heading }: { item: string; heading: string }) {
  const external = item.match(/^(https?:\/\/\S+) — (.+)$/);
  const internal = item.match(/^(.+) — (\/\S+)$/);
  const isMoonDoll = external?.[1] === "https://www.moon-doll.com/";
  const isTelegram = external?.[1] === "https://t.me/rudollforum";
  const isAction = heading === "Moon-Doll" || heading === "Опыт продолжается в обсуждениях";

  if (external) {
    const label = isMoonDoll
      ? "Открыть Moon-Doll"
      : isTelegram
        ? "Открыть Telegram Rudollforum"
        : external[2].replace(/\.$/, "");
    const rel = isMoonDoll ? "noopener noreferrer sponsored" : "noopener noreferrer";
    return (
      <li className={isAction ? "article-link-action" : undefined}>
        <a className={isAction ? "link-button-secondary" : "link-inline"} href={external[1]} target="_blank" rel={rel}>
          {isTelegram && <span aria-hidden="true">✉</span>}
          {label}
        </a>
      </li>
    );
  }

  if (internal) {
    const label = heading === "Moon-Doll" ? "Читать инструкцию" : internal[1];
    return (
      <li className={isAction ? "article-link-action" : undefined}>
        <Link className={isAction ? "link-button-secondary link-button-internal" : "link-inline"} href={internal[2]}>
          {label}
        </Link>
      </li>
    );
  }

  return <li>{item}</li>;
}

function CommunityDiscussionAction() {
  return <div className="resource-featured-links community-featured-action">
    <FeaturedExternalLink href="https://t.me/rudollforum" variant="telegram" iconImage={publicPath("/images/community/telegram-icon.png")} title="Открыть Telegram Rudollforum" subtitle="канал и вход в закрытое сообщество владельцев"/>
    <FeaturedInternalLink href="/events" icon="◇" title="Мероприятия и конкурсы" description="Текущие события и архив конкурсов Rudollforum"/>
    <small className="article-featured-note">Информация об условиях входа в закрытую группу опубликована в открытом канале.</small>
  </div>;
}

const articleHeroEmblems: Record<string, string> = {
  "getting-started": "/images/getting-started/getting-started-hero-emblem.png",
  "silicone-or-tpe": "/images/silicone-or-tpe/silicone-tpe-hero-emblem.png",
};

export const dynamicParams = false;
export function generateStaticParams(){return Object.keys(articles).filter(slug=>slug!=="brands").map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const a=articles[slug]; if(!a)return {};
  return {title:a.title,description:a.description,alternates:{canonical:siteUrl(`/${slug}`)},openGraph:{title:a.title,description:a.description,url:siteUrl(`/${slug}`),type:"article",images:[OPEN_GRAPH_IMAGE]}};
}
export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const a=articles[slug]; if(!a)notFound();
  const heroEmblem=articleHeroEmblems[slug];
  const datePublished=a.datePublished||"2026-07-24";
  const dateModified=a.dateModified||datePublished;
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":a.h1,"item":siteUrl(`/${slug}/`)}]};
  const howToSectionIndexes:Record<string,number[]>={"how-to-buy":[0,1,2,3],"internal-drying":[0,1,2,3],"delivery-check":[0,1,2,3]};
  const howToSteps=howToSectionIndexes[slug]?.map((index,position)=>({"@type":"HowToStep",position:position+1,name:a.sections[index].heading,text:[...a.sections[index].text,...(a.sections[index].items??[])].join(" ")}));
  const article={"@context":"https://schema.org","@type":a.schema||"Article",headline:a.h1,description:a.description,url:siteUrl(`/${slug}/`),inLanguage:"ru-RU",datePublished,dateModified,author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"},...(a.schema==="HowTo"&&howToSteps?{step:howToSteps}:{})};
  const webPage={"@context":"https://schema.org","@type":"WebPage",name:a.h1,description:a.description,url:siteUrl(`/${slug}/`),inLanguage:"ru-RU",datePublished,dateModified};
  return <SiteShell><JsonLd data={breadcrumb}/><JsonLd data={article}/><JsonLd data={webPage}/><article className="article"><nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><span>{a.h1}</span></nav><div className="article-hero">{heroEmblem?<div className="article-emblem-heading"><img className="article-hero-emblem" src={publicPath(heroEmblem)} alt="" aria-hidden="true" width="92" height="92"/><span className="eyebrow">{a.kicker||"Справочник Rudollforum"}</span><h1>{a.h1}</h1><p>{a.intro}</p></div>:<><span className="eyebrow">{a.kicker||"Справочник Rudollforum"}</span><h1>{a.h1}</h1><p>{a.intro}</p></>}</div>{a.notice&&<aside className="notice">{a.notice}</aside>}<div className="article-body">{a.sections.map((s,i)=><section key={s.heading}><span className="chapter">{String(i+1).padStart(2,"0")}</span><div><h2>{s.heading}</h2>{s.text.map(p=><p key={p}>{p}</p>)}{s.heading === "Магазины и площадки" && (slug === "where-to-buy" || slug === "useful-links") ? <StoreDirectory compact={slug === "useful-links"}/> : s.items&&(slug === "community" && s.heading === "Опыт продолжается в обсуждениях" ? <CommunityDiscussionAction/> : <ul className={s.heading === "Moon-Doll" || s.heading === "Опыт продолжается в обсуждениях" ? "article-link-actions" : undefined}>{s.items.map(x=><ArticleItem item={x} heading={s.heading} key={x}/>)}</ul>)}{s.subsections?.map(subsection=><div className="article-subsection" key={subsection.heading}><h3>{subsection.heading}</h3>{subsection.text.map(p=><p key={p}>{p}</p>)}</div>)}{s.table&&<div className="table-wrap"><table><thead><tr>{s.table[0].map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{s.table.slice(1).map((r,j)=><tr key={j}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></div>}</div></section>)}</div><section className="related"><span className="section-no">Продолжить чтение</span><h2>Связанные материалы</h2><div>{a.related.map(([n,h])=><Link href={h} key={h}>{n}</Link>)}</div></section><MetaLine published={datePublished} updated={dateModified}/></article></SiteShell>
}
