import type {Metadata} from "next";
import Link from "next/link";
import {JsonLd,SiteShell} from "../site";
import {OPEN_GRAPH_IMAGE,publicPath,siteUrl} from "../site-config";
import {WhiteLotusMusicPlayer} from "./music-player";
import {WhiteLotusGallery,type WhiteLotusGallerySet} from "./gallery";

const title = "Сад Белого Лотоса | Rudollforum";
const description = "Сад Белого Лотоса — эстетическое направление Rudollforum: спокойные образы, закрытая одежда, атмосфера и визуальная гармония.";

export const metadata:Metadata = {
  title,
  description,
  alternates:{canonical:siteUrl("/white-lotus-garden/")},
  openGraph:{title,description,url:siteUrl("/white-lotus-garden/"),type:"website",images:[OPEN_GRAPH_IMAGE]},
};

const sections = [
  {
    heading:"Что такое Сад Белого Лотоса",
    text:[
      "«Сад Белого Лотоса» — это особое направление внутри Rudollforum, посвящённое спокойной визуальной эстетике. Здесь важны не откровенность и не эпатаж, а настроение, цельность образа, красота позы, одежды, света и окружения.",
      "Белый Лотос в этом разделе — символ тихой красоты, чистой атмосферы и внимательного отношения к образу.",
    ],
  },
  {
    heading:"Какие образы подходят разделу",
    items:["Закрытая одежда","Ханьфу и другие традиционные силуэты","Элегантные платья","Фэнтези-образы","Домашние спокойные сцены","Художественные и атмосферные AI-образы","Фотографии и постановочные композиции, где важны стиль и настроение"],
  },
  {
    heading:"На что сделан акцент",
    items:["Атмосфера","Гармония композиции","Мягкая эстетика","Визуальная аккуратность","Красота одежды и образа","Спокойное эмоциональное впечатление"],
    afterText:["Этот раздел создан для тех, кому ближе не откровенный контент, а цельный, красивый и запоминающийся образ."],
  },
  {
    heading:"Идея Белого Лотоса",
    text:["Сад Белого Лотоса существует как пространство для образов, в которых есть тишина, вкус и настроение. Он живёт, пока его продолжают наполнять красивыми работами, бережно подобранной атмосферой и вниманием к деталям."],
  },
];

const gallerySets:WhiteLotusGallerySet[] = [
  {
    slug:"kitsune",
    title:"Китсуне",
    description:"Закрытый образ в восточной стилистике — бело-синяя одежда, спокойная домашняя композиция и мягкий характер фотографии.",
    emblem:publicPath("/images/white-lotus-garden/icons/kitsune-emblem.png"),
    images:Array.from({length:11},(_,index)=>({
      src:publicPath(`/images/white-lotus-garden/gallery/kitsune/kitsune-${String(index+1).padStart(2,"0")}.jpg`),
      alt:`Китсуне — образ участника Rudollforum, фото ${index+1}`,
    })),
  },
];

export default function WhiteLotusGardenPage(){
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},{"@type":"ListItem","position":2,"name":"Сообщество","item":siteUrl("/community/")},{"@type":"ListItem","position":3,"name":"Сад Белого Лотоса","item":siteUrl("/white-lotus-garden/")} ]};
  const webPage={"@context":"https://schema.org","@type":"WebPage",name:"Сад Белого Лотоса",description,url:siteUrl("/white-lotus-garden/"),inLanguage:"ru-RU"};
  return <SiteShell>
    <JsonLd data={breadcrumb}/><JsonLd data={webPage}/>
    <article className="white-lotus-page">
      <nav className="white-lotus-breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span aria-hidden="true">·</span><Link href="/community">Сообщество</Link><span aria-hidden="true">·</span><span>Сад Белого Лотоса</span></nav>
      <section className="white-lotus-hero" aria-labelledby="white-lotus-title">
        <div className="white-lotus-hero-copy">
          <span className="white-lotus-kicker">Эстетическое направление Rudollforum</span>
          <h1 id="white-lotus-title">Сад Белого Лотоса</h1>
          <p>Отдельное эстетическое направление Rudollforum — образы, атмосфера и визуальная гармония без акцента на откровенность.</p>
          <WhiteLotusMusicPlayer src={publicPath("/audio/white-lotus-garden/white-lotus-theme.mp3")}/>
        </div>
        <div className="white-lotus-hero-caption" aria-hidden="true"><span>静</span><small>тишина · свет · гармония</small></div>
      </section>
      <div className="white-lotus-sections">
        {sections.map((section,index)=><section className={`white-lotus-section white-lotus-section--${index+1}`} key={section.heading}>
          <span className="white-lotus-index">{String(index+1).padStart(2,"0")}</span>
          <div>
            <h2>{section.heading}</h2>
            {section.text?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
            {section.items&&<ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul>}
            {section.afterText?.map(paragraph=><p className="white-lotus-after-list" key={paragraph}>{paragraph}</p>)}
          </div>
        </section>)}
      </div>
      <WhiteLotusGallery sets={gallerySets} headingEmblem={publicPath("/images/white-lotus-garden/icons/gallery-community-emblem.png")}/>
      <section className="white-lotus-community" aria-labelledby="white-lotus-community-title">
        <img className="white-lotus-community-emblem" src={publicPath("/images/white-lotus-garden/icons/garden-community-cta-emblem.png")} alt="" aria-hidden="true"/>
        <div className="white-lotus-community-copy">
          <span>Продолжение сада</span>
          <h2 id="white-lotus-community-title">Хотите развивать это направление вместе с сообществом?</h2>
          <p>Идеи, публикации и дальнейшее развитие раздела обсуждаются в сообществе Rudollforum.</p>
        </div>
        <a href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">
          <img className="white-lotus-telegram-emblem" src={publicPath("/images/white-lotus-garden/icons/telegram-rudollforum-emblem.png")} alt="" aria-hidden="true"/>
          <span>Перейти в Telegram Rudollforum</span>
          <i aria-hidden="true">→</i>
        </a>
      </section>
    </article>
  </SiteShell>;
}
