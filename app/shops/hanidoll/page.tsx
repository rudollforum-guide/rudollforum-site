import type { Metadata } from "next";
import { CommercialLink, StoreReference } from "../store-reference";
import { OPEN_GRAPH_IMAGE, siteUrl } from "../../site-config";

const title="Hanidoll — официальный сайт, покупка и скидка Rudollforum";
const description="Hanidoll: официальный сайт для РФ, международная площадка, маркетплейсы, контакты, правила безопасной оплаты и специальное предложение для участников Rudollforum.";
export const metadata:Metadata={title,description,alternates:{canonical:siteUrl("/shops/hanidoll")},openGraph:{title,description,url:siteUrl("/shops/hanidoll"),type:"article",images:[OPEN_GRAPH_IMAGE]}};

export default function HanidollPage(){return <StoreReference slug="hanidoll" heroEmblem="/images/shops/hanidoll/hanidoll-hero-emblem.png" h1="Hanidoll — покупка кукол и официальные площадки" description={description} intro="Hanidoll — бренд и магазин TPE- и силиконовых кукол, торсов и сопутствующих товаров. У Hanidoll есть отдельная русскоязычная площадка для РФ и русскоязычной аудитории, международный сайт и официальные страницы на маркетплейсах.">
  <section><span className="chapter">01</span><div><h2>Официальные площадки Hanidoll</h2><p>Выбирайте площадку с учётом региона, способа оплаты, защиты покупателя и условий доставки. Перед заказом сверяйте название продавца и адрес сайта.</p><div className="store-reference-grid">
    <CommercialLink href="https://www.hanidoll.ru/">Россия и русскоязычная аудитория · hanidoll.ru</CommercialLink>
    <CommercialLink href="https://www.hanidoll.com/">Международный сайт · hanidoll.com</CommercialLink>
    <CommercialLink href="https://www.wildberries.ru/seller/4151068">Официальная страница на Wildberries</CommercialLink>
    <CommercialLink href="https://aliexpress.ru/store/4050082">Официальная страница на AliExpress</CommercialLink>
    <CommercialLink href="https://market.yandex.ru/business--hanidoll/176690399">Официальная страница на Яндекс Маркете</CommercialLink>
  </div></div></section>
  <section><span className="chapter">02</span><div><h2>Контакты</h2><div className="store-contact-grid">
    <div><b>hanidoll.ru</b><a href="tel:+8618036726206">Telegram / контакт: +86 180 3672 6206</a><a href="tel:+8618936688336">Hanidoll: +86 189 3668 8336</a><a href="mailto:Help@hanidoll.ru">Help@hanidoll.ru</a></div>
    <div><b>hanidoll.com</b><a href="mailto:Service@hanidoll.com">Service@hanidoll.com</a><a href="tel:+8617358290973">WhatsApp / телефон: +86 17358290973</a></div>
  </div><p className="article-featured-note">Telegram username в исходных данных не указан, поэтому на странице не создаётся ссылка на неподтверждённый аккаунт.</p></div></section>
  <section><span className="chapter">03</span><div><h2>Безопасность оплаты</h2><div className="store-safety"><p>Все покупки, оплаты и расчёты по Hanidoll покупатели совершают самостоятельно и на свой риск. Rudollforum не является стороной сделки, гарантом, посредником или арбитром и не отвечает за оплату, заказ, доставку, возврат или спор с продавцом.</p><strong>Не переводите деньги за пределами официального сайта Hanidoll, официальных маркетплейсов или площадок с защитой покупателя.</strong></div><ul>
    <li>Не переводите деньги в личных сообщениях.</li><li>Не переводите деньги на личные карты.</li><li>Не используйте неизвестные реквизиты или криптокошельки.</li><li>Не соглашайтесь на предложения «скидка в личке».</li><li>Не оплачивайте через аккаунты, которые невозможно подтвердить через официальный сайт или маркетплейс.</li>
  </ul></div></section>
  <section><span className="chapter">04</span><div><h2>Специальное предложение Hanidoll для Rudollforum</h2><div className="store-offer"><span>Условия необходимо уточнить</span><p>Для участников сообщества Rudollforum действует специальное предложение Hanidoll — скидка 10% при оформлении заказа через официальные площадки бренда.</p><p>Telegram используется только для консультации, уточнения модели и подтверждения скидки. Оплата должна проходить через официальный сайт Hanidoll или официальные маркетплейсы.</p></div><ol className="store-steps"><li>Выбрать модель.</li><li>Связаться с представителем бренда для консультации.</li><li>Уточнить применение скидки Rudollforum.</li><li>Оформить и оплатить заказ через официальную площадку.</li></ol><p><strong>Актуальность предложения и условия скидки рекомендуется уточнять перед заказом.</strong></p></div></section>
  <section><span className="chapter">05</span><div><h2>Роль Rudollforum</h2><p>Упоминание Hanidoll носит справочный характер. Покупатель самостоятельно принимает решение об оплате, проверяет точную модель, материал, комплектацию, фактический вес, сроки, гарантию и порядок возврата.</p><p>Коммерческие ссылки на официальные площадки открываются в новой вкладке и обозначены как спонсируемые. Контактные ссылки телефона и email не являются платёжными ссылками.</p></div></section>
</StoreReference>}
