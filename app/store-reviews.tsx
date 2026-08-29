export type StoreReviewSource = {
  id: string;
  name: string;
  description: string;
  href: string;
  sponsored: boolean;
};

export const moonDollReviews: StoreReviewSource = {
  id: "moon-doll",
  name: "Moon-Doll",
  description: "Общие отзывы покупателей Moon-Doll опубликованы на отдельной странице магазина.",
  href: "https://www.moon-doll.com/pages/reviews",
  sponsored: true,
};

export const storeReviewSources: readonly StoreReviewSource[] = [moonDollReviews];

export function StoreReviewAction({ source, label }: { source: StoreReviewSource; label?: string }) {
  return <a className="link-button-secondary store-review-action" href={source.href} target="_blank" rel={source.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"}>
    {label ?? `Отзывы о ${source.name}`}
  </a>;
}

export function StoreReviewCommunityNote() {
  return <p className="store-reviews-community-note">
    Более подробные отзывы и личный опыт владельцев публикуются в закрытой группе Rudollforum. Информацию о входе в закрытую группу можно получить через <a href="https://t.me/rudollforum" target="_blank" rel="noopener noreferrer">Telegram-канал Rudollforum</a>.
  </p>;
}
