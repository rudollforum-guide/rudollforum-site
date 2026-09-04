import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl, TWITTER_IMAGE } from "../site-config";
import { archivedEvents } from "./events-data";

const title = "Мероприятия и конкурсы Rudollforum — архив и результаты";
const description = "Конкурсы и мероприятия сообщества Rudollforum: архив результатов, призёры и сохранённые материалы прошедших событий.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/events/") },
  openGraph: { title, description, url: siteUrl("/events/"), type: "website", images: [OPEN_GRAPH_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [TWITTER_IMAGE] },
};

const placeLabels = { 1: "1 место", 2: "2 место", 3: "3 место" } as const;
const contest2025PlaceIcons = {
  1: "/images/events/contest-first-place-icon.png",
  2: "/images/events/contest-second-place-icon.png",
  3: "/images/events/contest-third-place-icon.png",
} as const;

const contest2026Winners = [
  { place: 1, name: "Крис", image: "/images/events/rudollforum-contest-2026/01-kris-first-place.webp", emblem: "/images/events/rudollforum-contest-2026/emblems/kris-emblem.png", alt: "Крис — 1 место конкурса Rudollforum 2026" },
  { place: 2, name: "Элька", image: "/images/events/rudollforum-contest-2026/02-elka-second-place.webp", emblem: "/images/events/rudollforum-contest-2026/emblems/elka-emblem.png", alt: "Элька — 2 место конкурса Rudollforum 2026" },
  { place: 3, name: "Химари", image: "/images/events/rudollforum-contest-2026/03-himari-third-place.webp", emblem: "/images/events/rudollforum-contest-2026/emblems/himari-emblem.png", alt: "Химари — 3 место конкурса Rudollforum 2026" },
  { place: 4, name: "Мику", image: "/images/events/rudollforum-contest-2026/04-miku-fourth-place.webp", emblem: "/images/events/rudollforum-contest-2026/emblems/miku-emblem.png", alt: "Мику — 4 место конкурса Rudollforum 2026", note: "Кукла Konstantin" },
  { place: 5, name: "Ева", image: "/images/events/rudollforum-contest-2026/05-eva-fifth-place.webp", emblem: "/images/events/rudollforum-contest-2026/emblems/eva-emblem.png", alt: "Ева — 5 место конкурса Rudollforum 2026" },
] as const;

