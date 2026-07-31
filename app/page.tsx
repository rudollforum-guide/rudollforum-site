import Link from "next/link";
import { SiteShell, MetaLine, JsonLd } from "./site";
import { brandExamples } from "./brands/brands-data";
import { SectionDivider } from "./site-effects";
import { publicPath, siteUrl } from "./site-config";

export const metadata = {
  title: "Силиконовые и TPE-куклы — купить, выбрать, ухаживать | Rudollforum",
  description: "Справочник Rudollforum о силиконовых, TPE и реалистичных куклах: как выбрать и купить модель, сравнить материалы, проверить продавца, изучить бренды, уход и отзывы владельцев.",
  alternates: { canonical: "/" },
  openGraph: { title: "Силиконовые и TPE-куклы — купить, выбрать, ухаживать | Rudollforum", description: "Справочник Rudollforum о силиконовых, TPE и реалистичных куклах: как выбрать и купить модель, сравнить материалы, проверить продавца, изучить бренды, уход и отзывы владельцев.", url: siteUrl("/"), type: "website" as const },
};

const sections = [
  ["С чего начать новичку", "Разберитесь в материалах, весе, конструкции и условиях хранения до выбора первой модели.", "/how-to-choose", "01", "✦"],
  ["Силикон или ТПЕ", "Сравнение мягкости, ухода, устойчивости к пятнам, ремонта и стоимости без универсального «лучше».", "/silicone-or-tpe", "02", "⚖"],
  ["Как выбрать модель", "Рост, фактический вес, скелет, суставы, пальцы, стопы, крепление головы и комплектация.", "/how-to-choose", "03", "⌕"],
  ["Что проверить перед покупкой", "Продавец, реальные фотографии, гарантия, доставка, переписка и видеозапись распаковки.", "/how-to-buy", "04", "▣"],
  ["Основы ухода", "Раздельные инструкции для ТПЕ и силикона с учётом совместимости средств.", "/tpe-care", "05", "◉"],
  ["Полная сушка", "Почему протирания у входа недостаточно и как организовать циркуляцию воздуха.", "/internal-drying", "06", "≋"],
  ["Безопасное хранение", "Положение тела, нагрузка на мягкие зоны, одежда, температура и регулярный осмотр.", "/storage", "07", "⌂"],
  ["Распространённые повреждения", "Надрывы, проколы, повреждения стоп и ситуации, когда нужен специалист.", "/repair", "08", "⌁"],
];

const faq = [
  ["Как выбрать первую силиконовую или ТПЕ-куклу?", "Начните с допустимого веса, места хранения и бюджета на уход. Затем сравните материал, рост, скелет и доступность ремонта."],
  ["Что лучше: силикон или ТПЕ?", "Универсального ответа нет: силикон обычно устойчивее к окрашиванию, ТПЕ мягче и доступнее. Решение зависит от приоритетов и готовности к уходу."],
  ["Где купить силиконовую или ТПЕ-куклу?", "Сравнивайте сайты производителей и специализированные магазины. Проверяйте реальные фотографии, комплектацию, вес, гарантию, доставку и независимые отзывы. Rudollforum не принимает оплату и не оформляет заказы."],
  ["Как полностью высушить внутренние каналы?", "Удалите основной объём воды, обеспечьте мягкую циркуляцию воздуха и проверьте труднодоступные зоны. Не закрывайте изделие на хранение до полного высыхания."],
  ["Как хранить куклу без деформации?", "Избегайте длительного давления на мягкие зоны, перегрева и линяющей одежды. Следуйте инструкции производителя по подвесу или допустимому положению."],
];

