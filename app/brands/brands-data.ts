export type BrandCategory = "known" | "additional" | "ai-robotics" | "anime" | "furry" | "torsos" | "plush";
export type BrandFeature = "anime" | "fantasy" | "furry" | "ai" | "robotics" | "heavy" | "tall" | "games" | "cartoons" | "actresses" | "torsos";

export type Brand = {
  name: string;
  aliases?: string[];
  category: BrandCategory;
  url?: string;
  secondaryUrl?: string;
  icon: string;
  features?: BrandFeature[];
  note?: string;
};

export const categoryOrder: BrandCategory[] = ["known", "additional", "ai-robotics", "anime", "furry", "torsos", "plush"];
export const categoryInfo: Record<BrandCategory, { label: string; shortLabel: string; eyebrow: string }> = {
  known: { label: "Известные бренды", shortLabel: "Известные", eyebrow: "Основной каталог" },
  additional: { label: "Дополнительные бренды", shortLabel: "Дополнительные", eyebrow: "Расширенный каталог" },
  "ai-robotics": { label: "AI / роботизированные системы", shortLabel: "AI / роботизация", eyebrow: "Технологические компании" },
  anime: { label: "Аниме бренды", shortLabel: "Аниме", eyebrow: "Специализированные модели" },
  furry: { label: "Фурри", shortLabel: "Фурри", eyebrow: "Тематические линейки" },
  torsos: { label: "Торсы", shortLabel: "Торсы", eyebrow: "Компактные модели" },
  plush: { label: "Плюшевые куклы", shortLabel: "Плюшевые", eyebrow: "Мягкие модели" },
};

export const featureInfo: Record<BrandFeature, { label: string; className: string; searchTerms?: string[] }> = {
  anime: { label: "Аниме", className: "anime" },
  fantasy: { label: "Фэнтези", className: "fantasy" },
  furry: { label: "Фурри", className: "furry" },
  ai: { label: "AI", className: "ai" },
  robotics: { label: "Роботизация", className: "robotics" },
  heavy: { label: "50+ кг", className: "heavy" },
  tall: { label: "180+ см", className: "tall" },
  games: { label: "Игровые персонажи", className: "games" },
  cartoons: { label: "Мультобразы", className: "cartoons" },
  actresses: { label: "Стилизация под актрис", className: "actresses", searchTerms: ["актрисы", "актриса"] },
  torsos: { label: "Торсы", className: "torsos" },
};

const icon = (filename: string) => `/images/brands/icons/${filename}`;

