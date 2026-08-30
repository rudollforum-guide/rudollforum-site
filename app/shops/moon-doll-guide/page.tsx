import type { Metadata } from "next";
import Link from "next/link";
import { moonDollReviews, StoreReviewCommunityNote } from "../../store-reviews";
import { JsonLd, MetaLine, SiteShell } from "../../site";
import { OPEN_GRAPH_IMAGE, publicPath, siteUrl } from "../../site-config";

export const metadata: Metadata = {
  title: "Как купить куклу на Moon-Doll — оформление, оплата и доставка",
  description: "Пошаговая инструкция по заказу на Moon-Doll: регистрация, выбор модели, комплектация, промокод RUDOLLFORUM, оплата, производство, доставка и гарантии.",
  alternates: { canonical: siteUrl("/shops/moon-doll-guide") },
  openGraph: {
    title: "Как купить куклу на Moon-Doll — оформление, оплата и доставка",
    description: "Нейтральная пошаговая инструкция Rudollforum по оформлению и проверке заказа.",
    url: siteUrl("/shops/moon-doll-guide"),
    type: "article",
    images: [OPEN_GRAPH_IMAGE],
  },
};

const steps = [
  {
    title: "Создание учётной записи",
    text: ["Перед оформлением заказа рекомендуется зарегистрироваться и войти в учётную запись. Указывайте действующий адрес электронной почты, имя, телефон и адрес доставки.", "Проверьте правильность данных до перехода к оплате: они будут использоваться для связи и оформления доставки."],
  },
  {
    title: "Проверка модели и комплектации",
    text: ["Сверяйте карточку модели с письменным подтверждением заказа. Не полагайтесь только на главное изображение товара."],
    items: ["Название модели", "Рост", "Фактический вес", "Материал", "Оттенок", "Тип скелета", "Голова", "Глаза", "Парик", "Дополнительные опции", "Подарки", "Количество упаковочных мест"],
    note: "Особое внимание уделяйте параметру Weight. Вес влияет на переноску, очистку, хранение и общую удобность владения.",
    extra: "Если нужной модели нет в каталоге, возможность заказа можно уточнить у менеджера Moon-Doll.",
  },
  {
    title: "Уточнение деталей у менеджера",
    text: ["Контактные данные приведены как справочная информация. Перед обращением желательно проверить их актуальность на официальном сайте Moon-Doll."],
  },
  {
    title: "Корзина, язык и валюта",
    text: ["До перехода через Buy Now выберите удобный язык и отображаемую валюту, войдите в аккаунт и повторно проверьте все опции.", "Сверьте итоговую стоимость в корзине с подтверждением магазина. Цена в выбранной валюте не обязательно является окончательной до получения подтверждения."],
    items: ["Выбранная модель и количество", "Все дополнительные опции", "Язык и отображаемая валюта", "Статус входа в аккаунт", "Промежуточная и итоговая стоимость"],
  },
  {
    title: "Промокод Rudollforum",
    text: ["Промокод можно ввести в соответствующее поле при оформлении заказа. Перед оплатой убедитесь, что скидка действительно применилась к итоговой стоимости.", "Средства, связанные с использованием промокода, направляются на конкурсы и активности сообщества Rudollforum.", "По текущей информации промокод может предоставлять скидку 5%. Актуальный размер скидки необходимо проверить перед оплатой."],
  },
  {
    title: "Оформление заказа",
    text: ["Процесс обычно разделён на ввод данных, выбор доставки и оплату. На каждом экране проверяйте сведения повторно."],
  },
  {
    title: "Предоплата и подтверждение",
    text: ["По информации руководства, заказ может требовать полной предоплаты. Перед переводом средств проверьте сумму, получателя, назначение платежа и соответствие реквизитов официальному инвойсу."],
    note: "Не переводите деньги по реквизитам, полученным от неизвестного аккаунта или третьего лица, не подтвердив их у официального менеджера.",
  },
  {
    title: "Изменение или отмена заказа",
    text: ["Условия изменения комплектации и отмены зависят от стадии исполнения заказа. После запуска модели в производство возможности изменения или возврата могут быть ограничены."],
  },
  {
    title: "Производство и заводские фотографии",
    text: ["После изготовления магазин может предоставить фотографии готовой модели перед отправкой. Внимательно сравните их с заказанной конфигурацией.", "Если обнаружено несоответствие, сообщите о нём до подтверждения отправки."],
    items: ["Голова", "Тело", "Оттенок", "Глаза", "Парик", "Выбранные опции", "Внешние дефекты", "Соответствие комплектации"],
  },
  {
    title: "Срок изготовления",
    text: ["Срок производства зависит от бренда, сложности модели, выбранных опций и загруженности фабрики.", "В руководстве указан ориентир около 2–3 недель, однако фактический срок необходимо уточнять для конкретного заказа."],
  },
  {
    title: "Доставка",
    text: ["Маршрут и срок доставки зависят от страны, региона, перевозчика, таможенного оформления и текущей логистической ситуации.", "В руководстве описана схема доставки через Москву с последующей передачей местной транспортной компании. Эта схема и сроки могут изменяться.", "В предыдущей версии инструкции в качестве ориентира указывался срок 2–3 месяца до Москвы. Перед оплатой запросите актуальный прогноз."],
  },
  {
    title: "Что входит в цену",
    text: ["Уточните у менеджера, включены ли в итоговую стоимость международная перевозка, таможенные расходы и доставка по стране получателя."],
    items: ["Входит ли международная доставка", "Входит ли таможенная пошлина", "Оплачивается ли доставка по России отдельно", "Есть ли страхование", "Кто оплачивает повторную доставку", "Сколько упаковочных мест"],
  },
  {
    title: "Получение заказа",
    text: ["После получения снимайте распаковку одним непрерывным видео. Сохраните коробку и упаковочные материалы до окончания проверки."],
  },
  {
    title: "Гарантийные случаи",
    text: ["Решение зависит от обстоятельств и действующих условий продавца. Все повреждения фиксируйте фотографиями и видео сразу после обнаружения."],
    items: ["Потеря груза", "Повреждение при перевозке", "Производственный дефект", "Несоответствие комплектации", "Частичная компенсация", "Запасные детали", "Ремонт"],
  },
  {
    title: "Товары с заявленными дефектами",
    text: ["Перед покупкой внимательно изучите описание дефекта, фотографии, комплектацию и ограничения гарантии.", "Условия для дефектных товаров могут отличаться от условий для стандартных заказов."],
  },
];

