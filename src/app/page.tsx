import Hero from "@/components/hero/Hero";
import QuickProof from "@/components/hero/QuickProof";
import FeaturedProject from "@/components/projects/FeaturedProject";
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
      <QuickProof />
      <FeaturedProject />
      <ProjectGrid />
      <Experience />
      <About />
      <Contact />
      <AstaAssistant />
      <CommandPalette />
    </>
  );
}
