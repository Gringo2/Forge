import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forge | The Interface Compiler",
  description: "Transforming structure through heat. Forge is the premier interface coordination system for the System Zero ecosystem.",
  keywords: ["Interface Compiler", "System Zero", "Reactive Design", "Infrastructure", "Industrial Design"],
  openGraph: {
    title: "Forge | The Interface Compiler",
    description: "Industrial-grade interface coordination system.",
    type: "website",
    locale: "en_US",
    url: "https://forge.systemzero.io",
    siteName: "Forge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge | The Interface Compiler",
    description: "Industrial-grade interface coordination system.",
    creator: "@systemzero",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-magma-start/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