const faq = [
  ["Нужно ли регистрироваться перед заказом?", "Регистрация рекомендуется: она помогает сохранить данные заказа и переписку. Актуальные требования проверьте на сайте магазина."],
  ["Где проверить фактический вес?", "Ищите параметр Weight в карточке модели и подтверждайте массу выбранной комплектации у менеджера."],
  ["Можно ли заказать модель, которой нет в каталоге?", "Возможность индивидуального заказа можно уточнить у менеджера, но она не гарантируется."],
  ["Где вводить промокод RUDOLLFORUM?", "В соответствующем поле при оформлении заказа, если оно доступно для выбранной корзины."],
  ["Как проверить, что скидка применилась?", "Сравните итоговую сумму до и после ввода кода и получите подтверждение магазина до оплаты."],
  ["Можно ли изменить комплектацию?", "Это зависит от стадии заказа. После начала производства возможности изменения могут быть ограничены."],
  ["Когда начинается производство?", "Точную дату запуска следует подтвердить у менеджера после оплаты и согласования комплектации."],
  ["Предоставляются ли заводские фотографии?", "Магазин может предоставить фотографии готовой модели, но это нужно заранее уточнить для конкретного заказа."],
  ["Что входит в стоимость доставки?", "Состав расходов зависит от маршрута. Отдельно уточните перевозку, пошлины, страхование и доставку по стране."],
  ["Как действовать при задержке платежа?", "Свяжитесь со службой безопасности банка и менеджером магазина. Не повторяйте платёж несколько раз без подтверждения его статуса."],
  ["Как проверить заказ после получения?", "Снимайте непрерывное видео распаковки и используйте отдельный чек-лист Rudollforum."],
  ["Чем отличаются дефектные изделия?", "У них заранее заявлены недостатки; комплектация, цена и гарантийные условия могут отличаться от стандартного заказа."],
];

function MoonGuideActionContent({icon,title}:{icon:string;title:string}) {
  return <>
    <img className="moon-guide-action-icon" src={publicPath(`/images/shops/moon-doll-guide/actions/${icon}.png`)} width={44} height={44} alt="" aria-hidden="true" />
    <span>{title}</span>
  </>;
}

