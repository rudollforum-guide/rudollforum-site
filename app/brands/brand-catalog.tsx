"use client";

import { useMemo, useState } from "react";
import {
  brands,
  categoryInfo,
  categoryOrder,
  featureInfo,
  type Brand,
  type BrandCategory,
  type BrandFeature,
} from "./brands-data";
import { BrandIcon } from "./brand-icon";
import { publicPath } from "../site-config";

const featureOrder: BrandFeature[] = ["anime", "fantasy", "furry", "ai", "robotics", "heavy", "tall", "games", "cartoons", "actresses", "torsos"];

function normalizeSearch(value: string) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("ru")
    .replace(/[\s/\-–—_+()]+/g, " ")
    .trim();
}

function searchableText(brand: Brand) {
  return normalizeSearch([
    brand.name,
    ...(brand.aliases ?? []),
    categoryInfo[brand.category].label,
    categoryInfo[brand.category].shortLabel,
    ...(brand.features ?? []).flatMap((feature) => [featureInfo[feature].label, ...(featureInfo[feature].searchTerms ?? [])]),
    brand.note ?? "",
  ].join(" "));
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className={`brand-card brand-card--${brand.category}`}>
      <div className="brand-card-main">
        <BrandIcon src={publicPath(brand.icon)} />
        <div className="brand-card-copy">
          <span className="brand-category">{categoryInfo[brand.category].shortLabel}</span>
          <h3>{brand.name}</h3>
          {brand.features?.length ? (
            <div className="brand-features" aria-label={`Особенности ${brand.name}`}>
              {brand.features.map((feature) => (
                <span className={`brand-feature brand-feature--${featureInfo[feature].className}`} key={feature}>
                  {featureInfo[feature].label}
                </span>
              ))}
            </div>
          ) : null}
          {brand.note ? <p className="brand-note">{brand.note}</p> : null}
        </div>
      </div>
      {(brand.url || brand.secondaryUrl) ? (
        <div className="brand-card-actions">
          {brand.url ? (
            <a className="brand-site-link" href={brand.url} target="_blank" rel="noopener noreferrer">
              Официальный сайт
            </a>
          ) : null}
          {brand.secondaryUrl ? (
            <a className="brand-secondary-link" href={brand.secondaryUrl} target="_blank" rel="noopener noreferrer">
              Дополнительный сайт
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function BrandCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | BrandCategory>("all");
  const [feature, setFeature] = useState<"all" | BrandFeature>("all");

  const usedFeatures = useMemo(
    () => featureOrder.filter((item) => brands.some((brand) => brand.features?.includes(item))),
    [],
  );
  const normalizedQuery = normalizeSearch(query);
  const visible = useMemo(() => brands.filter((brand) => {
    const matchesQuery = !normalizedQuery || searchableText(brand).includes(normalizedQuery);
    const matchesCategory = category === "all" || brand.category === category;
    const matchesFeature = feature === "all" || brand.features?.includes(feature);
    return matchesQuery && matchesCategory && matchesFeature;
  }), [category, feature, normalizedQuery]);

  const grouped = categoryOrder
    .map((item) => ({ category: item, items: visible.filter((brand) => brand.category === item) }))
    .filter(({ items }) => items.length > 0);
  const filtersActive = Boolean(normalizedQuery || category !== "all" || feature !== "all");

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    setFeature("all");
  };

  return (
    <div className="brands-catalog">
      <nav className="brands-category-nav" aria-label="Быстрый переход к категории">
        {categoryOrder.map((item) => (
          <a href={`#${item}`} key={item}>{categoryInfo[item].shortLabel}</a>
        ))}
      </nav>

      <section className="brands-controls" aria-label="Поиск и фильтры каталога">
        <div className="brands-search">
          <label htmlFor="brands-search">Поиск по каталогу</label>
          <input
            id="brands-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Найти бренд…"
            aria-label="Найти бренд"
            autoComplete="off"
          />
        </div>
        <div className="brands-counter" aria-live="polite">Показано: <strong>{visible.length}</strong> из {brands.length}</div>

        <fieldset className="brands-filter-group">
          <legend>Категории</legend>
          <div className="brands-filter-row">
            <button type="button" aria-pressed={category === "all"} className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>Все</button>
            {categoryOrder.map((item) => (
              <button type="button" aria-pressed={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>
                {categoryInfo[item].shortLabel}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="brands-filter-group brands-filter-group--features">
          <legend>Особенности</legend>
          <div className="brands-filter-row">
            <button type="button" aria-pressed={feature === "all"} className={feature === "all" ? "active" : ""} onClick={() => setFeature("all")}>Все особенности</button>
            {usedFeatures.map((item) => (
              <button type="button" aria-pressed={feature === item} className={feature === item ? "active" : ""} onClick={() => setFeature(item)} key={item}>
                {featureInfo[item].label}
              </button>
            ))}
          </div>
        </fieldset>

        {filtersActive ? <button type="button" className="brands-reset" onClick={resetFilters}>Сбросить фильтры</button> : null}
      </section>

      {grouped.length ? grouped.map(({ category: item, items }) => (
        <section className="brand-group" id={item} aria-labelledby={`${item}-title`} key={item}>
          <div className="brand-group-head">
            <div>
              <span className="section-no">{categoryInfo[item].eyebrow}</span>
              <h2 id={`${item}-title`}>{categoryInfo[item].label} <span>{items.length}</span></h2>
            </div>
          </div>
          <div className="brand-grid">
            {items.map((brand) => <BrandCard brand={brand} key={brand.name} />)}
          </div>
        </section>
      )) : (
        <div className="brands-empty" role="status">
          <h2>Ничего не найдено</h2>
          <p>Попробуйте изменить запрос или сбросить фильтры.</p>
          <button type="button" onClick={resetFilters}>Сбросить</button>
        </div>
      )}
    </div>
  );
}
