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
  metadataBase: new URL('https://chirag-webpage.netlify.app'),
  title: {
    default: "Chirag Sharma | Full-Stack AI Developer in Gwalior",
    template: "%s | Chirag Sharma"
  },
  description: "Chirag Sharma is a Full-Stack Gen AI Developer based in Gwalior, India. Specializing in Next.js, React, Node.js, and autonomous AI agents like OMNIX.",
  keywords: [
    "Chirag Sharma", "Chirag", "Chirag Gwalior", "Chirag Sharma Gwalior", "Web Developer Gwalior", "Software Engineer Gwalior",
    "Full Stack Developer Gwalior", "Freelance Developer Gwalior", "Gwalior IT student", "RJIT Gwalior",
    "Gen AI Developer", "AI Automation", "AI Agent Developer", "Next.js Developer", "React Developer",
    "Vertex Studio Gwalior", "Web Agency Gwalior"
  ],
  authors: [{ name: "Chirag Sharma", url: "https://chirag-webpage.netlify.app" }],
  creator: "Chirag Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chirag-webpage.netlify.app/",
    title: "Chirag Sharma | Web & AI Automation Systems",
    description: "Portfolio of Chirag Sharma, Gwalior-based Full-Stack & Gen AI Developer. View case studies on AI automation (OMNIX) and business web development (Vertex Studio).",
    siteName: "Chirag Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sharma | Full-Stack & AI Developer",
    description: "Explore my work in AI agents, full-stack web products, and automation systems.",
    creator: "@ChiragSharma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chirag Sharma",
  "url": "https://chirag-webpage.netlify.app/",
  "jobTitle": "Full-Stack AI Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gwalior",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "RJIT Gwalior"
  },
  "sameAs": [
    "https://github.com/chirag-x",
    "https://www.linkedin.com/in/chirag-sharma/"
  ],
  "knowsAbout": ["Web Development", "Artificial Intelligence", "Next.js", "React", "Python", "Autonomous Agents"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
