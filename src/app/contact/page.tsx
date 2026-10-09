"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-sm text-gray-500 hover:text-black">← رجوع للرئيسية</Link>
            <h1 className="text-4xl font-black mt-6">اتصل بنا</h1>
            <p className="text-gray-500 mt-2">نرد عليك خلال 24 ساعة</p>

            {sent ? (
                <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-2xl text-center">
                    <p className="text-green-700 font-bold text-lg">✅ تم إرسال رسالتك بنجاح!</p>
                    <p className="text-sm text-gray-500 mt-2">شكراً لتواصلك معنا</p>
                </div>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">الاسم</label>
                        <input required placeholder="اسمك الكريم" className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">البريد الإلكتروني</label>
                        <input required type="email" placeholder="example@mail.com" className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">الرسالة</label>
                        <textarea required rows={5} placeholder="اكتب رسالتك هنا..." className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-black text-white p-4 rounded-full font-bold hover:bg-gray-800 transition">
                        إرسال الرسالة
                    </button>
                </form>
            )}

            <div className="mt-8 text-center text-sm text-gray-400">
                <p>أو راسلنا مباشرة على: almostafaalhady913@gmail.com</p>
            </div>
        </div>
    );
}