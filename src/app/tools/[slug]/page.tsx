"use client";
import { Suspense } from "react";
import { tools } from "../../data/tools";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLang } from "../../context/LanguageContext";


function ToolContent() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const tool: any = tools.find((tool) => tool.slug === slug);
    if (!tool) return <div className="p-10 text-center">Tool not found / الأداة غير موجودة</div>;
    const desc = lang === "en" ? tool.desc_en : tool.desc_ar;
    const cat = lang === "en" ? tool.category_en : tool.category_ar;

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white min-h-screen text-center" dir={lang === "ar" ? "rtl" : "ltr"}>
            <Link href="/" className="text-sm text-gray-500">{t.back}</Link>
            <div className="text-6xl mt-6">{tool.emoji}</div>
            <h1 className="text-3xl font-black mt-4">{tool.name}</h1>
            <span className="inline-block mt-2 text-xs bg-gray-100 px-3 py-1 rounded-full">{cat}</span>
            <p className="text-gray-600 mt-4 leading-7">{desc}</p>
            <a href={tool.link} target="_blank" className="block mt-8 bg-black text-white p-4 rounded-full font-bold">{t.tryNow}</a>
            <p className="text-center text-xs text-gray-400 mt-3">{t.redirect} {tool.name}</p>
        </div>
    );
}

export default function ToolPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <ToolContent />
        </Suspense>
    );
}