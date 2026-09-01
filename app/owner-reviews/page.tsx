import type { Metadata } from "next";
import Link from "next/link";
import { storeReviewSources, StoreReviewCommunityNote } from "../store-reviews";
import { FeaturedExternalLink, JsonLd, MetaLine, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, siteUrl } from "../site-config";

const title = "Отзывы владельцев силиконовых и TPE-кукол | Rudollforum";
const description = "Отзывы владельцев силиконовых и TPE-кукол: материалы, вес, уход, хранение и длительная эксплуатация. Основные обсуждения и реальные отзывы публикуются в закрытой группе Rudollforum.";

function OwnerReviewsEmblem({ src, className = "" }: { src: string; className?: string }) {
  return <img className={`owner-reviews-heading-emblem ${className}`.trim()} src={src} alt="" aria-hidden="true"/>;
}

const ownerStoreIcons: Record<string, { heading: string; reviews: string }> = {
  "moon-doll": {
    heading: "/images/owner-reviews/stores/moon-doll-heading-icon.png",
    reviews: "/images/owner-reviews/stores/moon-doll-reviews-icon.png",
  },
  hanidoll: {
    heading: "/images/owner-reviews/stores/hanidoll-heading-icon.png",
    reviews: "/images/owner-reviews/stores/hanidoll-reviews-icon.png",
  },
  sexdollshop: {
    heading: "/images/owner-reviews/stores/sexdollshop-heading-icon.png",
    reviews: "/images/owner-reviews/stores/sexdollshop-reviews-icon.png",
  },
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/owner-reviews") },
  openGraph: { title, description, url: siteUrl("/owner-reviews"), type: "website", images: [OPEN_GRAPH_IMAGE] },
};

