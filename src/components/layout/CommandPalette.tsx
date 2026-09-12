"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { Search, Home, Briefcase, Code, FileText, Mail, Moon, Sun, FolderGit2, X, Activity } from "lucide-react";
import { projects } from "@/data/projects";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<any[]>([]);
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { playSwoosh, playClick } = useSoundEffects();

  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (search.length > 2) {
      fetch(`/api/search?q=${encodeURIComponent(search)}`)
        .then(res => res.json())
        .then(data => setSearchResults(data))
        .catch(console.error);
    } else {
      setSearchResults([]);
    }
  }, [search]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => {
          if (!open) playSwoosh();
          return !open;
        });
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  // Base system commands
  const commands: { name: string; icon: React.ReactNode; action: () => void; snippet?: string }[] = [
    { name: "Go to Home", icon: <Home className="h-4 w-4" />, action: () => router.push("/") },
    { name: "View All Work", icon: <Briefcase className="h-4 w-4" />, action: () => router.push("/work") },
    { name: "Lab / Experiments", icon: <Code className="h-4 w-4" />, action: () => router.push("/lab") },
    { name: "View Resume", icon: <FileText className="h-4 w-4" />, action: () => router.push("/resume") },
    { name: "Hire Me / Project Inquiry", icon: <Mail className="h-4 w-4" />, action: () => router.push("/hire") },
    { 
      name: "Copy Email Address", 
      icon: <Mail className="h-4 w-4" />, 
      action: () => { navigator.clipboard.writeText("contact@chirag.com"); alert("Email copied!"); } 
    },
    { 
      name: `Switch to Light Mode`, 
      icon: <Sun className="h-4 w-4" />, 
      action: () => setTheme('light') 
    },
    { 
      name: `Switch to Dark Mode`, 
      icon: <Moon className="h-4 w-4" />, 
      action: () => setTheme('dark') 
    },
    { 
      name: `Initialize Matrix Theme`, 
      icon: <Code className="h-4 w-4 text-primary" />, 
      action: () => setTheme('matrix') 
    },
    { name: "View Visitor Analytics (Hidden)", icon: <Activity className="h-4 w-4" />, action: () => router.push("/analytics") },
  ];

  // Map API search results into commands
  searchResults.forEach((res) => {
    commands.push({
      name: `${res.type === 'note' ? 'Read' : 'Project'}: ${res.title}`,
      icon: res.type === 'note' ? <FileText className="h-4 w-4 text-primary" /> : <FolderGit2 className="h-4 w-4 text-primary" />,
      action: () => router.push(res.href),
      snippet: res.snippet
    });
  });

  commands.push({
    name: "Initialize CHIRAG-OS (Terminal)",
    icon: <Code className="h-4 w-4 text-green-500" />,
    action: () => router.push("/terminal")
  });

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) || cmd.snippet
  );

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <div className="w-full max-w-xl bg-card border border-border shadow-2xl rounded-xl overflow-hidden flex flex-col">
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <input
            autoFocus
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-lg"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
          >
            ESC
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground text-sm">
              No results found.
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredCommands.map((cmd, i) => (
                <li key={i}>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors text-left group"
                    onClick={() => {
                      playClick();
                      setIsOpen(false);
                      cmd.action();
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {cmd.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {cmd.name}
                        </span>
                        {(cmd as any).snippet && (
                          <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1 italic">
                            {(cmd as any).snippet}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
