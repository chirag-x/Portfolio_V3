export const metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Are you available for freelance work?",
      a: "Yes, I am open to freelance projects and internships. I primarily take on projects involving full-stack web development, React/Next.js, and custom AI/Automation integrations. You can reach out via the Contact page."
    },
    {
      q: "What is your main tech stack?",
      a: "My core stack for web products is Next.js, React, TypeScript, Tailwind CSS, and Node.js. For AI and automation, I use Python, PyTorch, LangChain, Playwright, and various LLM APIs."
    },
    {
      q: "What is OMNIX?",
      a: "OMNIX is my flagship autonomous AI desktop agent. It uses computer vision (YOLO) and LLMs to understand user goals, perceive the screen, and control the computer via mouse and keyboard to complete tasks."
    },
    {
      q: "Can I use the source code of your projects?",
      a: "Most of my learning projects and experiments are open-source on my GitHub. However, major systems like OMNIX or client projects are either closed-source or have specific licensing."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">FAQ</h1>
        <p className="text-xl text-muted-foreground mb-16">
          Frequently asked questions about my work and availability.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
