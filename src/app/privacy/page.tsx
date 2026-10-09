import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "سياسة الخصوصية - دليل أدوات الذكاء الاصطناعي",
    description: "سياسة الخصوصية الخاصة بموقع دليل أدوات الذكاء الاصطناعي",
};

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-sm text-gray-500 hover:text-black">← رجوع للرئيسية</Link>
            <h1 className="text-4xl font-black mt-6">سياسة الخصوصية</h1>
            <p className="text-sm text-gray-400 mt-2">آخر تحديث: 10 أكتوبر 2026</p>

            <div className="mt-8 leading-8 text-gray-700 space-y-6 text-sm">
                <p>نحن في دليل أدوات الذكاء الاصطناعي نحترم خصوصيتك بشكل كامل.</p>

                <h2 className="text-xl font-bold">1. المعلومات التي نجمعها</h2>
                <p>نحن لا نجمع أي معلومات شخصية حساسة. قد نستخدم Google Analytics لمعرفة عدد الزيارات والصفحات الأكثر زيارة لتحسين تجربتك.</p>

                <h2 className="text-xl font-bold">2. ملفات تعريف الارتباط Cookies</h2>
                <p>نستخدم ملفات الكوكيز لتحسين تجربة التصفح وعرض إعلانات مناسبة لك عبر Google AdSense. يمكنك تعطيل الكوكيز من إعدادات المتصفح في أي وقت.</p>

                <h2 className="text-xl font-bold">3. إعلانات جوجل أدسنس</h2>
                <p>نستخدم شركة Google كطرف ثالث لعرض الإعلانات. تستخدم Google ملف تعريف الارتباط DART لعرض الإعلانات بناءً على زياراتك لمواقع أخرى.</p>

                <h2 className="text-xl font-bold">4. الروابط الخارجية والافلييت</h2>
                <p>موقعنا يحتوي على روابط لأدوات خارجية. عند الضغط على رابط أفلييت وشراء الخدمة قد نحصل على عمولة بدون أي تكلفة إضافية عليك. نحن لا نتحمل مسؤولية سياسات خصوصية تلك المواقع.</p>

                <h2 className="text-xl font-bold">5. تواصل معنا</h2>
                <p>لأي استفسار حول الخصوصية راسلنا عبر <Link href="/contact" className="text-blue-600 underline">صفحة اتصل بنا</Link></p>
            </div>
        </div>
    );
}