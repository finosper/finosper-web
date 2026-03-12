"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    FileText,
    Receipt,
    Calculator,
    TrendingUp,
    Building2,
    ShieldCheck,
    BookOpen,
    Lightbulb,
    Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/config/animations";

const serviceIcons = [
    FileText, Receipt, Calculator, TrendingUp,
    Building2, ShieldCheck, BookOpen, Lightbulb,
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark py-20 sm:py-28">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
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
                        What We Offer
                    </motion.p>
                    <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        Our Services
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-2xl text-lg text-white/60 leading-relaxed">
                        Comprehensive Chartered Accountancy services tailored for individuals,
                        businesses, and startups across India.
                    </motion.p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-20 sm:py-28 bg-off-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {siteConfig.services.map((service, i) => {
                            const Icon = serviceIcons[i] || FileText;
                            return (
                                <motion.div key={service.title} variants={fadeInUp}>
                                    <Link
                                        href={service.href}
                                        className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 transition-all duration-300 hover:shadow-elevated hover:border-gold/20"
                                    >
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:shadow-md">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                                        <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="mt-5 flex items-center text-sm font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            Learn more
                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gold/5 rounded-full blur-3xl" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/60">
                        Book a free consultation and we&apos;ll help you identify the right services
                        for your specific financial and compliance needs.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="group rounded-xl bg-gold px-10 py-6 text-base font-semibold text-navy shadow-lg hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                        >
                            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                                <Phone className="mr-2 h-4 w-4" />
                                Book Consultation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
