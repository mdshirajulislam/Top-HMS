export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "zap" | "cloud" | "shield" | "chart" | "globe" | "headset";
}

export interface ModuleItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  secondaryMetricLabel: string;
  secondaryMetricValue: string;
  previewRows: { label: string; meta: string; status: string; tone: "emerald" | "blue" | "amber" }[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceBDT: string;
  priceUSD: string;
  period: string;
  featured?: boolean;
  ctaLabel: string;
  features: { label: string; included: boolean }[];
}

export interface TestimonialItem {
  role: string;
  departments: string;
  quote: string;
  impact: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const SITE_INFO = {
  brandName: "Top HMS",
  tagline: "আধুনিক হেলথকেয়ার, সহজ ও নির্ভুল নিয়ন্ত্রণ",
  address: "ICT Tower, E-14/X, আগারগাঁও, শেরেবাংলা নগর, ঢাকা-১২০৭, বাংলাদেশ",
  phone: "+880 1711-633602",
  phoneHref: "tel:+8801711633602",
  whatsappHref: "https://wa.me/8801711633602",
  email: "support@tophms.com",
  emailHref: "mailto:support@tophms.com",
  copyright: `© ${new Date().getFullYear()} Top HMS. সর্বস্বত্ব সংরক্ষিত।`,
};

export const NAV_LINKS = [
  { label: "বৈশিষ্ট্য", href: "#features" },
  { label: "মডিউলসমূহ", href: "#modules" },
  { label: "প্যাকেজ ও মূল্য", href: "#pricing" },
  { label: "জিজ্ঞাসা", href: "#faq" },
  { label: "যোগাযোগ", href: "#contact" },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "offline-fast",
    title: "দ্রুত ও অফলাইন-সক্ষম",
    description:
      "সহজ ইন্টারফেস ও দ্রুতগতির স্ক্রিন — ইন্টারনেট বিচ্ছিন্ন হলেও OPD, ফার্মেসি এবং বিলিং কাউন্টার নির্বিঘ্নে চালু থাকে।",
    icon: "zap",
  },
  {
    id: "cloud-multi",
    title: "ক্লাউড সিঙ্ক ও মাল্টি-ব্রাঞ্চ",
    description:
      "যেকোনো সময় যেকোনো স্থান থেকে হসপিটালের রিয়েল-টাইম তথ্য দেখুন এবং একক ক্লিনিক বা একাধিক শাখা সহজেই পরিচালনা করুন।",
    icon: "cloud",
  },
  {
    id: "zero-leakage",
    title: "নিরাপদ ডেটা ও জিরো লিকেজ",
    description:
      "এন্ড-টু-এন্ড SSL এনক্রিপশন, স্বয়ংক্রিয় দৈনিক ব্যাকআপ এবং ডাবল-এন্ট্রি অডিট লগ প্রতিটি বিল ও লেনদেনকে শতভাগ সুরক্ষিত রাখে।",
    icon: "shield",
  },
  {
    id: "realtime-reports",
    title: "রিয়েল-টাইম আর্থিক রিপোর্ট",
    description:
      "বেড অকুপ্যান্সি, OPD সিরিয়াল, ফার্মেসি স্টক এবং প্রতিদিনের ক্যাশ কালেকশন এক ড্যাশবোর্ডেই তাৎক্ষণিক দেখুন।",
    icon: "chart",
  },
  {
    id: "bangla-voip",
    title: "বাংলা, SMS ও VoIP সুবিধা",
    description:
      "সম্পূর্ণ বাংলা ইন্টারফেসের পাশাপাশি স্বয়ংক্রিয় SMS ও VoIP ভয়েস রিমাইন্ডার রোগীর অনুপস্থিতি উল্লেখযোগ্যভাবে কমায়।",
    icon: "globe",
  },
  {
    id: "support-247",
    title: "২৪/৭ ডেডিকেটেড সাপোর্ট",
    description:
      "বিনামূল্যে স্টাফ ট্রেনিং, পুরোনো ডেটা মাইগ্রেশন এবং যেকোনো প্রয়োজনে দিনরাত ২৪ ঘণ্টা অভিজ্ঞ টেকনিক্যাল সাপোর্ট।",
    icon: "headset",
  },
];

