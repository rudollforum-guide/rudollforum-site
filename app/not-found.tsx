import Link from "next/link"; import {SiteShell} from "./site";
export default function NotFound(){return <SiteShell><section className="not-found"><span>404</span><h1>Страница не найдена</h1><p>Возможно, адрес изменился. Вернитесь к оглавлению справочника.</p><Link className="button primary" href="/">На главную</Link></section></SiteShell>}
