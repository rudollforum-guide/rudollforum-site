export type BrandGroup =
  | "known"
  | "additional"
  | "anime"
  | "furry"
  | "robotics"
  | "torsos"
  | "plush";

export type BrandTag =
  | "anime"
  | "fantasy"
  | "furry"
  | "ai"
  | "heavy"
  | "tall"
  | "games"
  | "styled";

export type Brand = {
  name: string;
  group: BrandGroup;
  url?: string;
  secondaryUrl?: string;
  features?: string;
  tags?: BrandTag[];
  note?: string;
};

export const groupInfo: Record<BrandGroup, { label: string; description?: string }> = {
  known: { label: "Известные бренды" },
  additional: { label: "Дополнительные бренды" },
  anime: {
    label: "Каталоги с аниме-моделями",
    description: "В разделе собраны бренды, в каталогах которых встречаются отдельные модели в аниме-стилистике.",
  },
  furry: {
    label: "Отдельные фурри-линейки",
    description: "Moonvale представлена как отдельная тематическая линейка SY Dolls, а не как характеристика всего каталога бренда.",
  },
  robotics: {
    label: "AI и роботизированные системы",
    description:
      "В этой категории представлены компании, работающие с робототехникой, AI-головами, андроидами или человекоподобными системами. Не все из них выпускают полноразмерные силиконовые или ТПЕ-куклы.",
  },
  torsos: { label: "Каталоги с торсовыми моделями" },
  plush: { label: "Мягкие и текстильные модели" },
};

export const tagLabels: Record<BrandTag, string> = {
  anime: "Аниме",
  fantasy: "Фэнтези",
  furry: "Фурри",
  ai: "AI",
  heavy: "50+ кг",
  tall: "180+ см",
  games: "Игровые образы",
  styled: "Стилизованные образы",
};

export const tagDescriptions: Record<BrandTag, string> = {
  anime: "В каталоге бренда встречаются отдельные аниме-модели",
  fantasy: "В линейке представлены отдельные модели в фэнтези-стилистике",
  furry: "У бренда есть отдельная фурри-линейка или модели с фурри-стилистикой",
  ai: "У отдельных моделей или систем заявлены AI-функции",
  heavy: "У бренда есть отдельные модели весом 50 кг и более",
  tall: "В линейке представлены отдельные модели ростом 180 см и выше",
  games: "Встречаются модели, вдохновлённые образами игровых персонажей",
  styled: "Встречаются модели, вдохновлённые стилизованными образами",
};