export const MODULES: ModuleItem[] = [
  {
    id: "opd",
    tabLabel: "OPD ও টোকেন",
    badge: "লাইভ টোকেন কিউ",
    title: "OPD ও স্মার্ট টোকেন ম্যানেজমেন্ট",
    description:
      "ডিজিটাল রেজিস্ট্রেশন, লাইভ চেম্বার কিউ ডিসপ্লে এবং সম্পূর্ণ EMR ব্যবস্থাপনার মাধ্যমে আউটডোর রোগী সেবা আরও দ্রুত করুন।",
    highlights: [
      "অনলাইন ও ওয়াক-ইন অ্যাপয়েন্টমেন্ট বুকিং",
      "লাইভ টিভি টোকেন ও কিউ ডিসপ্লে (গড় অপেক্ষা ৮ মিনিটের কম)",
      "ডাক্তারের চেম্বার শিডিউল ও স্লট ম্যানেজমেন্ট",
      "সম্পূর্ণ EMR ও রোগীর পূর্ববর্তী ভিজিট হিস্ট্রি",
      "ডিজিটাল প্রেসক্রিপশন এবং VoIP/SMS রিমাইন্ডার",
    ],
    metricLabel: "গড় অপেক্ষার সময়",
    metricValue: "6.4 মি.",
    secondaryMetricLabel: "আজকের টোকেন",
    secondaryMetricValue: "148",
    previewRows: [
      { label: "টোকেন #104 — নুসরাত জাহান", meta: "ডা. এম. রহমান · কার্ডিওলজি", status: "চেম্বারে", tone: "emerald" },
      { label: "টোকেন #105 — তানভীর আহমেদ", meta: "ডা. এস. করিম · মেডিসিন", status: "পরবর্তী", tone: "blue" },
      { label: "টোকেন #106 — ফারহানা আক্তার", meta: "ডা. এন. ইসলাম · শিশু বিভাগ", status: "অপেক্ষমাণ", tone: "amber" },
    ],
  },
  {
    id: "ipd",
    tabLabel: "IPD ও বেড গ্রিড",
    badge: "লাইভ বেড ম্যাপ",
    title: "IPD ও ভিজ্যুয়াল বেড অকুপ্যান্সি গ্রিড",
    description:
      "ভর্তি থেকে ছাড়পত্র পর্যন্ত ইনডোর রোগীর সম্পূর্ণ তদারকি — লাইভ ওয়ার্ড, কেবিন ও ICU বেড ম্যাপ এবং স্বয়ংক্রিয় দৈনিক বেড বিলিং।",
    highlights: [
      "রিয়েল-টাইম ওয়ার্ড, কেবিন ও ICU বেড গ্রিড",
      "এক ক্লিকে রোগী ভর্তি, বেড ট্রান্সফার ও অ্যালোকেশন",
      "স্বয়ংক্রিয় দৈনিক বেড ও নার্সিং চার্জ যুক্ত হওয়া",
      "নার্সিং নোট, ভাইটালস ও মেডিকেশন চার্ট",
      "গোছানো ডিজিটাল ডিসচার্জ সামারি তৈরি",
    ],
    metricLabel: "সক্রিয় বেড",
    metricValue: "342+",
    secondaryMetricLabel: "বেড অকুপ্যান্সি",
    secondaryMetricValue: "88%",
    previewRows: [
      { label: "কেবিন 204 — ডিলাক্স AC", meta: "ভর্তি ২ দিন · ওয়ার্ড ৩", status: "ভর্তি আছে", tone: "blue" },
      { label: "ICU বেড 06 — ক্রিটিক্যাল কেয়ার", meta: "ভাইটালস পর্যবেক্ষণে · ডা. হাসান", status: "স্থিতিশীল", tone: "emerald" },
      { label: "কেবিন 310 — স্ট্যান্ডার্ড", meta: "পরিচ্ছন্নতা সম্পন্ন", status: "খালি আছে", tone: "emerald" },
    ],
  },
  {
    id: "pharmacy",
    tabLabel: "ফার্মেসি POS",
    badge: "অটো স্টক অ্যালার্ট",
    title: "দ্রুতগতির ফার্মেসি ও ইনভেন্টরি POS",
    description:
      "বারকোড স্ক্যানিং, FIFO ব্যাচ এক্সপায়ারি অ্যালার্ট এবং তাৎক্ষণিক স্টক সিঙ্কের মাধ্যমে কয়েক সেকেন্ডেই ওষুধ বিক্রয় ও হিসাব রাখুন।",
    highlights: [
      "অতিদ্রুত বারকোড POS ও অফলাইন বিলিং সুবিধা",
      "প্রেসক্রিপশনের সাথে সংযুক্ত অটো ডিসপেন্সিং",
      "FIFO ব্যাচ ট্র্যাকিং ও লো-স্টক/মেয়াদোত্তীর্ণ অ্যালার্ট",
      "জেনেরিক ও বিকল্প ওষুধ খোঁজার সুবিধা",
      "সাপ্লায়ার পারচেজ অর্ডার ও রিটার্ন ম্যানেজমেন্ট",
    ],
    metricLabel: "চেকআউট গতি",
    metricValue: "< 2 সে.",
    secondaryMetricLabel: "মেয়াদ সুরক্ষা",
    secondaryMetricValue: "100%",
    previewRows: [
      { label: "Napa Extend 665mg (বক্স)", meta: "ব্যাচ #NX-402 · মেয়াদ ডিসে. ২০২৭", status: "স্টকে আছে", tone: "emerald" },
      { label: "Sergel 20mg ক্যাপসুল", meta: "অবশিষ্ট স্টক: ৪২ স্ট্রিপ", status: "রি-অর্ডার", tone: "amber" },
      { label: "Rx #4419 — OPD কাউন্টার ১", meta: "৪টি আইটেম · ৳ 680 পরিশোধিত", status: "সরবরাহকৃত", tone: "blue" },
    ],
  },
  {
    id: "lab",
    tabLabel: "ডায়াগনস্টিক ল্যাব",
    badge: "তাৎক্ষণিক ডিজিটাল রিপোর্ট",
    title: "সম্পূর্ণ ডায়াগনস্টিক ও ল্যাব ওয়ার্কফ্লো",
    description:
      "বারকোড স্যাম্পল কালেকশন থেকে সরাসরি অ্যানালাইজার ডেটা সিঙ্ক এবং SMS-এ ডিজিটাল রিপোর্ট ডেলিভারি — সবকিছুই স্বয়ংক্রিয়।",
    highlights: [
      "রেডিমেড প্যাথলজি ও রেডিওলজি রিপোর্ট টেমপ্লেট",
      "ল্যাব অ্যানালাইজার ইন্টিগ্রেশন (HL7 / FHIR / TCP-IP)",
      "থার্মাল বারকোড টিউব লেবেলিং ও স্যাম্পল ট্র্যাকিং",
      "নরমাল রেঞ্জ ফ্ল্যাগ ও রিমোট প্যাথলজিস্ট ভেরিফিকেশন",
      "তাৎক্ষণিক SMS, পোর্টাল ও প্রিন্ট রিপোর্ট ডেলিভারি",
    ],
    metricLabel: "অ্যানালাইজার সিঙ্ক",
    metricValue: "HL7 / FHIR",
    secondaryMetricLabel: "আজকের রিপোর্ট",
    secondaryMetricValue: "214",
    previewRows: [
      { label: "CBC ও ESR — রোগী #2291", meta: "হেমাটোলজি অ্যানালাইজার · ভেরিফায়েড", status: "রিপোর্ট প্রস্তুত", tone: "emerald" },
      { label: "লিপিড প্রোফাইল — রোগী #2304", meta: "স্যাম্পল #L-882 · প্রক্রিয়াধীন", status: "পরীক্ষা চলছে", tone: "blue" },
      { label: "HbA1c — রোগী #2310", meta: "বারকোড প্রিন্টেড · ডেস্ক ২", status: "সংগৃহীত", tone: "amber" },
    ],
  },
  {
    id: "billing",
    tabLabel: "বিলিং ও অ্যাকাউন্টস",
    badge: "ওয়ান-ক্লিক ইনভয়েসিং",
    title: "সমন্বিত বিলিং ও ডাবল-এন্ট্রি অ্যাকাউন্টস",
    description:
      "OPD, IPD, ল্যাব ও ফার্মেসির প্রতিটি চার্জ এক ইনভয়েসে যুক্ত হয় স্বয়ংক্রিয়ভাবে — ফলে আয় লিকেজ শূন্যে নেমে আসে।",
    highlights: [
      "OPD, IPD, ল্যাব ও ফার্মেসির সমন্বিত ইনভয়েস",
      "ক্যাশ, কার্ড, bKash/Nagad এবং কর্পোরেট বিলিং",
      "অ্যাডভান্স জমা, বকেয়া ও রিফান্ড ট্র্যাকিং",
      "ডাবল-এন্ট্রি জেনারেল লেজার ও অডিট ট্রেইল",
      "দৈনিক ক্যাশ শিট ও মাসিক লাভ-ক্ষতির রিপোর্ট",
    ],
    metricLabel: "হিসাবের নির্ভুলতা",
    metricValue: "99.99%",
    secondaryMetricLabel: "দৈনিক লেজার",
    secondaryMetricValue: "অটো-সিঙ্কড",
    previewRows: [
      { label: "INV-8942 — ডিসচার্জ বিল", meta: "IPD + ল্যাব + ফার্মেসি · ৳ 28,450", status: "পরিশোধিত", tone: "emerald" },
      { label: "INV-8943 — OPD কনসাল্টেশন", meta: "bKash ভেরিফায়েড · ৳ 1,200", status: "ক্লিয়ার্ড", tone: "emerald" },
      { label: "INV-8944 — কর্পোরেট ক্লেইম", meta: "অ্যাডভান্স ৳ 10,000 গৃহীত", status: "আংশিক বকেয়া", tone: "amber" },
    ],
  },
  {
    id: "staff",
    tabLabel: "OT, HR ও পেরোল",
    badge: "স্মার্ট শিফট প্ল্যানার",
    title: "OT শিডিউলিং, ডাক্তার ও স্টাফ ম্যানেজমেন্ট",
    description:
      "অপারেশন থিয়েটার বুকিং, ডাক্তারদের কমিশন, নার্সিং রোস্টার, বায়োমেট্রিক উপস্থিতি ও মাসিক বেতন — সবকিছু এক জায়গায়।",
    highlights: [
      "অপারেশন থিয়েটার (OT) বুকিং ও চেকলিস্ট",
      "ডাক্তার ও স্টাফ প্রোফাইল এবং ডকুমেন্ট সংরক্ষণ",
      "শিফট রোস্টার ও ডিউটি শিডিউল প্ল্যানার",
      "বায়োমেট্রিক উপস্থিতি ও ছুটি ব্যবস্থাপনা",
      "স্বয়ংক্রিয় পেরোল ও ডাক্তার কমিশন হিসাব",
    ],
    metricLabel: "সক্রিয় স্টাফ",
    metricValue: "180+",
    secondaryMetricLabel: "শিফট কভারেজ",
    secondaryMetricValue: "100%",
    previewRows: [
      { label: "OT স্যুট ১ — ল্যাপারোস্কোপি", meta: "ডা. মাহমুদ · সকাল ১১:০০ স্লট", status: "নির্ধারিত", tone: "blue" },
      { label: "নার্সিং শিফট B — ওয়ার্ড ২", meta: "১৪ জন নার্স সময়মতো উপস্থিত", status: "সক্রিয়", tone: "emerald" },
      { label: "কনসাল্টেন্ট পেআউট — নভেম্বর", meta: "২৮ জন ডাক্তারের হিসাব সম্পন্ন", status: "প্রস্তুত", tone: "emerald" },
    ],
  },
];

