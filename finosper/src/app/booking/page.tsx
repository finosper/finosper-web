import type { Metadata } from "next";
import { PageTransition } from "@/components/layout";
import { siteConfig } from "@/config/site";
import {
    Calendar,
    Phone,
    ShieldCheck,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Clock,
    Building2,
    Briefcase,
    Laptop,
    HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Book 1:1 CA Consultation | ₹499 Special Offer",
    description:
        "Book a direct 1:1 consultation with CA Shrish Tiwari for ₹499 (was ₹1,999). Personalized tax planning, GST compliance, and financial strategy.",
};

const consultationHighlights = [
    {
        title: "Personalized Tax Strategy",
        description: "Analyze your income streams, optimize deductions under Old vs. New Regime, and legally minimize tax liability.",
    },
    {
        title: "GST & Business Compliance Health Check",
        description: "Identify reconciliation gaps, input tax credit leaks, and prevent penalty notices before they arrive.",
    },
    {
        title: "Notice & Scrutiny Assessment",
        description: "Received an Income Tax or GST notice? Get a swift, legally sound strategy for drafting your response.",
    },
    {
        title: "Entity Structuring & Startup Advisory",
        description: "Choose the optimal vehicle (Pvt Ltd, LLP, OPC) with insights on DPIIT recognition and founder tax efficiency.",
    },
    {
        title: "Actionable Post-Call Summary",
        description: "Receive a concise, step-by-step checklist of immediate action items tailored to your specific situation.",
    },
    {
        title: "100% Service Fee Adjustment",
        description: "Your entire ₹499 consultation fee is credited back when you take any filing or registration service with Finosper.",
    },
];

const targetAudiences = [
    {
        icon: Briefcase,
        title: "Salaried & HNWIs",
        badge: "Tax Optimization",
        description: "Professionals with ESOPs, multiple form 16s, capital gains, or foreign assets seeking maximum tax savings.",
    },
    {
        icon: Building2,
        title: "Business Owners & MSMEs",
        badge: "Compliance & GST",
        description: "Traders, manufacturers, and service firms needing error-free GST returns, TDS compliance, and audit readiness.",
    },
    {
        icon: Laptop,
        title: "Freelancers & Consultants",
        badge: "Presumptive Tax",
        description: "Remote developers, creators, and export earners leveraging Section 44ADA, LUT filings, and foreign remittances.",
    },
    {
        icon: Sparkles,
        title: "Startups & Founders",
        badge: "Incorporation & DPIIT",
        description: "Early-stage teams requiring founder agreements, cap table tax planning, and startup tax exemptions.",
    },
];

const faqs = [
    {
        question: "Will I speak directly with CA Shrish Tiwari?",
        answer: "Yes, 100%. Your consultation is conducted directly by CA Shrish Tiwari, not junior associates or relationship managers.",
    },
    {
        question: "How does the 100% Fee Adjustment Guarantee work?",
        answer: "If you decide to engage Finosper for any ongoing service (such as ITR filing, GST filing, accounting, or company incorporation), the entire ₹499 paid for this session will be credited toward your invoice.",
    },
    {
        question: "What happens after I complete payment on Topmate?",
        answer: "You will receive an instant confirmation email and a calendar invite containing the Google Meet video link. You can add it directly to your Google or Outlook calendar.",
    },
    {
        question: "What documents should I prepare before the call?",
        answer: "Having your PAN, previous year's ITR, recent Form 26AS/AIS, or any specific notices you have received will help us dive straight into actionable solutions.",
    },
    {
        question: "Can I reschedule if an emergency comes up?",
        answer: "Yes, you can easily reschedule up to 4 hours before the session directly through the link provided in your Topmate confirmation email.",
    },
];

