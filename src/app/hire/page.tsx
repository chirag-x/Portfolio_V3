import PageTransition from "@/components/layout/PageTransition";
import HireWizard from "@/components/hire/HireWizard";

export const metadata = {
  title: "Hire Me | Chirag Sharma",
  description: "Generate a custom project proposal using AI.",
};

export default function HirePage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Let's Build <span className="text-primary">Together</span>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Skip the boring contact forms. Tell my AI assistant about your project, budget, and timeline, and it will instantly draft a custom architectural proposal for us to discuss.
            </p>
          </header>

          <HireWizard />
        </div>
      </div>
    </PageTransition>
  );
}
