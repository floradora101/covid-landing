import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-brand-soft scroll-mt-16">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 ">
        {/* TEXT (first on mobile) */}
        <div className="order-1 md:order-2">
          <p className="text-xl font-extrabold text-brand-accent tracking-wide">
            What Is Covid-19
          </p>

          <h2 className="mt-3 font-redhat text-5xl font-extrabold text-brand-teal leading-tight">
            Coronavirus
          </h2>

          <p className="mt-4 max-w-xl font-body text-[16px] leading-9 text-body capitalize">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19. Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>

          <button className="mt-8 rounded-full bg-[#FA565226] px-11 py-4 text-sm font-bold text-brand-accent hover:opacity-95">
            Learn More
          </button>
        </div>

        {/* IMAGE (after text on mobile, left on desktop) */}
        <div className="order-2 md:order-1 z-10 ">
          <Image
            src="/Group 15404.png"
            alt="Coronavirus illustration"
            width={720}
            height={540}
            className="mx-auto h-auto w-full max-w-[520px] md:max-w-none md:-translate-x-10 "
          />
        </div>
      </div>
      {/* decorative virus behind */}
      <Image
        src="/path1470-6.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="z-0 pointer-events-none absolute bottom-0 right-0 h-[200px] w-[100px] select-none"
      />
    </section>
  );
}
