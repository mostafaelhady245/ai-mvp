import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "شروط الاستخدام - دليل أدوات الذكاء الاصطناعي",
};

export default function TermsPage() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-sm text-gray-500 hover:text-black">← رجوع للرئيسية</Link>
            <h1 className="text-4xl font-black mt-6">شروط الاستخدام</h1>

            <div className="mt-8 leading-8 text-gray-700 space-y-6 text-sm">
                <p>باستخدامك لموقع دليل أدوات الذكاء الاصطناعي فأنت توافق على الشروط التالية:</p>
                <h2 className="text-xl font-bold">1. المحتوى</h2>
                <p>كل المحتوى للأغراض التعليمية فقط. نحن نبذل جهدنا لتقديم معلومات دقيقة لكننا لا نضمن أن تكون كل الأسعار والميزات محدثة 100% لأنها قد تتغير من المواقع الرسمية.</p>
                <h2 className="text-xl font-bold">2. الروابط الخارجية</h2>
                <p>لسنا مسؤولين عن أي ضرر أو خسارة ناتجة عن استخدامك للأدوات الخارجية المدرجة في الموقع.</p>
                <h2 className="text-xl font-bold">3. حقوق الملكية</h2>
                <p>جميع الشعارات والأسماء التجارية المذكورة هي ملك لأصحابها. لا يسمح بنسخ محتوى الموقع كاملاً دون إذن.</p>
                <h2 className="text-xl font-bold">4. التعديلات</h2>
                <p>نحتفظ بحق تعديل هذه الشروط في أي وقت.</p>
            </div>
        </div>
    );
}