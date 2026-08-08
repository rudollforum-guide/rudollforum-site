"use client";

import { useMemo, useState } from "react";
import { brands, groupInfo, tagDescriptions, tagLabels, type Brand, type BrandGroup, type BrandTag } from "./brands-data";
import { BrandIcon } from "./brand-icon";
import { publicPath } from "../site-config";

type Filter = "all" | "realistic" | BrandGroup | BrandTag;
type SortOrder = "az" | "za";

const groupOrder: BrandGroup[] = ["known", "additional", "anime", "furry", "robotics", "torsos", "plush"];

const filters: { value: Filter; label: string; kind: "all" | "derived" | "group" | "tag" }[] = [
  { value: "all", label: "Все бренды", kind: "all" },
  { value: "realistic", label: "Реалистичные", kind: "derived" },
  { value: "known", label: "Известные бренды", kind: "group" },
  { value: "additional", label: "Дополнительные бренды", kind: "group" },
  { value: "anime", label: "Аниме", kind: "tag" },
  { value: "furry", label: "Фурри", kind: "tag" },
  { value: "robotics", label: "AI и роботизированные системы", kind: "group" },
  { value: "torsos", label: "Торсы", kind: "group" },
  { value: "plush", label: "Плюшевые куклы", kind: "group" },
  { value: "fantasy", label: "Фэнтези-модели", kind: "tag" },
  { value: "heavy", label: "Модели 50+ кг", kind: "tag" },
  { value: "tall", label: "Модели 180+ см", kind: "tag" },
  { value: "games", label: "Игровые персонажи", kind: "tag" },
  { value: "styled", label: "Стилизованные модели", kind: "tag" },
  { value: "ai", label: "AI-функции", kind: "tag" },
];

function emblemSrc(brand: Brand) {
  const slug = brand.name
    .split(",")[0]
    .toLocaleLowerCase("en")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return publicPath(`/brands/generated/${brand.group}/${slug}.webp`);
}

function BrandCard({ brand }: { brand: Brand }) {
  const isHttp = brand.url?.startsWith("http://");
  const fallbackFeature = brand.group === "anime"
    ? "В каталоге встречаются отдельные аниме-модели."
    : brand.group === "robotics"
      ? "Для отдельных моделей или систем заявлены роботизированные функции, AI-функции или электронные опции."
      : brand.group === "torsos"
        ? "В каталоге представлены торсовые модели."
        : brand.group === "plush"
          ? "Бренд выпускает отдельные модели из мягких или текстильных материалов."
          : "Сведения об отдельных линейках пока не добавлены.";
  return (
    <article className="brand-card">
      <div className="brand-card-head">
        <BrandIcon
          name={brand.name}
          src={emblemSrc(brand)}
          ariaLabel={`Декоративный значок бренда ${brand.name}`}
        />
        <div>
          <span className="brand-category">{groupInfo[brand.group].label}</span>
          <h3>{brand.name}</h3>
        </div>
      </div>
      <div className="brand-tag-section">
        <span className="brand-tag-caption">Особенности отдельных моделей</span>
        {brand.tags?.length ? (
          <div className="brand-tags" aria-label={`Особенности отдельных моделей ${brand.name}`}>
            {brand.tags.map((tag) => (
              <span key={tag} title={tagDescriptions[tag]} aria-label={tagDescriptions[tag]}>{tagLabels[tag]}</span>
            ))}
          </div>
        ) : <div className="brand-tags brand-tags-empty"><span>Сведения дополняются</span></div>}
      </div>
      <details className="brand-details">
        <summary>Сведения и ссылка</summary>
        <div className="brand-details-body">
          <p>{brand.features ?? fallbackFeature}</p>
          {brand.note && <p className="brand-note">{brand.note}</p>}
          {isHttp && <p className="link-warning">Соединение может быть незащищённым</p>}
          {brand.url ? (
            <>
              <span className="external-label">Внешний сайт</span>
              <a className="link-button-primary brand-link" href={brand.url} target="_blank" rel="noopener noreferrer">
                Открыть официальный сайт
              </a>
              {brand.secondaryUrl && (
                <a className="secondary-external link-inline" href={brand.secondaryUrl} target="_blank" rel="noopener noreferrer">
                  Дополнительный официальный сайт
                </a>
              )}
            </>
          ) : (
            <span className="brand-link-missing">Официальная прямая ссылка не указана</span>
          )}
        </div>
      </details>
    </article>
  );
}

export function BrandCatalog() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("az");

  const activeFilter = filters.find((item) => item.value === filter) ?? filters[0];
  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ru");
    return brands
      .filter((brand) => {
        const matchesSearch = !normalizedQuery || brand.name.toLocaleLowerCase("ru").includes(normalizedQuery);
        if (!matchesSearch || filter === "all") return matchesSearch;
        if (activeFilter.kind === "derived") return brand.group === "known" || brand.group === "additional";
        if (activeFilter.kind === "group") return brand.group === filter;
        return brand.tags?.includes(filter as BrandTag) ?? false;
      })
      .sort((a, b) => {
        const result = a.name.localeCompare(b.name, "en", { sensitivity: "base" });
        return sortOrder === "az" ? result : -result;
      });
  }, [activeFilter.kind, filter, query, sortOrder]);

  const grouped = groupOrder
    .map((group) => ({ group, items: visible.filter((brand) => brand.group === group) }))
    .filter(({ items }) => items.length);

  const clearFilters = () => {
    setQuery("");
    setFilter("all");
    setSortOrder("az");
  };

  return (
    <div className="catalog">
      <section className="catalog-controls" aria-label="Поиск и фильтры каталога">
        <div className="catalog-search">
          <label htmlFor="brand-search">Поиск по названию бренда</label>
          <input
            id="brand-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Например, EXdoll"
            autoComplete="off"
          />
        </div>
        <div className="catalog-sort">
          <label htmlFor="brand-sort">Сортировка</label>
          <select id="brand-sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
            <option value="az">По алфавиту: А–Я</option>
            <option value="za">По алфавиту: Я–А</option>
          </select>
        </div>
        <div className="catalog-stat" aria-live="polite">
          <strong>{visible.length}</strong>
          <span>найдено из {brands.length}</span>
        </div>
        <div className="catalog-filters" aria-label="Категории каталога">
          {filters.map((item) => (
            <button
              key={`${item.kind}-${item.value}`}
              type="button"
              className={filter === item.value ? "active" : ""}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="catalog-actions">
          <button type="button" className="text-button" onClick={() => setFilter("all")}>Показать все бренды</button>
          <button type="button" className="text-button" onClick={clearFilters}>Очистить фильтры</button>
        </div>
      </section>

      {grouped.length ? (
        grouped.map(({ group, items }) => (
          <section className="brand-group" id={`brands-${group}`} key={group}>
            <div className="brand-group-head">
              <div>
                <span className="section-no">Категория · {items.length}</span>
                <h2>{groupInfo[group].label}</h2>
              </div>
              {groupInfo[group].description && <p>{groupInfo[group].description}</p>}
            </div>
            <div className="brand-grid">
              {items.map((brand) => <BrandCard key={brand.name} brand={brand} />)}
            </div>
          </section>
        ))
      ) : (
        <div className="catalog-empty" role="status">
          <h2>Бренды не найдены</h2>
          <p>Измените поисковый запрос или очистите выбранные фильтры.</p>
          <button type="button" className="button" onClick={clearFilters}>Очистить фильтры</button>
        </div>
      )}
    </div>
  );
}
