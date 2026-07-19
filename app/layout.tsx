import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const TITEL = "OpStap — Niemand om mee op stap te gaan?";
const OMSCHRIJVING = "OpStap koppelt je aan nieuwe mensen die ook vanavond de stad in willen. Check in, wij maken een groep op basis van jouw interesses. Elke avond om 20:00.";

export const metadata: Metadata = {
  metadataBase: new URL("https://opstap.app"),
  title: {
    default: TITEL,
    template: "%s",
  },
  description: OMSCHRIJVING,
  applicationName: "OpStap",
  keywords: ["OpStap", "uitgaan", "nieuwe mensen ontmoeten", "Groningen uitgaan", "samen op stap", "app om mensen te ontmoeten"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITEL,
    description: OMSCHRIJVING,
    url: "https://opstap.app",
    siteName: "OpStap",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpStap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITEL,
    description: OMSCHRIJVING,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#E8611A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OpStap",
              url: "https://opstap.app",
              logo: "https://opstap.app/logo-transparant.png",
              parentOrganization: {
                "@type": "Organization",
                name: "Pascal Services",
              },
              sameAs: [
                "https://www.instagram.com/opstap_app/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
