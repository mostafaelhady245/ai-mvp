"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
export default function AboutPage() {
    const { lang } = useLang();
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">← {lang === "en" ? "Back" : "رجوع للرئيسية"}</Link>
            <h1 className="text-4xl font-black mt-6">{lang === "en" ? "About Us" : "من نحن"}</h1>
            <div className="mt-8 leading-8 text-gray-700 space-y-6">
                {lang === "en" ? (
                    <>
                        <p>Welcome to <strong>AI Tools Directory</strong>, the largest directory for 50+ AI tools in one place.</p>
                        <p>Our mission is to save your time. We categorize tools by use case: Writing, Image, Video, Voice, Marketing & Coding.</p>
                    </>
                ) : (
                    <>
                        <p>مرحبا بك في <strong>دليل أدوات الذكاء الاصطناعي</strong> أكبر دليل عربي يضم أفضل 50+ أداة.</p>
                        <p>هدفنا توفير وقتك، جمعنا كل الأدوات مصنفة حسب الاستخدام مع شرح مبسط ورابط مباشر.</p>
                    </>
                )}
            </div>
        </div>
    );
}