export default function EventsPage() {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Мероприятия","item":siteUrl("/events/")}]} as const;
  const collection = {"@context":"https://schema.org","@type":"CollectionPage","name":"Мероприятия Rudollforum","description":description,"url":siteUrl("/events/"),"inLanguage":"ru-RU","datePublished":"2026-08-25","dateModified":"2026-08-25","publisher":{"@type":"Organization","name":"Rudollforum"}} as const;

  return <SiteShell>
    <JsonLd data={breadcrumb}/>
    <JsonLd data={collection}/>
    <article className="events-page">
      <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><span>Мероприятия</span></nav>
      <header className="events-hero">
        <div className="events-hero-heading">
          <img className="events-hero-emblem" src={publicPath("/images/events/events-hero-emblem.png")} alt="" aria-hidden="true" width="118" height="118"/>
          <span className="eyebrow">Сообщество · Конкурсы · Архив</span>
          <h1>Мероприятия Rudollforum</h1>
          <p>Конкурсы, тематические события и архив мероприятий сообщества Rudollforum. Здесь сохраняются результаты прошедших конкурсов, призёры и материалы участников.</p>
        </div>
      </header>

      <section className="events-section contest-2026" aria-labelledby="contest-2026-title">
        <header className="contest-2026-heading">
          <div className="contest-2026-title-group">
            <img className="contest-2026-main-emblem" src={publicPath("/images/events/rudollforum-contest-2026/emblems/contest-results-emblem.png")} alt="" aria-hidden="true" width="116" height="116"/>
            <div className="contest-2026-title-copy">
              <span className="section-no">Итоги · 2026</span>
              <h2 id="contest-2026-title">Конкурс Rudollforum 2026 — результаты</h2>
            </div>
          </div>
          <p>Итоги конкурса Rudollforum 2026. Ниже представлены пять участниц, занявших призовые места по итогам конкурса.</p>
        </header>
        <div className="contest-2026-podium">
          {contest2026Winners.map(winner => <figure className={`contest-2026-card contest-2026-card--${winner.place}`} key={winner.place}>
            <div className="contest-2026-photo"><img src={publicPath(winner.image)} alt={winner.alt} width="1080" height="1350" loading="lazy"/></div>
            <figcaption>
              <span className="contest-2026-place"><b>{winner.place}</b><span>место</span></span>
              <h3 className="contest-2026-name"><img className="contest-2026-participant-emblem" src={publicPath(winner.emblem)} alt="" aria-hidden="true" width="64" height="64"/><span>{winner.name}</span></h3>
              {"note" in winner && <span className="contest-2026-special">{winner.note}</span>}
            </figcaption>
          </figure>)}
        </div>
        <aside className="contest-2026-thanks" aria-labelledby="contest-2026-thanks-title">
          <img className="contest-2026-thanks-emblem" src={publicPath("/images/events/rudollforum-contest-2026/emblems/konstantin-thanks-emblem.png")} alt="" aria-hidden="true" width="72" height="72"/>
          <div><h3 id="contest-2026-thanks-title">Отдельная благодарность Konstantin</h3><p>Отдельная благодарность Konstantin за помощь в проведении конкурса Rudollforum 2026 и поддержку сообщества. Его участие помогло сделать конкурс более масштабным и завершённым событием для участников Rudollforum.</p><strong>Мику, занявшая 4 место, — кукла Konstantin.</strong></div>
        </aside>
        <p className="events-permission-note"><span aria-hidden="true">◆</span>Фотографии опубликованы с разрешения владельцев.</p>
      </section>

      <div className="events-archive-transition" aria-hidden="true"><span>Архив · 2025</span></div>

      <section className="events-section events-archive" aria-labelledby="events-archive-title">
        <div className="events-section-heading">
          <span className="section-no">История сообщества</span>
          <h2 id="events-archive-title">Архив мероприятий</h2>
        </div>
        {archivedEvents.map(event => <article className={`archive-event${event.year === 2025 ? " archive-event--beauty-2025" : ""}`} key={event.year}>
          <header className={`archive-event-heading${event.year === 2025 ? " archive-event-heading--illustrated" : ""}`}>
            <div className={event.year === 2025 ? "archive-contest-heading" : undefined}>
              {event.year === 2025 && <img className="archive-contest-icon" src={publicPath("/images/events/beauty-contest-2025-icon.png")} alt="" aria-hidden="true" width="118" height="118" loading="lazy"/>}
              <div className="event-meta"><span className="event-status event-status--complete">{event.status}</span>{event.participants && <span>{event.year === 2025 ? <><b className="contest-participant-count">{event.participants}</b> участниц</> : <>{event.participants} участниц</>}</span>}</div>
              <h3>{event.title}</h3>
            </div>
            <p>{event.summary}</p>
          </header>
          {event.winners && <>
            <div className="events-podium">
              {event.winners.map(winner => <figure className={`winner-card winner-card--${winner.place}`} key={winner.place}>
                <div className="winner-photo"><img src={publicPath(winner.image)} alt={winner.alt} width="785" height="981" loading="lazy"/></div>
                <figcaption>
                  <span className="winner-place">{event.year === 2025 ? <><b className="winner-place-number">{winner.place}</b><span>место</span></> : placeLabels[winner.place]}</span>
                  <h4 className={event.year === 2025 ? "winner-name" : undefined}>{event.year === 2025 && <img className="winner-award-icon" src={publicPath(contest2025PlaceIcons[winner.place])} alt="" aria-hidden="true" width="56" height="56" loading="lazy"/>}<span>{winner.name}</span></h4>
                  <p>{winner.caption}</p>
                </figcaption>
              </figure>)}
            </div>
            <p className="events-permission-note"><span aria-hidden="true">◆</span>Фотографии призёров опубликованы с разрешения владельцев.</p>
          </>}
        </article>)}
      </section>

    </article>
  </SiteShell>;
}
