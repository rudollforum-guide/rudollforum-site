"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const nav = [
  ["Справочник", "/guide"],
  ["Выбор", "/getting-started"],
  ["Материалы", "/silicone-or-tpe"],
  ["Покупка", "/where-to-buy"],
  ["Уход", "/care"],
  ["Хранение", "/storage"],
  ["Ремонт", "/repair"],
  ["Бренды", "/brands"],
  ["Сообщество", "/community"],
  ["Полезные ссылки", "/useful-links"],
] as const;

const guideNav = [
  ["Все главы", "/guide"],
  ["С чего начать", "/getting-started"],
  ["Moon-Doll: оформление заказа", "/shops/moon-doll-guide"],
  ["Рост и вес", "/weight-and-size"],
  ["Проверка доставки", "/delivery-check"],
  ["Скелет и механика", "/skeleton"],
  ["Слабые места", "/weak-points"],
  ["Одежда и пятна", "/clothing-and-stains"],
  ["Старение материалов", "/material-aging"],
  ["Опыт владельца", "/owner-experience"],
] as const;

const guideOnlyRoutes = new Set<string>(
  guideNav.slice(2).map(([, href]) => href),
);

function isNavActive(pathname: string, href: string) {
  if (href === "/guide") {
    return pathname === href || guideOnlyRoutes.has(pathname);
  }

  if (href === "/where-to-buy") {
    return new Set([
      "/where-to-buy",
      "/buy-tpe-doll",
      "/buy-silicone-doll",
      "/realistic-dolls",
      "/how-to-buy",
      "/safe-purchase",
      "/delivery-check",
      "/owner-reviews",
    ]).has(pathname);
  }

  return pathname === href;
}

function NavItem({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const active = isNavActive(pathname, href);

  return (
    <Link
      href={href}
      className="nav-item"
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteNavigation() {
  const pathname = usePathname();
  const guideActive = isNavActive(pathname, "/guide");

  return (
    <>
      <details className="menu">
        <summary>Меню</summary>
        <nav aria-label="Мобильная навигация">
          <details className="guide-menu">
            <summary aria-current={guideActive ? "page" : undefined}>
              Справочник
            </summary>
            <div>
              {guideNav.map(([label, href]) => (
                <NavItem
                  key={href}
                  href={href}
                  label={label}
                  pathname={pathname}
                />
              ))}
            </div>
          </details>
          {nav.slice(1).map(([label, href]) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              pathname={pathname}
            />
          ))}
        </nav>
      </details>
      <nav className="desktop-nav" aria-label="Основная навигация">
        {nav.map(([label, href]) => (
          <NavItem
            key={href}
            href={href}
            label={label}
            pathname={pathname}
          />
        ))}
      </nav>
    </>
  );
}