export default function MoonDollGuidePage() {
  const canonical = siteUrl("/shops/moon-doll-guide/");
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Главная","item":siteUrl("/")},
    {"@type":"ListItem","position":2,"name":"Покупка","item":siteUrl("/where-to-buy/")},
    {"@type":"ListItem","position":3,"name":"Как оформить заказ на Moon-Doll","item":canonical},
  ]};
  const article = {"@context":"https://schema.org","@type":"Article",headline:"Как оформить заказ на Moon-Doll",description:metadata.description,inLanguage:"ru-RU",datePublished:"2026-07-24",dateModified:"2026-07-24",author:{"@type":"Organization","name":"Редакция Rudollforum"},publisher:{"@type":"Organization","name":"Rudollforum"},mainEntityOfPage:canonical};
  const howTo = {"@context":"https://schema.org","@type":"HowTo",name:"Как оформить заказ на Moon-Doll",description:metadata.description,step:steps.map((step,index)=>({"@type":"HowToStep",position:index+1,name:step.title,text:step.text.join(" ")}))};

  return <SiteShell>
    <JsonLd data={breadcrumb}/><JsonLd data={article}/><JsonLd data={howTo}/>
    <article className="article moon-guide">
      <nav className="breadcrumbs"><Link href="/">Главная</Link><span aria-hidden="true">·</span><Link href="/where-to-buy">Покупка</Link><span aria-hidden="true">·</span><span>Moon-Doll</span></nav>
      <header className="article-hero">
        <div className="article-emblem-heading moon-guide-heading">
          <img className="article-hero-emblem" src={publicPath("/images/shops/moon-doll-guide/moon-doll-guide-brand-emblem.png")} width={128} height={128} alt="" aria-hidden="true" />
          <span className="eyebrow">Внешний магазин · независимая инструкция</span>
          <h1>Как оформить заказ на Moon-Doll</h1>
          <p>Moon-Doll принимает заказы с <strong className="moon-guide-russia-accent">доставкой в Россию</strong>. Ниже приведён общий порядок оформления заказа на сайте Moon-Doll. Инструкция помогает понять последовательность действий, однако перед оплатой необходимо повторно проверить выбранную модель, комплектацию, итоговую стоимость и актуальные условия магазина.</p>
        </div>
      </header>
      <aside className="moon-disclaimer"><strong>18+ · Справочный материал для совершеннолетних</strong><p>Условия оплаты, скидок, производства, доставки, возврата и связи с магазином могут меняться. Перед оформлением заказа проверяйте актуальные сведения на сайте Moon-Doll и уточняйте детали у менеджера.</p><p>Rudollforum не принимает оплату, не оформляет заказ от имени покупателя и не является стороной сделки.</p></aside>

      <div className="moon-timeline">
        {steps.map((step,index)=><section className="moon-step" key={step.title}>
          <div className="moon-step-marker">
            <span>{String(index+1).padStart(2,"0")}</span>
            <img className="moon-step-icon" src={publicPath(`/images/shops/moon-doll-guide/steps/${String(index+1).padStart(2,"0")}-step-icon.png`)} width={58} height={58} alt="" aria-hidden="true" />
          </div>
          <div className="moon-step-card"><h2>{step.title}</h2>{step.text.map(text=><p key={text}>{text}</p>)}
            {step.items&&<ul className="check-list">{step.items.map(item=><li key={item}>{item}</li>)}</ul>}
            {step.note&&<aside className="step-warning">{step.note}</aside>}
            {step.extra&&<p className="step-extra">{step.extra}</p>}
            {index===2&&<div className="contact-card"><span>Справочные контакты</span><a className="contact-card-row" href="https://t.me/jackymoondoll" target="_blank" rel="noopener noreferrer sponsored"><img className="contact-card-icon" src={publicPath("/images/shops/moon-doll-guide/contacts/telegram-contact-icon.png")} width={38} height={38} alt="" aria-hidden="true"/><strong>Telegram: @jackymoondoll</strong></a><a className="contact-card-row" href="mailto:sales@moon-doll.com"><img className="contact-card-icon" src={publicPath("/images/shops/moon-doll-guide/contacts/email-contact-icon.png")} width={38} height={38} alt="" aria-hidden="true"/><strong>E-mail: sales@moon-doll.com</strong></a><a className="contact-card-row" href="https://wa.me/601126685168" target="_blank" rel="noopener noreferrer sponsored"><img className="contact-card-icon" src={publicPath("/images/shops/moon-doll-guide/contacts/whatsapp-contact-icon.png")} width={38} height={38} alt="" aria-hidden="true"/><strong>WhatsApp: +60 11-2668 5168</strong></a></div>}
            {index===4&&<div className="moon-promo"><span>Промокод Rudollforum</span><code>RUDOLLFORUM</code><a className="link-button-secondary moon-guide-action moon-guide-action--shop" href="https://www.moon-doll.com/" target="_blank" rel="noopener noreferrer sponsored"><MoonGuideActionContent icon="promo-open-moon-doll" title="Открыть Moon-Doll"/></a></div>}
            {index===5&&<div className="checkout-grid"><div><strong>Information</strong><p>Проверьте имя, адрес, телефон, электронную почту и промокод.</p></div><div><strong>Shipping</strong><p>Повторно проверьте адрес и действующие условия доставки.</p></div><div><strong>Payment</strong><p>На этапе оплаты выберите доступный для вашей страны и банка способ. Конкретные реквизиты и инструкции магазин может прислать отдельным письмом или инвойсом.</p></div><aside>Если банк приостановил перевод, свяжитесь со службой безопасности банка и менеджером магазина. Не повторяйте платёж несколько раз без подтверждения его статуса.</aside></div>}
            {index===7&&<><a className="link-button-secondary moon-guide-action moon-guide-action--policy" href="https://www.moon-doll.com/pages/cancellation-and-refund-policy" target="_blank" rel="noopener noreferrer sponsored"><MoonGuideActionContent icon="return-policy" title="Проверить политику отмены и возврата"/></a><details className="inline-help"><summary>Справка по версии руководства</summary><p>В версии руководства Rudollforum на момент публикации указывались отдельные условия возврата до запуска производства. Перед оплатой обязательно проверьте действующую политику Moon-Doll.</p></details></>}
            {index===12&&<Link className="link-button-secondary link-button-internal moon-guide-action moon-guide-action--checklist" href="/delivery-check"><MoonGuideActionContent icon="delivery-checklist" title="Открыть чек-лист проверки после доставки"/></Link>}
            {index===14&&<a className="link-button-secondary moon-guide-action moon-guide-action--defective" href="https://www.moon-doll.com/collections/defective-dolls-collection" target="_blank" rel="noopener noreferrer sponsored"><MoonGuideActionContent icon="defective-items" title="Открыть раздел дефектных изделий"/></a>}
          </div>
        </section>)}
      </div>

      <section className="loyalty-section" id="loyalty">
        <div className="loyalty-heading moon-section-heading">
          <img className="moon-section-emblem" src={publicPath("/images/shops/moon-doll-guide/section-emblems/vip-levels-emblem.png")} width={118} height={118} alt="" aria-hidden="true" loading="lazy" />
          <span className="section-no">Программа лояльности</span><h2>Система баллов и VIP-уровней Moon-Doll</h2><p>Moon-Doll работает в том числе с покупателями из России и принимает заказы с доставкой в РФ. На сайте действует программа лояльности: она включает начисление баллов за покупки и отдельные действия, использование баллов при следующих заказах, специальные обмены баллов и VIP-уровни с дополнительными скидками.</p>
        </div>

        <div className="loyalty-info-grid">
          <section className="loyalty-card"><h3>Начисление баллов</h3><ul><li><strong>1 балл</strong> за каждый потраченный $1.</li><li><strong>1000 баллов</strong> за регистрацию нового аккаунта.</li><li><strong>1500 баллов</strong> за положительный отзыв о заказе на сайте Moon-Doll.</li><li>Ещё <strong>1500 баллов</strong> за положительный отзыв о том же заказе на <a href="https://dollforum.com/" target="_blank" rel="noopener noreferrer">TDF</a>.</li></ul><p>В отдельные периоды могут проводиться акции с повышенным начислением, например двойными баллами.</p></section>
          <section className="loyalty-card"><h3>Использование баллов</h3><p className="loyalty-rate"><strong>50 баллов</strong><span>=</span><strong>$1</strong></p><div className="loyalty-examples"><span>1000 баллов = $20</span><span>1500 баллов = $30</span><span>3000 баллов = $60</span><span>5000 баллов = $100</span></div><p>При оформлении заказа система может предложить использовать накопленные баллы для уменьшения суммы оплаты. Moon-Doll также периодически может проводить отдельные акции с обменом баллов на скидки или товары.</p></section>
        </div>

        <section className="loyalty-vip"><h3>VIP-уровни</h3><div className="vip-grid"><article><span>Lv.1</span><strong>Regular Member</strong><small>Отдельная VIP-скидка не указана.</small></article><article><span>Lv.2</span><strong>VIP</strong><small>Дополнительная скидка: <b className="vip-discount">2%</b></small></article><article><span>Lv.3</span><strong>Silver VIP</strong><small>Дополнительная скидка: <b className="vip-discount">5%</b></small></article><article><span>Lv.4</span><strong>Gold VIP</strong><small>Дополнительная скидка: <b className="vip-discount">7%</b></small></article><article><span>Lv.5</span><strong>Diamond VIP</strong><small>Скидка: <b className="vip-discount">10%</b></small></article></div></section>

        <div className="loyalty-info-grid loyalty-info-grid--secondary">
          <section className="loyalty-card"><h3>Пороги накопленного потребления</h3><p>Moon-Doll отображает эти суммы как показатели накопленного потребления, используемые системой повышения уровня:</p><div className="loyalty-thresholds"><span>€2 595,96</span><span>€4 326,60</span><span>€12 979,80</span><span>€43 266,00</span></div></section>
          <section className="loyalty-card"><h3>Срок действия баллов</h3><p>По правилам Moon-Doll баллы не имеют установленного срока действия.</p><p>Баланс, начисления и списания можно посмотреть в личном кабинете в разделе <strong>Points Center</strong>.</p></section>
          <section className="loyalty-card"><h3>Где посмотреть баллы и уровни</h3><p>Чтобы открыть систему баллов и VIP-уровней на сайте Moon-Doll, нажмите на значок <strong>Rewards</strong> — кнопку в виде коробки со звездой в левом нижнем углу сайта.</p></section>
        </div>

        <aside className="loyalty-notice"><strong>Важно</strong><ul><li>Баллы привязаны к аккаунту.</li><li>Передача баллов другому пользователю не предусмотрена.</li><li>Обмен на наличные деньги не предусмотрен.</li><li>Условия начисления, использования баллов и VIP-программы могут изменяться.</li><li>Совместимость VIP-скидок с другими акциями и промокодами лучше проверять при оформлении конкретного заказа.</li></ul></aside>
        <p className="loyalty-disclaimer">Материал носит справочный характер и описывает механику программы лояльности Moon-Doll по доступной на момент подготовки информации. Условия программы могут изменяться.</p>
      </section>

      <section className="reseller-note">
        <div className="moon-section-heading">
          <img className="moon-section-emblem" src={publicPath("/images/shops/moon-doll-guide/section-emblems/reseller-price-emblem.png")} width={118} height={118} alt="" aria-hidden="true" loading="lazy" />
          <span className="section-no">Проверка цены</span><h2>Почему у реселлера цена может быть другой</h2><p>Цена у магазина-посредника может отличаться от цены на официальной витрине производителя из-за закупочных условий, партнёрской программы, акций, валютного курса и способа формирования доставки.</p><p>Разница в цене сама по себе не подтверждает ни подлинность, ни подделку. Перед заказом следует проверить происхождение товара, условия гарантии и связь продавца с производителем.</p>
        </div>
      </section>

      <section className="store-reviews-panel moon-store-reviews" aria-labelledby="moon-reviews-title">
        <h2 id="moon-reviews-title">Отзывы о Moon-Doll</h2>
        <p>{moonDollReviews.description} Перед заказом можно ознакомиться с отзывами и самостоятельно оценить опыт покупателей.</p>
        <a className="store-review-action moon-reviews-action" href={moonDollReviews.href} target="_blank" rel="noopener noreferrer sponsored"><img className="moon-reviews-action-icon" src={publicPath("/images/shops/moon-doll-guide/actions/reviews-icon.png")} width={44} height={44} alt="" aria-hidden="true"/><span>Открыть отзывы Moon-Doll</span></a>
        <StoreReviewCommunityNote />
      </section>

      <section className="section faq moon-faq"><div className="section-head"><div><span className="section-no">FAQ</span><h2>Вопросы об оформлении заказа</h2></div></div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section className="related"><span className="section-no">Продолжить проверку</span><h2>Связанные материалы</h2><div><Link href="/safe-purchase">Безопасный выбор продавца</Link><Link href="/delivery-check">Проверка после доставки</Link><Link href="/useful-links">Полезные ссылки</Link></div></section>
      <MetaLine/>
    </article>
  </SiteShell>;
}
