import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "OpStap — Niemand om mee op stap te gaan?",
  description: "OpStap koppelt je aan nieuwe mensen die ook vanavond de stad in willen. Check in, wij maken een groep op basis van jouw interesses. Elke avond om 22:00.",
  openGraph: {
    title: "OpStap — Niemand om mee op stap te gaan?",
    description: "Check in, wij maken een groep op basis van jouw interesses. Elke avond om 22:00.",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/logo-transparant.png",
        width: 1200,
        height: 630,
        alt: "OpStap logo",
      },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
