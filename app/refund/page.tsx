import SiteFooter from "@/app/components/site-footer";
import { siteContent } from "@/app/lib/site-content";

const refundPrinciples = [
  "Every purchase includes a minimum 14-day refund window.",
  "Any request submitted within 14 calendar days of purchase is approved.",
  "No qualifiers, exceptions, or special-case restrictions apply to this minimum window.",
];

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#1b2430]">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-14">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617187]">
            Refund Policy
          </p>
          <h1 className="text-4xl leading-tight text-[#17253a] md:text-5xl">
            Clear refund boundaries
          </h1>
          <p className="text-sm text-[#6d7787]">
            Last updated: {siteContent.placeholders.legalLastUpdated.refund}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#405066]">
            We keep refund language direct and conservative to reduce confusion.
          </p>
        </section>

        <section className="rounded-2xl border border-[#d6d3c7] bg-[#fff4dc] px-6 py-5 text-sm text-[#3f4a57] md:text-base">
          <p className="font-medium text-[#1f2d40]">{siteContent.disclaimers.scope}</p>
          <p className="mt-2">{siteContent.disclaimers.crisis}</p>
        </section>

        <section className="rounded-2xl border border-[#d8ddea] bg-white p-6">
          <h2 className="text-2xl text-[#1f2f45]">Minimum refund window</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4a596c] md:text-base">
            We provide an unconditional minimum 14-day refund window for all purchases.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#4a596c] md:text-base">
            {refundPrinciples.map((principle) => (
              <li key={principle}>• {principle}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#d5dce8] bg-[#f6f9ff] p-6">
          <h2 className="text-2xl text-[#1f2f45]">How to request a refund</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4a596c] md:text-base">
            Email {siteContent.placeholders.supportEmail} with your purchase identifier, and we will process the refund.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
