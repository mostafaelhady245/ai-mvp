import { tools } from "../../data/tools"
import Link from "next/link"

export function generateStaticParams() {
    return tools.map((tool) => ({ slug: tool.slug }))
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const tool: any = tools.find(t => t.slug === slug)
    if (!tool) return <div className="p-10 text-center">الأداة غير موجودة</div>

    return (
        <div className="max-w-2xl mx-auto p-8 text-right bg-white min-h-screen" dir="rtl">
            <Link href="/" className="text-gray-500 text-sm">← رجوع لكل الأدوات</Link>
            <div className="text-6xl mt-6">{tool.emoji}</div>
            <h1 className="text-3xl font-black mt-4">{tool.name}</h1>
            <span className="inline-block mt-2 text-xs bg-gray-100 px-3 py-1 rounded-full">{tool.category}</span>
            <p className="text-gray-600 mt-4 leading-7">{tool.desc}</p>
            <a href={tool.link} target="_blank" className="block mt-8 bg-black text-white text-center p-4 rounded-full font-bold hover:bg-gray-800">
                جرب الأداة الآن مجانا →
            </a>
            <p className="text-center text-xs text-gray-400 mt-3">سيتم تحويلك للموقع الرسمي لـ {tool.name}</p>
        </div>
    )
}