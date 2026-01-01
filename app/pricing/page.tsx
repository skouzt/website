export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-[#f6f8f6] text-[#0e1b12] font-sans">
      {/* Main Content */}
      <main className="flex justify-center py-16 px-6 sm:px-10">
        <div className="max-w-[900px] w-full flex flex-col gap-12">

          {/* Breadcrumb + Intro */}
          <section className="flex flex-col gap-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Simple, Intentional Pricing
            </h1>

            <p className="text-xl text-[#0e1b12]/70 leading-relaxed max-w-[640px] mx-auto">
              Designed for intentional use, not addiction. Our pricing reflects the true cost of responsible, private AI.
            </p>
          </section>

          {/* Pricing Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto w-full">

            {/* Guided Plan */}
            <div className="flex flex-col gap-6 rounded-2xl border-2 border-[#e0e6e2] bg-white p-8 hover:border-[#20df60] hover:shadow-xl transition-all">
              <div>
                <h3 className="text-2xl font-bold mb-1">Guided</h3>
                <p className="text-sm text-[#5e6e62]">For daily reflection</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">$15</span>
                  <span className="text-lg text-[#5e6e62]">/month</span>
                </div>
              </div>

              <div className="h-px bg-[#e0e6e2]" />

              <ul className="space-y-3 text-[#0e1b12]/90 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Standard voice minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Daily check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Private journal</span>
                </li>
              </ul>

              <button className="mt-2 h-12 rounded-lg bg-[#0e1b12] text-white font-semibold hover:bg-[#20df60] hover:text-[#0e1b12] transition-all">
                Get Started
              </button>
            </div>

            {/* Extended Plan */}
            <div className="flex flex-col gap-6 rounded-2xl border-2 border-[#20df60] bg-gradient-to-br from-white to-[#20df60]/5 p-8 shadow-lg hover:shadow-2xl transition-all relative">
              <div className="absolute -top-3 right-6 bg-[#20df60] text-[#0e1b12] text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-1">Extended</h3>
                <p className="text-sm text-[#5e6e62]">For deeper exploration</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">$50</span>
                  <span className="text-lg text-[#5e6e62]">/month</span>
                </div>
              </div>

              <div className="h-px bg-[#e0e6e2]" />

              <ul className="space-y-3 text-[#0e1b12]/90 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Increased context window</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Longer session duration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#20df60] text-xl">✓</span>
                  <span>Deep exploration tools</span>
                </li>
              </ul>

              <button className="mt-2 h-12 rounded-lg bg-[#20df60] text-[#0e1b12] font-semibold hover:bg-[#0e1b12] hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </section>

          {/* Usage Limits */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[22px] font-bold border-b border-[#e0e6e2] pb-2">
              Usage Limits
            </h2>

            <div className="bg-[#20df60]/10 border-l-4 border-[#20df60] p-4 rounded-r">
              <p className="leading-relaxed">
                <strong>Why we have limits:</strong> Unlike other AI platforms that
                optimize for engagement time, Aletheia optimizes for wellness.
              </p>

              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Healthy integration with your daily life</li>
                <li>Prevention of emotional dependency</li>
                <li>Necessary pauses for human reflection</li>
              </ul>
            </div>
          </section>

          {/* Billing Details */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[22px] font-bold border-b border-[#e0e6e2] pb-2">
              Billing Details
            </h2>

            <div className="space-y-4 text-[#0e1b12]/80 leading-relaxed">
              <p>
                Subscriptions are billed monthly on the anniversary of your signup
                date. You can cancel at any time; access continues until the end of
                the billing period.
              </p>

              <div className="flex items-center gap-2 text-sm text-[#5e6e62] border border-[#e0e6e2] p-3 rounded w-fit bg-white">
                🔒 Payments are securely processed by Paddle.
              </div>
            </div>
          </section>

          <div className="h-20" />
        </div>
      </main>
    </div>
  );
}