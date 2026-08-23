import { FeaturedExternalLink, FeaturedInternalLink } from "./site";
import { publicPath } from "./site-config";

const sponsoredRel = "noopener noreferrer sponsored";
const editorialRel = "noopener noreferrer";

function PlatformLink({ href, children, rel = sponsoredRel }: { href: string; children: React.ReactNode; rel?: string }) {
  return <a href={href} target="_blank" rel={rel}>{children}</a>;
}

export function StoreDirectory({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <div className="store-directory store-directory--compact">
      <FeaturedInternalLink href="/shops/moon-doll-guide" iconImage={publicPath("/images/useful-links/moondoll-icon.png")} title="Moon-Doll" description="международный мультибрендовый магазин" />
      <FeaturedInternalLink href="/shops/hanidoll" iconImage={publicPath("/images/useful-links/hanidoll-icon.png")} title="Hanidoll" description="магазин и бренд, есть площадка для РФ" />
      <FeaturedInternalLink href="/shops/sexdollshop" iconImage={publicPath("/images/useful-links/sexdollshop-icon.png")} title="SexDollShop" description="российский интернет-магазин" />
    </div>;
  }

  return <div className="store-directory">
    <article className="store-card store-card--moon-doll">
      <header><span className="store-type">Внешний международный магазин</span><h3>Moon-Doll</h3></header>
      <p>Международный мультибрендовый магазин с отдельной инструкцией Rudollforum по оформлению заказа.</p>
      <div className="store-feature"><b>Промокод Rudollforum</b><span>Для читателей может быть доступна скидка 5% по промокоду <strong>RUDOLLFORUM</strong>. Перед оплатой проверьте применение промокода и актуальные условия.</span></div>
      <div className="store-card-actions">
        <FeaturedExternalLink href="https://www.moon-doll.com/" variant="moon" iconImage={publicPath("/images/where-to-buy/moondoll-open.png")} title="Открыть Moon-Doll" subtitle="официальный сайт" rel={sponsoredRel}/>
        <FeaturedInternalLink href="/shops/moon-doll-guide" iconImage={publicPath("/images/where-to-buy/moondoll-guide.png")} title="Инструкция по заказу" description="справочная страница Rudollforum"/>
      </div>
      <small>Самостоятельно проверяйте модель, материал, вес, комплектацию, оплату, доставку и гарантию.</small>
    </article>

    <article className="store-card store-card--hanidoll">
      <header><span className="store-type">Бренд и магазин · РФ и международно</span><h3>Hanidoll</h3></header>
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
        <FeaturedExternalLink href="https://www.hanidoll.ru/" variant="store" iconImage={publicPath("/images/where-to-buy/hanidoll-open.png")} title="Открыть Hanidoll" subtitle="официальная площадка для РФ" rel={sponsoredRel}/>
        <FeaturedInternalLink href="/shops/hanidoll" iconImage={publicPath("/images/where-to-buy/hanidoll-info.png")} title="Подробнее о Hanidoll" description="площадки, контакты и безопасность"/>
      </div>
    </article>

    <article className="store-card store-card--sexdollshop">
      <header><span className="store-type">Российский интернет-магазин</span><h3>SexDollShop</h3></header>
      <p>SexDollShop — российский интернет-магазин с каталогом реалистичных кукол, торсов, голов, аксессуаров, париков и средств ухода.</p>
      <nav className="store-platforms" aria-label="Основные площадки SexDollShop">
        <PlatformLink href="https://sexdollshop.ru/" rel={editorialRel}>Официальный сайт</PlatformLink>
        <PlatformLink href="https://t.me/sexdollshopru" rel={editorialRel}>Telegram-канал</PlatformLink>
      </nav>
      <div className="store-feature"><b>Если модели нет в каталоге</b><span>Менеджеру можно отправить ссылку или фотографию и уточнить заказ, цену, опции, сроки и доставку.</span></div>
      <div className="store-card-actions">
        <FeaturedExternalLink href="https://sexdollshop.ru/" variant="store" iconImage={publicPath("/images/where-to-buy/sexdollshop-open.png")} title="Открыть SexDollShop" subtitle="официальный сайт" rel={editorialRel}/>
        <FeaturedInternalLink href="/shops/sexdollshop" iconImage={publicPath("/images/where-to-buy/sexdollshop-info.png")} title="Подробнее о магазине" description="контакты и проверка заказа"/>
      </div>
    </article>
  </div>;
}
