import Image from "next/image";

type Step = {
  n: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Wear Masks",
    desc: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively `,
    img: "/Mask girl.png",
    alt: "Wear masks illustration",
  },
  {
    n: "02",
    title: "Wash Your Hands",
    desc: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals `,
    img: "/Mask girl (1).png",
    alt: "Wash hands illustration",
  },
  {
    n: "03",
    title: "Use Nose - Rag",
    desc: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively `,
    img: "/Group 15454.png",
    alt: "Use tissue illustration",
  },
  {
    n: "04",
    title: "Avoid Contacts",
    desc: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic`,
    img: "/Mask.png",
    alt: "Avoid contact illustration",
  },
];

export default function WhatShouldWeDo() {
  return (
    <section id="prevention" className="relative bg-brand-soft scroll-mt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 ">
        {/* Title */}
        <div className="text-center">
          <p className="text-xl font-extrabold tracking-wide text-brand-accent">
            Covid-19
          </p>

          <h2 className="mt-3 font-redhat text-5xl font-extrabold leading-tight text-brand-teal">
            What Should We Do
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-body text-[16px] leading-7 text-body">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 space-y-20">
          {STEPS.map((s, idx) => {
            const textFirst = idx % 2 === 0;
            return (
              <div
                key={s.n}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                <div className={textFirst ? "md:order-1" : "md:order-2"}>
                  <div className="flex items-start gap-6">
                    <span
                      className="
      mt-1 shrink-0
      inline-flex items-center justify-center
      h-12 w-12 md:h-14 md:w-14
      rounded-full
      bg-brand-accent/15
      text-base md:text-lg
      font-extrabold text-brand-accent
      leading-none
    "
                    >
                      {s.n}
                    </span>

                    <div className="max-w-[460px]">
                      <h3 className="font-redhat text-3xl font-extrabold text-brand-teal">
                        {s.title}
                      </h3>
                      <p className="mt-3 font-body text-[16px] leading-7 text-body">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={textFirst ? "md:order-2" : "md:order-1"}>
                  <div className="mx-auto w-full max-w-[560px]">
                    <Image
                      src={s.img}
                      alt={s.alt}
                      width={560}
                      height={460}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorations behind */}
      <Image
        src="/path1470-3.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[300px] w-[150px] -translate-y-20 select-none md:block"
      />
      <Image
        src="/path1470-4.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[100px] w-[100px] -translate-y-80 -translate-x-24 select-none md:block"
      />
      <Image
        src="/path1470-2.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-[200px] w-[100px] -translate-y-1/2 select-none md:block"
      />
    </section>
  );
}
