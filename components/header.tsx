"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Contagion", href: "#contagion" },
  { label: "Symptoms", href: "#symptoms" },
  { label: "Prevention", href: "#prevention" },
];

const HEADER_OFFSET = 90; 

export default function Header() {
  const [activeHref, setActiveHref] = useState("#overview");
  const sectionElsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // collect sections once on mount
    const els = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    sectionElsRef.current = els;
    if (!els.length) return;

    const updateActive = () => {
      const y = window.scrollY + HEADER_OFFSET;

      // pick the last section whose top is above current scroll position
      let current = els[0];
      for (const s of els) {
        if (s.offsetTop <= y) current = s;
      }

      setActiveHref(`#${current.id}`);
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateActive();
      });
    };

    updateActive(); // initial
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 bg-brand-soft/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center px-4">
        <Link href="#overview" className="flex items-center pt-5">
          <Image
            src="/Logo.png"
            alt="COVID-19"
            width={160}
            height={50}
            priority
            className="h-[45px] w-auto"
          />
        </Link>

        <div className="ml-auto flex items-center gap-8">
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((i) => {
              const isActive = i.href === activeHref;

              return (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setActiveHref(i.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-accent"
                      : "text-slate-600 hover:text-brand-accent",
                    "after:absolute after:left-1/2 after:top-[calc(100%+8px)] after:h-[6px] after:w-[6px] after:-translate-x-1/2 after:rounded-full after:bg-brand-accent after:opacity-0 after:transition-opacity",
                    "hover:after:opacity-100",
                    isActive ? "after:opacity-100" : "",
                  ].join(" ")}
                >
                  {i.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            className="mt-2 rounded-full border-2 border-brand-accent px-11 py-4 text-sm font-semibold text-brand-accent hover:bg-brand-accent hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
