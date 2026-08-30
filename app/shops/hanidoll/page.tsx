import type { Metadata } from "next";
import { hanidollReviews } from "../../store-reviews";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl } from "../../site-config";
import { CommercialLink, StoreReference } from "../store-reference";

const title="Hanidoll — официальный сайт, покупка и скидка Rudollforum";
const description="Hanidoll: официальный сайт для РФ, международная площадка, маркетплейсы, контакты, правила безопасной оплаты и специальное предложение для участников Rudollforum.";
export const metadata:Metadata={title,description,alternates:{canonical:siteUrl("/shops/hanidoll")},openGraph:{title,description,url:siteUrl("/shops/hanidoll"),type:"article",images:[OPEN_GRAPH_IMAGE]}};

const platformLinks = [
  { href: "https://www.hanidoll.ru/", icon: "/images/shops/hanidoll/platforms/hanidoll-ru-icon.png", label: "Россия и русскоязычная аудитория · hanidoll.ru" },
  { href: "https://www.hanidoll.com/", icon: "/images/shops/hanidoll/platforms/hanidoll-global-icon.png", label: "Международный сайт · hanidoll.com" },
  { href: "https://www.wildberries.ru/seller/4151068", icon: "/images/shops/hanidoll/platforms/wildberries-icon.png", label: "Официальная страница на Wildberries" },
  { href: "https://aliexpress.ru/store/4050082", icon: "/images/shops/hanidoll/platforms/aliexpress-icon.png", label: "Официальная страница на AliExpress" },
  { href: "https://market.yandex.ru/business--hanidoll/176690399", icon: "/images/shops/hanidoll/platforms/yandex-market-icon.png", label: "Официальная страница на Яндекс Маркете" },
] as const;

const contactCards = [
  {
    id: "ru",
    title: "hanidoll.ru",
    icon: "/images/shops/hanidoll/contacts/hanidoll-ru-heading-icon.png",
    contacts: [
      { href: "tel:+8618036726206", icon: "/images/shops/hanidoll/contacts/telegram-contact-icon.png", label: "Telegram / контакт: +86 180 3672 6206" },
      { href: "tel:+8618936688336", icon: "/images/shops/hanidoll/contacts/hanidoll-phone-icon.png", label: "Hanidoll: +86 189 3668 8336" },
      { href: "mailto:Help@hanidoll.ru", icon: "/images/shops/hanidoll/contacts/help-email-icon.png", label: "Help@hanidoll.ru" },
    ],
  },
  {
    id: "global",
    title: "hanidoll.com",
    icon: "/images/shops/hanidoll/contacts/hanidoll-global-heading-icon.png",
    contacts: [
      { href: "mailto:Service@hanidoll.com", icon: "/images/shops/hanidoll/contacts/service-email-icon.png", label: "Service@hanidoll.com" },
      { href: "tel:+8617358290973", icon: "/images/shops/hanidoll/contacts/whatsapp-contact-icon.png", label: "WhatsApp / телефон: +86 17358290973" },
    ],
  },
] as const;

