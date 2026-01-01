export default function PhilosophyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f8] text-[#0d121b] font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#f6f6f8]/90 backdrop-blur border-b border-[#e7ebf3]">
        <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-lg cursor-pointer">
            Aletheia
          </div>

         
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[720px] mx-auto px-6 py-12 md:py-20">
        {/* Document Header */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6 text-sm font-medium uppercase tracking-wider text-gray-400">
            Manifesto v1.2
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-4">
            The Philosophy of Aletheia
          </h1>

          <div className="flex items-center gap-2 text-gray-500 text-base">
            <span>Last updated: October 2023</span>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-gray">
          <p className="text-xl leading-relaxed font-medium mb-8">
            Mental wellness tech has lost its way. We built Aletheia to return to
            the basics: honesty, silence, and human connection. In a world of
            noise, we needed a companion that listens more than it speaks.
          </p>

          <hr className="my-10 border-gray-200" />

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Why Aletheia Exists
            </h2>
            <p className="mb-6">
              Technology has largely become an extraction engine. It mines our
              attention, commodifies our emotions, and gamifies our anxiety. To
              build a tool for mental clarity, we had to reject the standard
              playbook of modern software.
            </p>
            <p>
              Aletheia is designed to be a mirror, not a megaphone. It helps you
              untangle your thoughts through voice, offering reflection without
              prescription.
            </p>
          </section>

          {/* Callout */}
          <div className="my-10 p-5 bg-gray-50 rounded-lg border border-gray-200 flex gap-4 items-start">
            <div className="text-[16px] leading-relaxed text-gray-700">
              <strong className="block mb-1">
                A note on “Engagement”
              </strong>
              We do not track daily active usage as a success metric. If you use
              Aletheia once a month and it brings clarity, that is success. We do
              not want you addicted to our app.
            </div>
          </div>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              What we avoid
            </h2>

            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>
                  <strong>No streaks or gamification:</strong> Mental health is
                  not a high score.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>
                  <strong>No push notifications:</strong> We will never interrupt
                  your day.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>
                  <strong>No social feed:</strong> Your journey is private.
                </span>
              </li>
            </ul>
          </section>

          {/* Quote */}
          <div className="my-12 pl-6 border-l-4 border-[#135bec]/40 italic">
            <p className="text-xl text-gray-600 leading-relaxed">
              “The greatest thing in the world is to know how to belong to
              oneself.”
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
              — Michel de Montaigne
            </p>
          </div>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              The Role of Limits
            </h2>
            <p className="mb-6">
              Aletheia is an AI. It is powerful, but it is not human. We believe
              it is dangerous to pretend otherwise.
            </p>
            <p>
              The system is designed with strict boundaries. It will not pretend
              to have feelings, offer diagnoses, or replace human connection. It
              is a tool for thought — a reflective journal with a voice.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Respecting Mental Space
            </h2>
            <p className="mb-6">
              Your inner life is the most sensitive data you possess. We treat it
              with the reverence it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-2 text-sm uppercase tracking-wide">
                  Privacy First
                </h3>
                <p className="text-sm text-gray-600">
                  Conversations are encrypted. We never sell your data.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-2 text-sm uppercase tracking-wide">
                  Data Ownership
                </h3>
                <p className="text-sm text-gray-600">
                  You own your journal entries and can export or delete them at
                  any time.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* CTA */}
          <div className="text-center py-8">
            <p className="text-lg text-gray-700 mb-6">
              Ready to clear your mind?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#135bec] font-semibold hover:underline underline-offset-4"
            >
              Start your first session →
            </a>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#e7ebf3] py-12 bg-[#f8f9fc]">
        <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div>© 2026 Aletheia Wellness Inc.</div>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-[#0d121b]">Privacy</a>
            <a href="/term" className="hover:text-[#0d121b]">Terms</a>
            <a href="#" className="hover:text-[#0d121b]">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
