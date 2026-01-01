export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Main Layout */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-8 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-4">
                Contents
              </h3>

              <ul className="space-y-1 text-sm border-l-2 border-gray-200">
                <li>
                  <a
                    href="#intro"
                    className="block px-4 py-2 border-l-2 -ml-0.5 border-black bg-gray-50 font-medium"
                  >
                    Introduction
                  </a>
                </li>
                {[
                  ["#info-collected", "Information Collected"],
                  ["#voice-data", "Voice Data Handling"],
                  ["#storage", "Storage & Security"],
                  ["#no-selling", "No Selling Data"],
                  ["#rights", "User Rights"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-black text-white">
              <h4 className="text-sm font-bold mb-3">Questions?</h4>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Contact our team for clarity on data protection practices.
              </p>
              <a href="mailto:privacy@aletheia.app" className="text-xs font-bold hover:underline inline-block">
                privacy@aletheia.app →
              </a>
            </div>
          </div>
        </aside>

        {/* Document */}
        <article className="lg:col-span-9 max-w-4xl">
          {/* Header */}
          <section id="intro" className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest mb-8">
              Legal Document
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-none">
              Privacy Policy
            </h1>

            <p className="text-2xl font-light text-gray-600 max-w-2xl mb-8 leading-relaxed">
              How we protect your voice, your mind, and your trust.
            </p>

            <div className="h-px bg-gray-200 mb-8" />

            <p className="text-sm text-gray-400">
              Last Updated: October 24, 2025
            </p>
          </section>

          {/* Sections */}
          {[
            {
              id: "info-collected",
              title: "Information Collected",
              number: "01",
              tldr: "We only collect the absolute minimum data needed to make the AI therapy assistant work effectively while maintaining your privacy.",
              body: (
                <>
                  <p className="mb-6">
                    We collect several categories of information to provide and improve our AI-powered voice therapy services. This data collection is limited to what is necessary for the functioning of the Aletheia application and is never used for unrelated purposes.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Account Authentication Data</strong>
                      <span className="text-gray-600">When you sign up, we collect your email address, name (if provided), and authentication tokens through Clerk (our authentication provider).</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Voice Audio Data</strong>
                      <span className="text-gray-600">During therapy sessions, we capture real-time audio streams through LiveKit integration. This audio is processed momentarily for transcription and AI analysis but is not stored on our servers by default.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Session Transcriptions</strong>
                      <span className="text-gray-600">We generate anonymized text transcripts of your voice sessions to enable our backend to process your input and generate therapeutic responses. These transcripts are temporarily cached during the session.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Session Metadata</strong>
                      <span className="text-gray-600">We store anonymized session identifiers, duration, timestamp, and basic interaction logs in our database. This includes sessionId, start/end times, and aggregated emotion scores, but never the actual conversation content.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Usage Analytics</strong>
                      <span className="text-gray-600">We collect anonymous product analytics including feature usage patterns, session frequency, and technical performance metrics to improve the application experience. This data cannot be linked to individual users.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Payment Information</strong>
                      <span className="text-gray-600">If you subscribe, payment processing is handled entirely by Stripe. We do not store credit card numbers or other sensitive payment data on our servers.</span>
                    </li>
                  </ul>
                  <p className="font-medium">
                    We explicitly do not collect location data, contacts, browsing history, or any information from other apps on your device.
                  </p>
                </>
              ),
            },
            {
              id: "voice-data",
              title: "Voice Data Handling",
              number: "02",
              tldr: "Your voice is processed in real-time and not permanently stored by default. We treat voice data as the most sensitive information we encounter.",
              body: (
                <>
                  <p className="mb-6">
                    Voice data handling is the cornerstone of our privacy commitment. As a therapy application, we understand that your voice contains not just words, but emotional states, personal stories, and vulnerable moments that require maximum protection.
                  </p>
                  <h3 className="text-xl font-bold mt-8 mb-4">Real-Time Processing Flow</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">LiveKit Streaming</strong>
                      <span className="text-gray-600">Audio is transmitted via WebRTC using LiveKit's end-to-end encrypted channels. TLS 1.3 encryption protects data in transit from your device to our servers.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Immediate Transcription</strong>
                      <span className="text-gray-600">Audio streams are processed by our pipeline for real-time speech-to-text conversion. This transcription happens within seconds of speaking.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">AI Response Generation</strong>
                      <span className="text-gray-600">The anonymized transcript is sent to our therapeutic AI models to generate contextual responses. No audio is ever sent to external AI providers.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Instant Deletion</strong>
                      <span className="text-gray-600">Once transcription is complete, the original audio buffer is immediately cleared from memory and never written to disk.</span>
                    </li>
                  </ul>
                  
                  <div className="bg-gray-50 p-8 my-8">
                    <h3 className="text-xl font-bold mb-4">Optional Voice Recording Feature</h3>
                    <p className="mb-4 text-gray-700">
                      If you explicitly enable session recordings for later reflection (opt-in only), we will:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Encrypt audio files with AES-256 before storage</li>
                      <li>• Store them securely for a maximum of 30 days</li>
                      <li>• Allow you to delete them instantly at any time</li>
                      <li>• Never use them for model training or any other purpose</li>
                    </ul>
                    <p className="mt-6 font-bold">
                      By default, this feature is disabled and no voice recordings are retained.
                    </p>
                  </div>
                </>
              ),
            },
            {
              id: "storage",
              title: "Storage & Security",
              number: "03",
              body: (
                <>
                  <p className="mb-6">
                    We implement multiple layers of security to protect your data throughout its entire lifecycle, from transmission to storage and eventual deletion. Our security architecture is built on enterprise-grade infrastructure with privacy-first design principles.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Infrastructure Security</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Database Encryption</strong>
                      <span className="text-gray-600">All data stored in our PostgreSQL database is encrypted at rest using AES-256. Database snapshots and backups are also encrypted.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Secure Transmission</strong>
                      <span className="text-gray-600">All data transmitted between your device, our backend API, and database uses TLS 1.3 (or TLS 1.2 minimum) with perfect forward secrecy.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">SOC 2 Compliant Infrastructure</strong>
                      <span className="text-gray-600">Our entire stack operates on SOC 2 Type II certified infrastructure with regular third-party security audits.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Access Controls</h3>
                  <ul className="space-y-2 mb-8 text-gray-700">
                    <li>• Zero-trust architecture with role-based access control (RBAC)</li>
                    <li>• All backend API endpoints require valid authentication tokens</li>
                    <li>• Database access is restricted to authorized backend services only</li>
                    <li>• Two-factor authentication required for all developer accounts</li>
                    <li>• Automated access logging and anomaly detection</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Data Retention & Deletion</h3>
                  <p className="mb-6 text-gray-700">
                    We retain anonymized session metadata for up to 90 days to improve service quality, after which it is automatically purged. If you delete your account, all associated data is permanently erased within 30 days. You can request immediate deletion at privacy@aletheia.app.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Security Audits</h3>
                  <p className="text-gray-700">
                    We conduct quarterly security assessments, annual penetration testing, and continuous vulnerability scanning. Our codebase undergoes security review before each deployment.
                  </p>
                </>
              ),
            },
            {
              id: "no-selling",
              title: "No Selling of Personal Data",
              number: "04",
              tldr: "We are a wellness company, not a data broker. Your trust is more valuable than any data revenue.",
              body: (
                <>
                  <p className="mb-6">
                    Aletheia Wellness Inc. operates on a transparent subscription-based business model. We generate revenue only from user subscriptions, not from selling or monetizing personal data. This aligns our incentives with your privacy and wellbeing.
                  </p>
                  
                  <div className="bg-black text-white p-8 my-8">
                    <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                    <ul className="space-y-2">
                      <li>• We have never sold user data and never will</li>
                      <li>• We do not share personally identifiable information with third parties for marketing</li>
                      <li>• We do not participate in data broker exchanges or advertising networks</li>
                      <li>• We do not use your therapy session content for any purpose beyond providing the service</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Third-Party Processors</h3>
                  <p className="mb-4 text-gray-700">
                    We work with carefully vetted service providers who act as data processors (not controllers) under strict contractual obligations:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Clerk</strong>
                      <span className="text-gray-600">Authentication services - only receives email/name</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Supabase</strong>
                      <span className="text-gray-600">Database hosting - encrypted data storage</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">LiveKit</strong>
                      <span className="text-gray-600">Real-time audio streaming - temporary audio processing</span>
                    </li>
                    <li className="pl-6 border-l-2 border-gray-200">
                      <strong className="font-bold block mb-1">Stripe</strong>
                      <span className="text-gray-600">Payment processing - no card data touches our servers</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    All processors are prohibited from using your data for any purpose other than providing contracted services to us.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Future Business Model</h3>
                  <p className="font-bold">
                    Even if our business model evolves, we pledge never to sell user data or use therapy session content for commercial purposes. Any changes to this policy would require explicit opt-in consent.
                  </p>
                </>
              ),
            },
            {
              id: "rights",
              title: "User Rights & Data Control",
              number: "05",
              body: (
                <>
                  <p className="mb-6">
                    You have complete control over your personal data. We respect your rights under GDPR, CCPA, and other applicable privacy laws, regardless of your location. You can exercise these rights directly through the app or by contacting us.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Your Rights Include</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Access</strong>
                      <span className="text-gray-600">Request a complete copy of all data we hold about you, including session metadata and account information. We provide this in machine-readable JSON format within 30 days.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Rectification</strong>
                      <span className="text-gray-600">Correct any inaccurate personal information through your account settings or by emailing support.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Erasure</strong>
                      <span className="text-gray-600">Delete your entire account and all associated data immediately. This action is irreversible and confirmed via email.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Data Portability</strong>
                      <span className="text-gray-600">Export your session history and account data to transfer to another service. We provide this in standardized formats.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Restrict Processing</strong>
                      <span className="text-gray-600">Temporarily pause processing of your data while maintaining your account. This will disable AI features but preserve your subscription.</span>
                    </li>
                    <li className="pl-6 border-l-2 border-black">
                      <strong className="font-bold block mb-1">Right to Object</strong>
                      <span className="text-gray-600">Opt-out of any data processing activities that are not essential to service delivery, such as optional analytics.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">How to Exercise Your Rights</h3>
                  <ul className="space-y-2 mb-8 text-gray-700">
                    <li>• Email privacy@aletheia.app with your request</li>
                    <li>• Use the "Data Export" or "Delete Account" buttons in Settings → Privacy</li>
                    <li>• Include your user ID (found in Settings → Account) for faster processing</li>
                    <li>• We respond to all requests within 30 days; urgent requests within 7 days</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-8 my-8">
                    <h3 className="text-xl font-bold mb-4">Data Breach Notification</h3>
                    <p className="text-gray-700">
                      In the unlikely event of a data breach, we will notify affected users within 72 hours of discovery, in compliance with GDPR requirements. We maintain incident response protocols and will provide clear guidance on protective steps.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Contact Our Data Protection Officer</h3>
                  <p className="text-gray-700">
                    For privacy-related questions, concerns, or to exercise your rights, contact us at{" "}
                    <a
                      href="mailto:privacy@aletheia.app"
                      className="font-bold text-black hover:underline"
                    >
                      privacy@aletheia.app
                    </a>
                    . For urgent matters, call +1 (555) 123-ALETHEIA. Our DPO responds within 24 hours.
                  </p>
                </>
              ),
            },
          ].map(({ id, title, number, tldr, body }) => (
            <section key={id} id={id} className="scroll-mt-24 mb-20">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-sm font-bold text-gray-400">{number}</span>
                <h2 className="text-3xl font-black">{title}</h2>
              </div>
              {tldr && (
                <div className="bg-gray-100 p-6 mb-8 text-sm font-medium leading-relaxed border-l-4 border-black">
                  {tldr}
                </div>
              )}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {body}
              </div>
            </section>
          ))}

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-12 mt-20 flex flex-col sm:flex-row justify-between text-sm text-gray-500 gap-4">
            <p>© 2023 Aletheia Wellness Inc.</p>
            <div className="flex gap-8">
              <a href="/terms" className="hover:text-black transition-colors">Terms</a>
              <a href="/security" className="hover:text-black transition-colors">Security</a>
              <a href="mailto:privacy@aletheia.app" className="hover:text-black transition-colors">Contact</a>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}