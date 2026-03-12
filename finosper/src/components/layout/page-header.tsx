"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/config/animations";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
    return (
        <section className="relative overflow-hidden bg-navy py-20 lg:py-32">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold/5 blur-[100px]" />
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />

            <div className="container relative mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-3xl text-center"
                >
                    {badge && (
                        <motion.span
                            variants={fadeInUp}
                            className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold"
                        >
                            {badge}
                        </motion.span>
                    )}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-56px"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-lg leading-relaxed text-white/60 sm:text-xl"
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
