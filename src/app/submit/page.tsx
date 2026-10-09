"use client";
import { useState } from "react";
import Link from "next/link";

export default function SubmitPage() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", link: "", desc: "", cat: "كتابة", email: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // هيفتح الايميل عندك فيه بيانات الأداة
        const subject = `طلب اضافة أداة جديدة: ${form.name}`;
        const body = `اسم الأداة: ${form.name}%0Aالرابط: ${form.link}%0Aالتصنيف: ${form.cat}%0Aالوصف: ${form.desc}%0Aايميل صاحب الأداة: ${form.email}`;
        window.location.href = `mailto:support@dalil-ai.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    if (sent) {
        return (
            <div className="max-w-2xl mx-auto p-8 bg-white min-h-screen text-center" dir="rtl">
                <Link href="/" className="text-sm text-gray-500">← رجوع للرئيسية</Link>
                <h1 className="text-3xl font-black mt-6">✅ تم استلام طلبك!</h1>
                <p className="text-gray-600 mt-3">سيتم مراجعة الأداة و الرد عليك خلال 24 ساعة. شكرا لك!</p>
                <p className="text-xs text-gray-400 mt-2">تم فتح بريدك الالكتروني تلقائيا، لو مفتحش ابعتلنا على support@dalil-ai.com</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-sm text-gray-500 hover:text-black">← رجوع للرئيسية</Link>
            <h1 className="text-4xl font-black mt-6">اقترح أداة جديدة 🚀</h1>
            <p className="text-gray-500 mt-2">عندك أداة ذكاء اصطناعي؟ اعرضها على آلاف الزوار يومياً</p>

            {/* الباقات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="border p-5 rounded-2xl">
                    <h3 className="font-bold">مجاني - Free</h3>
                    <p className="text-2xl font-black mt-2">$0</p>
                    <ul className="text-sm text-gray-600 mt-3 space-y-1">
                        <li>✓ اضافة عادية في الدليل</li>
                        <li>✓ تظهر خلال 3-5 أيام</li>
                    </ul>
                </div>
                <div className="border-2 border-black p-5 rounded-2xl bg-black text-white">
                    <h3 className="font-bold">مميز - Featured 🔥</h3>
                    <p className="text-2xl font-black mt-2">$49 / شهر</p>
                    <ul className="text-sm mt-3 space-y-1">
                        <li>✓ تظهر أول الصفحة + علامة ⭐</li>
                        <li>✓ نشر في النشرة البريدية</li>
                        <li>✓ قبول خلال 24 ساعة</li>
                    </ul>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                    <label className="block text-sm font-bold mb-2">اسم الأداة *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="مثال: ChatGPT" className="w-full border p-3 rounded-xl" />
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">رابط الأداة *</label>
                    <input required type="url" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} placeholder="https://..." className="w-full border p-3 rounded-xl" />
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">التصنيف *</label>
                    <select value={form.cat} onChange={e => setForm({ ...form, cat: e.target.value })} className="w-full border p-3 rounded-xl">
                        <option>كتابة</option><option>صور</option><option>فيديو</option><option>صوت</option><option>تسويق</option><option>برمجة</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">وصف مختصر *</label>
                    <textarea required rows={3} value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} placeholder="ماذا تفعل الأداة؟" className="w-full border p-3 rounded-xl"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">ايميلك *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@mail.com" className="w-full border p-3 rounded-xl" />
                </div>
                <button type="submit" className="w-full bg-black text-white p-4 rounded-full font-bold hover:bg-gray-800">إرسال الطلب →</button>
                <p className="text-center text-xs text-gray-400">للإعلان المميز راسلنا بعد الإرسال على almostafaalhady913@gmail.com</p>
            </form>
        </div>
    );
}