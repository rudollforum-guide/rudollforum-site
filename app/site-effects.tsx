"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type PetalStyle = CSSProperties & {
  "--petal-x": string;
  "--petal-size": string;
  "--petal-delay": string;
  "--petal-duration": string;
  "--petal-drift": string;
  "--petal-opacity": string;
  "--petal-color": string;
};

const petals: PetalStyle[] = [
  { "--petal-x": "5%", "--petal-size": "12px", "--petal-delay": "-4s", "--petal-duration": "23s", "--petal-drift": "34px", "--petal-opacity": ".34", "--petal-color": "#e8c6cf" },
  { "--petal-x": "15%", "--petal-size": "9px", "--petal-delay": "-15s", "--petal-duration": "27s", "--petal-drift": "-28px", "--petal-opacity": ".28", "--petal-color": "#d7bfdc" },
  { "--petal-x": "27%", "--petal-size": "14px", "--petal-delay": "-9s", "--petal-duration": "31s", "--petal-drift": "42px", "--petal-opacity": ".3", "--petal-color": "#efd5d8" },
  { "--petal-x": "39%", "--petal-size": "10px", "--petal-delay": "-21s", "--petal-duration": "29s", "--petal-drift": "-38px", "--petal-opacity": ".25", "--petal-color": "#e0c2ce" },
  { "--petal-x": "51%", "--petal-size": "8px", "--petal-delay": "-12s", "--petal-duration": "25s", "--petal-drift": "24px", "--petal-opacity": ".32", "--petal-color": "#ead1da" },
  { "--petal-x": "62%", "--petal-size": "13px", "--petal-delay": "-6s", "--petal-duration": "33s", "--petal-drift": "-44px", "--petal-opacity": ".27", "--petal-color": "#d9c4de" },
  { "--petal-x": "72%", "--petal-size": "9px", "--petal-delay": "-24s", "--petal-duration": "28s", "--petal-drift": "31px", "--petal-opacity": ".29", "--petal-color": "#edcbd2" },
  { "--petal-x": "81%", "--petal-size": "11px", "--petal-delay": "-17s", "--petal-duration": "30s", "--petal-drift": "-26px", "--petal-opacity": ".24", "--petal-color": "#e3c9d8" },
  { "--petal-x": "90%", "--petal-size": "8px", "--petal-delay": "-2s", "--petal-duration": "26s", "--petal-drift": "36px", "--petal-opacity": ".3", "--petal-color": "#f0d8da" },
  { "--petal-x": "96%", "--petal-size": "12px", "--petal-delay": "-19s", "--petal-duration": "34s", "--petal-drift": "-30px", "--petal-opacity": ".22", "--petal-color": "#d8bfd6" },
];

function petalCount(pathname: string) {
  if (pathname === "/") return 10;
  if (pathname === "/community") return 8;
  if (pathname === "/brands" || pathname === "/guide" || pathname === "/shops/moon-doll-guide") return 4;
  return 2;
}

export function SakuraPetals() {
  const pathname = usePathname();
  const count = petalCount(pathname);

  useEffect(() => {
    const updateVisibility = () => {
      document.documentElement.classList.toggle("page-inactive", document.visibilityState !== "visible");
    };
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
      document.documentElement.classList.remove("page-inactive");
    };
  }, []);

  return (
    <div className={`sakura-petals sakura-count-${count}`} aria-hidden="true">
      {petals.slice(0, count).map((style, index) => <span className="sakura-petal" style={style} key={index} />)}
    </div>
  );
}

export function DecorativeBackground() {
  return (
    <div className="decorative-background" aria-hidden="true">
      <span className="decorative-branch decorative-branch-left" />
      <span className="decorative-branch decorative-branch-right" />
      <span className="decorative-moon" />
      <span className="decorative-lotus">✦</span>
    </div>
  );
}

export function SectionDivider() {
  return <div className="section-divider" aria-hidden="true"><span>❀</span><i>✦</i><span>❀</span></div>;
}

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      "main > section, main .article-body > section, main .brand-card, main .guide-card, main figure.editorial-visual",
    ));

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    targets.forEach((element) => element.classList.add("reveal-pending"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 901px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduced.matches || !desktop.matches || document.visibilityState !== "visible") {
        document.documentElement.style.setProperty("--parallax-y", "0px");
        return;
      }
      const offset = Math.max(-12, Math.min(12, window.scrollY * 0.018));
      document.documentElement.style.setProperty("--parallax-y", `${offset}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduced.addEventListener("change", update);
    desktop.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      reduced.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--parallax-y");
    };
  }, []);

  return null;
}

export function SiteEffects({ children }: { children?: ReactNode }) {
  return <>{children}<DecorativeBackground /><SakuraPetals /><RevealOnScroll /></>;
}
