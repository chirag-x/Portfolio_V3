import WorkClient from "./WorkClient";

export const metadata = {
  title: "Work | Chirag Sharma",
  description: "Projects, experiments and systems I've built.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">WORK</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Projects, experiments and systems I've built.
        </p>
        <WorkClient />
      </div>
    </div>
  );
}
