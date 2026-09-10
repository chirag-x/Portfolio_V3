export const metadata = {
  title: "Build Logs",
  description: "Engineering notes, build logs, and thoughts on AI and web development.",
};

export default function NotesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Engineering Notes</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Thoughts, build logs, and lessons learned while developing intelligent systems.
        </p>

        <div className="space-y-12">
          <article className="border-b border-border pb-12">
            <header className="mb-4">
              <div className="text-sm text-primary font-mono mb-2">March 15, 2024</div>
              <h2 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                Building OMNIX's Perception System
              </h2>
            </header>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <h3 className="text-foreground text-lg font-semibold mt-4 mb-2">Problem</h3>
              <p className="mb-4">Standard LLMs are blind to the desktop. To make an autonomous agent, it needs to see UI elements to know where to click or type.</p>
              
              <h3 className="text-foreground text-lg font-semibold mt-4 mb-2">Approach</h3>
              <p className="mb-4">Initially, I tried using pure OCR, but it failed to understand UI hierarchy (like buttons vs text). I shifted to using Ultralytics YOLO to detect interactive bounding boxes combined with accessibility trees.</p>
              
              <h3 className="text-foreground text-lg font-semibold mt-4 mb-2">Failed attempts</h3>
              <p className="mb-4">Taking screenshots every 100ms melted the CPU. The agent loop had to become discrete: Observe (take one frame) → Plan → Act → Verify.</p>

              <h3 className="text-foreground text-lg font-semibold mt-4 mb-2">Lesson</h3>
              <p>Vision-language models alone aren't enough for reliable computer control. You need a structured symbolic representation of the screen (bounding boxes) that an LLM can reason over.</p>
            </div>
          </article>

          <article className="border-b border-border pb-12">
            <header className="mb-4">
              <div className="text-sm text-primary font-mono mb-2">January 20, 2024</div>
              <h2 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                Why I migrated to Next.js API Routes for ASTA
              </h2>
            </header>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>The previous iteration of ASTA used a separate Express server running on Render. It worked, but suffered from cold starts and CORS headaches.</p>
              <p className="mt-4">Moving to Next.js Route Handlers reduced the architecture complexity, improved latency by running on the edge, and secured the OpenRouter API keys without managing a separate backend deployment.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
