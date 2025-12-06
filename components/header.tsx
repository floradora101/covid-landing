"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Contagion", href: "#contagion" },
  { label: "Symptoms", href: "#symptoms" },
  { label: "Prevention", href: "#prevention" },
];

export default function Header() {
  const ids = useMemo(() => nav.map((n) => n.href.slice(1)), []);
  const [activeHref, setActiveHref] = useState("#overview");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // take the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      {
        // header is sticky (64px)
        root: null,
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0.15, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="sticky top-0 z-50 h-16 bg-brand-soft/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center px-4">
        {/* Logo */}
        <Link href="#overview" className="flex items-center pt-5">
          <Image
            src="/Logo.png"
            alt="COVID-19"
            // width={200}
            // height={70}
            priority
            // className="h-[55px] w-[175px]"
            width={160}
            height={50}
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
                  className={[
                    "relative text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-accent"
                      : "text-slate-600 hover:text-brand-accent",
                    // dot base (exists always, only opacity changes => no layout shift)
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
