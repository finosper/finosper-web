"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Rocket, Globe } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/config/animations";

const trustItems = [
    {
        icon: FileText,
        title: "GST Expert",
        description:
            "Comprehensive GST registration, filing, and compliance services with zero-error guarantee.",
    },
    {
        icon: Shield,
        title: "Income Tax Specialist",
        description:
            "Strategic tax filing and planning for individuals and businesses — maximizing your savings.",
    },
    {
        icon: Rocket,
        title: "Startup & MSME Friendly",
        description:
            "Tailored financial solutions for startups and MSMEs — from incorporation to compliance.",
    },
    {
        icon: Globe,
        title: "PAN India Services",
        description:
            "Serving clients across India with digital-first processes and seamless remote consultations.",
    },
];

export default function TrustSection() {
    return (
        <section className="py-20 sm:py-28 bg-off-white">
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
                        Why Trust Us
                    </p>
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                        Trusted Financial &amp; Compliance Partner
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        With years of expertise and hundreds of satisfied clients, Finosper
                        is your reliable partner for every financial need.
                    </p>
                </motion.div>

                {/* Trust Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {trustItems.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="group relative rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated border border-border/50"
                        >
                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                                <item.icon className="h-6 w-6" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-navy mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>

                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gold scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
