import About from "@/components/layout/About";
import Experience from "@/components/layout/Experience";

export const metadata = {
  title: "About",
  description: "Learn more about me, my experience, and my journey.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">ABOUT ME</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          The journey, the skills, and the mindset behind the code.
        </p>
      </div>
      <About />
      <Experience />
    </div>
  );
}
