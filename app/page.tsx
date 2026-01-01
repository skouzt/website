import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-sans flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 space-y-20">

        {/* HERO */}
        <section className="space-y-6">
          <div className="mb-4">
            <Image
              src="/illustrations/fox.svg"
              alt="Calm animal illustration"
              width={48}
              height={48}
              priority
            />
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Aletheia — a calm place to think out loud
          </h1>

          <h2 className="text-xl text-gray-600 max-w-2xl">
            A voice-first AI companion for reflection and emotional clarity.
            Not therapy. Not crisis support.
          </h2>

          <p className="text-lg leading-relaxed max-w-2xl">
            Aletheia helps you slow down and hear your own thoughts more clearly.
            You speak naturally. It responds thoughtfully. You pause when it feels right.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
              Try Aletheia
            </button>

            <Link
              href="/philosophy"
              className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-lg text-sm"
            >
              Read the philosophy
            </Link>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* WHAT THIS APP IS FOR */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">What this app is for</h3>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Speaking instead of typing",
                desc: "When thoughts feel tangled and you need to get them out verbally.",
              },
              {
                title: "Short, intentional conversations",
                desc: "Helping you find the right words for your feelings in minutes, not hours.",
              },
              {
                title: "Gentle reflection without diagnosis",
                desc: "A mirror for your thoughts, not a doctor analyzing your mind.",
              },
              {
                title: "Organizing what you feel",
                desc: "Structure your internal monologue into something coherent and actionable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border border-gray-200 bg-white"
              >
                <p className="text-[17px] leading-relaxed">
                  <strong className="block mb-2">{item.title}</strong>
                  <span className="text-gray-600">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT THIS APP IS NOT */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold">What this app is not</h3>

          <div className="bg-gray-100 p-7 rounded-lg border-l-4 border-gray-400">
            <ul className="space-y-3">
              <li className="text-[17px] font-medium">☐ Not therapy or medical advice</li>
              <li className="text-[17px] font-medium">☐ Not a replacement for human connection</li>
              <li className="text-[17px] font-medium">☐ Not for emergencies or crisis situations</li>
              <li className="text-[17px] font-medium">☐ Not designed for endless conversations</li>
            </ul>

            <p className="mt-6 pt-5 border-t border-gray-300 text-[15px] italic text-gray-600">
              Please seek professional help if you are in crisis. Aletheia is a tool
              for self-reflection, not a mental health service.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* HOW IT WORKS */}
        <section className="space-y-10">
          <h3 className="text-2xl font-semibold">How it works</h3>

          {[
            {
              step: "1",
              title: "You speak naturally",
              desc: "No typing required. Just talk as if you were thinking out loud.",
            },
            {
              step: "2",
              title: "Aletheia responds with calm reflection",
              desc: "It reflects your thoughts back with structure and clarity.",
            },
            {
              step: "3",
              title: "You stop when it feels complete",
              desc: "No streaks. No engagement loops. Use it and leave.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <span className="text-4xl font-mono text-gray-400 font-bold">
                {item.step}
              </span>
              <div>
                <strong className="text-lg block mb-2">{item.title}</strong>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* LIMITS */}
        <section>
          <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-gray-300">
            <h3 className="text-lg font-bold mb-2">
              Designed with limits, on purpose
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We built Aletheia to be put down. Daily caps, gentle reminders,
              and no algorithms optimizing for your time.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* PRICING PREVIEW */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold">Pricing</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 bg-white">
              <h4 className="font-bold text-lg">Guided Plan</h4>
              <p className="text-3xl font-bold mt-2">
                $15 <span className="text-sm text-gray-500">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Up to 1 hour per day</li>
                <li>✓ Designed for intentional use</li>
              </ul>
              <Link
                href="/pricing"
                className="mt-6 inline-block w-full py-3 bg-gray-900 text-white rounded-lg text-sm text-center hover:bg-gray-800"
              >
                View pricing
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
              <h4 className="font-bold text-lg text-gray-400">Extended Plan</h4>
              <p className="text-3xl font-bold mt-2">
                $50 <span className="text-sm text-gray-500">/month</span>
              </p>
              <p className="mt-4 text-sm text-gray-500 italic">
                Priced intentionally to discourage overuse
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER — ONLY NAVIGATION */}
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-6 text-sm text-gray-600">
          <div className="flex flex-wrap gap-6">
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/philosophy" className="hover:text-gray-900">Philosophy</Link>
            <Link href="/term" className="hover:text-gray-900">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/refund" className="hover:text-gray-900">Refund</Link>
          </div>
          <p>© 2024 Aletheia</p>
        </div>
      </footer>
    </div>
  );
}
