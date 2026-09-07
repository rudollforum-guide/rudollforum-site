import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { BrandCatalog } from "./brand-catalog";
import { brands } from "./brands-data";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Бренды силиконовых и ТПЕ-кукол — каталог Rudollforum",
  description: "Справочный каталог брендов силиконовых, ТПЕ, аниме, фурри, торсовых и роботизированных кукол с официальными ссылками и фильтрами.",
  alternates: { canonical: siteUrl("/brands") },
  openGraph: {
    title: "Бренды силиконовых и ТПЕ-кукол — каталог Rudollforum",
    description: "Справочный каталог брендов с официальными ссылками, категориями, поиском и фильтрами.",
    url: siteUrl("/brands"),
    type: "website",
    images: [OPEN_GRAPH_IMAGE],
  },
};

export default function BrandsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Бренды", item: siteUrl("/brands/") },
    ],
  };
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Бренды силиконовых и ТПЕ-кукол",
    description: metadata.description,
    url: siteUrl("/brands/"),
    inLanguage: "ru-RU",
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Справочный каталог брендов Rudollforum",
    numberOfItems: brands.length,
    itemListElement: brands.map((brand, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: brand.name,
      ...(brand.url ? { url: brand.url } : {}),
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />
      <JsonLd data={itemList} />
      <article className="article brands-page">
        <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><span>Бренды</span></nav>
        <header className="article-hero">
          <div className="article-emblem-heading">
            <img className="article-hero-emblem" src={publicPath("/images/brands/brands-hero-emblem.png")} alt="" aria-hidden="true" width="92" height="92" />
            <span className="eyebrow">Справочный каталог · 18+</span>
            <h1>Бренды силиконовых и ТПЕ-кукол</h1>
            <p>В этом разделе собраны бренды силиконовых, ТПЕ, аниме, фурри, роботизированных, торсовых и других кукол. Каталог предназначен для навигации по рынку и не является рейтингом.</p>
          </div>
        </header>

        <section className="brands-intro" aria-label="О каталоге">
          <p>Каталог производителей и технологических компаний, связанных с силиконовыми, TPE-, аниме-, фурри-, роботизированными и другими специализированными куклами и системами.</p>
          <p>Карточки содержат официальный сайт бренда и отмеченные особенности модельного ряда. Наличие конкретных моделей и технологий со временем может меняться.</p>
        </section>

        <BrandCatalog />

        <aside className="brands-disclaimer">
          <p>Информация о брендах и особенностях модельных рядов носит справочный характер. Ассортимент, технологии и официальные сайты производителей могут меняться.</p>
          <small>Декоративные эмблемы созданы для оформления справочника Rudollforum и не являются официальными логотипами брендов.</small>
        </aside>

        <section className="catalog-links">
          <span className="section-no">Продолжить изучение</span>
          <h2>Перед выбором модели</h2>
          <div>
            <Link href="/how-to-choose">Как выбрать модель</Link>
            <Link href="/where-to-buy">Где купить и что проверить</Link>
            <Link href="/silicone-or-tpe">Силикон или ТПЕ</Link>
            <Link href="/realistic-dolls">Реалистичные модели</Link>
          </div>
        </section>

        <aside className="brands-feedback" aria-labelledby="brands-feedback-title">
          <img className="brands-feedback-emblem" src="/images/brands/brands-feedback-emblem.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="brands-feedback-copy">
            <span className="brands-feedback-eyebrow">Обновление каталога</span>
            <h2 id="brands-feedback-title">Помогите поддерживать каталог актуальным</h2>
            <p>Справочник составлен на основе открытых данных и материалов сообщества Rudollforum. Названия брендов, официальные сайты, модельные линейки и заявленные особенности со временем могут меняться.</p>
            <p>Если вы заметили неточность, новый официальный сайт, изменение линейки или важное дополнение — сообщите нам, и информация будет проверена перед обновлением каталога.</p>
          </div>
          <div className="brands-feedback-actions">
            <a className="brands-feedback-button" href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">Сообщить об изменении или дополнении</a>
          </div>
        </aside>
        <MetaLine />
      </article>
    </SiteShell>
  );
}
