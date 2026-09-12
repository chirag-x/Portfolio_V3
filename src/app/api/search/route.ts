import { NextResponse } from "next/server";
import { getAllNotesFull } from "@/lib/mdx";
import { projects } from "@/data/projects";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase();

  if (!q) {
    return NextResponse.json([]);
  }

  const results: { title: string; href: string; snippet: string; type: "note" | "project" }[] = [];

  // Search Notes
  const notes = await getAllNotesFull();
  notes.forEach((note) => {
    const fullText = (note.meta.title + " " + note.content).toLowerCase();
    const matchIndex = fullText.indexOf(q);
    
    if (matchIndex !== -1) {
      // Find a snippet around the match
      const snippetStart = Math.max(0, matchIndex - 40);
      const snippetEnd = Math.min(fullText.length, matchIndex + q.length + 40);
      let snippet = fullText.slice(snippetStart, snippetEnd).replace(/\n/g, " ");
      
      if (snippetStart > 0) snippet = "..." + snippet;
      if (snippetEnd < fullText.length) snippet = snippet + "...";

      results.push({
        title: note.meta.title,
        href: `/notes/${note.meta.slug}`,
        snippet,
        type: "note"
      });
    }
  });

  // Search Projects
  projects.forEach((proj) => {
    const fullText = (proj.title + " " + proj.desc + " " + proj.tagline + " " + (proj.shortDescription || "")).toLowerCase();
    const matchIndex = fullText.indexOf(q);

    if (matchIndex !== -1) {
      const snippetStart = Math.max(0, matchIndex - 40);
      const snippetEnd = Math.min(fullText.length, matchIndex + q.length + 40);
      let snippet = fullText.slice(snippetStart, snippetEnd).replace(/\n/g, " ");
      
      if (snippetStart > 0) snippet = "..." + snippet;
      if (snippetEnd < fullText.length) snippet = snippet + "...";

      results.push({
        title: proj.title,
        href: `/work/${proj.slug}`,
        snippet,
        type: "project"
      });
    }
  });

  return NextResponse.json(results);
}
