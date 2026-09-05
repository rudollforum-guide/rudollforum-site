import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, MetaLine, SiteShell } from "../site";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl, TWITTER_IMAGE } from "../site-config";

const title = "Roles Witch + LM Studio — локальный ИИ на телефоне | Rudollforum";
const description = "Как подключить Roles Witch к LM Studio и запустить локального ИИ-персонажа на телефоне: модель, Local Server, /v1, Wi-Fi, голос и приватность.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/local-ai/") },
  openGraph: {
    title,
    description,
    url: siteUrl("/local-ai/"),
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

const capabilities = [
  "Обычное текстовое общение",
  "Несколько персонажей с разными характерами",
  "Собственный системный промпт",
  "Выбор ИИ-модели",
  "Голосовое общение",
  "Работа в фоне",
  "Анализ фотографий и скриншотов",
  "Распознавание содержимого изображений",
  "Виртуальные персонажи",
  "Виртуальные ассистенты",
] as const;

const vramOptions = [
  ["4 ГБ VRAM", "Небольшие модели примерно 3–7B, чаще Q4_K_M."],
  ["6–8 ГБ VRAM", "Примерно 7–13B, Q4_K_M–Q5_K_M."],
  ["12 ГБ VRAM", "Более тяжёлые 13B или повышенная квантизация 7B."],
  ["16+ ГБ VRAM", "Более крупные модели и более качественные квантизации."],
] as const;

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="local-ai-step" aria-labelledby={`local-ai-step-${number}`}>
    <span className="local-ai-step-index" aria-hidden="true">{number.padStart(2, "0")}</span>
    <div>
      <h3 id={`local-ai-step-${number}`}>{number}. {title}</h3>
      {children}
    </div>
  </section>;
}

