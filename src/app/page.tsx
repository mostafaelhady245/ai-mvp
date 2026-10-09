"use client";
import { useState, useEffect } from "react";
import { tools } from "./data/tools";
import Link from "next/link";
import { useLang } from "./context/LanguageContext";
export default function Home() {
  const { lang, t } = useLang();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(t.all);

  useEffect(() => {
    setCat(t.all);
  }, [lang, t.all]);

  const categories_en = ["All", "Writing", "Image", "Video", "Voice", "Marketing", "Coding"];
  const categories_ar = ["الكل", "كتابة", "صور", "فيديو", "صوت", "تسويق", "برمجة"];
  const categories = lang === "en" ? categories_en : categories_ar;

  const filtered = tools.filter(tool => {
    const catEn = (tool as any).category_en || (tool as any).category;
    const catAr = (tool as any).category_ar || (tool as any).category;
    const currentCat = lang === "en" ? catEn : catAr;
    const desc = lang === "en" ? (tool as any).desc_en : (tool as any).desc_ar;
    return (cat === t.all || currentCat === cat) &&
      (tool.name.toLowerCase().includes(q.toLowerCase()) || desc.includes(q));
  });

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="max-w-6xl mx-auto text-center py-10">
        <h1 className="text-4xl font-black">{t.heroTitle}</h1>
        <p className="text-gray-500 mt-2">{t.heroDesc}</p>
        <input placeholder={t.search} value={q} onChange={e => setQ(e.target.value)} className="w-full max-w-xl mx-auto mt-6 border p-3 rounded-full text-center" />
        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} className={cat === c ? "px-4 py-2 rounded-full text-sm bg-black text-white" : "px-4 py-2 rounded-full text-sm bg-white border"}>{c}</button>
          ))}
        </div>
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(tool => {
          const desc = lang === "en" ? (tool as any).desc_en : (tool as any).desc_ar;
          const catName = lang === "en" ? (tool as any).category_en : (tool as any).category_ar;
          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="bg-white p-6 rounded-2xl border hover:shadow-xl transition text-right">
              <div className="text-3xl">{tool.emoji}</div>
              <h3 className="font-bold text-lg mt-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>
              <span className="inline-block mt-3 text-xs bg-gray-100 px-2 py-1 rounded">{catName}</span>
              <span className="block mt-3 text-blue-600 text-sm">{t.viewDetails}</span>
            </Link>
          )
        })}
      </div>
      <p className="text-center text-gray-400 mt-10">{t.toolsCount} {filtered.length} {t.tools}</p>
    </main>
  );
}