import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Практическое руководство по силиконовым и TPE-куклам — Rudollforum",
  description: "Полное руководство Rudollforum по выбору, покупке, эксплуатации, уходу, хранению и ремонту силиконовых и TPE-кукол. Доступна PDF-версия.",
  alternates: { canonical: siteUrl("/guide") },
  openGraph: { url: siteUrl("/guide"), type: "article", images: [OPEN_GRAPH_IMAGE] },
};

const chapters = [
  { title:"Введение", text:"Бытовые ожидания, форматы и подготовка до первой покупки.", href:"/getting-started", icon:"01-introduction.png" },
  { title:"Материалы", text:"Силикон и TPE без универсальных обещаний.", href:"/silicone-or-tpe", icon:"02-materials.png" },
  { title:"Размеры и вес", text:"Фактическая нагрузка, переноска и хранение.", href:"/weight-and-size", icon:"03-size-weight.png" },
  { title:"Базовый уход", text:"Очистка, сушка, пудра, одежда и осмотр.", href:"/care", icon:"04-basic-care.png" },
  { title:"Проверка после получения", text:"Пошаговый чек-лист распаковки.", href:"/delivery-check", icon:"05-delivery-check.png" },
  { title:"Безопасная покупка", text:"Продавец, происхождение, гарантия и доставка.", href:"/safe-purchase", icon:"06-safe-purchase.png" },
  { title:"Бренды", text:"Справочный каталог с поиском и фильтрами.", href:"/brands", icon:"07-brands.png" },
  { title:"Скелеты", text:"Суставы, стопы, пальцы и дополнительные системы.", href:"/skeleton", icon:"08-skeletons.png" },
  { title:"Слабые места", text:"Ранние признаки повреждений и профилактика.", href:"/weak-points", icon:"09-weak-points.png" },
  { title:"Одежда и пятна", text:"Ткани, парики, аксессуары и красители.", href:"/clothing-and-stains", icon:"10-clothing-stains.png" },
  { title:"Хранение", text:"Положения, мягкие зоны и длительный контроль.", href:"/storage", icon:"11-storage.png" },
  { title:"Ремонт", text:"Различия восстановления TPE и силикона.", href:"/repair", icon:"12-repair.png" },
  { title:"Старение", text:"Изменения материалов и признаки износа.", href:"/material-aging", icon:"13-aging.png" },
  { title:"Опыт владельца", text:"Ожидания, образы, границы и уважение.", href:"/owner-experience", icon:"14-owner-experience.png" },
];

export default function GuidePage() {
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Практическое руководство","item":siteUrl("/guide/")}]};
  const article={"@context":"https://schema.org","@type":"Article",headline:"Практическое руководство владельца",description:metadata.description,inLanguage:"ru-RU",datePublished:"2026-07-24",dateModified:"2026-07-24",author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"},mainEntityOfPage:siteUrl("/guide/")};
  return <SiteShell><JsonLd data={breadcrumb}/><JsonLd data={article}/><article className="article guide-page">
    <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><span>Практическое руководство</span></nav>
    <header className="article-hero">
      <div className="guide-section-heading">
        <img className="guide-section-emblem" src={publicPath("/images/guide/guide-section-emblem.png")} alt="" aria-hidden="true" width="92" height="92"/>
        <span className="eyebrow">Навигация по знаниям</span>
        <h1>Практическое руководство владельца</h1>
        <p>Руководство Rudollforum посвящено выбору, покупке, эксплуатации, уходу, хранению и ремонту полноразмерных силиконовых и TPE-кукол. Оно основано на реальном опыте владельцев и систематизации практических ситуаций.</p>
      </div>
    </header>
    <section className="guide-pdf-card" aria-labelledby="guide-pdf-title">
      <figure className="guide-pdf-cover">
        <img src={publicPath("/images/guide/rudollforum-guide-cover.webp")} alt="Обложка руководства Rudollforum по уходу за силиконовыми и TPE-куклами" width="1000" height="1414" loading="lazy"/>
      </figure>
      <div className="guide-pdf-copy">
        <div className="guide-pdf-heading">
          <img className="guide-pdf-heading-icon" src={publicPath("/images/guide/guide-hero-icon.png")} alt="" aria-hidden="true" width="80" height="80"/>
          <div>
            <span className="guide-pdf-label">Полная версия · PDF · 18+</span>
            <h2 id="guide-pdf-title">Руководство по эксплуатации силиконовых и TPE-кукол</h2>
          </div>
        </div>
        <p className="guide-pdf-description">Полное практическое издание Rudollforum о выборе, покупке, эксплуатации, уходе, хранении и ремонте полноразмерных силиконовых и TPE-кукол.</p>
        <ul className="guide-pdf-meta">
          <li>Издание 2026 года</li>
          <li>Версия 1.0</li>
          <li>125 страниц</li>
          <li>Материал предназначен для совершеннолетней аудитории</li>
          <li>Основано на практическом опыте владельцев и сообщества Rudollforum</li>
        </ul>
        <p className="guide-pdf-warning">18+. Материал предназначен только для совершеннолетней аудитории.</p>
        <div className="guide-pdf-actions">
          <a className="link-button-primary" href={publicPath("/documents/rudollforum-guide-tpe-silicone-2026.pdf")} target="_blank" rel="noopener noreferrer"><img className="guide-pdf-action-icon" src={publicPath("/images/guide/open-guide-icon.png")} alt="" aria-hidden="true" width="38" height="38"/><span>Открыть полное руководство</span></a>
          <a className="link-button-secondary" href={publicPath("/documents/rudollforum-guide-tpe-silicone-2026.pdf")} download><img className="guide-pdf-action-icon" src={publicPath("/images/guide/download-pdf-icon.png")} alt="" aria-hidden="true" width="38" height="38"/><span>Скачать PDF</span></a>
        </div>
        <p className="guide-pdf-rights">© Rudollforum, 2026. Разрешено личное использование и цитирование с указанием источника. Полное копирование, удаление авторства, публикация под другим именем и коммерческое распространение без письменного разрешения запрещены.</p>
      </div>
    </section>
    <section className="guide-intro"><p>Выберите тему, чтобы перейти к самостоятельной веб-статье. Рекомендации нужно сверять с точным материалом, конструкцией и инструкцией производителя. После выбора требований можно сравнить <Link href="/where-to-buy">магазины и официальные площадки</Link>.</p></section>
    <div className="chapter-grid">{chapters.map(({title,text,href,icon},index)=><Link href={href} key={href}><div className="chapter-card-top"><span className="chapter-index">{String(index+1).padStart(2,"0")}</span><img className="chapter-icon" src={publicPath(`/images/guide/chapters/${icon}`)} alt="" aria-hidden="true" width="72" height="72" loading="lazy"/></div><h2>{title}</h2><p>{text}</p><b>Открыть главу</b></Link>)}</div>
    <MetaLine/>
  </article></SiteShell>
}
