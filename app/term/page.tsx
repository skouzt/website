import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const termsSections = [
  {
    title: "1. Service scope",
    body: [
      siteContent.disclaimers.scope,
      "The app is provided for personal reflection use and does not replace professional care.",
    ],
  },
  {
    title: "2. Account and acceptable use",
    body: [
      "You are responsible for activity under your account.",
      "Misuse, abuse, or attempts to disrupt the service may lead to restriction or termination.",
    ],
  },
  {
    title: "3. Plans and limits",
    body: [
      `${siteContent.pricing.guidedPlanName}: ${siteContent.placeholders.guidedPlanLimits}`,
      `${siteContent.pricing.extendedPlanName}: ${siteContent.placeholders.extendedPlanLimits}`,
    ],
  },
  {
    title: "4. Billing and refunds",
    body: [
      `Refund eligibility window: ${siteContent.placeholders.refundWindow}`,
      "Billing providers and app-store billing flows may apply depending on purchase channel.",
    ],
  },
  {
    title: "5. Contact",
    body: [
      `Support: ${siteContent.placeholders.supportEmail}`,
      `Privacy: ${siteContent.placeholders.privacyEmail}`,
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#1b2430]">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617187]">
            Terms of Service
          </p>
          <h1 className="text-4xl leading-tight text-[#17253a] md:text-5xl">
            Product terms with consistent placeholders
          </h1>
          <p className="text-sm text-[#6d7787]">
            Last updated: {siteContent.placeholders.legalLastUpdated.terms}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#405066]">
            This page aligns plan limits, refund wording, and contact references with a single source of truth.
          </p>
        </section>

        <section className="rounded-2xl border border-[#d6d3c7] bg-[#fff4dc] px-6 py-5 text-sm text-[#3f4a57] md:text-base">
          <p className="font-medium text-[#1f2d40]">{siteContent.disclaimers.scope}</p>
          <p className="mt-2">{siteContent.disclaimers.crisis}</p>
        </section>

        <section className="space-y-4">
          {termsSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[#d8ddea] bg-white p-6"
            >
              <h2 className="text-2xl text-[#1f2f45]">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4a596c] md:text-base">
                {section.body.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
