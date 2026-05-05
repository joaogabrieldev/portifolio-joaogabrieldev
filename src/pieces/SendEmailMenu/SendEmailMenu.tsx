"use client";

import { cn } from "@/lib/utils";
import { dmSans } from "@/utils/fonts";
import { urlGmail, urlMailtoApp, urlOutlook } from "@/utils/linksToGo";
import { ChevronDown, Inbox, Mail } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SiGmail } from "react-icons/si";

export default function SendEmailMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonId = useId();
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const itemClass =
    "flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-black transition hover:bg-black/5";

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        id={buttonId}
        className={cn(
          "inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border border-black/20 bg-black px-8 text-sm font-bold tracking-wide text-white uppercase shadow-black/20 transition hover:bg-black/80",
          dmSans.className,
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>Enviar e-mail</span>
        <Mail className="size-4.5 shrink-0" aria-hidden />
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-2xl border border-black/15 bg-white py-1 shadow-lg"
        >
          <Link
            role="menuitem"
            href={urlGmail}
            target="_blank"
            rel="noreferrer"
            className={itemClass}
            onClick={close}
          >
            <SiGmail className="size-5 shrink-0 text-[#EA4335]" aria-hidden />
            Abrir no Gmail
          </Link>
          <Link
            role="menuitem"
            href={urlOutlook}
            target="_blank"
            rel="noreferrer"
            className={itemClass}
            onClick={close}
          >
            <Inbox className="size-5 shrink-0 text-[#0078D4]" aria-hidden />
            Abrir no Outlook
          </Link>
          <a
            role="menuitem"
            href={urlMailtoApp}
            className={itemClass}
            onClick={close}
          >
            <Mail className="size-5 shrink-0 text-black/70" aria-hidden />
            Abrir no app de e-mail
          </a>
        </div>
      ) : null}
    </div>
  );
}
