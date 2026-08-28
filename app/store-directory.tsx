import Link from "next/link";
import { FeaturedExternalLink, FeaturedInternalLink } from "./site";
import { publicPath } from "./site-config";

const sponsoredRel = "noopener noreferrer sponsored";
const editorialRel = "noopener noreferrer";

function PlatformLink({ href, children, rel = sponsoredRel }: { href: string; children: React.ReactNode; rel?: string }) {
  return <a href={href} target="_blank" rel={rel}>{children}</a>;
}

function StoreHeading({ icon, type, title }: { icon: string; type: string; title: string }) {
  return <header className="store-card-heading">
    <img className="store-heading-icon" src={publicPath(icon)} alt="" aria-hidden="true" width="72" height="72"/>
    <div className="store-heading-copy"><span className="store-type">{type}</span><h3>{title}</h3></div>
  </header>;
}

export function StoreDirectory({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <div className="store-directory store-directory--compact">
      <FeaturedInternalLink className="store-directory-link store-directory-link--moon" href="/shops/moon-doll-guide" iconImage={publicPath("/images/useful-links/moondoll-icon.png")} title="Moon-Doll" description="международный мультибрендовый магазин" />
      <FeaturedInternalLink className="store-directory-link store-directory-link--hanidoll" href="/shops/hanidoll" iconImage={publicPath("/images/useful-links/hanidoll-icon.png")} title="Hanidoll" description="магазин и бренд, есть площадка для РФ" />
      <FeaturedInternalLink className="store-directory-link store-directory-link--sexdollshop" href="/shops/sexdollshop" iconImage={publicPath("/images/useful-links/sexdollshop-icon.png")} title="SexDollShop" description="российский интернет-магазин" />
    </div>;
  }

  return <div className="store-directory">
    <article className="store-card store-card--moon-doll">
      <StoreHeading icon="/images/where-to-buy/moon-doll-logo.png" type="Внешний международный магазин" title="Moon-Doll"/>
      <p>Международный мультибрендовый магазин с отдельной инструкцией Rudollforum по оформлению заказа.</p>
      <div className="store-feature"><b>Промокод Rudollforum</b><span>Для читателей может быть доступна скидка 5% по промокоду <strong>RUDOLLFORUM</strong>. Перед оплатой проверьте применение промокода и актуальные условия.</span></div>
      <div className="store-feature store-loyalty"><b>Баллы и VIP-уровни Moon-Doll</b><span>На сайте действует программа лояльности: за покупки и отдельные действия начисляются баллы для следующих заказов. Также предусмотрены VIP-уровни с дополнительными скидками.</span><strong>Стандартный курс: 50 баллов = $1. VIP-скидки могут достигать 10%.</strong><small>Условия могут изменяться — проверяйте их в аккаунте Moon-Doll перед заказом.</small><Link className="store-loyalty-link" href="/shops/moon-doll-guide/#loyalty">Подробнее о баллах и VIP</Link></div>
      <small>Самостоятельно проверяйте модель, материал, вес, комплектацию, оплату, доставку и гарантию.</small>
      <div className="store-card-actions">
        <FeaturedExternalLink href="https://www.moon-doll.com/" variant="moon" iconImage={publicPath("/images/where-to-buy/moon-doll-cta-logo.png")} title="Открыть Moon-Doll" subtitle="официальный сайт" rel={sponsoredRel}/>
        <FeaturedInternalLink href="/shops/moon-doll-guide" iconImage={publicPath("/images/where-to-buy/moon-doll-guide.png")} title="Инструкция по заказу" description="справочная страница Rudollforum"/>
      </div>
    </article>

    <article className="store-card store-card--hanidoll">
      <StoreHeading icon="/images/where-to-buy/hanidoll-logo.png" type="Бренд и магазин · РФ и международно" title="Hanidoll"/>
      <p>Hanidoll — бренд и магазин TPE- и силиконовых кукол, торсов и сопутствующих товаров. Есть русскоязычная площадка, международный сайт и страницы на маркетплейсах.</p>
      <nav className="store-platforms" aria-label="Основные площадки Hanidoll">
        <PlatformLink href="https://www.hanidoll.ru/">Сайт для РФ</PlatformLink>
        <PlatformLink href="https://www.hanidoll.com/">Международный сайт</PlatformLink>
        <PlatformLink href="https://www.wildberries.ru/seller/4151068">Wildberries</PlatformLink>
        <PlatformLink href="https://aliexpress.ru/store/4050082">AliExpress</PlatformLink>
        <PlatformLink href="https://market.yandex.ru/business--hanidoll/176690399">Яндекс Маркет</PlatformLink>
      </nav>
      <div className="store-feature"><b>Специальное предложение</b><span>Для участников сообщества может действовать скидка 10%. Актуальность и порядок применения нужно уточнить до заказа.</span></div>
      <div className="store-card-actions">
        <FeaturedExternalLink href="https://www.hanidoll.ru/" variant="store" iconImage={publicPath("/images/where-to-buy/hanidoll-cta-logo.png")} title="Открыть Hanidoll" subtitle="официальная площадка для РФ" rel={sponsoredRel}/>
        <FeaturedInternalLink href="/shops/hanidoll" iconImage={publicPath("/images/where-to-buy/hanidoll-info.png")} title="Подробнее о Hanidoll" description="площадки, контакты и безопасность"/>
      </div>
    </article>

    <article className="store-card store-card--sexdollshop">
      <StoreHeading icon="/images/where-to-buy/sexdollshop-logo.png" type="Российский интернет-магазин" title="SexDollShop"/>
      <p>SexDollShop — российский интернет-магазин с каталогом реалистичных кукол, торсов, голов, аксессуаров, париков и средств ухода.</p>
      <nav className="store-platforms" aria-label="Основные площадки SexDollShop">
        <PlatformLink href="https://sexdollshop.ru/" rel={editorialRel}>Официальный сайт</PlatformLink>
        <PlatformLink href="https://t.me/sexdollshopru" rel={editorialRel}>Telegram-канал</PlatformLink>
      </nav>
      <div className="store-feature"><b>Если модели нет в каталоге</b><span>Менеджеру можно отправить ссылку или фотографию и уточнить заказ, цену, опции, сроки и доставку.</span></div>
      <div className="store-card-actions">
        <FeaturedExternalLink href="https://sexdollshop.ru/" variant="store" iconImage={publicPath("/images/where-to-buy/sexdollshop-cta-logo.png")} title="Открыть SexDollShop" subtitle="официальный сайт" rel={editorialRel}/>
        <FeaturedInternalLink href="/shops/sexdollshop" iconImage={publicPath("/images/where-to-buy/sexdollshop-info.png")} title="Подробнее о магазине" description="контакты и проверка заказа"/>
      </div>
    </article>
  </div>;
}