export const brands: Brand[] = [
  { name: "Aibei Doll", category: "known", url: "https://aibeigirls.com/", icon: icon("aibei-doll.png"), features: ["fantasy", "heavy"] },
  { name: "AngelKiss", category: "known", url: "https://angelkisslovedoll.com/", icon: icon("angelkiss.png") },
  { name: "Bezlya", category: "known", url: "https://bezlya.com/", icon: icon("bezlya.png") },
  { name: "ClimaxDoll", category: "known", url: "https://www.climax-doll.com/", icon: icon("climaxdoll.png"), features: ["anime", "fantasy"] },
  { name: "Doll Senior", category: "known", url: "https://www.doll-senior.com/", icon: icon("doll-senior.png"), features: ["fantasy"] },
  { name: "Dolls Castle", category: "known", url: "https://www.dolls-castle.com/", icon: icon("dolls-castle.png"), features: ["furry", "fantasy"] },
  { name: "Evasdoll", category: "known", url: "https://www.evasdoll.com/", icon: icon("evasdoll.png"), features: ["tall"] },
  { name: "EXdoll", category: "known", url: "https://www.exdollofficial.com/", icon: icon("exdoll.png") },
  { name: "Fanreal Doll", category: "known", url: "https://fanrealart.com/", icon: icon("fanreal-doll.png") },
  { name: "Funwest Doll", category: "known", url: "https://www.funwestdoll.com/", icon: icon("funwest-doll.png") },
  { name: "Galatea Doll", category: "known", url: "https://www.galateadoll.com/", icon: icon("galatea-doll.png") },
  { name: "Game Lady", category: "known", url: "https://www.gamelady.net/", secondaryUrl: "https://game-lady-dolls.com/", icon: icon("game-lady.png"), features: ["games"] },
  { name: "Gynoid", category: "known", url: "https://gynoiddolls.com/", icon: icon("gynoid.png") },
  { name: "Irontech Doll", category: "known", url: "https://www.irontechdoll.com/", icon: icon("irontech-doll.png"), features: ["robotics", "ai"] },
  { name: "Jiusheng Doll", category: "known", url: "https://www.jiusheng-doll.com/", icon: icon("jiusheng-doll.png") },
  { name: "Lacedoll / TMDoll", aliases: ["Lacedoll", "TMDoll"], category: "known", url: "https://www.tmdoll.com", icon: icon("lacedoll-tmdoll.png") },
  { name: "Lilydoll", category: "known", url: "https://www.lilydoll.com/", icon: icon("lilydoll.png"), features: ["heavy"] },
  { name: "Lusandy Doll", category: "known", url: "https://www.lusandydoll.com/", icon: icon("lusandy-doll.png") },
  { name: "MMX Doll", category: "known", url: "https://mmxdoll.com/", icon: icon("mmx-doll.png"), features: ["actresses"] },
  { name: "OrangeIn Doll", category: "known", url: "https://www.orangeindoll.com/", icon: icon("orangein-doll.png") },
  { name: "Piper Doll", category: "known", url: "https://piperdoll.com/", icon: icon("piper-doll.png"), features: ["cartoons"] },
  { name: "RealDoll", category: "known", url: "https://www.realdoll.com/", icon: icon("realdoll.png") },
  { name: "Real Lady Doll", category: "known", url: "https://www.real-lady.com/", icon: icon("real-lady-doll.png") },
  { name: "Ridmii Doll", category: "known", url: "https://ridmii.com/", icon: icon("ridmii-doll.png"), features: ["ai"] },
  { name: "Sanhui Doll", category: "known", url: "https://sanhuiofficial.com/", icon: icon("sanhui-doll.png") },
  { name: "SE Doll", category: "known", url: "https://sedoll.com/", icon: icon("se-doll.png"), features: ["fantasy", "ai"] },
  { name: "SHEDOLL", category: "known", url: "https://shedoll.com/", icon: icon("shedoll.png"), features: ["fantasy"] },
  { name: "Sigafun", category: "known", url: "https://www.sigafun.com/", icon: icon("sigafun.png"), features: ["ai"] },
  { name: "Sino Doll", category: "known", url: "https://www.sino-doll.com/", icon: icon("sino-doll.png") },
  { name: "SM Doll", category: "known", url: "https://www.sm-doll.com/", icon: icon("sm-doll.png") },
  { name: "Starpery Doll", category: "known", url: "https://www.starpery.com/", icon: icon("starpery-doll.png"), features: ["heavy"] },
  { name: "SY Doll", aliases: ["SY Dolls"], category: "known", url: "https://www.sydolls.com/", icon: icon("sy-doll.png"), features: ["fantasy", "heavy"] },
  { name: "TAYU Doll", category: "known", url: "https://www.tayu-doll.com/", icon: icon("tayu-doll.png") },
  { name: "TOP-CYDOLL / TopCY", aliases: ["TOP-CYDOLL", "TopCY"], category: "known", url: "https://www.topcydoll.com/", icon: icon("top-cydoll-topcy.png"), features: ["actresses"] },
  { name: "Top Fire Doll", category: "known", url: "https://topfiredoll.com/", icon: icon("top-fire-doll.png"), features: ["actresses", "fantasy"] },
  { name: "WM Doll", category: "known", url: "https://www.wmdolls.com/", icon: icon("wm-doll.png"), features: ["anime", "heavy"] },
  { name: "XT Dolls", category: "known", url: "https://www.xtdoll.com/", icon: icon("xt-dolls.png") },
  { name: "Zelex", category: "known", url: "https://www.zelexdoll.com/", icon: icon("zelex.png") },

  { name: "6Ye Doll", category: "additional", url: "https://www.6yedollglobal.com/", icon: icon("6ye-doll.png") },
  { name: "AF Doll", category: "additional", url: "https://www.afdoll.net/", icon: icon("af-doll.png") },
  { name: "Doll Forever", category: "additional", url: "https://www.doll-forever.com/", icon: icon("doll-forever.png") },
  { name: "Fire Doll", category: "additional", url: "http://www.firedoll.cn/", icon: icon("fire-doll.png") },
  { name: "Firefly Diary", category: "additional", url: "https://fireflydoll.com", icon: icon("firefly-diary.png") },
  { name: "FJ Doll", category: "additional", url: "https://fjdoll.com/", icon: icon("fj-doll.png") },
  { name: "FU Doll / Fudoll", aliases: ["FU Doll", "Fudoll"], category: "additional", url: "https://fu-doll.com/", icon: icon("fu-doll-fudoll.png"), features: ["fantasy", "anime"] },
  { name: "HR Doll", category: "additional", url: "https://www.hrdoll.com/", icon: icon("hr-doll.png"), features: ["heavy"] },
  { name: "iDo Doll", category: "additional", url: "https://www.idodoll.com/", icon: icon("ido-doll.png") },
  { name: "IL Doll", category: "additional", url: "https://www.ildoll.com/", icon: icon("il-doll.png") },
  { name: "Jarliet Doll", category: "additional", url: "https://jarliet.com/", icon: icon("jarliet-doll.png") },
  { name: "JK Dolls", category: "additional", url: "https://www.jkdolls.com/", icon: icon("jk-dolls.png") },
  { name: "JX Doll", category: "additional", url: "https://www.jxdoll.com/", icon: icon("jx-doll.png") },
  { name: "JY Doll", category: "additional", url: "https://jydoll.com/", icon: icon("jy-doll.png"), features: ["games"] },
  { name: "LORIBEAR / GK Doll", aliases: ["LORIBEAR", "GK Doll"], category: "additional", url: "https://gkdoll.com/", icon: icon("loribear-gk-doll.png") },
  { name: "Lushdoll", category: "additional", url: "https://www.lushdoll.com/", icon: icon("lushdoll.png") },
  { name: "MD Doll", category: "additional", url: "https://mddoll.com/", icon: icon("md-doll.png"), features: ["fantasy"] },
  { name: "MLW Doll", category: "additional", url: "https://mlwdoll.com/", icon: icon("mlw-doll.png") },
  { name: "ORdoll", category: "additional", url: "https://www.ordoll.com/", icon: icon("ordoll.png") },
  { name: "QXW DOLL", category: "additional", icon: icon("qxw-doll.png"), features: ["cartoons"], note: "Информация доступна через дилеров" },
  { name: "Rainstorm Doll", category: "additional", url: "https://www.rainstormdoll.com/", icon: icon("rainstorm-doll.png") },
  { name: "Rosretty Doll", category: "additional", url: "https://rosretty.com/", icon: icon("rosretty-doll.png"), features: ["fantasy", "anime"] },
  { name: "Sankaku Doll / Tenbudou", aliases: ["Sankaku Doll", "Tenbudou"], category: "additional", url: "https://www.sankakudoll.jp/collections/tenbudou-doll", icon: icon("sankaku-doll-tenbudou.png") },
  { name: "XY Doll", category: "additional", url: "https://xydollshop.com/", icon: icon("xy-doll.png") },
  { name: "XYcolo Doll", category: "additional", url: "http://xycolodoll.com/", icon: icon("xycolo-doll.png") },
  { name: "Yearndoll", category: "additional", icon: icon("yearndoll.png"), features: ["anime"], note: "Информация доступна через дилеров" },
  { name: "YL Doll", category: "additional", url: "https://www.yldoll.com/", icon: icon("yl-doll.png") },
  { name: "Yuedoll", category: "additional", url: "https://yuedoll.com", icon: icon("yuedoll.png") },

  { name: "AheadForm", category: "ai-robotics", url: "https://www.aheadform.com/", icon: icon("aheadform.png"), features: ["robotics"] },
  { name: "EX Robots", category: "ai-robotics", url: "https://www.exrobots.net/", icon: icon("ex-robots.png"), features: ["robotics"] },
  { name: "Noetix Robotics", category: "ai-robotics", url: "https://noetixrobotics.com/en", icon: icon("noetix-robotics.png"), features: ["robotics"] },
  { name: "Realbotix", category: "ai-robotics", url: "https://realbotix.ai/", icon: icon("realbotix.png"), features: ["robotics", "ai"] },
  { name: "UBTECH Robotics", category: "ai-robotics", url: "https://www.ubtrobot.com/en", icon: icon("ubtech-robotics.png"), features: ["robotics"] },

  { name: "Aotume Doll", category: "anime", url: "https://www.aotumedoll.us/", icon: icon("aotume-doll.png"), features: ["anime"] },
  { name: "BC Doll", category: "anime", url: "https://bcdolls.com", icon: icon("bc-doll.png"), features: ["anime"] },
  { name: "Butterfly Doll", category: "anime", url: "https://butterflydoll.com.cn/", icon: icon("butterfly-doll.png"), features: ["anime"] },
  { name: "Croissant Doll", category: "anime", url: "https://croissantdoll.com", icon: icon("croissant-doll.png"), features: ["anime"] },
  { name: "Elsa Babe", category: "anime", url: "https://elsababedoll.com/", icon: icon("elsa-babe.png"), features: ["anime", "furry", "fantasy"] },
  { name: "Irokebijin", category: "anime", url: "https://www.irokebijinshop.com/", icon: icon("irokebijin.png"), features: ["anime"] },
  { name: "KiraDols", category: "anime", url: "https://www.kiradols.com/", icon: icon("kiradols.png"), features: ["anime"] },
  { name: "MozuDoll", category: "anime", url: "https://mozudoll.com/", secondaryUrl: "https://mozudollna.com/", icon: icon("mozudoll.png"), features: ["anime"] },
  { name: "MRL Doll", category: "anime", url: "https://www.mrlsexdoll.com/", icon: icon("mrl-doll.png"), features: ["anime"] },
  { name: "MissterVerse", category: "anime", url: "https://www.missterverse.com/", icon: icon("missterverse.png"), features: ["anime"] },

  { name: "Moonvale (SY Dolls)", aliases: ["Moonvale", "SY Dolls"], category: "furry", url: "https://sydolls.com/collections/moonvale-doll", icon: icon("moonvale-sy-dolls.png"), features: ["furry"] },
  { name: "Erovenus", category: "torsos", url: "https://www.erovenus.com/", icon: icon("erovenus.png"), features: ["torsos"] },
  { name: "JigglyJoy", category: "torsos", url: "https://jigglyjoydoll.com/", icon: icon("jigglyjoy.png"), features: ["torsos", "ai"] },
  { name: "Tantaly", category: "torsos", url: "https://www.tantaly.com/", icon: icon("tantaly.png"), features: ["torsos"] },
  { name: "Yeloly", category: "torsos", url: "https://www.yeloly.com/", icon: icon("yeloly.png"), features: ["torsos"] },
  { name: "Teddy Babes", category: "plush", url: "https://www.teddy-babes.com/", icon: icon("teddy-babes.png") },
  { name: "Valentina Girls", category: "plush", url: "https://valentinagirls.com/", icon: icon("valentina-girls.png") },
];

export const brandExamples = ["Aibei Doll", "EXdoll", "Game Lady", "Irontech Doll", "WM Doll", "Moonvale"];
