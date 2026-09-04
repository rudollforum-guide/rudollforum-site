import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl, TWITTER_IMAGE } from "../site-config";

const title = "Кастомизация и улучшения кукол — модификации и опыт | Rudollforum";
const description = "Кастомизация TPE- и силиконовых кукол: визуальные модификации, следящие глаза, примеры на видео и практический опыт сообщества Rudollforum.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/customization/") },
  openGraph: {
    title,
    description,
    url: siteUrl("/customization/"),
    type: "website",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [TWITTER_IMAGE],
  },
};

const videos = [
  {
    src: "/videos/customization/following-eyes/01-following-eyes.mp4",
    caption: "Демонстрация эффекта",
  },
  {
    src: "/videos/customization/following-eyes/02-following-eyes.mp4",
    caption: "Изменение взгляда при смене угла",
  },
  {
    src: "/videos/customization/following-eyes/03-following-eyes.mp4",
    caption: "Эффект с другой позиции",
  },
] as const;

export default function CustomizationPage() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Кастомизация и улучшения кукол",
    description,
    inLanguage: "ru-RU",
    url: siteUrl("/customization/"),
    isPartOf: { "@type": "WebSite", name: "Rudollforum", url: siteUrl("/") },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Кастомизация и улучшения кукол", item: siteUrl("/customization/") },
    ],
  };

  return <SiteShell>
    <JsonLd data={webPage}/>
    <JsonLd data={breadcrumb}/>
    <article className="customization-page">
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <Link href="/">Главная</Link>
        <span aria-hidden="true">·</span>
        <span>Кастомизация и улучшения кукол</span>
      </nav>

      <header className="customization-hero">
        <div className="customization-hero-copy">
          <span className="eyebrow">Модификации · визуальные эффекты · практика</span>
          <h1>Кастомизация и улучшения кукол</h1>
          <p>Раздел о визуальных и технических улучшениях TPE- и силиконовых кукол: модификациях, нестандартных решениях и практическом опыте владельцев.</p>
        </div>
      </header>

      <div className="customization-intro-zone">
        <section className="customization-overview" aria-labelledby="customization-overview-title">
          <div className="customization-heading-with-emblem customization-overview-heading">
            <img className="customization-emblem customization-overview-emblem" src={publicPath("/images/customization/emblems/customization-overview-emblem.png")} alt="" aria-hidden="true"/>
            <div>
              <span className="customization-kicker">Обзор раздела</span>
              <h2 id="customization-overview-title">Кастомизация на практике</h2>
            </div>
          </div>
          <p>Здесь собираются примеры модификаций и улучшений, которые меняют внешний вид, восприятие или отдельные функциональные особенности кукол. Раздел будет постепенно дополняться новыми материалами.</p>
          <ul className="customization-labels" aria-label="Темы раздела">
            <li>Визуальные эффекты</li>
            <li>Механические решения</li>
            <li>Практический опыт</li>
          </ul>
        </section>

        <aside className="customization-community" aria-labelledby="customization-community-title">
          <div className="customization-community-copy">
            <span className="customization-kicker">Сообщество владельцев</span>
            <h2 id="customization-community-title">Подробности — в закрытой группе Rudollforum</h2>
            <p>Практическая информация по изготовлению, установке и покупке отдельных модификаций обсуждается в закрытой группе Rudollforum.</p>
            <small>Переход осуществляется через открытый Telegram-канал сообщества.</small>
          </div>
          <a className="customization-telegram-action" href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">
            <img className="customization-emblem customization-telegram-emblem" src={publicPath("/images/customization/emblems/telegram-rudollforum-emblem.png")} alt="" aria-hidden="true"/>
            <span>Перейти в Telegram Rudollforum</span>
          </a>
        </aside>
      </div>

      <section className="customization-feature" id="following-eyes" aria-labelledby="following-eyes-title">
        <header className="customization-feature-heading">
          <div className="customization-heading-with-emblem customization-feature-title">
            <img className="customization-emblem customization-following-emblem" src={publicPath("/images/customization/emblems/following-eyes-emblem.png")} alt="" aria-hidden="true"/>
            <div>
              <span className="customization-section-index">Первый материал</span>
              <h2 id="following-eyes-title">Следящие глаза</h2>
            </div>
          </div>
          <p>Одна из необычных визуальных модификаций — эффект следящего взгляда. При перемещении наблюдателя создаётся впечатление, будто глаза куклы продолжают смотреть в его сторону под разными углами.</p>
        </header>

        <div className="customization-explanation">
          <img className="customization-emblem customization-effect-emblem" src={publicPath("/images/customization/emblems/how-effect-works-emblem.png")} alt="" aria-hidden="true"/>
          <div>
            <h3>Как работает эффект</h3>
            <p>В основе эффекта лежит оптическая иллюзия, связанная с формой глаза и расположением изображения зрачка. Для создания такого эффекта может использоваться полусферическая прозрачная линза или купол, за которым либо на поверхности которого размещено изображение зрачка. При изменении угла обзора меняется восприятие глубины и положения зрачка, из-за чего взгляд визуально кажется направленным на наблюдателя.</p>
            <p>Эффект особенно заметен при движении вокруг куклы или при просмотре с разных сторон: положение головы остаётся неизменным, но направление взгляда воспринимается как более живое и динамичное.</p>
          </div>
        </div>

        <section className="customization-video-section" aria-labelledby="customization-video-title">
          <div className="customization-heading-with-emblem customization-video-heading">
            <img className="customization-emblem customization-video-emblem" src={publicPath("/images/customization/emblems/effect-in-motion-emblem.png")} alt="" aria-hidden="true"/>
            <div>
              <span className="customization-kicker">Видеопримеры</span>
              <h3 id="customization-video-title">Эффект в движении</h3>
              <p>Три коротких примера позволяют увидеть, как меняется восприятие взгляда при смене угла обзора.</p>
            </div>
          </div>
          <div className="customization-video-grid">
            {videos.map(({src, caption}, index) => <figure className="customization-video-card" key={src}>
              <div className="customization-video-frame">
                <video controls playsInline preload="metadata" aria-label={caption}>
                  <source src={publicPath(src)} type="video/mp4"/>
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{caption}</figcaption>
            </figure>)}
          </div>
          <p className="customization-permission">Видео опубликованы с разрешения владельцев материалов.</p>
        </section>

        <aside className="customization-purchase" aria-labelledby="customization-purchase-title">
          <div className="customization-heading-with-emblem customization-purchase-heading">
            <img className="customization-emblem customization-purchase-emblem" src={publicPath("/images/customization/emblems/making-and-purchase-emblem.png")} alt="" aria-hidden="true"/>
            <div>
              <span className="customization-kicker">Практическая часть</span>
              <h3 id="customization-purchase-title">Изготовление и покупка</h3>
              <p>Подробная практическая информация о вариантах изготовления, установке и возможности приобретения таких глаз размещена в закрытой группе Rudollforum.</p>
            </div>
          </div>
          <a href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer"><img className="customization-emblem customization-details-emblem" src={publicPath("/images/customization/emblems/rudollforum-details-emblem.png")} alt="" aria-hidden="true"/><span>Узнать подробнее в Rudollforum</span></a>
        </aside>
      </section>

      <section className="customization-future" aria-labelledby="customization-future-title">
        <img className="customization-emblem customization-future-emblem" src={publicPath("/images/customization/emblems/coming-soon-emblem.png")} alt="" aria-hidden="true"/>
        <div>
          <h2 id="customization-future-title">Раздел будет дополняться</h2>
          <p>По мере появления новых практических материалов здесь будут добавляться другие варианты кастомизации и улучшений.</p>
        </div>
      </section>
    </article>
  </SiteShell>;
}
