import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/hero/WhatIBuild";
import HowIThink from "@/components/hero/HowIThink";
import OmnixCinematic from "@/components/projects/OmnixCinematic";
import AboutPreview from "@/components/layout/AboutPreview";
import ContactCTA from "@/components/layout/ContactCTA";
import AstaAssistant from "@/components/asta/AstaAssistant";
import CommandPalette from "@/components/layout/CommandPalette";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <HowIThink />
      <OmnixCinematic />
      <AboutPreview />
      <ContactCTA />
      <AstaAssistant />
      <CommandPalette />
    </>
  );
}
