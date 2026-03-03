import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const featureCards = [
  {
    title: "Voice-first reflection",
    description:
      "Talk naturally when your thoughts are messy. Aletheia helps you slow down and sort what you feel.",
  },
  {
    title: "Intentional sessions",
    description:
      "Designed for short check-ins, not endless scrolling or engagement loops.",
  },
  {
    title: "Gentle structure",
    description:
      "Prompts are calm and focused so your inner monologue becomes clearer and more usable.",
  },
  {
    title: "Private by default",
    description:
      "Built around sensitive conversations with careful wording and clear limits.",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Start speaking",
    description: "Open a session and talk as if you are thinking out loud.",
  },
  {
    label: "Step 2",
    title: "Get reflective prompts",
    description: "Aletheia responds with calm prompts to help you organize thoughts.",
  },
  {
    label: "Step 3",
    title: "Pause and continue your day",
    description: "Close when it feels complete. The product is designed to be put down.",
  },
];

const audienceCards = [
  {
    title: "People who overthink at night",
    description:
      "Use short voice sessions to clear mental loops before they spiral.",
  },
  {
    title: "Busy professionals",
    description:
      "Process stress in minutes between meetings instead of carrying it all day.",
  },
  {
    title: "Anyone building emotional vocabulary",
    description:
      "Get a calmer way to name feelings and move toward clarity.",
  },
];

const principles = [
  {
    title: "No engagement traps",
    description:
      "No streaks, no addictive mechanics, and no pressure to stay in the app.",
  },
  {
    title: "Boundaries are a feature",
    description:
      "Limits exist to keep reflection healthy and integrated with real life.",
  },
  {
    title: "Human care still matters",
    description:
      "Aletheia complements your life. It does not replace therapy or human support.",
  },
];

