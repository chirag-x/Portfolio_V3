"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      alert("To install the App:\n\n📱 iOS Safari: Tap the 'Share' icon at the bottom, then scroll down and tap 'Add to Home Screen'.\n\n💻 Desktop: Click the install icon on the right side of your URL bar.");
    }
  };

  return (
    <li>
      <button 
        onClick={handleInstallClick}
        className="hover:text-primary transition-colors flex items-center gap-1.5"
      >
        <Download className="w-3.5 h-3.5" />
        Install App
      </button>
    </li>
  );
}
