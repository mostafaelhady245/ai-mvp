import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools Directory - Best 50 AI Tools",
  description: "Discover best 50 AI tools in one place - Writing, Image, Video, Voice, Marketing and Coding",
  verification: { google: "8FX1rgjijF5BDvcHuoCCw9twWtdSSv7EledwOMP8Imw" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <LanguageProvider>
          <LanguageSwitcher />
          <div className="flex-1">{children}</div>
          <footer className="border-t mt-10 py-8 text-center text-sm text-gray-500 bg-white">
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/submit" className="hover:text-black font-bold">Submit Tool</Link>
              <Link href="/about" className="hover:text-black">About</Link>
              <Link href="/privacy" className="hover:text-black">Privacy</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
              <Link href="/terms" className="hover:text-black">Terms</Link>
            </div>
            <p className="mt-3">© 2026 AI Tools Directory - All rights reserved</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}