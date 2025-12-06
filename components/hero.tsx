import Image from "next/image";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-brand-soft  scroll-mt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 md:pt-64">
        <p className="text-xl font-extrabold tracking-wide text-brand-accent">
          COVID-19 ALERT
        </p>

        <h1 className="mt-3 max-w-2xl text-3xl font-redhat font-extrabold leading-tight text-brand-teal md:text-5xl">
          Stay At Home Quarantine
          <br /> To Stop Corona Virus
        </h1>

        <p className="mt-4 max-w-xl font-body text-[16px] leading-9 text-body capitalize">
          There is no specific medicine to prevent or treat coronavirus disease
          (COVID-19). People may need supportive care to.
        </p>

        <button className="mt-8 rounded-full bg-brand-accent px-11 py-4 text-sm font-bold text-white shadow-soft hover:opacity-95">
          Let Us Help
        </button>

        {/* Mobile image in the flow */}
        <div className="mt-10 flex justify-center md:hidden">
          <Image
            src="/Illustration 01.png"
            alt="Stay at home illustration"
            width={900}
            height={700}
            priority
            className="h-auto w-full max-w-[420px]"
          />
        </div>
      </div>

      {/* Desktop image floating */}
      <div className="pointer-events-none absolute right-0 top-[45%] hidden -translate-y-[40%] md:block">
        <Image
          src="/Illustration 01.png"
          alt="Stay at home illustration"
          width={900}
          height={700}
          priority
          className="h-auto w-full md:w-[520px] lg:w-[680px] xl:w-[780px]"
        />
      </div>
    </section>
  );
}
