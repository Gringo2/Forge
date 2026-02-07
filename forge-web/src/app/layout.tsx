import type { Metadata } from "next";
import { Inter, Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppRegistry } from "@/components/AppRegistry";
import Navbar from "@/components/Navbar";
import SystemFooter from "@/components/SystemFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata = {
  title: "Forge | The Interface Compiler",
  description: "A reactive UI compiler for high-performance web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable} bg-void text-text-primary antialiased selection:bg-magma-start selection:text-white overflow-x-hidden`}>
        <AppRegistry>
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <SystemFooter />
        </AppRegistry>
      </body>
    </html>
  );
}