export default function LocalAiPage() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Локальный ИИ и персонажи",
    description,
    inLanguage: "ru-RU",
    url: siteUrl("/local-ai/"),
    isPartOf: { "@type": "WebSite", name: "Rudollforum", url: siteUrl("/") },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Локальный ИИ и персонажи", item: siteUrl("/local-ai/") },
    ],
  };

  return <SiteShell>
    <JsonLd data={webPage}/>
    <JsonLd data={breadcrumb}/>
    <article className="local-ai-page">
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <Link href="/">Главная</Link>
        <span aria-hidden="true">·</span>
        <span>Локальный ИИ и персонажи</span>
      </nav>

      <header className="local-ai-hero">
        <div className="local-ai-hero-copy">
          <div className="local-ai-hero-heading">
            <img className="local-ai-emblem local-ai-hero-emblem" src={publicPath("/images/local-ai/emblems/local-ai-hero-emblem.png")} alt="" aria-hidden="true" width="124" height="124"/>
            <div className="local-ai-hero-heading-copy">
              <span className="eyebrow">Локальный ИИ · персонажи · LM Studio</span>
              <h1>Roles Witch + LM Studio — локальный ИИ-персонаж на телефоне</h1>
              <p>Roles Witch позволяет создавать собственных ИИ-персонажей и ассистентов, а при подключении к LM Studio модель может работать локально на компьютере, пока телефон используется как удобный интерфейс для общения.</p>
            </div>
          </div>
          <div className="local-ai-hero-actions">
            <a href="#setup"><img className="local-ai-link-icon local-ai-hero-link-icon" src={publicPath("/images/local-ai/links/local-ai-setup-link-icon.png")} alt="" aria-hidden="true" width="54" height="54"/><span>Перейти к настройке</span></a>
            <a href={publicPath("/files/guides/roles-witch-lm-studio-guide.pdf")} target="_blank" rel="noopener noreferrer"><img className="local-ai-link-icon local-ai-hero-link-icon" src={publicPath("/images/local-ai/links/local-ai-pdf-guide-link-icon.png")} alt="" aria-hidden="true" width="54" height="54"/><span>Открыть PDF-гайд</span></a>
          </div>
        </div>
        <div className="local-ai-hero-visual" aria-hidden="true">
          <span className="local-ai-device local-ai-device--desktop"><i></i><b>LM Studio</b><small>Local Server</small></span>
          <span className="local-ai-data-flow"><i></i><i></i><i></i></span>
          <span className="local-ai-core"><i>AI</i><small>локальная модель</small></span>
          <span className="local-ai-data-flow local-ai-data-flow--reverse"><i></i><i></i><i></i></span>
          <span className="local-ai-device local-ai-device--phone"><i></i><b>Roles Witch</b><small>персонаж</small></span>
        </div>
      </header>

      <section className="local-ai-section local-ai-connection" aria-labelledby="local-ai-connection-title">
        <div className="local-ai-section-heading">
          <img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-how-it-works-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
          <div className="local-ai-section-heading-copy">
            <span className="local-ai-kicker">Принцип работы</span>
            <h2 id="local-ai-connection-title">Как работает связка</h2>
          </div>
          <p>Компьютер выполняет модель и принимает запросы в локальной сети, а приложение на телефоне отвечает за персонажа и интерфейс общения.</p>
        </div>
        <div className="local-ai-flow" aria-label="LM Studio на компьютере, локальная ИИ-модель, Roles Witch на телефоне">
          <div><span>01</span><b>LM Studio</b><small>на компьютере</small></div>
          <i aria-hidden="true">→</i>
          <div><span>02</span><b>Локальная ИИ-модель</b><small>обрабатывает сообщения</small></div>
          <i aria-hidden="true">→</i>
          <div><span>03</span><b>Roles Witch</b><small>на телефоне</small></div>
        </div>
      </section>

      <section className="local-ai-section local-ai-options" aria-labelledby="local-ai-options-title">
        <div className="local-ai-section-heading">
          <img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-capabilities-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
          <div className="local-ai-section-heading-copy">
            <span className="local-ai-kicker">Возможности</span>
            <h2 id="local-ai-options-title">Что можно настроить</h2>
          </div>
        </div>
        <ul>{capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
        <p className="local-ai-dependency-note">Доступность конкретных возможностей зависит от выбранной ИИ-модели и текущей версии приложения.</p>
      </section>

      <aside className="local-ai-characters" aria-labelledby="local-ai-characters-title">
        <div className="local-ai-compact-heading">
          <img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-characters-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
          <div><span className="local-ai-kicker">Характер и роль</span><h2 id="local-ai-characters-title">Какими могут быть персонажи</h2></div>
        </div>
        <p>Одному персонажу можно задать спокойный и дружелюбный характер, другому — более эмоциональную или ироничную манеру общения, а третьего настроить как технического помощника или консультанта.</p>
      </aside>

      <section className="local-ai-section local-ai-setup" id="setup" aria-labelledby="local-ai-setup-title">
        <div className="local-ai-section-heading">
          <img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-setup-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
          <div className="local-ai-section-heading-copy">
            <span className="local-ai-kicker">Пошаговая настройка</span>
            <h2 id="local-ai-setup-title">От установки до первого персонажа</h2>
          </div>
          <p>Сначала проверьте модель на компьютере, затем откройте сервер в локальной сети и только после этого подключайте телефон.</p>
        </div>

        <div className="local-ai-steps">
          <Step number="1" title="Установить LM Studio">
            <p>Скачайте LM Studio с официального сайта и установите его на компьютер.</p>
            <a className="local-ai-external-link" href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer"><img className="local-ai-link-icon local-ai-resource-link-icon" src={publicPath("/images/local-ai/links/local-ai-lm-studio-site-icon.png")} alt="" aria-hidden="true" width="48" height="48"/><span>Открыть официальный сайт LM Studio</span></a>
          </Step>

          <Step number="2" title="Скачать подходящую ИИ-модель">
            <p>В LM Studio выберите модель, подходящую под возможности вашего компьютера. При выборе важно учитывать объём видеопамяти и размер конкретной модели.</p>
            <p className="local-ai-inline-note">LM Studio показывает размер модели и помогает понять, помещается ли она полностью в GPU.</p>
            <div className="local-ai-vram-grid" aria-label="Ориентиры по видеопамяти">
              {vramOptions.map(([label, text]) => <div key={label}><b>{label}</b><span>{text}</span></div>)}
            </div>
            <small>При слабой видеокарте или её отсутствии LM Studio может использовать CPU и оперативную память, но генерация будет медленнее.</small>
          </Step>

          <Step number="3" title="Проверить модель в LM Studio">
            <p>Откройте встроенный чат LM Studio, выберите загруженную модель и отправьте простое сообщение, например «Привет». Если модель отвечает и скорость работы устраивает, можно переходить к настройке локального сервера.</p>
          </Step>

          <Step number="4" title="Настроить Local Server">
            <p>Откройте путь <code>Developer → Local Server</code>. Включите обслуживание по локальной сети — <code>Serve on Local Network</code> — и CORS.</p>
            <p>После запуска Local Server LM Studio покажет локальный адрес вида <code>http://192.168.0.184:1234</code>.</p>
            <aside className="local-ai-callout local-ai-callout--warning">
              <b>Не копируйте этот IP буквально.</b>
              <span>У каждого пользователя локальный адрес компьютера может отличаться. Нужно использовать адрес, который показывает ваш LM Studio в строке <code>Reachable at</code>.</span>
            </aside>
            <aside className="local-ai-callout local-ai-callout--code">
              <b>К адресу LM Studio нужно добавить <code>/v1</code></b>
              <span>Если LM Studio показывает <code>http://192.168.1.25:1234</code>, то в Roles Witch нужно указать <code>http://192.168.1.25:1234/v1</code>.</span>
            </aside>
            <div className="local-ai-troubleshooting">
              <h4>Если соединение не устанавливается</h4>
              <ul>
                <li>Временно отключите VPN на компьютере.</li>
                <li>Отключите VPN на телефоне.</li>
                <li>Убедитесь, что телефон и компьютер подключены к одной Wi-Fi или локальной сети.</li>
                <li>Проверьте адрес <code>Reachable at</code>.</li>
                <li>Проверьте, что Local Server запущен и CORS включён.</li>
              </ul>
            </div>
          </Step>

          <Step number="5" title="Установить Roles Witch на телефон">
            <p>Установите приложение, затем подготовьте подключение к локальному серверу.</p>
            <div className="local-ai-link-row">
              <a className="local-ai-external-link" href="https://roleswitch.ai/" target="_blank" rel="noopener noreferrer"><img className="local-ai-link-icon local-ai-resource-link-icon" src={publicPath("/images/local-ai/links/local-ai-roles-witch-site-icon.png")} alt="" aria-hidden="true" width="48" height="48"/><span>Официальный сайт Roles Witch</span></a>
              <a className="local-ai-external-link" href="https://play.google.com/store/apps/details?id=ai.roleswitch.android" target="_blank" rel="noopener noreferrer"><img className="local-ai-link-icon local-ai-resource-link-icon" src={publicPath("/images/local-ai/links/local-ai-google-play-icon.png")} alt="" aria-hidden="true" width="48" height="48"/><span>Roles Witch в Google Play</span></a>
            </div>
          </Step>

          <Step number="6" title="Подключить телефон и компьютер к одной сети">
            <p>Обычно достаточно, чтобы оба устройства были подключены к одному Wi-Fi-роутеру.</p>
          </Step>

          <Step number="7" title="Указать адрес LM Studio в Roles Witch">
            <p>В поле API URL укажите локальный адрес LM Studio с окончанием <code>/v1</code>.</p>
            <p className="local-ai-code-example"><code>http://192.168.0.184:1234/v1</code></p>
            <p className="local-ai-inline-note"><b>IP-адрес в примерах условный.</b> Используйте адрес из <code>Reachable at</code> в вашем LM Studio.</p>
          </Step>

          <Step number="8" title="Выбрать модель">
            <p>После подключения откройте список моделей в Roles Witch и выберите модель, которая уже загружена и запущена через LM Studio.</p>
            <p>Если в LM Studio не включена авторизация, поле токена при такой локальной настройке можно оставить пустым.</p>
          </Step>

          <Step number="9" title="Создать собственного ИИ-персонажа">
            <p>В Roles Witch нажмите «+», выберите виртуального персонажа или виртуального ассистента, задайте имя и системный промпт.</p>
            <p>Именно системный промпт определяет характер, стиль речи, поведение и общую роль персонажа в разговоре.</p>
          </Step>
        </div>
      </section>

      <section className="local-ai-section local-ai-additional" aria-labelledby="local-ai-additional-title">
        <div className="local-ai-section-heading">
          <img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-extra-features-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
          <div className="local-ai-section-heading-copy">
            <span className="local-ai-kicker">Дополнительные функции</span>
            <h2 id="local-ai-additional-title">Голос, изображения и дополнительные возможности</h2>
          </div>
        </div>
        <ul>
          <li>Для голосового режима может потребоваться VOSK.</li>
          <li>Функции анализа изображений доступны только у моделей, которые поддерживают работу с изображениями.</li>
          <li>Наличие конкретных функций зависит от модели и приложения.</li>
        </ul>
      </section>

      <section className="local-ai-privacy" aria-labelledby="local-ai-privacy-title">
        <div className="local-ai-compact-heading"><img className="local-ai-emblem local-ai-section-emblem" src={publicPath("/images/local-ai/emblems/local-ai-privacy-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/><div><span className="local-ai-kicker">Что происходит с запросами</span><h2 id="local-ai-privacy-title">Локальная работа и приватность</h2></div></div>
        <div>
          <p>При подключении через LM Studio Roles Witch отправляет запросы на локальный сервер, адрес которого пользователь указал самостоятельно. В этой схеме модель обрабатывает сообщения на компьютере, а телефон выступает в роли мобильного интерфейса.</p>
          <p>Если вместо LM Studio используется внешний API-провайдер, сообщения будут отправляться уже выбранному внешнему сервису.</p>
        </div>
      </section>

      <section className="local-ai-pdf" aria-labelledby="local-ai-pdf-title">
        <img className="local-ai-emblem local-ai-pdf-emblem" src={publicPath("/images/local-ai/emblems/local-ai-pdf-emblem.png")} alt="" aria-hidden="true" width="84" height="84"/>
        <div>
          <span className="local-ai-kicker">Дополнение к странице</span>
          <h2 id="local-ai-pdf-title">Полная пошаговая инструкция в PDF</h2>
          <p>7 страниц со скриншотами установки LM Studio, загрузки модели, настройки Local Server и подключения Roles Witch.</p>
        </div>
        <div className="local-ai-pdf-actions">
          <a href={publicPath("/files/guides/roles-witch-lm-studio-guide.pdf")} target="_blank" rel="noopener noreferrer"><img className="local-ai-link-icon local-ai-pdf-link-icon" src={publicPath("/images/local-ai/links/local-ai-open-pdf-icon.png")} alt="" aria-hidden="true" width="50" height="50"/><span>Открыть PDF</span></a>
          <a href="#setup"><img className="local-ai-link-icon local-ai-pdf-link-icon" src={publicPath("/images/local-ai/links/local-ai-read-on-page-icon.png")} alt="" aria-hidden="true" width="50" height="50"/><span>Читать инструкцию на странице</span></a>
        </div>
      </section>

      <MetaLine published="2026-09-05" updated="2026-09-05"/>
    </article>
  </SiteShell>;
}
