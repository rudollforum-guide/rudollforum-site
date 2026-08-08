import type { Metadata } from "next";
import { CommercialLink, StoreReference } from "../store-reference";
import { OPEN_GRAPH_IMAGE, siteUrl } from "../../site-config";

const title="SexDollShop — магазин реалистичных кукол, торсов и аксессуаров";
const description="Справочная страница SexDollShop: каталог реалистичных кукол, торсов, голов и аксессуаров, контакты магазина и что проверить перед заказом.";
export const metadata:Metadata={title,description,alternates:{canonical:siteUrl("/shops/sexdollshop")},openGraph:{title,description,url:siteUrl("/shops/sexdollshop"),type:"article",images:[OPEN_GRAPH_IMAGE]}};

export default function SexDollShopPage(){return <StoreReference slug="sexdollshop" h1="SexDollShop — российский магазин кукол и аксессуаров" description={description} intro="SexDollShop — российский интернет-магазин с каталогом реалистичных кукол, торсов, голов, аксессуаров, париков и средств ухода. На сайте представлены каталог, бренды, инструкции, информация о доставке и оплате.">
  <section><span className="chapter">01</span><div><h2>Официальный сайт и канал</h2><p>Проверяйте актуальные характеристики и условия непосредственно на официальных площадках магазина.</p><div className="store-reference-grid">
    <CommercialLink href="https://sexdollshop.ru/" rel="noopener noreferrer">Официальный сайт SexDollShop</CommercialLink>
    <CommercialLink href="https://t.me/sexdollshopru" rel="noopener noreferrer">Telegram-канал SexDollShop</CommercialLink>
  </div></div></section>
  <section><span className="chapter">02</span><div><h2>Контакты магазина</h2><div className="store-contact-grid">
    <div><b>Telegram</b><span>@sxtrade</span><small>Контакт указан без автоматически созданной ссылки, чтобы не подменять предоставленные данные.</small></div>
    <div><b>WhatsApp / телефон</b><a href="tel:+79997151340">+7 (999) 715-13-40</a></div>
  </div></div></section>
  <section><span className="chapter">03</span><div><h2>Если нужной модели нет в каталоге</h2><div className="store-feature store-feature--wide"><p>Если интересующая кукла, голова, торс или аксессуар отсутствуют на сайте, можно отправить менеджеру ссылку или фотографию модели и уточнить возможность заказа, цену, доступные опции, сроки и условия доставки.</p></div></div></section>
  <section><span className="chapter">04</span><div><h2>Что уточнить перед заказом</h2><ul className="store-checklist"><li>Наличие и точную модель.</li><li>Материал и комплектацию.</li><li>Фактический вес.</li><li>Сроки и условия доставки.</li><li>Способ оплаты.</li><li>Гарантию и условия возврата.</li><li>Реальные фотографии товара перед отправкой.</li></ul></div></section>
  <section><span className="chapter">05</span><div><h2>Роль Rudollforum</h2><div className="store-safety"><p>Rudollforum не является продавцом, посредником или гарантом сделки. Покупатель самостоятельно проверяет магазин, предложение, получателя платежа, условия доставки, гарантии и возврата.</p></div><p>Упоминание магазина носит справочный характер и не заменяет проверку конкретного заказа.</p></div></section>
</StoreReference>}
