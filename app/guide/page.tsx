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
  ["Введение","Бытовые ожидания, форматы и подготовка до первой покупки.","/getting-started"],
  ["Материалы","Силикон и TPE без универсальных обещаний.","/silicone-or-tpe"],
  ["Размеры и вес","Фактическая нагрузка, переноска и хранение.","/weight-and-size"],
  ["Базовый уход","Очистка, сушка, пудра, одежда и осмотр.","/care"],
  ["Проверка после получения","Пошаговый чек-лист распаковки.","/delivery-check"],
  ["Безопасная покупка","Продавец, происхождение, гарантия и доставка.","/safe-purchase"],
  ["Бренды","Справочный каталог с поиском и фильтрами.","/brands"],
  ["Скелеты","Суставы, стопы, пальцы и дополнительные системы.","/skeleton"],
  ["Слабые места","Ранние признаки повреждений и профилактика.","/weak-points"],
  ["Одежда и пятна","Ткани, парики, аксессуары и красители.","/clothing-and-stains"],
  ["Хранение","Положения, мягкие зоны и длительный контроль.","/storage"],
  ["Ремонт","Различия восстановления TPE и силикона.","/repair"],
  ["Старение","Изменения материалов и признаки износа.","/material-aging"],
  ["Опыт владельца","Ожидания, образы, границы и уважение.","/owner-experience"],
];

export default function GuidePage() {
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Практическое руководство","item":siteUrl("/guide/")}]};
  const article={"@context":"https://schema.org","@type":"Article",headline:"Практическое руководство владельца",description:metadata.description,inLanguage:"ru-RU",datePublished:"2026-07-24",dateModified:"2026-07-24",author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"},mainEntityOfPage:siteUrl("/guide/")};
  return <SiteShell><JsonLd data={breadcrumb}/><JsonLd data={article}/><article className="article guide-page">
    <nav className="breadcrumbs"><Link href="/">Главная</Link><span>→</span><span>Практическое руководство</span></nav>
    <header className="article-hero"><span className="eyebrow">Навигация по знаниям</span><h1>Практическое руководство владельца</h1><p>Руководство Rudollforum посвящено выбору, покупке, эксплуатации, уходу, хранению и ремонту полноразмерных силиконовых и TPE-кукол. Оно основано на реальном опыте владельцев и систематизации практических ситуаций.</p></header>
    <section className="guide-pdf-card" aria-labelledby="guide-pdf-title">
      <figure className="guide-pdf-cover">
        <img src={publicPath("/images/guide/rudollforum-guide-cover.webp")} alt="Обложка руководства Rudollforum по уходу за силиконовыми и TPE-куклами" width="1000" height="1414" loading="lazy"/>
      </figure>
      <div className="guide-pdf-copy">
        <span className="guide-pdf-label">Полная версия · PDF · 18+</span>
        <h2 id="guide-pdf-title">Руководство по эксплуатации силиконовых и TPE-кукол</h2>
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
          <a className="link-button-primary" href={publicPath("/documents/rudollforum-guide-tpe-silicone-2026.pdf")} target="_blank" rel="noopener noreferrer">Открыть полное руководство <span aria-hidden="true">↗</span></a>
          <a className="link-button-secondary" href={publicPath("/documents/rudollforum-guide-tpe-silicone-2026.pdf")} download>Скачать PDF <span aria-hidden="true">↓</span></a>
        </div>
        <p className="guide-pdf-rights">© Rudollforum, 2026. Разрешено личное использование и цитирование с указанием источника. Полное копирование, удаление авторства, публикация под другим именем и коммерческое распространение без письменного разрешения запрещены.</p>
      </div>
    </section>
    <section className="guide-intro"><p>Выберите тему, чтобы перейти к самостоятельной веб-статье. Рекомендации нужно сверять с точным материалом, конструкцией и инструкцией производителя. После выбора требований можно сравнить <Link href="/where-to-buy">магазины и официальные площадки</Link>.</p></section>
    <div className="chapter-grid">{chapters.map(([title,text,href],index)=><Link href={href} key={href}><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p><b>Открыть главу →</b></Link>)}</div>
    <MetaLine/>
  </article></SiteShell>
}
