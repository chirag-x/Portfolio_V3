"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useSoundEffects } from "@/hooks/useSoundEffects";

type HistoryLine = {
  command: string;
  output: string | React.ReactNode;
};

export default function TerminalPage() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { playTyping, playClick } = useSoundEffects();

  useEffect(() => {
    inputRef.current?.focus();
    setHistory([
      { command: "", output: `Welcome to CHIRAG-OS v1.0.0\nType 'help' to see available commands.` }
    ]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      playClick();
      const cmd = input.trim().toLowerCase();
      let output: string | React.ReactNode = "";

      switch (cmd) {
        case "help":
          output = "Available commands:\n  whoami    - Display profile information\n  ls        - List featured projects\n  cat <prj> - View project details (e.g. cat omnix)\n  contact   - Display email address\n  clear     - Clear terminal\n  exit      - Return to GUI";
          break;
        case "whoami":
          output = `${profile.name}\n${profile.role}\n${profile.tagline}`;
          break;
        case "ls":
          output = projects.filter(p => p.featured || p.flagship).map(p => `${p.slug} - ${p.title}`).join("\n");
          break;
        case "contact":
          output = `Reach out at: ${profile.email}`;
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "exit":
          router.push("/");
          return;
        default:
          if (cmd.startsWith("cat ")) {
            const slug = cmd.split(" ")[1];
            const prj = projects.find(p => p.slug === slug);
            if (prj) {
              output = `${prj.title}\n======================\n${prj.desc}\n\nTech Stack: ${prj.stack.join(", ")}`;
            } else {
              output = `cat: ${slug}: No such project`;
            }
          } else if (cmd) {
            output = `Command not found: ${cmd}. Type 'help' for available commands.`;
          }
      }

      setHistory(prev => [...prev, { command: input, output }]);
      setInput("");
    }
  };

  return (
    <div 
      className="min-h-[calc(100vh-80px)] bg-black text-[#0F0] font-mono p-6 pt-32 cursor-text selection:bg-[#0F0] selection:text-black"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-2 text-sm sm:text-base">
        {history.map((line, i) => (
          <div key={i}>
            {line.command && (
              <div className="flex gap-2">
                <span className="text-[#0F0] font-bold">guest@chirag-os:~$</span>
                <span className="text-white/90">{line.command}</span>
              </div>
            )}
            <div className="whitespace-pre-wrap text-[#0F0]/90 mt-1 mb-2">{line.output}</div>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-[#0F0] font-bold">guest@chirag-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => { playTyping(); setInput(e.target.value); }}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-white font-bold"
            autoFocus
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}
