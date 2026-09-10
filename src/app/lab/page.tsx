export const metadata = {
  title: "Lab",
  description: "Experiments, prototypes, and incomplete ideas.",
};

export default function LabPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">THE LAB</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Where I test algorithms, explore new frameworks, and build small prototypes that don't belong in the main work archive.
        </p>

        <div className="p-12 border border-dashed border-border rounded-3xl bg-muted/20 text-center">
          <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest rounded-full mb-4">Under Construction</div>
          <h2 className="text-2xl font-bold mb-2">Experiments booting up...</h2>
          <p className="text-muted-foreground">Check back later for standalone UI components and algorithm visualizations.</p>
        </div>
      </div>
    </div>
  );
}