export default function BookingPage() {
    const telHref = `tel:${siteConfig.contact.phone}`;
    const bookingHref = siteConfig.topmateUrl;

    return (
        <PageTransition>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-dark py-20 text-white sm:py-28">
                    {/* Background decorations */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                            backgroundSize: "36px 36px",
                        }}
                    />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            {/* Urgent Offer Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold sm:text-sm">
                                <Sparkles className="h-4 w-4 animate-pulse text-gold" />
                                Special Offer · 75% OFF · Limited Weekly Slots
                            </div>

                            <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
                                Book Your 1:1 Strategic <br className="hidden sm:inline" />
                                <span className="text-gold">CA Consultation</span>
                            </h1>

                            <p className="mt-6 text-base text-white/70 sm:text-lg leading-relaxed">
                                Stop guessing your tax deductions or stressing over compliance notices.
                                Spend 30 focused minutes with <span className="font-semibold text-white">{siteConfig.caName}</span> and
                                walk away with an actionable financial strategy.
                            </p>
                        </div>

                        {/* High-Converting Pricing & Booking Card */}
                        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-md shadow-2xl">
                            <div className="grid lg:grid-cols-12">
                                {/* Left Side: Value Breakdown */}
                                <div className="p-6 sm:p-10 lg:col-span-7">
                                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                                        <ShieldCheck className="h-4 w-4 text-gold" />
                                        Comprehensive 30-Minute Advisory
                                    </div>
                                    <h3 className="mt-2 text-2xl font-bold text-white font-serif">
                                        What We Cover in Your Session
                                    </h3>
                                    <p className="mt-2 text-sm text-white/60">
                                        Direct senior-level advisory tailored exclusively to your numbers and goals.
                                    </p>

                                    <ul className="mt-6 space-y-3.5">
                                        {consultationHighlights.slice(0, 4).map((item) => (
                                            <li key={item.title} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                                                <div>
                                                    <span className="font-semibold text-white text-sm">
                                                        {item.title}:
                                                    </span>{" "}
                                                    <span className="text-xs sm:text-sm text-white/75">
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                                        <div className="flex items-start gap-3">
                                            <ShieldCheck className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                                                    100% Fee Adjustment Guarantee
                                                </h4>
                                                <p className="mt-1 text-xs text-amber-100/80 leading-relaxed">
                                                    Your entire ₹499 consultation fee is credited back if you hire Finosper for any annual filing, GST return, or registration service.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Checkout / CTA Box */}
                                <div className="flex flex-col justify-between border-t border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:col-span-5 lg:border-t-0 lg:border-l">
                                    <div>
                                        <div className="rounded-lg bg-gold/10 px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-wide text-gold">
                                            Introductory Price
                                        </div>

                                        <div className="mt-6 text-center">
                                            <div className="flex items-baseline justify-center gap-3">
                                                <span className="text-5xl font-extrabold text-gold">
                                                    ₹499
                                                </span>
                                                <span className="text-xl text-white/40 line-through">
                                                    ₹1,999
                                                </span>
                                            </div>
                                            <p className="mt-1 text-xs font-medium text-emerald-400">
                                                You Save ₹1,500 (75% OFF)
                                            </p>
                                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                <Clock className="h-3.5 w-3.5 text-gold" />
                                                30-Minute Video / Phone Call
                                            </div>
                                        </div>

                                        <ul className="mt-6 space-y-2 text-xs text-white/70">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                                                Direct 1:1 with CA Shrish Tiwari
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                                                Instant calendar slot booking
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                                                Google Meet link generated instantly
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                                                100% confidential &amp; secure
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="group w-full rounded-xl bg-gold py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                                        >
                                            <a
                                                href={bookingHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Book on Topmate (₹499)
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </Button>

                                        <div className="text-center">
                                            <span className="text-[11px] text-white/40">
                                                Secure booking &amp; instant payment powered by Topmate
                                            </span>
                                        </div>

                                        <div className="pt-2">
                                            <a
                                                href={telHref}
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
                                            >
                                                <Phone className="h-3.5 w-3.5 text-gold" />
                                                Urgent Emergency? Call Directly
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Is This For Section */}
                <section className="py-20 bg-off-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                                Tailored Guidance
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
                                Who Should Book This Session?
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base">
                                Whether you are an individual wanting to save tax or a growing business managing compliances,
                                get targeted advice specific to your stage.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {targetAudiences.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="relative rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/40"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                                            <Icon className="h-6 w-6 text-gold" />
                                        </div>
                                        <span className="mt-4 inline-block rounded-md bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy">
                                            {item.badge}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold text-navy">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-white border-t border-border">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                                Easy 3-Step Process
                            </p>
                            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
                                How Your Consultation Works
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base">
                                Seamless scheduling with zero back-and-forth emails.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-8 md:grid-cols-3">
                            <div className="relative rounded-2xl border border-border bg-off-white p-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-bold text-lg">
                                    1
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-navy">
                                    Pick Slot &amp; Pay ₹499
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    Click the Topmate link, select your preferred date and time, and complete the payment securely via UPI, Card, or Net Banking.
                                </p>
                            </div>

                            <div className="relative rounded-2xl border border-border bg-off-white p-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-bold text-lg">
                                    2
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-navy">
                                    Instant Invite via Google Meet
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    Receive a calendar invitation right away with the video conference link and guidelines on documents to have ready.
                                </p>
                            </div>

                            <div className="relative rounded-2xl border border-border bg-off-white p-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-bold text-lg">
                                    3
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-navy">
                                    1:1 Strategy &amp; Next Steps
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    Join the session with CA Shrish Tiwari. Walk away with clear answers and an actionable checklist for total tax and compliance peace.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-off-white border-t border-border">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                                <HelpCircle className="h-4 w-4 text-gold" />
                                Clear Answers
                            </div>
                            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="mt-12 space-y-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.question}
                                    className="rounded-xl border border-border bg-white p-6 shadow-sm"
                                >
                                    <h3 className="text-base font-bold text-navy">
                                        {faq.question}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA Card */}
                        <div className="mt-14 rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark p-8 sm:p-10 text-center text-white shadow-xl">
                            <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                                Ready to Get Complete Financial Clarity?
                            </h3>
                            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
                                Claim your 1:1 consultation slot with {siteConfig.caName} today for just ₹499 (was ₹1,999).
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl bg-gold px-8 py-6 text-base font-semibold text-navy shadow-lg hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                                >
                                    <a
                                        href={bookingHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Book Your 1:1 Slot (₹499)
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-xl border-white/20 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10"
                                >
                                    <a href={telHref}>
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call for Immediate Help
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