export default function Home() {
  return <SiteShell>
    <JsonLd data={{"@context":"https://schema.org","@type":"WebSite",name:"Rudollforum | TPE и силиконовые куклы",inLanguage:"ru-RU",url:siteUrl("/")}} />
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow">Независимый справочник · 18+</div>
        <h1>TPE и силиконовые куклы: выбор, покупка и правильный уход</h1>
        <p className="lead">Rudollforum не продаёт кукол и не принимает оплату. Справочник помогает выбрать магазин, модель и материал, проверить продавца, подготовиться к доставке и организовать правильный уход.</p>
        <div className="actions"><Link className="button primary" href="/how-to-choose">Начать со справочника</Link><Link className="button" href="/silicone-or-tpe">Сравнить силикон и ТПЕ</Link></div>
        <div className="hero-note"><span>Практика владельцев</span><span>Независимо от брендов</span><span>Без приёма оплаты</span></div>
        <p className="trust-copy">Справочник систематизирует практический опыт сообщества. Отдельные рекомендации могут не подходить конкретной модели, поэтому перед применением необходимо учитывать материал и инструкцию производителя.</p>
      </div>
      <figure className="hero-art"><img src={publicPath("/hero-hanfu.webp")} alt="Взрослая женщина в закрытом традиционном ханьфу среди белых лотосов" width="900" height="1800" fetchPriority="high" /></figure>
    </section>

    <section className="intro-grid">
      <div><span className="section-no">О справочнике</span><h2>Что такое силиконовые и ТПЕ-куклы</h2></div>
      <p>Полноразмерные изделия из мягких полимерных материалов отличаются свойствами поверхности, весом, требованиями к очистке и возможностями ремонта. Rudollforum помогает оценивать эти различия по практическим критериям, а не по рекламным обещаниям.</p>
    </section>
    <SectionDivider />

    <section className="section" id="topics"><div className="section-head"><div><span className="section-no">Навигация</span><h2>Ключевые темы справочника</h2></div><p>Краткие вводные ведут к отдельным подробным материалам.</p></div>
      <div className="topic-grid">{sections.slice(0,4).map(([title, text, href, no, icon]) => <Link href={href} className="topic-card reveal" key={no}><div className="card-top"><span>{no}</span><i aria-hidden="true">{icon}</i></div><h3>{title}</h3><p>{text}</p><b>Читать материал →</b></Link>)}</div>
      <figure className="editorial-visual guide-visual" id="guide-banner"><img src={publicPath("/guide-hanfu.webp")} alt="Взрослая женщина в светлом закрытом ханьфу читает справочник" width="1400" height="850" loading="lazy"/><figcaption><span>Осознанный выбор</span><strong>Сначала факты, затем решение</strong><Link href="/how-to-choose">Как выбрать модель →</Link><Link className="home-guide-link" href="/guide">Полное руководство владельца →</Link></figcaption></figure>
      <aside className="external-card" aria-labelledby="moon-doll-title">
        <div className="external-card-icon" aria-hidden="true">↗</div>
        <div className="external-card-copy">
          <span className="external-label">Внешний ресурс</span>
          <h3 id="moon-doll-title">Где посмотреть доступные модели</h3>
          <p>В качестве одного из внешних примеров магазина можно посмотреть каталог Moon-Doll. На сайте представлены силиконовые и ТПЕ-куклы разных брендов и конфигураций. Перед заказом самостоятельно проверяйте материал, фактический вес, комплектацию, условия оплаты, доставки и гарантии.</p>
        </div>
        <div className="external-card-action">
          <div className="promo"><strong>Для читателей Rudollforum может быть доступна скидка 5% по промокоду <code>RUDOLLFORUM</code>.</strong><small>Перед оплатой проверьте актуальные условия, итоговую стоимость и применение промокода.</small></div>
          <div className="external-actions"><a className="link-button-secondary" href="https://www.moon-doll.com/" target="_blank" rel="noopener noreferrer sponsored" aria-label="Открыть Moon-Doll во внешней вкладке">Открыть Moon-Doll <span className="external-link-badge" aria-hidden="true">↗</span></a><Link className="link-button-secondary link-button-internal" href="/shops/moon-doll-guide">Читать инструкцию <span aria-hidden="true">→</span></Link></div>
        </div>
      </aside>
      <div className="topic-grid topic-grid-continuation">{sections.slice(4).map(([title, text, href, no, icon]) => <Link href={href} className="topic-card reveal" key={no}><div className="card-top"><span>{no}</span><i aria-hidden="true">{icon}</i></div><h3>{title}</h3><p>{text}</p><b>Читать материал →</b></Link>)}</div>
      <figure className="editorial-visual care-visual"><img src={publicPath("/care-hanfu.webp")} alt="Взрослая женщина в закрытом лиловом ханьфу аккуратно складывает ткань у сундука" width="1400" height="788" loading="lazy"/><figcaption><span>Уход и хранение</span><strong>Долговечность начинается с привычек</strong><Link href="/storage">Правила хранения →</Link></figcaption></figure>
    </section>
    <SectionDivider />

    <section className="brand-preview section" aria-labelledby="brand-preview-title">
      <div className="brand-preview-copy">
        <span className="section-no">Справочный раздел</span>
        <h2 id="brand-preview-title">Каталог брендов</h2>
        <p>Справочник производителей силиконовых, ТПЕ, аниме, фурри и роботизированных моделей. Бренды распределены по категориям и доступны через поиск и фильтры.</p>
        <Link className="button primary" href="/brands">Открыть каталог брендов</Link>
        <small>Список не является рейтингом или рекомендацией.</small>
      </div>
      <div className="brand-preview-list" aria-label="Примеры брендов">
        {brandExamples.map((name, index) => <span key={name}><i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>{name}</span>)}
      </div>
    </section>
    <SectionDivider />

    <section className="section split" aria-labelledby="purchase-guides-title">
      <div className="feature"><span className="section-no">Навигация по покупке</span><h2 id="purchase-guides-title">Как купить силиконовую или TPE-куклу</h2><p>Сначала определите подходящий материал и допустимый вес, затем сравните бренды и каналы покупки. Rudollforum помогает проверить магазин и модель, но не оформляет заказы.</p></div>
      <div className="article-list">
        <Link href="/buy-tpe-doll"><span>Материал</span><strong>Купить TPE-куклу: как выбрать</strong><small>→</small></Link>
        <Link href="/buy-silicone-doll"><span>Материал</span><strong>Купить силиконовую куклу: как выбрать</strong><small>→</small></Link>
        <Link href="/realistic-dolls"><span>Критерии</span><strong>Реалистичные модели</strong><small>→</small></Link>
        <Link href="/brands"><span>Каталог</span><strong>Бренды и отдельные линейки</strong><small>→</small></Link>
        <Link href="/where-to-buy"><span>Магазины</span><strong>Где купить и что проверить</strong><small>→</small></Link>
        <Link href="/owner-reviews"><span>Опыт</span><strong>Отзывы владельцев</strong><small>→</small></Link>
      </div>
    </section>
    <SectionDivider />

    <section className="community-home section" aria-labelledby="community-title">
      <div className="community-heading">
        <span className="section-no">Справочник и сообщество владельцев</span>
        <h2 id="community-title">Rudollforum — место, где владельцы делятся реальным опытом</h2>
      </div>
      <div className="community-copy">
        <p>Rudollforum — доброжелательное сообщество владельцев силиконовых и TPE-кукол. Здесь участники обсуждают выбор моделей, бренды, доставку, уход, хранение, ремонт, одежду, фотографии и практические особенности владения.</p>
        <p>В основе сообщества лежит уважительное отношение к куклам участников и их личному опыту. Здесь не обесценивают увлечение владельца, не высмеивают его выбор и стараются сохранять спокойную атмосферу взаимопомощи.</p>
        <p>На Telegram-канале публикуются руководства, новости, обзоры брендов, полезные материалы и навигация. При канале работает закрытая группа владельцев с обсуждениями, тематическими разделами и галереей кукол участников.</p>
        <p>В закрытом сообществе проходят обсуждения, фотосессии, творческие конкурсы, публикации новостей, обмен опытом, разборы проблем, советы по уходу, хранению, ремонту, одежде, парикам и созданию образов.</p>
      </div>
      <div className="community-directions" aria-label="Направления сообщества">
        {["Доброжелательное общение владельцев","Помощь новичкам","Опыт эксплуатации","Галерея кукол участников","Уважительное отношение к куклам и их владельцам","Тематические фотосессии","Конкурсы и творческие проекты","Обсуждение брендов и моделей","Новости производителей и магазинов","Уход, хранение и ремонт","Одежда, парики и создание образов","Практические руководства"].map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}
      </div>
      <div className="community-actions"><a className="link-button-secondary" href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">✉</span>Открыть Telegram Rudollforum <span className="external-link-badge" aria-hidden="true">↗</span></a><Link className="link-button-secondary link-button-internal" href="/community">О сообществе <span aria-hidden="true">→</span></Link><small>На канале доступны открытые материалы и информация о закрытой группе владельцев.</small></div>
    </section>

    <section className="section" aria-labelledby="owner-reviews-title">
      <div className="section-head"><div><span className="section-no">Редакционный раздел</span><h2 id="owner-reviews-title">Отзывы владельцев</h2></div><p>Будущая подборка будет опираться только на подтверждённый опыт без выдуманных оценок и количества отзывов.</p></div>
      <div className="topic-grid">
        {[['Материалы','Состав, мягкость, текстура и изменения поверхности со временем.'],['Вес и переноска','Фактическая масса, скелет, суставы и бытовое удобство.'],['Уход и долговечность','Очистка, пятна, хранение, ремонт и состояние спустя месяцы.']].map(([title,text],index)=><Link href="/owner-reviews" className="topic-card" key={title}><div className="card-top"><span>{String(index+1).padStart(2,"0")}</span><i aria-hidden="true">◇</i></div><h3>{title}</h3><p>{text}</p><b>Открыть раздел →</b></Link>)}
      </div>
    </section>

    <section className="section split">
      <div className="feature"><span className="section-no">Новые статьи</span><h2>Практические материалы</h2><p>Разбираем риски, которые часто обнаруживаются уже после покупки.</p></div>
      <div className="article-list">
        <Link href="/stains"><span>Материалы и уход</span><strong>Как избежать и удалить пятна</strong><small>8 минут</small></Link>
        <Link href="/mold"><span>Профилактика</span><strong>Плесень: признаки и причины</strong><small>7 минут</small></Link>
        <Link href="/brands"><span>Справочник</span><strong>Как читать заявления брендов</strong><small>6 минут</small></Link>
      </div>
    </section>

    <section className="section faq" id="faq"><div className="section-head"><div><span className="section-no">FAQ</span><h2>Частые вопросы</h2></div><Link href="/useful-links">Дополнительные ресурсы →</Link></div>
      {faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </section>
    <section className="policy-callout"><div><span>Редакционные принципы</span><h2>Информация отделена от коммерческих упоминаний</h2></div><p>Упоминание бренда или продавца не означает рекомендацию. Партнёрские ссылки и промокоды обозначаются явно.</p><Link href="/editorial-policy">Редакционная политика →</Link></section>
    <MetaLine />
  </SiteShell>;
}
