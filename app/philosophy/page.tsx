import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const principles = [
  {
    title: "Clarity over intensity",
    detail:
      "Aletheia is built for deliberate reflection, not emotional escalation or endless back-and-forth.",
  },
  {
    title: "Voice over friction",
    detail:
      "Talking can be easier than typing when thoughts are tangled, so voice is the default interaction path.",
  },
  {
    title: "Boundaries by design",
    detail:
      "Usage limits are intentional so the app supports healthy routines instead of replacing them.",
  },
  {
    title: "Privacy before growth",
    detail:
      "We keep language around privacy conservative and avoid making claims we cannot verify publicly.",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-14 md:py-18">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617187]">
            Philosophy
          </p>
          <h1 className="text-4xl leading-tight text-[#17253a] md:text-5xl">
            Why Aletheia exists
          </h1>
          <p className="text-sm text-[#6d7787]">
            Last updated: {siteContent.placeholders.legalLastUpdated.philosophy}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#405066]">
            {siteContent.playStoreShortDescription}
          </p>
        </section>

        <section className="rounded-2xl border border-[#d6d3c7] bg-[#fff4dc] px-6 py-5 text-sm text-[#3f4a57] md:text-base">
          <p className="font-medium text-[#1f2d40]">{siteContent.disclaimers.scope}</p>
          <p className="mt-2">{siteContent.disclaimers.crisis}</p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#d8ddea] bg-[#fcfdff] p-5"
            >
              <h2 className="text-2xl text-[#1d2d43]">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4c5b6e] md:text-base">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-[#d5dce8] bg-[#edf6ff] px-6 py-8">
          <h2 className="text-3xl text-[#17253a]">Build your own reflection rhythm</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3f4d5f] md:text-lg">
            {siteContent.disclaimers.scope}
          </p>
          <a
            href={siteContent.links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-xl bg-[#1d6ef0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1456bd]"
          >
            Open on Google Play
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
