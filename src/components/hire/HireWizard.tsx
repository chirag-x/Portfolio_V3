"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Bot, Send, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HireWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
    email: ""
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [proposal, setProposal] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const sendInquiry = async () => {
    setIsSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Project Inquiry",
          email: formData.email,
          message: `Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nDetails: ${formData.details}\n\nAI Proposal:\n${proposal}`
        })
      });
      setIsSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const generateProposal = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      
      setProposal(data.proposal);
      setStep(5);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-muted w-full">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "20%" }}
          animate={{ width: `\${(step / 5) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-2xl font-bold mb-6">1. What kind of project are we building?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["AI Integration / Agent", "Full-Stack Web App", "Mobile Application", "Technical Consultation"].map(type => (
                <button
                  key={type}
                  onClick={() => { setFormData({ ...formData, projectType: type }); handleNext(); }}
                  className={`p-4 text-left rounded-xl border transition-all \${formData.projectType === type ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50 bg-muted/20'}`}
                >
                  <span className="font-medium">{type}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-2xl font-bold mb-6">2. What is your estimated budget?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["<$1,000", "$1,000 - $5,000", "$5,000 - $15,000", "$15,000+"].map(budget => (
                <button
                  key={budget}
                  onClick={() => { setFormData({ ...formData, budget }); handleNext(); }}
                  className={`p-4 text-left rounded-xl border transition-all \${formData.budget === budget ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50 bg-muted/20'}`}
                >
                  <span className="font-medium">{budget}</span>
                </button>
              ))}
            </div>
            <button onClick={handlePrev} className="mt-8 text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-2xl font-bold mb-6">3. What is your timeline?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Rush (1-2 weeks)", "Standard (1-2 months)", "Long-term (3+ months)", "Flexible"].map(time => (
                <button
                  key={time}
                  onClick={() => { setFormData({ ...formData, timeline: time }); handleNext(); }}
                  className={`p-4 text-left rounded-xl border transition-all \${formData.timeline === time ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50 bg-muted/20'}`}
                >
                  <span className="font-medium">{time}</span>
                </button>
              ))}
            </div>
            <button onClick={handlePrev} className="mt-8 text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-2xl font-bold mb-2">4. Tell me about the idea.</h2>
            <p className="text-muted-foreground mb-6">Briefly describe what we are building. The AI will read this to draft your proposal.</p>
            
            <textarea 
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="I want to build a SaaS platform that..."
              className="w-full h-32 bg-muted/20 border border-border rounded-xl p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none mb-4"
            />

            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email Address"
              className="w-full bg-muted/20 border border-border rounded-xl p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary mb-6"
            />

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <div className="flex items-center justify-between">
              <button onClick={handlePrev} className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={generateProposal}
                disabled={!formData.details || !formData.email || isGenerating}
                className="bg-foreground text-background px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {isGenerating ? "Drafting Architecture..." : "Generate Proposal"}
              </button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 text-primary rounded-full">
                <Bot className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">AI-Generated Proposal Overview</h2>
            </div>
            
            <div className="prose prose-invert max-w-none bg-muted/10 border border-border/50 p-6 rounded-2xl mb-8 text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
              {proposal}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={sendInquiry}
                disabled={isSending || isSent}
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : isSent ? <CheckCircle2 className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                {isSending ? "Sending..." : isSent ? "Sent Successfully!" : "Send Inquiry to Chirag"}
              </button>
              <button onClick={() => { setStep(1); setIsSent(false); setFormData({...formData, details: ""}) }} className="text-muted-foreground hover:text-foreground text-sm font-medium">
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