const faqs = [
  {
    question: "Is this therapy?",
    answer:
      "No. Aletheia is a reflection tool for emotional clarity, not clinical treatment.",
  },
  {
    question: "How long should one session be?",
    answer:
      "Most people use it for short check-ins of a few minutes when they need perspective.",
  },
  {
    question: "Can I use it in a crisis?",
    answer:
      "No. If you are in immediate danger or crisis, contact emergency services right away.",
  },
  {
    question: "Where can I view subscription options?",
    answer:
      "Open the pricing page to compare plans and continue to the subscription checkout.",
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col text-[#1b2430]">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-16 pt-10 md:pt-14">
        <section className="reveal-down relative overflow-hidden rounded-[2rem] border border-[#d4dbe8] bg-[#fffdf7] p-6 shadow-[0_18px_50px_rgba(23,38,65,0.09)] md:p-10">
          <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#ffefc8] blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dceeff] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-[#ccd5e4] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6f83]">
                Aletheia
              </p>

              <h1 className="max-w-2xl text-4xl leading-tight text-[#152238] md:text-6xl">
                A calmer way to hear your own thoughts.
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-[#425268] md:text-xl">
                A voice-first companion for emotional clarity and reflection.
                Talk naturally, get grounded prompts, and stop when it feels complete.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={siteContent.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-[#1967e8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1356c2]"
                >
                  Get it on Google Play
                </a>

                <Link
                  href="/philosophy"
                  className="inline-flex items-center rounded-xl border border-[#b9c4d8] bg-white px-6 py-3 text-sm font-semibold text-[#23324a] transition-colors hover:bg-[#eef3fb]"
                >
                  Read philosophy
                </Link>
              </div>

              <p className="max-w-2xl rounded-xl border border-[#d8d0bf] bg-[#fff4dd] px-4 py-3 text-sm leading-relaxed text-[#425268]">
                {siteContent.disclaimers.scope}
              </p>
            </div>

            <div className="relative min-h-[280px] rounded-3xl border border-[#d4dbe8] bg-gradient-to-br from-[#f6fbff] via-white to-[#fff4de] p-5 md:min-h-[340px]">
              <Image
                src="/illustrations/owl.svg"
                alt="Owl illustration"
                width={240}
                height={240}
                className="illustration-float-slow absolute -right-8 -top-8 w-[180px] md:w-[240px]"
                priority
              />
              <Image
                src="/illustrations/fox.svg"
                alt="Fox illustration"
                width={220}
                height={220}
                className="illustration-float-fast absolute -bottom-4 -left-2 w-[150px] md:w-[220px]"
                priority
              />
              <div className="absolute bottom-4 right-4 max-w-[210px] rounded-2xl border border-[#d4dbe8] bg-white/90 p-3 text-sm text-[#445367] backdrop-blur">
                Voice reflection, not diagnosis. Intentional use, not addictive use.
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-down reveal-delay-1 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[#d5dce8] bg-white p-6">
            <h2 className="text-2xl text-[#18263b]">What Aletheia is for</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4b5b70] md:text-base">
              <li>• Talking through tangled thoughts</li>
              <li>• Short emotional clarity check-ins</li>
              <li>• Reflective prompts without clinical framing</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[#d8d1c2] bg-[#fff5e2] p-6">
            <h2 className="text-2xl text-[#18263b]">What Aletheia is not</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4b5b70] md:text-base">
              <li>• Not therapy or medical advice</li>
              <li>• Not crisis support</li>
              <li>• Not a replacement for human care</li>
            </ul>
            <p className="mt-3 text-sm text-[#4b5b70]">{siteContent.disclaimers.crisis}</p>
          </article>
        </section>

        <section className="space-y-6 reveal-down reveal-delay-2">
          <h2 className="text-3xl text-[#152238] md:text-4xl">Why people use it</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className="reveal-down rounded-2xl border border-[#d5dce8] bg-[#fbfdff] p-6 shadow-[0_8px_24px_rgba(24,38,60,0.05)]"
                style={{ animationDelay: `${220 + index * 90}ms` }}
              >
                <h3 className="text-xl text-[#1a2b44]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d5d72] md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#d4dbe8] bg-[#eef6ff] p-6 md:p-8 reveal-down reveal-delay-3">
          <h2 className="text-3xl text-[#152238] md:text-4xl">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.label}
                className="reveal-down rounded-2xl border border-[#c7d4ea] bg-white p-5"
                style={{ animationDelay: `${320 + index * 100}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5f6f83]">
                  {step.label}
                </p>
                <h3 className="mt-2 text-xl text-[#1a2b44]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d5d72] md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-down reveal-delay-4 space-y-6">
          <h2 className="text-3xl text-[#152238] md:text-4xl">Who this is built for</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {audienceCards.map((card, index) => (
              <article
                key={card.title}
                className="reveal-down rounded-2xl border border-[#d5dce8] bg-white p-6"
                style={{ animationDelay: `${420 + index * 90}ms` }}
              >
                <h3 className="text-xl text-[#1a2b44]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d5d72] md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-down reveal-delay-5 rounded-3xl border border-[#d5dce8] bg-white p-6 md:p-8">
          <h2 className="text-3xl text-[#152238]">Design principles</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="reveal-down rounded-2xl border border-[#d8e0ec] bg-[#fcfdff] p-5"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <h3 className="text-xl text-[#1a2b44]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d5d72] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-down reveal-delay-5 rounded-3xl border border-[#d5dce8] bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl text-[#152238]">Pricing preview</h2>
            <Link href="/pricing" className="text-sm font-semibold text-[#1b61d8] hover:underline">
              Full pricing details
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[#d5dce8] bg-[#fbfdff] p-5">
              <h3 className="text-xl text-[#1a2b44]">Guided</h3>
              <p className="mt-2 text-3xl font-semibold text-[#122036]">$15/month</p>
              <p className="mt-2 text-sm text-[#4d5d72]">Up to 1 hour/day for intentional reflection.</p>
            </article>

            <article className="rounded-2xl border border-[#d8d1c2] bg-[#fff6e6] p-5">
              <h3 className="text-xl text-[#1a2b44]">Extended</h3>
              <p className="mt-2 text-3xl font-semibold text-[#122036]">$50/month</p>
              <p className="mt-2 text-sm text-[#4d5d72]">Priced to discourage overuse and dependency.</p>
            </article>
          </div>
        </section>

        <section className="reveal-down reveal-delay-5 rounded-3xl border border-[#d5dce8] bg-[#eef6ff] p-6 md:p-8">
          <h2 className="text-3xl text-[#152238]">Common questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="reveal-down rounded-xl border border-[#cad7ea] bg-white p-4"
                style={{ animationDelay: `${620 + index * 90}ms` }}
              >
                <h3 className="text-lg text-[#1a2b44]">{faq.question}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#4d5d72] md:text-base">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-down reveal-delay-5 rounded-[2rem] border border-[#d4dbe8] bg-[#172a44] p-6 text-white md:p-10">
          <h2 className="text-3xl md:text-4xl">Ready for your first check-in?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d4dfef] md:text-base">
            Download Aletheia on Google Play and start with a short, calm voice reflection.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={siteContent.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#172a44] transition-colors hover:bg-[#eaf0f8]"
            >
              Open Play Store
            </a>
            <a
              href={siteContent.links.subscription}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-[#8ca5cc] bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#223857]"
            >
              View Subscription
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
