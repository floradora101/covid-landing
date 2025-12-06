import About from "@/components/About";
import Contagion from "@/components/Contagion";
import FooterCta from "@/components/FooterCta";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Symptoms from "@/components/Symptoms";
import WhatShouldWeDo from "@/components/WhatShouldWeDo";

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Header />

      <main>
        <Hero />
        <About />
        <Contagion />
        <Symptoms />
        <WhatShouldWeDo />
        <FooterCta />
      </main>
    </div>
  );
}
