import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaogabriel.dev"),

  title: {
    default: "João Gabriel | Desenvolvedor Full Stack",
    template: "%s | João Gabriel",
  },
  description:
    "Engenheiro de Software e Desenvolvedor Full Stack especializado em React e Next.js.",
  keywords: [
    "Desenvolvedor",
    "Engenharia de Software",
    "Next.js",
    "React",
    "Portfólio",
    "João Gabriel",
    "Desenvolvedor Full Stack",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "Desenvolvimento Web",
    "Freelancer",
    "Front-end",
    "Brasil",
  ],

  authors: [{ name: "João Gabriel", url: "https://joaogabriel.dev" }],
  creator: "João Gabriel",
  publisher: "João Gabriel",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "João Gabriel | Desenvolvedor Full Stack",
    description:
      "Transformando ideias em código. Confira meus projetos e soluções em Engenharia de Software.",
    url: "https://joaogabriel.dev",
    siteName: "Portfolio - João Gabriel Dev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "João Gabriel - Desenvolvedor Full Stack",
      },
    ],
  },

  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },

  verification: {
    google: "",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "João Gabriel",
    url: "https://joaogabriel.dev",
    jobTitle: "Engenheiro de Software",
    image: "https://joaogabriel.dev/og-image.png",
    sameAs: [
      "https://github.com/joaogabrieldev",
      "https://www.linkedin.com/in/joaogabrielrocha/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Engenharia de Software",
      "Desenvolvimento Web",
    ],
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
