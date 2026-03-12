"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FileText,
    Receipt,
    Calculator,
    TrendingUp,
    Building2,
    ShieldCheck,
    BookOpen,
    Lightbulb,
    ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/config/animations";

const serviceIcons = [
    FileText,
    Receipt,
    Calculator,
    TrendingUp,
    Building2,
    ShieldCheck,
    BookOpen,
    Lightbulb,
];

export default function ServicesOverview() {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                        What We Offer
                    </p>
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                        Comprehensive CA Services
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        From GST registration to startup consultancy — we provide end-to-end
                        Chartered Accountancy services tailored to your needs.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {siteConfig.services.map((service, i) => {
                        const Icon = serviceIcons[i] || FileText;
                        return (
                            <motion.div key={service.title} variants={fadeInUp}>
                                <Link
                                    href={service.href}
                                    className="group flex h-full flex-col rounded-2xl border border-border/50 bg-off-white p-6 transition-all duration-300 hover:bg-white hover:shadow-elevated hover:border-gold/20"
                                >
                                    {/* Icon */}
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:shadow-md">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base font-semibold text-navy mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Link indicator */}
                                    <div className="mt-4 flex items-center text-xs font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        Learn more
                                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
