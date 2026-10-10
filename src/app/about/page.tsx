// src/app/about/page.tsx
import Link from "next/link";

export const metadata = {
  title: "About - AI MVP",
  description: "The front page of AI - AI MVP is a human-reviewed AI tools directory.",
}

export default function AboutPage() {
  return (
    <main className="bg-[#1a1e2e] text-gray-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-white">Home</Link> <span> / About</span>
        </div>

        <p className="text-xs text-gray-500 mb-2">The front page of AI.</p>
        <h1 className="text-3xl font-bold text-white mb-6">About AI MVP</h1>

        <p className="text-sm leading-6 text-gray-400 mb-8">
          <b className="text-white">AI MVP</b> is a human-reviewed AI tools marketplace. We map 50+ AI tools to help you find the right AI for a specific task.
          Founded to make AI discovery reliable, fast, and fair. We help individuals, professionals and builders find and compare AI tools in seconds.
        </p>

        {/* What AI MVP Does */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">What AI MVP Does</h2>

        <div className="space-y-6 text-sm leading-6">
          <div>
            <h3 className="font-bold text-white">AI Tools Index</h3>
            <p className="text-gray-400">AI MVP lists 50+ AIs, labeled by task, features, and pricing model (100% free, freemium, paid). Users compare alternatives and see what "free" means before signing up.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Task and Job Mapping</h3>
            <p className="text-gray-400">We link tasks and occupations to the tools that perform them, searchable by job, task, or natural language. Users go from "summarize a meeting" to a shortlist of tools.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">AI Ecosystem Database</h3>
            <p className="text-gray-400">We connect tools to the <u>companies</u>, <u>models</u> and <u>categories</u> behind them. Analysts can trace an AI product to its maker and understand models in a few clicks.</p>
          </div>
        </div>

        {/* Table like TAAFT */}
        <h3 className="text-sm font-bold text-white mt-10 mb-3">AI MVP Index coverage</h3>
        <div className="border border-gray-700 rounded overflow-hidden text-xs">
          <div className="flex justify-between bg-[#242840] px-4 py-2 border-b border-gray-700">
            <span className="font-bold text-white">Entity</span><span className="font-bold text-white">Count</span>
          </div>
          {[
            ["Tools", "50+"],
            ["Categories", "10+"],
            ["Tasks", "100+"],
            ["Use Cases", "50+"],
          ].map(([a, b]) => (
            <div key={a} className="flex justify-between px-4 py-2 border-b border-gray-700/50 bg-[#1e2235]">
              <span className="underline">{a}</span><span>{b}</span>
            </div>
          ))}
        </div>

        {/* What Makes Different */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">What Makes AI MVP Different</h2>
        <div className="space-y-4 text-sm leading-6 text-gray-400">
          <p><b className="text-white">Organized by task:</b> Unlike launch sites that rank by launch day, AI MVP indexes AI by the task it performs.</p>
          <p><b className="text-white">Human-reviewed and kept current:</b> Staff review every submission before it goes live. We check functionality, pricing clarity and duplicates.</p>
          <p><b className="text-white">The whole AI ecosystem in one index:</b> Every entry links to the rest of the map.</p>
        </div>

        {/* Who Uses */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">Who Uses AI MVP</h2>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
          <li>Individuals finding AI for personal, work, and creative tasks</li>
          <li>Professionals checking which AI tools cover the tasks in their job</li>
          <li>AI founders and product teams launching and promoting products</li>
          <li>Developers and researchers studying AI tools</li>
        </ul>

        {/* How it Works */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">How AI MVP Works</h2>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
          <li><b className="text-white">Access:</b> Browsing and search are free. Create a free account to save tools and build collections.</li>
          <li><b className="text-white">Listing process:</b> 1. Sourcing → 2. Review (1 to 2 days) → 3. Categorization by tasks → 4. Upkeep and re-test links.</li>
          <li><b className="text-white">Communication:</b> Email <a href="mailto:contact@ai-mvp.com" className="underline">contact@ai-mvp.com</a></li>
        </ul>

        {/* Key Facts Table */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">Key Facts</h2>
        <div className="border border-gray-700 rounded overflow-hidden text-xs">
          {[
            ["Company name", "AI MVP"],
            ["Tagline", "The front page of AI"],
            ["Type", "AI tools marketplace, directory"],
            ["Founded", "2024"],
            ["Founder", "Mostafa Elhady"],
            ["Index size", "50+ tools, 10+ categories"],
            ["Website", "ai-mvp-coral.vercel.app"],
          ].map(([k, v]) => (
            <div key={k} className="flex border-b border-gray-700/50">
              <div className="w-1/3 bg-[#242840] px-4 py-2 font-bold text-white">{k}</div>
              <div className="w-2/3 bg-[#1e2235] px-4 py-2">{v}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-lg font-bold text-white mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-bold text-white">What is AI MVP?</h4>
            <p className="text-gray-400">AI MVP is a curated AI tools directory mapping 50+ AI tools to tasks and jobs.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">How do I get listed or featured on AI MVP?</h4>
            <p className="text-gray-400">Submit your tool via the <Link href="/submit" className="underline">Submit Tool</Link> page. We review every entry in 1-2 days.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-[#242840] rounded-lg border border-gray-700">
          <div className="flex gap-4 text-xs font-bold text-white underline">
            <Link href="/">Find an AI tool</Link>
            <Link href="/submit">Launch your AI tool</Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 border-l-2 border-gray-600 pl-4">
            PS. We still ship with prune like it\'s day one, so you get signal, not noise. <br /> Mostafa
          </p>
        </div>

      </div>
    </main>
  );
}