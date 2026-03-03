import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const plans = [
  {
    name: siteContent.pricing.guidedPlanName,
    price: siteContent.pricing.guidedPriceMonthly,
    limits: siteContent.placeholders.guidedPlanLimits,
    tone: "for regular reflection",
  },
  {
    name: siteContent.pricing.extendedPlanName,
    price: siteContent.pricing.extendedPriceMonthly,
    limits: siteContent.placeholders.extendedPlanLimits,
    tone: "for longer but still intentional sessions",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#1b2430]">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617187]">
            Pricing
          </p>
          <h1 className="text-4xl leading-tight text-[#17253a] md:text-5xl">
            Simple plans with clear limits
          </h1>
          <p className="text-sm text-[#6d7787]">
            Last updated: {siteContent.placeholders.legalLastUpdated.pricing}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#405066]">
            We price Aletheia for sustainable use. Plans are intentionally bounded.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-[#d8ddea] bg-white p-6 shadow-[0_10px_26px_rgba(17,34,58,0.05)]"
            >
              <h2 className="text-2xl text-[#1f2f45]">{plan.name}</h2>
              <p className="mt-1 text-sm uppercase tracking-wide text-[#728195]">
                {plan.tone}
              </p>
              <p className="mt-4 text-3xl font-semibold text-[#101a29]">{plan.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#4a596c]">{plan.limits}</p>
              <a
                href={siteContent.links.subscription}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-[#1d6ef0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1456bd]"
              >
                Subscribe on Gumroad
              </a>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#d6d3c7] bg-[#fff4dc] px-6 py-5 text-sm text-[#3f4a57] md:text-base">
          <p className="font-medium text-[#1f2d40]">{siteContent.disclaimers.scope}</p>
          <p className="mt-2">{siteContent.disclaimers.crisis}</p>
        </section>

        <section className="rounded-2xl border border-[#d5dce8] bg-[#f6f9ff] p-6">
          <h2 className="text-3xl text-[#17253a]">Billing and refunds</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4a596c] md:text-base">
            Detailed refund eligibility window: {siteContent.placeholders.refundWindow}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#4a596c] md:text-base">
            Questions: {siteContent.placeholders.supportEmail}
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
