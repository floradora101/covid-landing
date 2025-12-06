"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Symptoms", href: "#symptoms" },
  { label: "Prevention", href: "#prevention" },
  { label: "Treatment", href: "#treatment" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    Icon: FaFacebookF,
    className: "text-brand-teal",
  },
  {
    label: "YouTube",
    href: "#",
    Icon: IoLogoYoutube,
    className: "text-brand-accent",
  },
  { label: "Vimeo", href: "#", Icon: FaVimeoV, className: "text-brand-teal" },
  { label: "X", href: "#", Icon: FaXTwitter, className: "text-brand-teal" },
];

export default function FooterCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-soft py-7 scroll-mt-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-teal md:text-5xl">
            Have Question in mind?
            <br />
            Let us help you
          </h2>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 w-full max-w-2xl"
        >
          <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-3 shadow-soft sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />

            <button
              type="submit"
              className=" md:py-4 rounded-full px-11 py-4  bg-brand-accent text-sm font-bold shadow-soft text-white hover:opacity-95 sm:w-auto sm:"
            >
              Send
            </button>
          </div>
        </form>

        <div className="mt-20 flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <Link href="#overview" className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="COVID-19"
              width={160}
              height={50}
              className="h-[45px] w-auto"
              priority={false}
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-10">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-brand-teal/80 hover:text-brand-teal"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-12">
            {socials.map(({ label, href, Icon, className }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={`${className} opacity-90 transition-opacity hover:opacity-100`}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          2025 @ All rights reserved by ghadir
        </p>
      </div>

      <Image
        src="/path1470-6.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="z-0 pointer-events-none absolute bottom-0 right-0 h-[300px] w-[150px] -translate-y-20 select-none"
      />
      <Image
        src="/path1470-7.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="z-0 pointer-events-none absolute bottom-0 right-0 h-[100px] w-[100px] -translate-y-80 -translate-x-32 select-none"
      />
    </section>
  );
}
