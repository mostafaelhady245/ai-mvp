"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
export default function TermsPage() {
    const { lang } = useLang();
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">← {lang === "en" ? "Back" : "رجوع"}</Link>
            <h1 className="text-4xl font-black mt-6">{lang === "en" ? "Terms of Use" : "شروط الاستخدام"}</h1>
            <div className="mt-8 text-sm leading-8 text-gray-700">
                {lang === "en" ? <p>By using this site you agree to our terms. All content is for educational purposes. We are not responsible for external tools.</p> : <p>باستخدامك للموقع توافق على الشروط. المحتوى تعليمي ولسنا مسؤولين عن الأدوات الخارجية.</p>}
            </div>
        </div>
    );
}