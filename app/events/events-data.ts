export type EventWinner = {
  place: 1 | 2 | 3;
  name: string;
  caption: string;
  image: string;
  alt: string;
};

export type CommunityEvent = {
  year: number;
  title: string;
  status: "Идёт сейчас" | "Завершён";
  participants?: number;
  summary: string;
  winners?: EventWinner[];
};

export const currentEvents: CommunityEvent[] = [
  {
    year: 2026,
    title: "Конкурс Rudollforum 2026",
    status: "Идёт сейчас",
    summary: "История конкурса продолжается: новые участницы, новые образы и новый финал. Подробности и актуальная информация публикуются в сообществе Rudollforum.",
  },
];

export const archivedEvents: CommunityEvent[] = [
  {
    year: 2025,
    title: "Конкурс красоты Rudollforum 2025",
    status: "Завершён",
    participants: 15,
    summary: "В конкурсе красоты Rudollforum 2025 приняли участие 15 конкурсанток, каждая со своим образом, стилем и подачей. По итогам конкурса первое место заняла Изабелла, второе — Людмурчик, третье — Эйлин. Эта тройка сформировала пьедестал конкурса 2025 года. Сегодня история продолжается: новые участницы, новые образы и новый конкурс. Архив 2025 года остаётся частью истории сообщества Rudollforum.",
    winners: [
      {
        place: 1,
        name: "Изабелла",
        caption: "Победитель конкурса красоты Rudollforum 2025",
        image: "/images/events/rudollforum-beauty-2025/isabella-first-place.webp",
        alt: "Изабелла — 1 место конкурса красоты Rudollforum 2025",
      },
      {
        place: 2,
        name: "Людмурчик",
        caption: "2 место · Rudollforum 2025",
        image: "/images/events/rudollforum-beauty-2025/lyudmurchik-second-place.webp",
        alt: "Людмурчик — 2 место конкурса красоты Rudollforum 2025",
      },
      {
        place: 3,
        name: "Эйлин",
        caption: "3 место · Rudollforum 2025",
        image: "/images/events/rudollforum-beauty-2025/eileen-third-place.webp",
        alt: "Эйлин — 3 место конкурса красоты Rudollforum 2025",
      },
    ],
  },
];
