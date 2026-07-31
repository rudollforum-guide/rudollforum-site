import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { BrandCatalog } from "./brand-catalog";
import { brands } from "./brands-data";

export const metadata: Metadata = {
  title: "Бренды силиконовых и ТПЕ-кукол — каталог Rudollforum",
  description: "Справочный каталог брендов силиконовых, ТПЕ, аниме, фурри, торсовых и роботизированных кукол с официальными ссылками и фильтрами.",
  alternates: { canonical: "/brands" },
  openGraph: {
    title: "Бренды силиконовых и ТПЕ-кукол — каталог Rudollforum",
    description: "Справочный каталог брендов с официальными ссылками, категориями, поиском и фильтрами.",
    url: "/brands",
    type: "website",
  },
};

export default function BrandsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://rudollforum.sites.openai.com/" },
      { "@type": "ListItem", position: 2, name: "Бренды", item: "https://rudollforum.sites.openai.com/brands" },
    ],
  };
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Бренды силиконовых и ТПЕ-кукол",
    description: metadata.description,
    url: "https://rudollforum.sites.openai.com/brands",
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
        <nav className="breadcrumbs"><Link href="/">Главная</Link><span>→</span><span>Бренды</span></nav>
        <header className="article-hero">
          <span className="eyebrow">Справочный каталог · 18+</span>
          <h1>Бренды силиконовых и ТПЕ-кукол</h1>
          <p>В этом разделе собраны бренды силиконовых, ТПЕ, аниме, фурри, роботизированных, торсовых и других кукол. Каталог предназначен для навигации по рынку и не является рейтингом.</p>
          <p className="catalog-scope-note">Теги и описания относятся к отдельным моделям или линейкам и не означают, что весь каталог бренда ограничен указанной категорией.</p>
          <p className="catalog-disclaimer">Информация о линейках, материалах, особенностях и доступности моделей может меняться. Перед покупкой проверяйте сведения на официальном сайте бренда или у продавца.</p>
          <aside className="notice">Присутствие бренда в справочнике не означает партнёрство с Rudollforum и не подтверждает все заявления производителя.</aside>
        </header>

        <BrandCatalog />

        <p className="brand-emblem-disclaimer">
          Декоративные эмблемы созданы для оформления справочника Rudollforum и не являются официальными логотипами брендов.
        </p>
        <p className="catalog-navigation-note">
          Навигационные признаки отражают наличие отдельных моделей и могут меняться по мере обновления каталогов производителей.
        </p>

        <section className="catalog-links">
          <span className="section-no">Продолжить изучение</span>
          <h2>Перед выбором модели</h2>
          <div>
            <Link href="/how-to-choose">Как выбрать модель <span>→</span></Link>
            <Link href="/how-to-buy">Что проверить перед покупкой <span>→</span></Link>
            <Link href="/silicone-or-tpe">Силикон или ТПЕ <span>→</span></Link>
          </div>
        </section>

        <aside className="catalog-editorial">
          <p>Справочник составлен на основе открытых данных и материалов сообщества Rudollforum. Названия, сайты, линейки и особенности брендов могут изменяться. Обнаруженную неточность можно сообщить администрации Rudollforum.</p>
          <a className="link-button-secondary" href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">✉</span>Сообщить об изменении или дополнении <span className="external-link-badge" aria-hidden="true">↗</span></a>
        </aside>
        <MetaLine />
      </article>
    </SiteShell>
  );
}
