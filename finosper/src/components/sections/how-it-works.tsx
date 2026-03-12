"use client";

import { motion } from "framer-motion";
import {
    ClipboardList,
    CalendarCheck,
    HeadphonesIcon,
    CheckCircle2,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/config/animations";

const steps = [
    {
        icon: ClipboardList,
        step: "01",
        title: "Choose Service",
        description: "Browse our services and pick the one that fits your needs.",
    },
    {
        icon: CalendarCheck,
        step: "02",
        title: "Book Consultation",
        description: "Schedule a free consultation at your convenient time slot.",
    },
    {
        icon: HeadphonesIcon,
        step: "03",
        title: "Expert Guidance",
        description: "Get personalised advice from CA Shrish Tiwari's expert team.",
    },
    {
        icon: CheckCircle2,
        step: "04",
        title: "Compliance Done",
        description: "We handle all the paperwork and ensure 100% compliance.",
    },
];

export default function HowItWorks() {
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
                        Simple Process
                    </p>
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Getting professional CA services has never been easier. Just four
                        simple steps.
                    </p>
                </motion.div>

                {/* Steps Timeline */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Connector line (desktop only) */}
                    <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px]">
                        <div className="h-full w-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 rounded-full" />
                    </div>

                    {steps.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Step circle */}
                            <div className="relative z-10 mb-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-lg transition-colors group-hover:bg-gold">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                {/* Step number badge */}
                                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy shadow-sm">
                                    {item.step}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-semibold text-navy mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                                {item.description}
                            </p>

                            {/* Arrow to next step (mobile) */}
                            {i < steps.length - 1 && (
                                <div className="mt-4 text-gold/30 lg:hidden">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="rotate-90"
                                    >
                                        <path
                                            d="M5 10H15M15 10L10 5M15 10L10 15"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
