"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "rudollforum_age_confirmed";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

type StoredConfirmation = {
  confirmedAt: number;
  expiresAt: number;
};

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const confirmation = JSON.parse(saved) as StoredConfirmation;
        if (Number.isFinite(confirmation.expiresAt) && confirmation.expiresAt > Date.now()) {
          return;
        }
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // If storage is unavailable, show the warning for this visit.
    }
    const timer = window.setTimeout(() => setOpen(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const page = document.getElementById("site-content");
    const pageWasHidden = page?.getAttribute("aria-hidden");
    const previousOverflow = document.body.style.overflow;
    if (page) {
      page.setAttribute("inert", "");
      page.setAttribute("aria-hidden", "true");
    }
    document.body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const frame = requestAnimationFrame(() => focusable()[0]?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        focusable()[0]?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const controls = focusable();
      if (!controls.length) {
        event.preventDefault();
        return;
      }
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (page) {
        page.removeAttribute("inert");
        if (pageWasHidden === null) page.removeAttribute("aria-hidden");
        else if (pageWasHidden !== undefined) page.setAttribute("aria-hidden", pageWasHidden);
      }
      previousFocusRef.current?.focus();
    };
  }, [open]);

  const confirmAge = () => {
    const now = Date.now();
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ confirmedAt: now, expiresAt: now + THIRTY_DAYS }),
      );
    } catch {
      // The choice still applies until the next page load when storage is unavailable.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="age-gate-backdrop">
      <div
        ref={dialogRef}
        className="age-gate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        aria-describedby="age-gate-description age-gate-note"
      >
        <div className="age-gate-heading">
          <span className="age-gate-lotus" aria-hidden="true">✦</span>
          <span className="age-gate-mark">18+</span>
        </div>
        <p className="age-gate-kicker">Информационный ресурс для совершеннолетних</p>
        <h2 id="age-gate-title">Внимание: сайт предназначен для совершеннолетней аудитории</h2>
        <p id="age-gate-description">
          Материалы Rudollforum посвящены силиконовым и ТПЕ-куклам, их выбору, покупке,
          эксплуатации, уходу, хранению и ремонту. Сайт предназначен только для
          пользователей, достигших 18 лет.
        </p>
        <p id="age-gate-note" className="age-gate-note">
          На сайте не публикуются откровенные материалы, однако тематика относится к
          товарам и информации для взрослой аудитории.
        </p>
        <div className="age-gate-actions">
          <button type="button" className="button primary" onClick={confirmAge}>
            Мне уже исполнилось 18 лет
          </button>
          <a className="button age-gate-exit" href="https://www.google.com/">
            Покинуть сайт
          </a>
        </div>
      </div>
    </div>
  );
}
