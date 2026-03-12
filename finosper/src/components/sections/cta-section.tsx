"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/config/animations";

export default function CTASection() {
    return (
        <section className="relative py-20 sm:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
                {/* Pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
            >
                <motion.div variants={fadeInUp}>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                        Get Started Today
                    </p>
                </motion.div>

                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight"
                >
                    Ready to Simplify Your{" "}
                    <span className="text-gold">Tax &amp; Compliance?</span>
                </motion.h2>

                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mt-5 max-w-xl text-white/60 leading-relaxed"
                >
                    Book a free consultation with {siteConfig.caName} and take the first
                    step towards financial clarity and compliance peace of mind.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button
                        asChild
                        size="lg"
                        className="group rounded-xl bg-gold px-10 py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                    >
                        <a
                            href={siteConfig.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Phone className="mr-2 h-4 w-4" />
                            Book Consultation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-xl border-white/15 bg-white/5 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/25"
                    >
                        <a href="/contact">Contact Us</a>
                    </Button>
                </motion.div>

                {/* Trust note */}
                <motion.p
                    variants={fadeInUp}
                    className="mt-8 text-xs text-white/40"
                >
                    Free 15-minute consultation · No hidden charges · 100% confidential
                </motion.p>
            </motion.div>
        </section>
    );
}
