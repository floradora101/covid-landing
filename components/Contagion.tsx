import Image from "next/image";

type ContagionCard = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const cards: ContagionCard[] = [
  {
    title: "Air Transmission",
    desc: "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify.",
    img: "/Group 18544.png",
    alt: "Air transmission",
  },
  {
    title: "Human Contacts",
    desc: "Washing your hands is one of the simplest ways you can protect.",
    img: "/Group 18542.png",
    alt: "Human contacts",
  },
  {
    title: "Contained Objects",
    desc: "Use the tissue while sneezing, in this way you can protect your droplets.",
    img: "/Group 18540.png",
    alt: "Contained objects",
  },
];

function Card({ title, desc, img, alt }: ContagionCard) {
  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-xl bg-white px-8 pb-10 pt-10",
        "shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
        "transition-transform duration-200 hover:-translate-y-1",
      ].join(" ")}
    >
      {/* image */}
      <div className="mx-auto w-[220px] max-w-full">
        <Image
          src={img}
          alt={alt}
          width={260}
          height={200}
          className="h-auto w-full"
        />
      </div>

      {/* content */}
      <h3 className="mt-8 text-center font-redhat text-xl font-extrabold text-brand-teal">
        {title}
      </h3>

      <p className="mt-4 text-center font-body text-sm leading-9 text-body capitalize">
        {desc}
      </p>

      <span
        className={[
          "pointer-events-none absolute inset-x-0 bottom-0 h-[6px] bg-brand-accent",
          "opacity-0 transition-opacity duration-200",
          "group-hover:opacity-100",
        ].join(" ")}
      />
    </article>
  );
}

export default function Contagion() {
  return (
    <section id="contagion" className="bg-brand-soft scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4  text-center ">
        {/* Title */}

        <p className="text-xl font-extrabold text-brand-accent tracking-wide">
          Covid-19
        </p>

        <h2 className="mt-3 font-redhat text-5xl font-extrabold text-brand-teal leading-tight">
          Contagion
        </h2>

        <p className="mx-auto mt-4 font-body max-w-2xl text-[16px] leading-7 text-body">
          Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
          And Some Cause Disease. A Newly Identified Type
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
