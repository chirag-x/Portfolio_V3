import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/hero/WhatIBuild";
import QuickProof from "@/components/hero/QuickProof";
import OmnixCinematic from "@/components/projects/OmnixCinematic";
import ProjectGrid from "@/components/projects/ProjectGrid";
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
      <QuickProof />
      <OmnixCinematic />
      <ProjectGrid />
      <Experience />
      <About />
      <Contact />
      <AstaAssistant />
      <CommandPalette />
    </>
  );
}