export default function HanidollPage(){return <StoreReference slug="hanidoll" heroEmblem="/images/shops/hanidoll/hanidoll-brand-emblem.png" h1="Hanidoll — покупка кукол и официальные площадки" description={description} intro="Hanidoll — бренд и магазин TPE- и силиконовых кукол, торсов и сопутствующих товаров. У Hanidoll есть отдельная русскоязычная площадка для РФ и русскоязычной аудитории, международный сайт и официальные страницы на маркетплейсах.">
  <section><span className="chapter">01</span><div><h2>Официальные площадки Hanidoll</h2><p>Выбирайте площадку с учётом региона, способа оплаты, защиты покупателя и условий доставки. Перед заказом сверяйте название продавца и адрес сайта.</p><div className="store-reference-grid hanidoll-platform-grid">
    {platformLinks.map(platform => <CommercialLink className="hanidoll-platform-link" href={platform.href} iconImage={platform.icon} key={platform.href}>{platform.label}</CommercialLink>)}
  </div></div></section>
  <section><span className="chapter">02</span><div><h2>Контакты</h2><div className="store-contact-grid hanidoll-contact-grid">
    {contactCards.map(card => <div className={`hanidoll-contact-card hanidoll-contact-card--${card.id}`} key={card.id}>
      <div className="hanidoll-contact-heading"><img className="hanidoll-contact-heading-icon" src={publicPath(card.icon)} width={62} height={62} alt="" aria-hidden="true"/><b>{card.title}</b></div>
      <div className="hanidoll-contact-list">{card.contacts.map(contact => <a className="hanidoll-contact-row" href={contact.href} key={contact.href}>
        <img className="hanidoll-contact-icon" src={publicPath(contact.icon)} width={36} height={36} alt="" aria-hidden="true"/><span>{contact.label}</span>
      </a>)}</div>
    </div>)}
  </div><p className="article-featured-note">Telegram username в исходных данных не указан, поэтому на странице не создаётся ссылка на неподтверждённый аккаунт.</p></div></section>
  <section><span className="chapter">03</span><div><h2>Безопасность оплаты</h2><div className="store-safety"><p>Все покупки, оплаты и расчёты по Hanidoll покупатели совершают самостоятельно и на свой риск. Rudollforum не является стороной сделки, гарантом, посредником или арбитром и не отвечает за оплату, заказ, доставку, возврат или спор с продавцом.</p><strong>Не переводите деньги за пределами официального сайта Hanidoll, официальных маркетплейсов или площадок с защитой покупателя.</strong></div><ul>
    <li>Не переводите деньги в личных сообщениях.</li><li>Не переводите деньги на личные карты.</li><li>Не используйте неизвестные реквизиты или криптокошельки.</li><li>Не соглашайтесь на предложения «скидка в личке».</li><li>Не оплачивайте через аккаунты, которые невозможно подтвердить через официальный сайт или маркетплейс.</li>
  </ul></div></section>
  <section><span className="chapter">04</span><div><h2>Специальное предложение Hanidoll для Rudollforum</h2><div className="store-offer"><span>Условия необходимо уточнить</span><p>Для участников сообщества Rudollforum действует специальное предложение Hanidoll — скидка 10% при оформлении заказа через официальные площадки бренда.</p><p>Telegram используется только для консультации, уточнения модели и подтверждения скидки. Оплата должна проходить через официальный сайт Hanidoll или официальные маркетплейсы.</p></div><ol className="store-steps"><li>Выбрать модель.</li><li>Связаться с представителем бренда для консультации.</li><li>Уточнить применение скидки Rudollforum.</li><li>Оформить и оплатить заказ через официальную площадку.</li></ol><p><strong>Актуальность предложения и условия скидки рекомендуется уточнять перед заказом.</strong></p></div></section>
  <section className="hanidoll-reviews-section"><span className="chapter">05</span><div><h2>Отзывы покупателей</h2><div className="hanidoll-reviews-panel">
    <div className="hanidoll-reviews-intro"><p>{hanidollReviews.description}</p><p>{hanidollReviews.details}</p><a className="store-review-action hanidoll-review-action" href={hanidollReviews.href} target="_blank" rel="noopener noreferrer"><img className="hanidoll-review-action-icon" src={publicPath("/images/shops/hanidoll/reviews/trustpilot-reviews-icon.png")} width={44} height={44} alt="" aria-hidden="true"/><span>Открыть отзывы на Trustpilot</span></a></div>
    <div className="hanidoll-reviews-notes">
      <article><h3>Маркетплейсы и агрегаторы</h3><p>Отзывы Hanidoll можно искать в карточках отдельных товаров на Яндекс Маркете, Wildberries, AliExpress и через агрегаторы вроде Alitools.</p></article>
      <article><h3>Зарубежные сообщества и обсуждения</h3><p>Иногда отзывы, вопросы и личный опыт по Hanidoll встречаются на Reddit, форумах и других открытых площадках.</p></article>
    </div>
    <div className="hanidoll-reviews-telegram"><p>Более подробные отзывы и личный опыт владельцев публикуются в закрытой Telegram-группе Rudollforum. Информацию о входе в группу можно получить через Telegram-канал Rudollforum.</p><a href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">Telegram-канал Rudollforum</a></div>
  </div></div></section>
  <section><span className="chapter">06</span><div><h2>Роль Rudollforum</h2><p>Упоминание Hanidoll носит справочный характер. Покупатель самостоятельно принимает решение об оплате, проверяет точную модель, материал, комплектацию, фактический вес, сроки, гарантию и порядок возврата.</p><p>Коммерческие ссылки на официальные площадки открываются в новой вкладке и обозначены как спонсируемые. Контактные ссылки телефона и email не являются платёжными ссылками.</p></div></section>
</StoreReference>}
