import { profile } from "@/data/profile";

export const metadata = {
  title: "Privacy Policy | Chirag Sharma",
  description: "Privacy Policy for chiragsharma.dev",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl prose prose-invert">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase not-prose">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-8">Last updated: September 2026</p>

        <h3>1. Information Collection</h3>
        <p>
          This portfolio website is a static site designed to showcase my engineering work. It does not actively track users, use intrusive tracking cookies, or collect personally identifiable information directly through custom forms.
        </p>

        <h3>2. Analytics and Third-Party Services</h3>
        <p>
          The site may use basic, privacy-respecting analytics (like Vercel Analytics or Netlify Analytics) strictly to monitor site performance and overall traffic trends. These services may collect anonymous data such as device type, browser, and generalized location.
        </p>

        <h3>3. External Links</h3>
        <p>
          This website contains links to external sites (such as GitHub, LinkedIn, or live project demos). I am not responsible for the privacy practices or the content of those external websites.
        </p>

        <h3>4. Contact Information</h3>
        <p>
          If you contact me via email ({profile.email}), your email address and any information you provide will only be used to respond to your inquiry and will not be shared with third parties.
        </p>

      </div>
    </div>
  );
}
