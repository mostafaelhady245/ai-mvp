"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
export default function PrivacyPage() {
    const { lang } = useLang();
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">← {lang === "en" ? "Back" : "رجوع"}</Link>
            <h1 className="text-4xl font-black mt-6">{lang === "en" ? "Privacy Policy" : "سياسة الخصوصية"}</h1>
            <p className="text-sm text-gray-400 mt-2">Last updated: Oct 10, 2026</p>
            <div className="mt-8 leading-8 text-gray-700 space-y-4 text-sm">
                {lang === "en" ? (
                    <><p>We respect your privacy. We use Google Analytics and AdSense cookies to improve experience.</p><p>We use affiliate links; we may earn a commission at no extra cost to you.</p></>
                ) : (
                    <><p>نحترم خصوصيتك، نستخدم Google Analytics وملفات الكوكيز لتحسين تجربتك.</p><p>نستخدم روابط افلييت قد نحصل على عمولة بدون تكلفة عليك.</p></>
                )}
            </div>
        </div>
    );
}