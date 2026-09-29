"use client";

import {useCallback,useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

export type WhiteLotusGallerySet = {
  slug:string;
  title:string;
  description:string;
  images:Array<{src:string;alt:string}>;
};

type ActiveImage = {setIndex:number;imageIndex:number};

export function WhiteLotusGallery({sets}:{sets:WhiteLotusGallerySet[]}){
  const [active,setActive] = useState<ActiveImage|null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement|null>(null);

  const close = useCallback(()=>{
    setActive(null);
    window.requestAnimationFrame(()=>openerRef.current?.focus());
  },[]);

  const showPrevious = useCallback(()=>{
    setActive(current=>{
      if(!current)return current;
      const length = sets[current.setIndex].images.length;
      return {...current,imageIndex:(current.imageIndex-1+length)%length};
    });
  },[sets]);

  const showNext = useCallback(()=>{
    setActive(current=>{
      if(!current)return current;
      const length = sets[current.setIndex].images.length;
      return {...current,imageIndex:(current.imageIndex+1)%length};
    });
  },[sets]);

  useEffect(()=>{
    if(!active)return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event:KeyboardEvent)=>{
      if(event.key==="Escape")close();
      if(event.key==="ArrowLeft")showPrevious();
      if(event.key==="ArrowRight")showNext();
      if(event.key==="Tab"){
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>(".white-lotus-gallery-lightbox button:not([disabled])"));
        if(!controls.length)return;
        const first = controls[0];
        const last = controls[controls.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      }
    };

    document.addEventListener("keydown",onKeyDown);
    return ()=>{
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown",onKeyDown);
    };
  },[active,close,showNext,showPrevious]);

  const open = (setIndex:number,imageIndex:number,button:HTMLButtonElement)=>{
    openerRef.current = button;
    setActive({setIndex,imageIndex});
  };

  const activeSet = active?sets[active.setIndex]:null;
  const activeImage = active&&activeSet?activeSet.images[active.imageIndex]:null;

  return <section className="white-lotus-gallery" aria-labelledby="white-lotus-gallery-title">
    <header className="white-lotus-gallery-heading">
      <span className="white-lotus-gallery-eyebrow">ГАЛЕРЕЯ СООБЩЕСТВА</span>
      <h2 id="white-lotus-gallery-title">Галерея образов участников</h2>
      <div className="white-lotus-gallery-intro">
        <p>Здесь собраны фотографии и постановочные образы, которыми участники сообщества делятся с “Садом Белого Лотоса”. В галерее публикуются только материалы, разрешённые владельцами к размещению на сайте Rudollforum.</p>
        <p>Главное здесь — не количество фотографий, а атмосфера образа: одежда, композиция, настроение и внимание к деталям.</p>
      </div>
    </header>
    <div className="white-lotus-gallery-sets">
      {sets.map((set,setIndex)=><section className="white-lotus-gallery-set" aria-labelledby={`white-lotus-gallery-${set.slug}`} key={set.slug}>
        <header className="white-lotus-gallery-set-heading">
          <div>
            <span>Фотосет участника</span>
            <h3 id={`white-lotus-gallery-${set.slug}`}>{set.title}</h3>
          </div>
          <p>{set.description}</p>
          <small>{set.images.length} фотографий</small>
        </header>
        <div className="white-lotus-gallery-grid">
          {set.images.map((image,imageIndex)=><button
            className="white-lotus-gallery-item"
            type="button"
            aria-label={`Открыть: ${image.alt}`}
            onClick={event=>open(setIndex,imageIndex,event.currentTarget)}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async"/>
          </button>)}
        </div>
      </section>)}
    </div>
    {active&&activeSet&&activeImage&&createPortal(<div
      className="white-lotus-gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Просмотр фотосета ${activeSet.title}`}
      onMouseDown={event=>{if(event.target===event.currentTarget)close();}}
    >
      <div className="white-lotus-gallery-lightbox-stage">
        <div className="white-lotus-gallery-lightbox-bar">
          <span>{activeSet.title} · {active.imageIndex+1} / {activeSet.images.length}</span>
          <button ref={closeButtonRef} type="button" onClick={close}>Закрыть</button>
        </div>
        <img src={activeImage.src} alt={activeImage.alt}/>
        <div className="white-lotus-gallery-lightbox-controls">
          <button type="button" onClick={showPrevious} aria-label="Предыдущая фотография">← <span>Назад</span></button>
          <button type="button" onClick={showNext} aria-label="Следующая фотография"><span>Далее</span> →</button>
        </div>
      </div>
    </div>,document.body)}
  </section>;
}
