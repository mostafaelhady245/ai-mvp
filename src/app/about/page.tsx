import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "من نحن - دليل أدوات الذكاء الاصطناعي",
    description: "تعرف على قصة دليل أدوات الذكاء الاصطناعي وهدفنا لمساعدتك في اختيار أفضل أداة AI",
};

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-sm text-gray-500 hover:text-black">← رجوع للرئيسية</Link>
            <h1 className="text-4xl font-black mt-6">من نحن</h1>
            <p className="text-gray-500 mt-2">دليل أدوات الذكاء الاصطناعي</p>

            <div className="mt-8 leading-8 text-gray-700 space-y-6">
                <p>
                    مرحباً بك في <strong>دليل أدوات الذكاء الاصطناعي</strong>، أكبر دليل عربي يضم أفضل 50+ أداة ذكاء اصطناعي في مكان واحد.
                </p>
                <p>
                    هدفنا هو توفير وقتك ومجهودك. بدلاً من البحث لساعات، جمعنا لك كل الأدوات مصنفة حسب الاستخدام: كتابة، صور، فيديو، صوت، تسويق وبرمجة، مع شرح مبسط لكل أداة ورابط تجربة مباشر.
                </p>
                <h2 className="text-2xl font-bold mt-6">لماذا نحن مختلفون؟</h2>
                <ul className="list-disc pr-6 space-y-2">
                    <li>نحدث القائمة أسبوعياً ونضيف أحدث الأدوات.</li>
                    <li>نشرح كل أداة بالعربي ببساطة بدون تعقيد.</li>
                    <li>نوفر روابط رسمية ومباشرة لتجربة الأدوات.</li>
                    <li>محتوى محايد ونرشح لك الأفضل حسب تجربتنا.</li>
                </ul>
                <h2 className="text-2xl font-bold">تواصل معنا</h2>
                <p>
                    عندك اقتراح لأداة جديدة؟ راسلنا على صفحة <Link href="/contact" className="text-blue-600 underline">اتصل بنا</Link>
                </p>
            </div>
        </div>
    );
}