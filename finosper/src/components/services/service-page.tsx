"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Phone,
    ChevronRight,
    CheckCircle2,
    FileText,
    Shield,
    TrendingUp,
    Building2,
    Lightbulb,
    BookOpen,
    Calculator,
    Receipt,
    ShieldCheck,
    UserCheck,
    Clock,
    Globe,
    Award,
    Wallet,
    Rocket,
    ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/config/animations";
import type { ServiceData } from "@/data/services";

/* Icon pool — maps benefit index to an icon */
const iconPool = [
    Shield, CheckCircle2, TrendingUp, Building2, Lightbulb, BookOpen,
    Calculator, Receipt, ShieldCheck, UserCheck, Clock, Globe, Award,
    Wallet, Rocket, ClipboardList, FileText,
];

function getIcon(index: number) {
    return iconPool[index % iconPool.length];
}

interface ServicePageProps {
    service: ServiceData;
}

export default function ServicePage({ service }: ServicePageProps) {
    return (
        <>
            {/* ── Breadcrumb ── */}
            <div className="bg-white border-b border-border">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5" />
                        <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="font-medium text-navy">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* ── 1. Hero Section ── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark py-20 sm:py-28">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
                >
                    <motion.p variants={fadeInUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                        {siteConfig.name} Services
                    </motion.p>
                    <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        {service.title}
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-2xl text-lg text-white/60 leading-relaxed">
                        {service.shortDescription}
                    </motion.p>
                    <motion.div variants={fadeInUp} className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="group rounded-xl bg-gold px-8 py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                        >
                            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                                <Phone className="mr-2 h-4 w-4" />
                                Book Consultation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── 2. About the Service ── */}
            <section className="py-16 sm:py-24 bg-off-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-10 lg:grid-cols-2 lg:gap-16"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">About This Service</p>
                            <h2 className="text-3xl font-bold text-navy sm:text-4xl">{service.title}</h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">{service.longDescription}</p>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-card border border-border/50">
                                <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-gold" /> Who Needs This?
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.whoNeedsThis}</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-card border border-border/50">
                                <h4 className="text-base font-semibold text-navy mb-2 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-gold" /> Why It&apos;s Important
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.whyImportant}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 3. Benefits ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Key Benefits</p>
                        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                            Why Choose Our {service.title} Service
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {service.benefits.map((benefit, i) => {
                            const Icon = getIcon(i);
                            return (
                                <motion.div
                                    key={benefit.title}
                                    variants={fadeInUp}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="group rounded-2xl bg-off-white p-6 border border-border/50 transition-all hover:shadow-elevated hover:bg-white hover:border-gold/20"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-sm font-semibold text-navy mb-1.5">{benefit.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── 4. Documents Required ── */}
            <section className="py-16 sm:py-24 bg-off-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Checklist</p>
                            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Documents Required</h2>
                        </div>

                        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 sm:p-8 shadow-card border border-border/50">
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {service.documents.map((doc) => (
                                    <li key={doc} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                        <span className="text-sm text-muted-foreground">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 5. Process ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Our Process</p>
                        <h2 className="text-3xl font-bold text-navy sm:text-4xl">How We Work</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="relative mx-auto max-w-4xl"
                    >
                        {/* Vertical connector */}
                        <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 hidden sm:block" />

                        <div className="space-y-6">
                            {service.process.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    variants={fadeInUp}
                                    className="relative flex items-start gap-5 sm:gap-6"
                                >
                                    {/* Step number bubble */}
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white font-bold text-sm shadow-md">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <div className="rounded-2xl bg-off-white p-5 flex-1 border border-border/50">
                                        <h4 className="text-base font-semibold text-navy mb-1">{step.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 6. FAQs ── */}
            <section className="py-16 sm:py-24 bg-off-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">FAQs</p>
                            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="mx-auto max-w-3xl">
                            <Accordion type="single" collapsible className="space-y-3">
                                {service.faqs.map((faq, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`faq-${i}`}
                                        className="rounded-xl bg-white border border-border/50 px-6 shadow-card overflow-hidden data-[state=open]:shadow-elevated data-[state=open]:border-gold/20 transition-all"
                                    >
                                        <AccordionTrigger className="text-left text-sm font-semibold text-navy hover:text-gold hover:no-underline py-4 [&[data-state=open]>svg]:text-gold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 7. CTA Section ── */}
            <section className="relative py-20 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gold/5 rounded-full blur-3xl" />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
                >
                    <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                        Get Expert Help
                    </motion.p>
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
                        Need Professional Assistance with {service.title}?
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl text-white/60 leading-relaxed">
                        Book a free consultation with {siteConfig.caName} and let us handle
                        the complexities while you focus on growing your business.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="group rounded-xl bg-gold px-10 py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                        >
                            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                                <Phone className="mr-2 h-4 w-4" />
                                Book Consultation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </motion.div>
                    <motion.p variants={fadeInUp} className="mt-6 text-xs text-white/40">
                        Free 15-minute consultation · No hidden charges · 100% confidential
                    </motion.p>
                </motion.div>
            </section>
        </>
    );
}
