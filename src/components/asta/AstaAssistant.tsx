"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Loader2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What is Vertex Studio?",
  "Tell me about OMNIX",
  "Show me featured work",
  "How to contact him?",
];

export default function AstaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "I am ASTA — Portfolio Intelligence. Ask me anything about Chirag's work, experience, or let me navigate the site for you." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    // Fast local routing interceptor
    const lowerText = text.toLowerCase();
    if (lowerText.includes("omnix")) {
      router.push("/work/omnix");
    } else if (lowerText.includes("vertex") || lowerText.includes("studio") || lowerText.includes("agency")) {
      router.push("/work/vertex-studio");
    } else if (lowerText.includes("contact") || lowerText.includes("hire") || lowerText.includes("email") || lowerText.includes("connect")) {
      router.push("/contact");
    } else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("build") || lowerText.includes("featured")) {
      router.push("/work");
    } else if (lowerText.includes("about") || lowerText.includes("background") || lowerText.includes("who is")) {
      router.push("/about");
    } else if (lowerText.includes("service") || lowerText.includes("offer")) {
      router.push("/services");
    } else if (lowerText.includes("lab") || lowerText.includes("experiment") || lowerText.includes("prototype")) {
      router.push("/lab");
    } else if (lowerText.includes("faq") || lowerText.includes("question")) {
      router.push("/faq");
    }

    const userMessage = { role: "user" as const, content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      
      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "System connection interrupted. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            data-cursor="ask"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/20 flex items-center justify-center z-50 overflow-hidden group"
            aria-label="Open ASTA Intelligence"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat group-hover:animate-shimmer" />
            <Sparkles className="h-6 w-6 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[85vh] bg-background/80 backdrop-blur-2xl border border-border shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                  <Sparkles className="h-5 w-5" />
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_4s_linear_infinite]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">ASTA INTELLIGENCE</h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    System Active
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm" 
                      : "bg-muted/50 border border-border text-foreground rounded-2xl rounded-tl-sm font-medium"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted/50 border border-border text-foreground rounded-2xl rounded-tl-sm px-5 py-4">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {SUGGESTIONS.map((sug, idx) => (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    key={sug}
                    onClick={() => handleSend(sug)}
                    className="text-xs font-medium bg-background border border-border rounded-full px-4 py-2 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {sug}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-border/50 bg-muted/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query ASTA..."
                  className="flex-1 bg-background border border-border rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-muted-foreground/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
                >
                  <Send className="h-4 w-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