export const brands: Brand[] = [
  { name: "Aibei Doll", group: "known", url: "https://aibeigirls.com/", features: "В каталоге встречаются отдельные модели в фэнтези-стилистике, а также модели весом 50 кг и более.", tags: ["fantasy", "heavy"] },
  { name: "AngelKiss", group: "known", url: "https://angelkisslovedoll.com/" },
  { name: "ClimaxDoll", group: "known", url: "https://www.climax-doll.com/", features: "Среди моделей встречаются аниме- и фэнтези-варианты.", tags: ["anime", "fantasy"] },
  { name: "Doll Senior", group: "known", url: "https://www.doll-senior.com/", features: "В линейке представлены отдельные модели в фэнтези-стилистике.", tags: ["fantasy"] },
  { name: "Dolls Castle", group: "known", url: "https://www.dolls-castle.com/", features: "У бренда есть отдельная фурри-линейка и модели в фэнтези-стилистике.", tags: ["furry", "fantasy"] },
  { name: "Evasdoll", group: "known", url: "https://www.evasdoll.com/", features: "В линейке представлены отдельные модели ростом 180 см и выше.", tags: ["tall"] },
  { name: "EXdoll", group: "known", url: "https://www.exdollofficial.com/" },
  { name: "Fanreal Doll", group: "known", url: "https://fanrealart.com/" },
  { name: "Funwest Doll", group: "known", url: "https://www.funwestdoll.com/" },
  { name: "Galatea Doll", group: "known", url: "https://www.galateadoll.com/" },
  { name: "Game Lady", group: "known", url: "https://www.gamelady.net/", secondaryUrl: "https://game-lady-dolls.com/", features: "Встречаются модели, вдохновлённые образами игровых персонажей.", tags: ["games"] },
  { name: "Gynoid", group: "known", url: "https://gynoiddolls.com/" },
  { name: "Irontech Doll", group: "known", url: "https://www.irontechdoll.com/", features: "Для отдельных моделей заявлены роботизированные и AI-функции.", tags: ["ai"] },
  { name: "Jiusheng Doll", group: "known", url: "https://www.jiusheng-doll.com/" },
  { name: "Lacedoll / TMDoll", group: "known", url: "https://www.tmdoll.com" },
  { name: "Lilydoll", group: "known", url: "https://www.lilydoll.com/", features: "В каталоге есть отдельные модели весом 50 кг и более.", tags: ["heavy"] },
  { name: "Lusandy Doll", group: "known", url: "https://www.lusandydoll.com/" },
  { name: "MMX Doll", group: "known", url: "https://mmxdoll.com/", features: "В каталоге встречаются модели, визуально стилизованные под образы актрис.", tags: ["styled"] },
  { name: "OrangeIn Doll", group: "known", url: "https://www.orangeindoll.com/" },
  { name: "Piper Doll", group: "known", url: "https://piperdoll.com/", features: "Встречаются модели, вдохновлённые мульт- и стилизованными образами.", tags: ["styled"] },
  { name: "RealDoll", group: "known", url: "https://www.realdoll.com/" },
  { name: "Real Lady Doll", group: "known", url: "https://www.real-lady.com/" },
  { name: "Ridmii Doll", group: "known", url: "https://ridmii.com/", features: "У отдельных моделей или систем заявлены AI-функции.", tags: ["ai"] },
  { name: "Sanhui Doll", group: "known", url: "https://sanhuiofficial.com/" },
  { name: "SE Doll", group: "known", url: "https://sedoll.com/", features: "В линейке представлены отдельные модели в фэнтези-стилистике.", tags: ["fantasy"] },
  { name: "SHEDOLL", group: "known", url: "https://shedoll.com/", features: "В линейке представлены отдельные модели в фэнтези-стилистике.", tags: ["fantasy"] },
  { name: "Sigafun", group: "known", url: "https://www.sigafun.com/", features: "У отдельных моделей или систем заявлены AI-функции.", tags: ["ai"] },
  { name: "Sino Doll", group: "known", url: "https://www.sino-doll.com/" },
  { name: "SM Doll", group: "known", url: "https://www.sm-doll.com/" },
  { name: "Starpery Doll", group: "known", url: "https://www.starpery.com/", features: "В каталоге есть отдельные модели весом 50 кг и более.", tags: ["heavy"] },
  { name: "SY Doll", group: "known", url: "https://www.sydolls.com/", features: "В каталоге встречаются отдельные модели в фэнтези-стилистике, а также модели весом 50 кг и более.", tags: ["fantasy", "heavy"] },
  { name: "TAYU Doll", group: "known", url: "https://www.tayu-doll.com/" },
  { name: "TOP-CYDOLL / TopCY", group: "known", url: "https://www.topcydoll.com/", features: "В каталоге встречаются модели, визуально стилизованные под образы актрис.", tags: ["styled"] },
  { name: "Top Fire Doll", group: "known", url: "https://topfiredoll.com/", features: "Среди моделей встречаются стилизованные и отдельные фэнтези-варианты.", tags: ["styled", "fantasy"] },
  { name: "WM Doll", group: "known", url: "https://www.wmdolls.com/", features: "В каталоге есть отдельные аниме-модели и модели весом 50 кг и более.", tags: ["anime", "heavy"] },
  { name: "XT Dolls", group: "known", url: "https://www.xtdoll.com/" },
  { name: "Zelex", group: "known", url: "https://www.zelexdoll.com/" },

  { name: "6Ye Doll", group: "additional", url: "https://www.6yedollglobal.com/" },
  { name: "AF Doll", group: "additional", url: "https://www.afdoll.net/" },
  { name: "Doll Forever", group: "additional", url: "https://www.doll-forever.com/" },
  { name: "Fire Doll", group: "additional", url: "http://www.firedoll.cn/" },
  { name: "Firefly Diary", group: "additional", url: "https://fireflydoll.com" },
  { name: "FJ Doll", group: "additional", url: "https://fjdoll.com/" },
  { name: "FU Doll / Fudoll", group: "additional", url: "https://fu-doll.com/", features: "Среди моделей встречаются аниме- и фэнтези-варианты.", tags: ["fantasy", "anime"] },
  { name: "HR Doll", group: "additional", url: "https://www.hrdoll.com/", features: "В каталоге есть отдельные модели весом 50 кг и более.", tags: ["heavy"] },
  { name: "iDo Doll", group: "additional", url: "https://www.idodoll.com/" },
  { name: "IL Doll", group: "additional", url: "https://www.ildoll.com/" },
  { name: "Jarliet Doll", group: "additional", url: "https://jarliet.com/" },
  { name: "JK Dolls", group: "additional", url: "https://www.jkdolls.com/" },
  { name: "JX Doll", group: "additional", url: "https://www.jxdoll.com/" },
  { name: "JY Doll", group: "additional", url: "https://jydoll.com/", features: "Встречаются модели, вдохновлённые образами игровых персонажей.", tags: ["games"] },
  { name: "LORIBEAR / GK Doll", group: "additional", url: "https://gkdoll.com/" },
  { name: "Lushdoll", group: "additional", url: "https://www.lushdoll.com/" },
  { name: "MD Doll", group: "additional", url: "https://mddoll.com/", features: "В линейке представлены отдельные модели в фэнтези-стилистике.", tags: ["fantasy"] },
  { name: "MLW Doll", group: "additional", url: "https://mlwdoll.com/" },
  { name: "ORdoll", group: "additional", url: "https://www.ordoll.com/" },
  { name: "Rainstorm Doll", group: "additional", url: "https://www.rainstormdoll.com/" },
  { name: "Rosretty Doll", group: "additional", url: "https://rosretty.com/", features: "Среди моделей встречаются аниме- и фэнтези-варианты.", tags: ["fantasy", "anime"] },
  { name: "XY Doll", group: "additional", url: "https://xydollshop.com/" },
  { name: "XYcolo Doll", group: "additional", url: "http://xycolodoll.com/" },
  { name: "Yearndoll", group: "additional", features: "В каталоге встречаются отдельные аниме-модели.", tags: ["anime"], note: "Информация и доступность моделей уточняются через дилеров." },
  { name: "YL Doll", group: "additional", url: "https://www.yldoll.com/" },
  { name: "Yuedoll", group: "additional", url: "https://yuedoll.com" },

  { name: "AheadForm", group: "robotics", url: "https://www.aheadform.com/" },
  { name: "EX Robots", group: "robotics", note: "Официальный сайт временно недоступен." },
  { name: "Noetix Robotics", group: "robotics", url: "https://noetixrobotics.com/en" },
  { name: "Realbotix", group: "robotics", url: "https://www.realbotix.com/" },
  { name: "UBTECH Robotics", group: "robotics", url: "https://www.ubtrobot.com/en" },

  { name: "Aotume Doll", group: "anime", url: "https://www.aotumedoll.us/", tags: ["anime"] },
  { name: "BC Doll", group: "anime", url: "https://bcdolls.com/", tags: ["anime"] },
  { name: "Butterfly Doll", group: "anime", url: "https://butterflydoll.com.cn/", tags: ["anime"] },
  { name: "Croissant Doll", group: "anime", url: "https://croissantdoll.com", tags: ["anime"] },
  { name: "Elsa Babe", group: "anime", url: "https://elsababedoll.com/", features: "Среди моделей встречаются аниме- и фэнтези-варианты, а также отдельная фурри-линейка.", tags: ["anime", "furry", "fantasy"] },
  { name: "Irokebijin", group: "anime", url: "https://www.irokebijinshop.com/", tags: ["anime"] },
  { name: "MozuDoll", group: "anime", url: "https://mozudollna.com/", tags: ["anime"] },
  { name: "MRL Doll", group: "anime", url: "https://www.mrlsexdoll.com/", tags: ["anime"] },

  { name: "Moonvale, линейка SY Dolls", group: "furry", url: "https://sydolls.com/collections/moonvale-doll", features: "Moonvale — отдельная тематическая фурри-линейка SY Dolls.", tags: ["furry"] },

  { name: "Erovenus", group: "torsos", url: "https://www.erovenus.com/" },
  { name: "JigglyJoy", group: "torsos", url: "https://jigglyjoydoll.com/", features: "В каталоге представлены торсовые модели; у отдельных моделей или систем заявлены AI-функции.", tags: ["ai"] },
  { name: "Tantaly", group: "torsos", url: "https://www.tantaly.com/" },
  { name: "Yeloly", group: "torsos", url: "https://www.yeloly.com/" },

  { name: "Teddy Babes", group: "plush", url: "https://www.teddy-babes.com/" },
  { name: "Valentina Girls", group: "plush", url: "https://valentinagirls.com/" },
];

export const brandExamples = [
  "Aibei Doll",
  "EXdoll",
  "Game Lady",
  "Irontech Doll",
  "WM Doll",
  "Moonvale",
];
