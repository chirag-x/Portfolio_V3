export const metadata = {
  title: "Terms & Conditions | Chirag Sharma",
  description: "Terms and Conditions for chiragsharma.dev",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl prose prose-invert">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase not-prose">Terms & Conditions</h1>
        
        <p className="text-muted-foreground mb-8">Last updated: September 2026</p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h3>2. Intellectual Property</h3>
        <p>
          All content, designs, custom graphics, and code showcased on this website are the intellectual property of Chirag Sharma, unless otherwise stated (e.g., open-source libraries or third-party logos). You may not reproduce, distribute, or use my intellectual property for commercial purposes without explicit permission.
        </p>

        <h3>3. Project Code and Repositories</h3>
        <p>
          Code repositories linked via GitHub are subject to their respective licenses (usually MIT, unless stated otherwise in the repository). Please refer to the specific GitHub repository for usage rights of that particular project.
        </p>

        <h3>4. Disclaimer</h3>
        <p>
          The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </div>
    </div>
  );
}
