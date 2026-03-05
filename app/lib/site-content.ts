export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.aletheia.app";
export const SUBSCRIPTION_URL = "https://skouzt.gumroad.com/l/aletheia";

export interface LegalPolicyPlaceholders {
  supportEmail: string;
  privacyEmail: string;
  refundWindow: string;
  guidedPlanLimits: string;
  extendedPlanLimits: string;
  legalLastUpdated: {
    philosophy: string;
    pricing: string;
    terms: string;
    privacy: string;
    refund: string;
  };
  copyrightYear: string;
}

export interface SiteContent {
  brandName: string;
  playStoreTitle: string;
  playStoreShortDescription: string;
  playStoreFeatures: [string, string, string, string, string, string];
  links: {
    playStore: string;
    subscription: string;
    philosophy: string;
    pricing: string;
    terms: string;
    privacy: string;
    refund: string;
  };
  disclaimers: {
    scope: string;
    crisis: string;
  };
  pricing: {
    guidedPlanName: string;
    extendedPlanName: string;
    guidedPriceMonthly: string;
    extendedPriceMonthly: string;
  };
  placeholders: LegalPolicyPlaceholders;
}

export const legalPolicyPlaceholders: LegalPolicyPlaceholders = {
  supportEmail: "support@aletheia-ai.space",
  privacyEmail: "privacy@aletheia.app",
  refundWindow:
    "7-day refund window for first-time subscriptions. Subscriptions are processed through Gumroad and follow Gumroad billing and refund terms.",
  guidedPlanLimits: "Up to 1 hour of voice reflection per day.",
  extendedPlanLimits: "Up to 8 hours of voice reflection per day.",
  legalLastUpdated: {
    philosophy: "March 3, 2026",
    pricing: "March 3, 2026",
    terms: "March 3, 2026",
    privacy: "March 3, 2026",
    refund: "March 3, 2026",
  },
  copyrightYear: "2026",
};

export const siteContent: SiteContent = {
  brandName: "Aletheia",
  playStoreTitle: "A calm place to think out loud",
  playStoreShortDescription:
    "A voice-first companion for emotional clarity and reflection. Talk naturally, get grounded prompts, and stop when it feels complete.",
  playStoreFeatures: [
    "Speak instead of typing when thoughts feel tangled.",
    "Short, intentional sessions built to be put down.",
    "Calm prompts for reflection and emotional clarity.",
    "Boundaries by design to discourage overuse.",
    "Private conversations with clear non-clinical scope.",
    "Not therapy, diagnosis, or crisis intervention.",
  ],
  links: {
    playStore: PLAY_STORE_URL,
    subscription: SUBSCRIPTION_URL,
    philosophy: "/philosophy",
    pricing: "/pricing",
    terms: "/terms",
    privacy: "/privacy",
    refund: "/refund",
  },
  disclaimers: {
    scope:
      "Aletheia is a self-reflection companion. It is not therapy, medical advice, or crisis support.",
    crisis:
      "If you are in immediate danger or facing a crisis, contact local emergency services immediately.",
  },
  pricing: {
    guidedPlanName: "Guided",
    extendedPlanName: "Extended",
    guidedPriceMonthly: "$15/month",
    extendedPriceMonthly: "$50/month",
  },
  placeholders: legalPolicyPlaceholders,
};
