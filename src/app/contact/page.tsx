"export const metadata";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
export default function ContactPage() {
    const { lang } = useLang();
    const [sent, setSent] = useState(false);
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">← {lang === "en" ? "Back" : "رجوع"}</Link>
            <h1 className="text-4xl font-black mt-6">{lang === "en" ? "Contact Us" : "اتصل بنا"}</h1>
            {sent ? <div className="mt-8 bg-green-50 p-6 rounded-2xl text-center text-green-700 font-bold">✅ {lang === "en" ? "Message sent!" : "تم الإرسال!"}</div> : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
                    <input required placeholder={lang === "en" ? "Your Name" : "اسمك"} className="w-full border p-3 rounded-xl" />
                    <input required type="email" placeholder="Email" className="w-full border p-3 rounded-xl" />
                    <textarea required rows={5} placeholder={lang === "en" ? "Your message..." : "رسالتك..."} className="w-full border p-3 rounded-xl"></textarea>
                    <button className="w-full bg-black text-white p-4 rounded-full font-bold">{lang === "en" ? "Send Message" : "إرسال الرسالة"}</button>
                </form>
            )}
        </div>
    );
}