export default function OwnerReviewsPage() {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Отзывы владельцев","item":siteUrl("/owner-reviews/")}]};
  const collection = {"@context":"https://schema.org","@type":"CollectionPage",name:"Отзывы владельцев силиконовых и TPE-кукол",description,url:siteUrl("/owner-reviews/"),inLanguage:"ru-RU",datePublished:"2026-08-01",dateModified:"2026-08-01",publisher:{"@type":"Organization","name":"Rudollforum"}};

  return <SiteShell>
    <JsonLd data={breadcrumb}/>
    <JsonLd data={collection}/>
    <article className="article owner-reviews-page">
      <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><span>Отзывы владельцев</span></nav>
      <header className="article-hero">
        <div className="article-emblem-heading owner-reviews-emblem-heading owner-reviews-emblem-heading--hero">
          <OwnerReviewsEmblem className="article-hero-emblem" src="/images/owner-reviews/emblems/owner-reviews-hero-emblem.png"/>
          <span className="eyebrow">Редакционный раздел · 18+</span>
          <h1>Отзывы владельцев силиконовых и TPE-кукол</h1>
          <p>Обобщённый опыт владельцев по материалам, весу, эксплуатации, уходу, хранению и долговечности.</p>
        </div>
      </header>
      <div className="owner-reviews-intro-copy">
        <p>В этом разделе собран обобщённый практический опыт владельцев силиконовых и TPE-кукол. Это не рейтинг брендов и не набор отдельных отзывов, а основные наблюдения по материалам, весу, эксплуатации, уходу и долговечности.</p>
        <p>Опыт разных владельцев может отличаться: свойства зависят от конкретного состава, конструкции изделия, условий хранения и обращения. Материал помогает понять практические риски, но не служит гарантией для отдельной модели.</p>
      </div>
      <nav className="owner-experience-nav" aria-label="Темы практического опыта владельцев">
        <a href="#materials">Материалы</a>
        <a href="#weight-and-handling">Вес и переноска</a>
        <a href="#care-and-longevity">Уход и долговечность</a>
      </nav>
      <section className="owner-experience-section owner-experience-section--materials" id="materials" aria-labelledby="materials-title">
        <div className="owner-experience-heading owner-reviews-emblem-heading owner-reviews-emblem-heading--section">
          <OwnerReviewsEmblem src="/images/owner-reviews/emblems/materials-emblem.png"/>
          <div className="owner-reviews-heading-copy">
            <span className="section-no">01 · Практический опыт</span>
            <h2 id="materials-title">Материалы: что замечают владельцы</h2>
            <p>Очень мягкий TPE, S-TPE и ультрамягкий силикон приятнее на ощупь, но мягкость влияет и на повседневное обращение. Такие материалы легче пачкаются и растягиваются, сильнее проминаются и могут быть чувствительнее к механическим повреждениям.</p>
          </div>
        </div>
        <aside className="owner-experience-callout owner-experience-callout--rose">
          <strong>Силикон сам по себе не гарантирует высокой прочности.</strong>
          <p>Долговечность зависит от конкретного состава, мягкости, конструкции изделия и аккуратности владельца.</p>
        </aside>
        <div className="owner-experience-grid">
          <article className="owner-experience-block">
            <h3>Что обычно проявляется раньше всего</h3>
            <ul className="owner-experience-list">
              <li>стирание макияжа и окраски;</li>
              <li>отклеивание ресниц и ногтей;</li>
              <li>выпадение отдельных имплантированных волос;</li>
              <li>небольшие потёртости и вмятины;</li>
              <li>следы от одежды.</li>
            </ul>
            <p>Подобные косметические дефекты не обязательно означают окончание эксплуатации и часто могут быть восстановлены.</p>
          </article>
          <article className="owner-experience-block">
            <h3>Наиболее уязвимые зоны</h3>
            <ul className="owner-experience-list owner-experience-list--compact">
              <li>пальцы;</li>
              <li>локти и колени;</li>
              <li>плечи и ступни;</li>
              <li>паховая область;</li>
              <li>места сильного сгиба.</li>
            </ul>
            <p>Риск зависит не только от материала, но и от конструкции, скелета и распределения нагрузки.</p>
          </article>
        </div>
      </section>
      <section className="owner-experience-section owner-experience-section--weight" id="weight-and-handling" aria-labelledby="weight-title">
        <div className="owner-experience-heading owner-reviews-emblem-heading owner-reviews-emblem-heading--section">
          <OwnerReviewsEmblem src="/images/owner-reviews/emblems/weight-and-handling-emblem.png"/>
          <div className="owner-reviews-heading-copy">
            <span className="section-no">02 · Практический опыт</span>
            <h2 id="weight-title">Вес и переноска: почему килограммы ощущаются иначе</h2>
            <p><strong>Вес куклы — это не просто цифра в карточке товара.</strong> Одна из частых ошибок новичков — смотреть на рост, лицо, грудь, фигуру и материал, но недооценивать фактическую массу.</p>
            <p>У куклы нет жёсткой формы, удобной ручки и стабильного центра тяжести. Голова, корпус, бёдра, руки и ноги двигаются отдельно, суставы могут складываться, тело — уходить в сторону, а мягкий материал требует аккуратного обращения. По ощущениям тяжёлая кукла ближе не к обычному грузу, а к телу без собственного баланса.</p>
          </div>
        </div>
        <div className="owner-experience-grid owner-experience-grid--weight">
          <article className="owner-experience-block">
            <h3>Что учитывать перед покупкой</h3>
            <ul className="owner-experience-list">
              <li>реальный вес изделия;</li>
              <li>собственный рост, физические возможности и состояние спины;</li>
              <li>место хранения и возможность безопасной переноски;</li>
              <li>удобство переодевания, мойки и сушки;</li>
              <li>нагрузку на суставы и каркас;</li>
              <li>риск падения или повреждения изделия.</li>
            </ul>
          </article>
          <article className="owner-experience-block">
            <h3>Как переносить безопаснее</h3>
            <ul className="owner-experience-list">
              <li>поддерживать корпус и распределять вес;</li>
              <li>не тянуть за руки, ноги или голову;</li>
              <li>не переносить за отдельный сустав;</li>
              <li>не перегибать тело;</li>
              <li>не поднимать весь вес одной точкой;</li>
              <li>избегать резких движений.</li>
            </ul>
          </article>
        </div>
        <aside className="owner-experience-callout owner-experience-callout--gold">
          <p>Особенно осторожно стоит относиться к моделям <strong>35+ кг</strong>.</p>
          <strong>40+ кг — это уже не просто «тяжеловато», а полноценная силовая эксплуатация.</strong>
        </aside>
        <div className="owner-experience-summary"><strong>Перед покупкой всегда смотрите вес, а не только рост и фотографии.</strong><span>Иногда более лёгкая модель приносит больше радости просто потому, что с ней проще жить.</span></div>
      </section>
      <section className="owner-experience-section owner-experience-section--care" id="care-and-longevity" aria-labelledby="care-title">
        <div className="owner-experience-heading owner-reviews-emblem-heading owner-reviews-emblem-heading--section">
          <OwnerReviewsEmblem src="/images/owner-reviews/emblems/care-and-longevity-emblem.png"/>
          <div className="owner-reviews-heading-copy">
            <span className="section-no">03 · Практический опыт</span>
            <h2 id="care-title">Уход и долговечность: сколько реально служит кукла</h2>
          </div>
        </div>
        <aside className="owner-experience-callout owner-experience-callout--mint">
          <strong>Универсального срока службы не существует.</strong>
          <p>Одна кукла может потребовать ремонта уже в первый год, а другая спустя несколько лет продолжает нормально использоваться. Это не рейтинг брендов и не гарантия для каждого экземпляра, а обобщение практического опыта владельцев.</p>
        </aside>
        <div className="owner-experience-grid">
          <article className="owner-experience-block">
            <h3>Скелет часто важнее косметических дефектов</h3>
            <p>Суставы могут изнашиваться неравномерно: один становится слабым, другой — слишком тугим. Тугой сустав тоже может быть проблемой, потому что нагрузка передаётся на соседние части каркаса и материала.</p>
            <p>Большой вес влияет не только на удобство, но и на срок службы: тяжёлую куклу сложнее переносить, мыть и менять ей позы, а нагрузка на скелет и риск повреждения материала выше. <a href="#weight-and-handling">Вернуться к разделу о весе.</a></p>
          </article>
          <article className="owner-experience-block">
            <h3>Как хранение влияет на состояние</h3>
            <p>Длительное давление, складки ткани, тёмная одежда и жёсткие поверхности могут оставить пятна, вмятины и деформации.</p>
            <p>Горизонтальное хранение допустимо, если поверхность ровная, тело расправлено, а нагрузка распределена равномерно.</p>
          </article>
          <article className="owner-experience-block owner-experience-block--wide">
            <h3>После мойки и при хранении</h3>
            <ul className="owner-experience-list owner-experience-list--columns">
              <li>полноценно просушивать изделие;</li>
              <li>контролировать внутренние полости;</li>
              <li>следить за герметичностью;</li>
              <li>контролировать места контакта TPE с силиконовыми деталями.</li>
            </ul>
          </article>
        </div>
        <div className="owner-experience-timeline" aria-labelledby="experience-timeline-title">
          <div className="owner-experience-timeline-heading"><span className="section-no">Временная шкала наблюдений</span><h3 id="experience-timeline-title">Что чаще замечают со временем</h3></div>
          <div className="owner-experience-timeline-grid">
            <article><span>Первые месяцы</span><ul><li>заводские особенности;</li><li>косметические дефекты.</li></ul></article>
            <article><span>Первый год</span><ul><li>слабые или тугие суставы;</li><li>первые разрывы;</li><li>следы хранения.</li></ul></article>
            <article><span>Два-три года</span><ul><li>некоторые экземпляры остаются полностью рабочими;</li><li>может потребоваться косметический уход или небольшой ремонт.</li></ul></article>
          </div>
          <p>Это не прогноз срока службы конкретной куклы. По обобщённому опыту некоторые экземпляры продолжают нормально использоваться спустя два-три года.</p>
        </div>
        <aside className="owner-experience-callout owner-experience-callout--final">
          <strong>Когда срок службы действительно заканчивается</strong>
          <p>Реальный срок службы заканчивается не при первой потёртости, а когда повреждение становится неремонтопригодным, использование — небезопасным или владелец больше не готов обслуживать куклу.</p>
        </aside>
        <p className="owner-experience-conclusion">Долговечность зависит не только от бренда и материала, но и от качества конкретного экземпляра, веса, конструкции, хранения, ухода и аккуратности владельца.</p>
      </section>
      <section className="owner-community-card" aria-labelledby="owner-community-title">
        <div className="owner-community-copy">
          <div className="owner-reviews-emblem-heading owner-reviews-emblem-heading--community">
            <OwnerReviewsEmblem src="/images/owner-reviews/emblems/community-reviews-emblem.png"/>
            <div className="owner-reviews-heading-copy">
              <span className="section-no">Сообщество владельцев</span>
              <h2 id="owner-community-title">Где читать реальные отзывы владельцев</h2>
              <p>Отзывы о брендах, материалах, весе, скелетах, уходе, хранении и долговременной эксплуатации публикуются участниками закрытой группы Rudollforum. В группе также обсуждаются новые модели, доставка, повреждения, ремонт и личный опыт владения.</p>
            </div>
          </div>
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
      <section className="store-reviews-section" aria-labelledby="store-reviews-title">
        <div className="owner-reviews-emblem-heading owner-reviews-emblem-heading--stores">
          <OwnerReviewsEmblem src="/images/owner-reviews/emblems/store-reviews-emblem.png"/>
          <h2 id="store-reviews-title">Отзывы о магазинах</h2>
        </div>
        <div className="store-reviews-grid">
          {storeReviewSources.map(source => <article className={`store-reviews-panel store-reviews-panel--${source.id}`} key={source.id}>
            <div className="owner-store-review-heading">
              <img className="owner-store-review-heading-icon" src={ownerStoreIcons[source.id].heading} alt="" aria-hidden="true"/>
              <h3>{source.name}</h3>
            </div>
            <p>{source.description}</p>
            {source.details ? <p className="store-review-details">{source.details}{source.context ? ` ${source.context}` : ""}</p> : null}
            <div className="store-review-action-wrap">
              <a className="link-button-secondary store-review-action owner-store-review-action" href={source.href} target="_blank" rel={source.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"}>
                <img className="owner-store-review-action-icon" src={ownerStoreIcons[source.id].reviews} alt="" aria-hidden="true"/>
                <span>{source.actionLabel ?? `Отзывы о ${source.name}`}</span>
              </a>
            </div>
          </article>)}
        </div>
        <StoreReviewCommunityNote />
      </section>
      <section className="related owner-reviews-related" aria-labelledby="owner-related-title">
        <span className="section-no">Полезные материалы</span>
        <h2 id="owner-related-title">Продолжить изучение</h2>
        <div>
          <Link href="/brands">Каталог брендов</Link>
          <Link href="/where-to-buy">Где купить</Link>
          <Link href="/how-to-choose">Как выбрать</Link>
          <Link href="/silicone-or-tpe">Сравнение силикона и TPE</Link>
        </div>
      </section>
      <MetaLine published="2026-08-01" updated="2026-08-01"/>
    </article>
  </SiteShell>;
}
