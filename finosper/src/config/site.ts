export const siteConfig = {
  name: "Finosper",
  tagline: "Trusted Financial Expertise",
  description:
    "Finosper — Professional Chartered Accountancy services by CA Shrish Tiwari. Tax planning, GST compliance, auditing, and business advisory in Kanpur, Uttar Pradesh.",
  url: "https://finosper.in",
  ogImage: "/og-image.png",
  caName: "CA Shrish Tiwari",
  location: "Kanpur, Uttar Pradesh, India",
  bookingUrl: "https://topmate.io/placeholder", // Replace with actual Topmate link
  contact: {
    email: "finosper.ho@gmail.com",
    phone: "+91 84005 00791",
    address: "110/223 Jawahar Nagar Kanpur 208012",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/finosper?originalSubdomain=in",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      title: "GST Registration",
      description:
        "Seamless GST registration for businesses of all sizes with complete documentation support.",
      href: "/services/gst-registration",
    },
    {
      title: "GST Filing & Returns",
      description:
        "Timely and accurate GST return filing — GSTR-1, GSTR-3B, annual returns and reconciliation.",
      href: "/services/gst-filing",
    },
    {
      title: "Income Tax Filing",
      description:
        "Hassle-free ITR filing for individuals, HUFs, firms and corporates with maximum refund optimization.",
      href: "/services/income-tax-filing",
    },
    {
      title: "Tax Planning",
      description:
        "Strategic tax planning to legally minimize your tax liability and maximize savings year-round.",
      href: "/services/tax-planning",
    },
    {
      title: "Company Incorporation",
      description:
        "End-to-end company registration — Private Limited, LLP, OPC, and partnership firm setup.",
      href: "/services/company-incorporation",
    },
    {
      title: "Compliance & Advisory",
      description:
        "Stay compliant with ROC filings, annual returns, statutory audits, and regulatory advisory.",
      href: "/services/compliance-advisory",
    },
    {
      title: "Accounting & Bookkeeping",
      description:
        "Accurate bookkeeping, financial statements, and accounts management for your business.",
      href: "/services/accounting-bookkeeping",
    },
    {
      title: "Startup Consultancy",
      description:
        "Expert guidance for startups — funding readiness, DPIIT registration, and financial structuring.",
      href: "/services/startup-consultancy",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
