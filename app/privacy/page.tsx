import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const sections = [
  {
    title: "1. What we process",
    points: [
      "Account details you provide to create and maintain access.",
      "Session inputs required to generate responses in the app.",
      "Operational usage metadata needed for reliability and abuse prevention.",
    ],
  },
  {
    title: "2. How we use information",
    points: [
      "To run core reflection features and return relevant responses.",
      "To keep the product safe, stable, and available.",
      "To support billing and account administration.",
    ],
  },
  {
    title: "3. Retention and deletion",
    points: [
      "Retention windows vary by data type and legal requirement.",
      "Deletion and export requests are handled through the privacy contact channel.",
      "Exact retention timelines are maintained in internal policy controls.",
    ],
  },
  {
    title: "4. Your controls",
    points: [
      "Request access to your account data.",
      "Request correction or deletion of applicable records.",
      "Request export of data that can be provided in a portable format.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#1b2430]">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617187]">
            Privacy Policy
          </p>
          <h1 className="text-4xl leading-tight text-[#17253a] md:text-5xl">
            Privacy with clear boundaries
          </h1>
          <p className="text-sm text-[#6d7787]">
            Last updated: {siteContent.placeholders.legalLastUpdated.privacy}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#405066]">
            This summary uses conservative language and avoids unverifiable precision claims.
          </p>
        </section>

        <section className="rounded-2xl border border-[#d6d3c7] bg-[#fff4dc] px-6 py-5 text-sm text-[#3f4a57] md:text-base">
          <p className="font-medium text-[#1f2d40]">{siteContent.disclaimers.scope}</p>
          <p className="mt-2">{siteContent.disclaimers.crisis}</p>
        </section>

        <section className="space-y-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[#d8ddea] bg-white p-6"
            >
              <h2 className="text-2xl text-[#1f2f45]">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4a596c] md:text-base">
                {section.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#d5dce8] bg-[#f6f9ff] p-6">
          <h2 className="text-3xl text-[#17253a]">Privacy requests</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4a596c] md:text-base">
            Contact: {siteContent.placeholders.privacyEmail}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#4a596c] md:text-base">
            Support: {siteContent.placeholders.supportEmail}
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
