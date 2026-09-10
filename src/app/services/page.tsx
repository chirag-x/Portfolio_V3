export const metadata = {
  title: "Services",
  description: "Web development, AI automation, and system architecture services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">SERVICES</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          What I can build for you. From high-performance web products to autonomous AI systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6 text-xl font-bold">01</div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Web Engineering</h2>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack application development using modern frameworks like React, Next.js, and Node.js. 
              I build performant, responsive, and accessible digital products from the database up to the UI.
            </p>
          </div>
          
          <div className="p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6 text-xl font-bold">02</div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">AI Automation & Agents</h2>
            <p className="text-muted-foreground leading-relaxed">
              Integrating Large Language Models, Computer Vision, and autonomous agent systems (like OMNIX) into practical workflows. 
              Automating repetitive tasks through intelligent scripts and robust APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
