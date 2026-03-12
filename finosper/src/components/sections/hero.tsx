"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/config/animations";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark">
            {/* Decorative elements */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
                {/* Corner accent circles */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/[0.04] blur-2xl" />
                <div className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full bg-white/[0.02] blur-2xl" />
            </div>

            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-36 lg:pt-40"
            >
                {/* CA Badge */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                        <span className="text-xs font-medium tracking-wide text-gold">
                            {siteConfig.caName} · {siteConfig.location}
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeInUp}
                    className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                >
                    Simplifying{" "}
                    <span className="relative">
                        <span className="text-gold">Tax & Compliance</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                        />
                    </span>{" "}
                    for You
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mt-6 max-w-2xl text-center text-base text-white/60 leading-relaxed sm:text-lg"
                >
                    Finosper, led by {siteConfig.caName}, delivers expert Chartered
                    Accountancy services — from GST compliance and tax planning to business
                    advisory — helping businesses and individuals in Kanpur and across India
                    achieve financial clarity.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button
                        asChild
                        size="lg"
                        className="group rounded-xl bg-gold px-8 py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                    >
                        <a
                            href={siteConfig.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book Consultation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="group rounded-xl border-white/15 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/25"
                    >
                        <a href="/services">
                            Explore Services
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </Button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    variants={fadeInUp}
                    className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
                >
                    {[
                        { value: "10+", label: "Years of Expertise" },
                        { value: "500+", label: "Clients Served" },
                        { value: "99%", label: "Compliance Rate" },
                        { value: "24/7", label: "Support Available" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl bg-white/[0.04] px-4 py-4 text-center backdrop-blur-sm border border-white/[0.06]"
                        >
                            <p className="text-2xl font-bold text-gold font-serif sm:text-3xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs text-white/50 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 60V20C240 45 480 5 720 20C960 35 1200 10 1440 30V60H0Z"
                        fill="var(--off-white)"
                    />
                </svg>
            </div>
        </section>
    );
}
