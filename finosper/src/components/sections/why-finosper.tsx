"use client";

import { motion } from "framer-motion";
import { UserCheck, Wallet, Clock, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/config/animations";

const reasons = [
    {
        icon: UserCheck,
        title: "Personalized Consultation",
        description:
            "Every client gets dedicated attention. We understand your unique financial situation and provide tailored solutions.",
    },
    {
        icon: Wallet,
        title: "Transparent Pricing",
        description:
            "No hidden charges, no surprises. Clear and upfront pricing for all our Chartered Accountancy services.",
    },
    {
        icon: Clock,
        title: "Timely Compliance",
        description:
            "Never miss a deadline. We ensure all your filings, returns, and statutory compliances are handled on time.",
    },
    {
        icon: Award,
        title: "Professional Expertise",
        description:
            "Backed by years of practice and deep knowledge of Indian tax laws, GST regulations, and business compliance.",
    },
];

export default function WhyFinosper() {
    return (
        <section className="py-20 sm:py-28 bg-off-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left — Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                            The Finosper Advantage
                        </p>
                        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                            Why Choose Finosper?
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
                            We combine professional expertise with a client-first approach,
                            delivering financial services that are transparent, timely, and
                            tailored to your goals.
                        </p>

                        {/* Decorative accent */}
                        <div className="mt-6 flex items-center gap-2">
                            <div className="h-1 w-12 rounded-full bg-gold" />
                            <div className="h-1 w-6 rounded-full bg-gold/40" />
                            <div className="h-1 w-3 rounded-full bg-gold/20" />
                        </div>
                    </motion.div>

                    {/* Right — Cards grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid gap-4 sm:grid-cols-2"
                    >
                        {reasons.map((reason) => (
                            <motion.div
                                key={reason.title}
                                variants={fadeInUp}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group rounded-2xl bg-white p-5 shadow-card border border-border/50 transition-shadow hover:shadow-elevated"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                                    <reason.icon className="h-5 w-5" />
                                </div>
                                <h4 className="text-sm font-semibold text-navy mb-1.5">
                                    {reason.title}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
