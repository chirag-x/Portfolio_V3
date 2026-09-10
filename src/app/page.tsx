import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/hero/WhatIBuild";
import HowIThink from "@/components/hero/HowIThink";
import FeaturedWork from "@/components/projects/FeaturedWork";
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
      <FeaturedWork />
      <AboutPreview />
      <ContactCTA />
      <AstaAssistant />
      <CommandPalette />
    </>
  );
}
