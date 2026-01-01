export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex justify-center py-20 px-6">
        <div className="w-full max-w-[800px] flex flex-col gap-16">

          {/* Page Header */}
          <section className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest w-fit">
              Legal Documentation
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
              Refund Policy
            </h1>

            <div className="h-px bg-gray-200" />

            <p className="text-sm text-gray-400">
              Last updated: October 24, 2025
            </p>
          </section>

          {/* Intro */}
          <section className="text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              At Aletheia, we're committed to your satisfaction and growth on your
              mental wellness journey. We stand behind the quality of our services
              and want to ensure complete transparency regarding our refund process.
            </p>
            <p>
              This policy details the circumstances under which refunds are available,
              ensuring fairness for both our users and our ability to maintain high-quality
              services for everyone.
            </p>
          </section>

          {/* Eligibility */}
          <section className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold text-gray-400">01</span>
              <h2 className="text-3xl font-black">Eligibility for Refunds</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Full refunds are available under the following specific circumstances:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-black">
                <span className="text-2xl mt-1">✓</span>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Technical Issues</p>
                  <p className="text-gray-700 text-sm">
                    Persistent technical problems that prevent service usage for over 48 hours
                    despite our technical support team's efforts to resolve them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-black">
                <span className="text-2xl mt-1">✓</span>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Billing Errors</p>
                  <p className="text-gray-700 text-sm">
                    Duplicate charges, incorrect subscription amounts, or unauthorized
                    transactions verified through our billing system.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-black">
                <span className="text-2xl mt-1">✓</span>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Satisfaction Guarantee</p>
                  <p className="text-gray-700 text-sm">
                    Annual subscription refund requests submitted within our 14-day
                    money-back guarantee period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 14-Day Guarantee */}
          <section className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold text-gray-400">02</span>
              <h2 className="text-3xl font-black">14-Day Money-Back Guarantee</h2>
            </div>

            <div className="bg-black text-white p-8">
              <p className="font-medium text-lg leading-relaxed">
                Annual subscriptions include a 14-day risk-free trial period.
                If our services don't meet your expectations, we offer a full refund
                within this window.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To qualify for the guarantee:
              </p>
              <ul className="space-y-2 pl-5 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Refund request must be submitted within 14 calendar days of purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>No refunds are available after this period except for verified technical failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>This guarantee applies only to first-time annual subscriptions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 border-l-4 border-gray-400">
              <p className="text-gray-600 leading-relaxed">
                <strong className="font-bold text-black">Monthly Subscriptions:</strong> Monthly plans are non-refundable after the first 72 hours of activation. You may cancel at any time to prevent future charges, but no partial-month refunds are issued.
              </p>
            </div>
          </section>

          {/* Non-refundable */}
          <section className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold text-gray-400">03</span>
              <h2 className="text-3xl font-black">Non-refundable Items & Situations</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The following are not eligible for refunds under any circumstances:
            </p>

            <ul className="space-y-4">
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Completed Services:</strong> Individual coaching sessions, consultations, or personalized services once delivered
              </li>
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Digital Products:</strong> Downloaded content, assessments, or reports already accessed
              </li>
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Gift Cards & Credits:</strong> Once purchased or redeemed, these cannot be refunded for cash
              </li>
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Subscription Changes:</strong> Downgrades or cancellations mid-billing cycle; changes take effect at next cycle
              </li>
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Third-Party Purchases:</strong> Subscriptions bought through app stores follow respective platform policies
              </li>
              <li className="pl-6 border-l-2 border-gray-300 text-gray-700 py-2">
                <strong className="font-semibold">Account Violations:</strong> Accounts terminated for Terms of Service violations
              </li>
            </ul>
          </section>

          {/* How to Request */}
          <section className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold text-gray-400">04</span>
              <h2 className="text-3xl font-black">Refund Request Process</h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                To initiate a refund request, please contact our support team with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold mb-2">Required Information</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Full name on account</li>
                    <li>• Email address used for purchase</li>
                    <li>• Order/transaction ID</li>
                    <li>• Reason for refund request</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold mb-2">Processing Timeline</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Initial response within 24-48 hours</li>
                    <li>• Approved refunds processed in 5-7 business days</li>
                    <li>• Credit card refunds appear in 7-14 days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-2">
                  Contact Support
                </p>
                <p className="text-sm text-gray-500">
                  Include all required information for faster processing
                </p>
              </div>

              <a
                href="mailto:support@aletheia.ai"
                className="font-bold hover:underline inline-flex items-center gap-2"
              >
                skouzt3@gmail.com→
              </a>
            </div>

            <div className="bg-blue-50 p-5 border border-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong className="font-bold">Note:</strong> Refunds are issued to the original payment method only. 
                International transactions may be subject to currency conversion differences. 
                Please allow additional time for bank processing.
              </p>
            </div>
          </section>

          <div className="h-px bg-gray-200 my-8" />

          {/* Footer */}
          <footer className="flex flex-col sm:flex-row justify-between gap-6 text-sm text-gray-500">
            <p>© 2023 Aletheia Wellness Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/terms" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="/contact" className="hover:text-black transition-colors">Contact Us</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}