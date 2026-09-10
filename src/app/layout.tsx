import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: "Chirag Sharma | Full Stack Gen AI Developer",
  description: "Portfolio of Chirag Sharma. I build fast, responsive web apps with React, Node.js, MongoDB, and AI integrations.",
  keywords: ["Chirag Sharma", "Full Stack Developer", "Gen AI Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Chirag Sharma" }],
  creator: "Chirag Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chirag-webpage.netlify.app/",
    title: "Chirag Sharma | Full Stack Developer",
    description: "Portfolio showcasing React, Node.js, MongoDB projects and AI-powered assistant ASTA.",
    siteName: "Chirag Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sharma | Full Stack Developer",
    description: "Explore my projects, skills and AI assistant ASTA.",
    creator: "@ChiragSharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
