import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/hero/WhatIBuild";
import HowIThink from "@/components/hero/HowIThink";
import OmnixCinematic from "@/components/projects/OmnixCinematic";
import Experience from "@/components/layout/Experience";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import AstaAssistant from "@/components/asta/AstaAssistant";
import CommandPalette from "@/components/layout/CommandPalette";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <HowIThink />
      <OmnixCinematic />
      <Experience />
      <About />
      <Contact />
      <AstaAssistant />
      <CommandPalette />
    </>
  );
}
