"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";

export default function SubmitPage() {
    const { lang } = useLang();
    const [sent, setSent] = useState(false);

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">{lang === "en" ? "Back" : "رجوع"}</Link>
            <h1 className="text-4xl font-black mt-6">{lang === "en" ? "Submit a Tool" : "اقترح أداة"}</h1>
            <p className="text-gray-500 mt-2">{lang === "en" ? "Suggest a new AI tool to be added to the directory." : "اقترح أداة ذكاء اصطناعي جديدة لإضافتها للدليل."}</p>

            {sent ? (
                <div className="mt-8 bg-green-50 p-6 rounded-2xl text-center text-green-700 font-bold">
                    ✓ {lang === "en" ? "Thank you! We will review your tool soon." : "شكرا لك! سنراجع أداتك قريبا."}
                </div>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
                    <input required placeholder={lang === "en" ? "Tool Name" : "اسم الأداة"} className="w-full border p-3 rounded-xl" />
                    <input required type="url" placeholder={lang === "en" ? "Tool Link (https://...)" : "رابط الأداة"} className="w-full border p-3 rounded-xl" />
                    <select required className="w-full border p-3 rounded-xl">
                        <option value="">{lang === "en" ? "Select Category" : "اختر الفئة"}</option>
                        <option>Writing / كتابة</option>
                        <option>Image / صور</option>
                        <option>Video / فيديو</option>
                        <option>Voice / صوت</option>
                        <option>Marketing / تسويق</option>
                        <option>Coding / برمجة</option>
                    </select>
                    <textarea required rows={5} placeholder={lang === "en" ? "Tool description..." : "وصف الأداة..."} className="w-full border p-3 rounded-xl"></textarea>
                    <button className="w-full bg-black text-white p-4 rounded-full font-bold">
                        {lang === "en" ? "Submit Tool" : "إرسال الأداة"}
                    </button>
                </form>
            )}
        </div>
    );
}