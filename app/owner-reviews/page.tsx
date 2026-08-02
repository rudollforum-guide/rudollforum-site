import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedExternalLink, JsonLd, MetaLine, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, siteUrl } from "../site-config";

const title = "Отзывы владельцев силиконовых и TPE-кукол | Rudollforum";
const description = "Отзывы владельцев силиконовых и TPE-кукол: материалы, вес, уход, хранение и длительная эксплуатация. Основные обсуждения и реальные отзывы публикуются в закрытой группе Rudollforum.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/owner-reviews") },
  openGraph: { title, description, url: siteUrl("/owner-reviews"), type: "website", images: [OPEN_GRAPH_IMAGE] },
};

const topics = [
  ["Материалы", "Будущие публикации будут отделять первое впечатление от опыта спустя месяцы: мягкость, запах, липкость, текстура, окрашивание поверхности, soft-зоны и различия между заявленным и фактическим материалом."],
  ["Вес и переноска", "В центре внимания — фактический вес комплектации, удобство подъёма и переноски, работа скелета, суставов и пальцев, а также соответствие размеров и массы данным продавца."],
  ["Уход и долговечность", "Редакция будет учитывать очистку, сушку, пятна, хранение, ремонт, состояние парика, упаковку и доставку, а также изменения материала после продолжительной эксплуатации."],
] as const;

export default function OwnerReviewsPage() {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Отзывы владельцев","item":siteUrl("/owner-reviews/")}]};
  const collection = {"@context":"https://schema.org","@type":"CollectionPage",name:"Отзывы владельцев силиконовых и TPE-кукол",description,url:siteUrl("/owner-reviews/"),inLanguage:"ru-RU",datePublished:"2026-08-01",dateModified:"2026-08-01",publisher:{"@type":"Organization","name":"Rudollforum"}};

  return <SiteShell>
    <JsonLd data={breadcrumb}/>
    <JsonLd data={collection}/>
    <article className="article owner-reviews-page">
      <nav className="breadcrumbs"><Link href="/">Главная</Link><span>→</span><span>Отзывы владельцев</span></nav>
      <header className="article-hero">
        <span className="eyebrow">Редакционный раздел · 18+</span>
        <h1>Отзывы владельцев силиконовых и TPE-кукол</h1>
        <p>Раздел предназначен для систематизации реального опыта владельцев без выдуманных авторов, оценок и количества отзывов. Здесь будут публиковаться только материалы, для которых можно указать модель, срок владения и контекст эксплуатации.</p>
      </header>
      <div className="owner-reviews-intro-copy">
        <p>Основная часть отзывов владельцев, фотографий, обсуждений моделей и практического опыта публикуется в закрытой группе Rudollforum. Закрытый формат помогает сохранять уважительное отношение к материалам участников и поддерживать спокойную атмосферу общения.</p>
        <p>Информация о входе в закрытую группу доступна через <a href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">открытый Telegram-канал Rudollforum</a>. Доступ не предоставляется автоматически: условия вступления и актуальные правила необходимо смотреть в канале.</p>
      </div>
      <section className="owner-community-card" aria-labelledby="owner-community-title">
        <div className="owner-community-copy">
          <span className="section-no">Сообщество владельцев</span>
          <h2 id="owner-community-title">Где читать реальные отзывы владельцев</h2>
          <p>Отзывы о брендах, материалах, весе, скелетах, уходе, хранении и долговременной эксплуатации публикуются участниками закрытой группы Rudollforum. В группе также обсуждаются новые модели, доставка, повреждения, ремонт и личный опыт владения.</p>
          <ul>
            <li>отзывы владельцев;</li>
            <li>фотографии моделей;</li>
            <li>опыт через несколько месяцев;</li>
            <li>сравнение материалов;</li>
            <li>уход и хранение;</li>
            <li>разбор проблем и повреждений;</li>
            <li>обсуждение брендов и магазинов.</li>
          </ul>
        </div>
        <div className="owner-community-action">
          <FeaturedExternalLink href="https://t.me/rudollforum" variant="telegram" icon="✈" title="Перейти в Telegram Rudollforum" subtitle="вход через открытый канал"/>
          <small>В канале размещена информация о сообществе и условиях входа в закрытую группу.</small>
        </div>
      </section>
      <section className="section" aria-labelledby="review-topics-title">
        <div className="section-head"><div><span className="section-no">Темы будущих материалов</span><h2 id="review-topics-title">Что важно в опыте владельца</h2></div><p>Карточки описывают направления редакционной работы, а не отзывы или оценки товаров.</p></div>
        <p className="catalog-disclaimer">Полезный материал должен указывать точную модель, материал, срок эксплуатации и обстоятельства использования. Первые впечатления отделяются от наблюдений спустя месяцы, а заводские фотографии — от фотографий полученного экземпляра.</p>
        <div className="topic-grid">
          {topics.map(([heading, text], index) => <article className="topic-card" key={heading}><div className="card-top"><span>{String(index + 1).padStart(2,"0")}</span><i aria-hidden="true">◇</i></div><h3>{heading}</h3><p>{text}</p></article>)}
        </div>
        <p className="catalog-navigation-note">Мнение автора отзыва может не совпадать с опытом других владельцев. Характеристики моделей и материалов меняются между партиями и версиями.</p>
      </section>
      <section className="related owner-reviews-related" aria-labelledby="owner-related-title">
        <span className="section-no">Полезные материалы</span>
        <h2 id="owner-related-title">Продолжить изучение</h2>
        <div>
          <Link href="/brands">Каталог брендов<span aria-hidden="true">→</span></Link>
          <Link href="/where-to-buy">Где купить<span aria-hidden="true">→</span></Link>
          <Link href="/how-to-choose">Как выбрать<span aria-hidden="true">→</span></Link>
          <Link href="/silicone-or-tpe">Сравнение силикона и TPE<span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <MetaLine published="2026-08-01" updated="2026-08-01"/>
    </article>
  </SiteShell>;
}
