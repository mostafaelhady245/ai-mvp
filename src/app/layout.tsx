import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "دليل أدوات الذكاء الاصطناعي - أفضل 50 أداة AI",
  description: "اكتشف أفضل 50 أداة ذكاء اصطناعي في مكان واحد - كتابة، صور، فيديو، صوت، تسويق وبرمجة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        {/* محتوى الصفحات */}
        <div className="flex-1">{children}</div>

        {/* الفوتر - الـ 4 صفحات الاجبارية */}
        <footer className="border-t mt-10 py-8 text-center text-sm text-gray-500 bg-white" dir="rtl">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about" className="hover:text-black">من نحن</Link>
            <Link href="/privacy" className="hover:text-black">سياسة الخصوصية</Link>
            <Link href="/contact" className="hover:text-black">اتصل بنا</Link>
            <Link href="/terms" className="hover:text-black">شروط الاستخدام</Link>
          </div>
          <p className="mt-3">© 2026 دليل أدوات الذكاء الاصطناعي - جميع الحقوق محفوظة</p>
        </footer>
      </body>
    </html>
  );
}