"use client";
import { useLang } from "../context/LanguageContext";
export default function LanguageSwitcher() {
    const { lang, toggle } = useLang();
    return (
        <button onClick={toggle} className="fixed top-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {lang === "en" ? "العربية 🇸🇦" : "English 🇺🇸"}
        </button>
    );
}