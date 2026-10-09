"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "ar";

const dict: any = {
    en: {
        heroTitle: "AI Tools Directory",
        heroDesc: "Discover the best 50 AI tools in one place",
        search: "Search for tools like ChatGPT...",
        all: "All", writing: "Writing", image: "Image", video: "Video", voice: "Voice", marketing: "Marketing", code: "Coding",
        viewDetails: "View Details →",
        toolsCount: "Showing",
        tools: "tools",
        back: "← Back to all tools",
        tryNow: "Try Tool Now →",
        redirect: "You will be redirected to the official site of",
        footerRights: "© 2026 AI Tools Directory - All rights reserved",
        about: "About", privacy: "Privacy", contact: "Contact", terms: "Terms", submit: "+ Submit Tool",
        categories: ["All", "Writing", "Image", "Video", "Voice", "Marketing", "Coding"]
    },
    ar: {
        heroTitle: "دليل أدوات الذكاء الاصطناعي",
        heroDesc: "اكتشف أفضل 50 أداة ذكاء اصطناعي في مكان واحد",
        search: "ابحث عن أداة... مثل ChatGPT",
        all: "الكل", writing: "كتابة", image: "صور", video: "فيديو", voice: "صوت", marketing: "تسويق", code: "برمجة",
        viewDetails: "← عرض التفاصيل",
        toolsCount: "عدد الأدوات المعروضة:",
        tools: "",
        back: "← رجوع لكل الأدوات",
        tryNow: "→ جرب الأداة الآن مجاناً",
        redirect: "سيتم تحويلك للموقع الرسمي لـ",
        footerRights: "© 2026 دليل أدوات الذكاء الاصطناعي - جميع الحقوق محفوظة",
        about: "من نحن", privacy: "سياسة الخصوصية", contact: "اتصل بنا", terms: "شروط الاستخدام", submit: "+ اقترح أداتك",
        categories: ["الكل", "كتابة", "صور", "فيديو", "صوت", "تسويق", "برمجة"]
    }
};

const categoryMap: any = {
    "Writing": "كتابة", "Image": "صور", "Video": "فيديو", "Voice": "صوت", "Marketing": "تسويق", "Coding": "برمجة",
    "كتابة": "Writing", "صور": "Image", "فيديو": "Video", "صوت": "Voice", "تسويق": "Marketing", "برمجة": "Coding"
};

const Context = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");
    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang;
        if (saved) setLang(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);
    const t = dict[lang];
    const toggle = () => setLang(lang === "en" ? "ar" : "en");
    return <Context.Provider value={{ lang, t, toggle, categoryMap }}>{children}</Context.Provider>;
}
export const useLang = () => useContext(Context);