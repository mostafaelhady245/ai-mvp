"use client"
import { useState } from "react"
import { tools } from "./data/tools"
import Link from "next/link"

export default function Home() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("الكل")
  const categories = ["الكل", "كتابة", "صور", "فيديو", "صوت", "تسويق", "برمجة"]
  const filtered = tools.filter(t =>
    (cat === "الكل" || t.category === cat) &&
    (t.name.toLowerCase().includes(q.toLowerCase()) || t.desc.includes(q))
  )
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8" dir="rtl">
      <header className="max-w-6xl mx-auto text-center py-10">
        <h1 className="text-4xl font-black">دليل أدوات الذكاء الاصطناعي</h1>
        <p className="text-gray-500 mt-2">اكتشف أفضل 50 أداة AI في مكان واحد</p>
        <input placeholder="ابحث عن اداة... مثل ChatGPT" value={q} onChange={e => setQ(e.target.value)} className="w-full max-w-xl mx-auto mt-6 p-4 rounded-full border shadow-sm text-center" />
        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} className={cat === c ? "px-4 py-2 rounded-full text-sm bg-black text-white" : "px-4 py-2 rounded-full text-sm bg-white border"}>{c}</button>
          ))}
        </div>
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(tool => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`} className="bg-white p-6 rounded-2xl border hover:shadow-xl transition text-right">
            <div className="text-3xl">{tool.emoji}</div>
            <h3 className="font-bold text-lg mt-2">{tool.name}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{tool.desc}</p>
            <span className="inline-block mt-3 text-xs bg-gray-100 px-2 py-1 rounded">{tool.category}</span>
            <span className="block mt-3 text-blue-600 text-sm">عرض التفاصيل ←</span>
          </Link>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-10">عدد الأدوات المعروضة: {filtered.length}</p>
    </main>
  )
}