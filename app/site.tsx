import Link from "next/link";
import { SiteEffects } from "./site-effects";
import { SiteNavigation } from "./site-navigation";
import { publicPath } from "./site-config";

export function JsonLd({data}:{data:object}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} /> }
const formatDate=(date:string)=>new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`));
export function MetaLine({published="2026-07-24",updated="2026-07-24"}:{published?:string;updated?:string}={}){return <div className="meta-line"><span>Редакция Rudollforum</span><span>Опубликовано: {formatDate(published)}</span><span>Обновлено: {formatDate(updated)}</span></div>}

type FeaturedExternalLinkProps = {
  href: string;
  variant: "pdf" | "telegram" | "moon";
  icon: string;
  title: string;
  subtitle: string;
  rel?: string;
};

export function FeaturedExternalLink({href,variant,icon,title,subtitle,rel="noopener noreferrer"}:FeaturedExternalLinkProps) {
  return <a className={`footer-featured-link footer-featured-link--${variant}`} href={href} target="_blank" rel={rel}>
    <span className="footer-featured-icon" aria-hidden="true">{icon}</span>
    <span className="footer-featured-copy"><b>{title}</b><small>{subtitle}</small></span>
    <span className="footer-featured-arrow" aria-hidden="true">↗</span>
  </a>;
}

export function SiteShell({children}:{children:React.ReactNode}) {
  return <><SiteEffects/><header className="site-header"><div className="topline">18+ · Информационный ресурс для совершеннолетней аудитории</div><div className="header-inner"><Link href="/" className="brand"><i className="lotus" aria-hidden="true">✦</i><span className="brand-title"><strong>Rudollforum</strong><em className="header-age">18+</em></span><span className="brand-subtitle">TPE и силиконовые куклы</span><small>Независимый справочник по выбору, покупке, уходу и хранению</small></Link><SiteNavigation/></div></header><main>{children}</main><footer><div className="footer-ornament" aria-hidden="true">✦　◇　✦</div><div className="footer-grid"><div><div className="footer-brand"><span className="footer-lotus">✦</span> Rudollforum</div><p>Независимый справочник по выбору, покупке, уходу и хранению силиконовых и ТПЕ-кукол.</p><span className="age-mark">18+ · Информационный ресурс</span><p className="footer-disclaimer">Rudollforum является независимым информационным справочником и сообществом владельцев силиконовых и ТПЕ-кукол. Сайт не принимает оплату и не оформляет заказы.</p></div><div><strong>Основное</strong><Link href="/guide">Практическое руководство</Link><FeaturedExternalLink href={publicPath("/documents/rudollforum-guide-tpe-silicone-2026.pdf")} variant="pdf" icon="▤" title="Руководство PDF" subtitle="полная версия"/><Link href="/where-to-buy">Где купить</Link><Link href="/owner-reviews">Отзывы владельцев</Link><Link href="/safe-purchase">Безопасная покупка</Link><Link href="/shops/moon-doll-guide">Заказ на Moon-Doll</Link></div><div><strong>Эксплуатация</strong><Link href="/care">Уход</Link><Link href="/storage">Хранение</Link><Link href="/repair">Ремонт</Link></div><div><strong>О проекте</strong><Link href="/community">О сообществе</Link><Link href="/editorial-policy">Редакционная политика</Link><Link href="/age-policy">Возрастные ограничения</Link><Link href="/useful-links">Полезные ссылки</Link><FeaturedExternalLink href="https://t.me/rudollforum" variant="telegram" icon="✈" title="Telegram" subtitle="сообщество владельцев"/><FeaturedExternalLink href="https://www.moon-doll.com/" variant="moon" icon="☾" title="Moon-Doll" subtitle="внешний магазин" rel="noopener noreferrer sponsored"/></div></div><div className="copyright"><span>18+. Сайт предназначен только для совершеннолетней аудитории.</span><span>© 2026 Rudollforum · Сайт не продаёт товары и не принимает оплату.</span></div></footer></>
}