export const STATS = [
  { value: "50+", label: "হসপিটাল ও ক্লিনিক", icon: "building" as const },
  { value: "10M+", label: "সফল লেনদেন", icon: "activity" as const },
  { value: "99.99%", label: "আপটাইম গ্যারান্টি", icon: "zap" as const },
  { value: "24/7", label: "ডেডিকেটেড সাপোর্ট", icon: "headset" as const },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "ছোট ক্লিনিক ও ডায়াগনস্টিক সেন্টারের জন্য আদর্শ",
    priceBDT: "৳ 2,500",
    priceUSD: "$50",
    period: "/মাস",
    ctaLabel: "ফ্রি ট্রায়াল শুরু করুন",
    features: [
      { label: "EMR ও রোগী রেজিস্ট্রেশন", included: true },
      { label: "OPD ও স্মার্ট টোকেন কিউ", included: true },
      { label: "বিলিং ও ইনভয়েসিং", included: true },
      { label: "ফার্মেসি ও ইনভেন্টরি সিঙ্ক", included: true },
      { label: "সর্বোচ্চ ৫ জন স্টাফ ইউজার", included: true },
      { label: "IPD ও ভিজ্যুয়াল বেড গ্রিড", included: false },
      { label: "ডায়াগনস্টিক ল্যাব ও অ্যানালাইজার সিঙ্ক", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "ক্রমবর্ধমান ও মাল্টি-ডিপার্টমেন্ট হসপিটালের জন্য",
    priceBDT: "৳ 7,500",
    priceUSD: "$149",
    period: "/মাস",
    featured: true,
    ctaLabel: "ফ্রি ট্রায়াল শুরু করুন",
    features: [
      { label: "সব ৬টি মূল মডিউল অন্তর্ভুক্ত", included: true },
      { label: "সর্বোচ্চ ২৫ জন স্টাফ ইউজার", included: true },
      { label: "সম্পূর্ণ বাংলা ভাষা সাপোর্ট", included: true },
      { label: "স্বয়ংক্রিয় SMS ও VoIP কল রিমাইন্ডার", included: true },
      { label: "রিয়েল-টাইম আর্থিক অ্যানালিটিক্স", included: true },
      { label: "অগ্রাধিকারভিত্তিক ২৪/৭ সাপোর্ট", included: true },
      { label: "বিনামূল্যে অনবোর্ডিং ও ডেটা মাইগ্রেশন", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "বড় ও একাধিক শাখাবিশিষ্ট হসপিটাল চেইনের জন্য",
    priceBDT: "যোগাযোগ করুন",
    priceUSD: "যোগাযোগ করুন",
    period: "",
    ctaLabel: "সেলস টিমে যোগাযোগ করুন",
    features: [
      { label: "আনলিমিটেড ইউজার ও ব্রাঞ্চ", included: true },
      { label: "অপারেশন থিয়েটার (OT) ও পেরোল", included: true },
      { label: "HL7/FHIR ও ল্যাব অ্যানালাইজার ইন্টিগ্রেশন", included: true },
      { label: "হাইব্রিড অফলাইন / অন-প্রেমিস সুবিধা", included: true },
      { label: "কাস্টম ওয়ার্কফ্লো ও রিপোর্ট", included: true },
      { label: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", included: true },
      { label: "কাস্টম SLA ও ২৪/৭ ইঞ্জিনিয়ারিং সাপোর্ট", included: true },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    role: "ডাক্তার ও মেডিকেল ডিরেক্টর",
    departments: "OPD · IPD · ডায়াগনস্টিক ল্যাব",
    quote:
      "OPD সিরিয়াল, রোগীর মেডিকেল রেকর্ড এবং ভেরিফায়েড ল্যাব রিপোর্ট এক স্ক্রিনেই পাওয়া যায় — ফলে কাগজের ঝামেলা ছাড়াই কনসাল্টেশন ও ওয়ার্ড রাউন্ড অনেক দ্রুত সম্পন্ন হয়।",
    impact: "৪০% দ্রুত রোগী কনসাল্টেশন",
  },
  {
    role: "হসপিটাল অ্যাডমিন ও ফাইন্যান্স টিম",
    departments: "বিলিং · ফার্মেসি · জেনারেল লেজার",
    quote:
      "বিলিং, ফার্মেসি POS এবং ডাবল-এন্ট্রি অ্যাকাউন্টস স্বয়ংক্রিয়ভাবে সিঙ্ক থাকে, তাই ম্যানুয়াল হিসাব মেলানো ছাড়াই ডিসচার্জ বিল, বকেয়া ও দৈনিক ক্যাশ রিপোর্ট নির্ভুলভাবে তৈরি হয়।",
    impact: "সব বিভাগে জিরো রেভিনিউ লিকেজ",
  },
  {
    role: "ফ্রন্ট ডেস্ক ও নার্সিং টিম",
    departments: "রেজিস্ট্রেশন · ভর্তি · বেড গ্রিড",
    quote:
      "রোগী রেজিস্ট্রেশন, কেবিন অ্যালোকেশন এবং VoIP রিমাইন্ডার মাত্র কয়েক ক্লিকেই করা যায়। নতুন স্টাফরাও এক বিকেলেই পুরো সিস্টেমটি সহজে শিখে নিতে পারেন।",
    impact: "৬০ সেকেন্ডের কম সময়ে রোগী চেক-ইন",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Top HMS কি ক্লাউড-ভিত্তিক নাকি অফলাইনেও কাজ করে?",
    answer:
      "Top HMS ক্লাউডে চলে বলে আপনি যেকোনো স্থান থেকে হসপিটাল মনিটর করতে পারেন। পাশাপাশি আমাদের হাইব্রিড অফলাইন-সক্ষম আর্কিটেকচার স্থানীয় ইন্টারনেট বিচ্ছিন্ন থাকলেও OPD, ফার্মেসি POS এবং বিলিং কাউন্টার সচল রাখে। Enterprise প্ল্যানে সম্পূর্ণ অন-প্রেমিস ডিপ্লয়মেন্ট সুবিধাও রয়েছে।",
  },
  {
    question: "ফ্রি ট্রায়াল কত দিনের এবং এতে কী কী সুবিধা থাকছে?",
    answer:
      "কোনো ক্রেডিট কার্ড ছাড়াই আপনি পাচ্ছেন ১৪ দিনের পূর্ণাঙ্গ ফ্রি ট্রায়াল, যেখানে সব মূল মডিউল ব্যবহার করতে পারবেন। ট্রায়াল শেষে চালু রাখতে চাইলে আমাদের ইঞ্জিনিয়াররা কোনো ডাউনটাইম ছাড়াই আপনার পুরোনো ডেটা মাইগ্রেট করে দেবেন।",
  },
  {
    question: "আমাদের হসপিটাল ও রোগীর ডেটা কতটা নিরাপদ?",
    answer:
      "সকল ডেটা এন্ড-টু-এন্ড SSL/TLS এনক্রিপশন, রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল, অপরিবর্তনীয় বিলিং অডিট লগ এবং স্বয়ংক্রিয় দৈনিক ব্যাকআপ দ্বারা সুরক্ষিত। সাথে থাকছে ৯৯.৯৯% আপটাইম গ্যারান্টি।",
  },
  {
    question: "আপনারা কি স্টাফ ট্রেনিং ও অনবোর্ডিং সুবিধা দেন?",
    answer:
      "হ্যাঁ। প্রতিটি প্ল্যানের সাথেই আপনার ডাক্তার, নার্স, ল্যাব টেকনিশিয়ান ও বিলিং টিমের জন্য বিনামূল্যে লাইভ ট্রেনিং, বাংলা ও ইংরেজি গাইড এবং ডেডিকেটেড সাপোর্ট চ্যানেল অন্তর্ভুক্ত থাকে।",
  },
  {
    question: "Top HMS কি ল্যাব অ্যানালাইজার বা কাস্টম ওয়ার্কফ্লোর সাথে যুক্ত করা যাবে?",
    answer:
      "অবশ্যই। Top HMS সরাসরি HL7/FHIR স্ট্যান্ডার্ড এবং হেমাটোলজি ও বায়োকেমিস্ট্রি অ্যানালাইজারের সাথে TCP/IP ইন্টিগ্রেশন সাপোর্ট করে। Enterprise প্ল্যানে কাস্টম মডিউল, SMS/VoIP গেটওয়ে এবং মাল্টি-ব্রাঞ্চ রিপোর্টিংও তৈরি করে দেওয়া হয়।",
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    category: "হসপিটাল অপারেশন",
    title: "স্মার্ট OPD টোকেন সিস্টেমে কীভাবে রোগীর অপেক্ষার সময় ৮ মিনিটের নিচে নামানো যায়",
    excerpt:
      "ডিজিটাল রেজিস্ট্রেশন, লাইভ চেম্বার ডিসপ্লে এবং স্বয়ংক্রিয় VoIP রিমাইন্ডার ব্যবহার করে ব্যস্ত আউটডোরে ভিড় ও জট কমানোর কার্যকর উপায় জানুন।",
    date: "নভেম্বর ২০২৬",
    readTime: "৪ মিনিট পাঠ",
  },
  {
    category: "আয় সুরক্ষা",
    title: "ল্যাব, ফার্মেসি ও IPD-এর মধ্যে বিলিং লিকেজ বন্ধ করার আধুনিক পদ্ধতি",
    excerpt:
      "আলাদা আলাদা স্প্রেডশিট ব্যবহারের কারণে হসপিটালগুলো কীভাবে ১০-১২% পর্যন্ত রাজস্ব হারায় এবং সমন্বিত ডিসচার্জ বিলিং কীভাবে এর স্থায়ী সমাধান দেয়।",
    date: "অক্টোবর ২০২৬",
    readTime: "৫ মিনিট পাঠ",
  },
];
