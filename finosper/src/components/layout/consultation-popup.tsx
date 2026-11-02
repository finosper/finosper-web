"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "finosper_consultation_popup_v1";
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours (once a day)

export default function ConsultationPopup() {
    const [isOpen, setIsOpen] = useState(false);

    const dismissPopup = useCallback(() => {
        setIsOpen(false);
        try {
            localStorage.setItem(STORAGE_KEY, Date.now().toString());
        } catch {
            // ignore localStorage errors (e.g. incognito/disabled)
        }
    }, []);

    useEffect(() => {
        try {
            const lastShown = localStorage.getItem(STORAGE_KEY);
            if (lastShown) {
                const elapsed = Date.now() - parseInt(lastShown, 10);
                if (elapsed < COOLDOWN_MS) {
                    return; // already shown within the last 24 hours
                }
            }
        } catch {
            // ignore localStorage read issues
        }

        // Show popup after a smooth 2.5-second delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Handle Escape key
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") dismissPopup();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, dismissPopup]);

    const handleProceedToTopmate = () => {
        dismissPopup();
        window.open(siteConfig.topmateUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Exclusive 1:1 CA Consultation Offer"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={dismissPopup}
                        className="fixed inset-0 bg-navy-dark/75 backdrop-blur-sm"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-navy via-navy to-navy-dark text-white shadow-2xl"
                    >
                        {/* Decorative Top Accent Bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-gold/60 via-gold to-gold-light" />

                        {/* Close Button */}
                        <button
                            onClick={dismissPopup}
                            aria-label="Close offer modal"
                            className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="p-6 sm:p-8">
                            {/* Offer Badge */}
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                                <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
                                Limited Time Offer · 75% OFF
                            </div>

                            {/* Headline */}
                            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                1:1 Strategic CA Consultation
                            </h3>

                            {/* Subtitle */}
                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                Get direct, undivided 30-min financial advice from{" "}
                                <span className="font-semibold text-white">{siteConfig.caName}</span>.
                                Stop tax leaks, resolve notices, and optimize your business compliance.
                            </p>

                            {/* Price Comparison Card */}
                            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="flex items-baseline justify-between">
                                    <div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                                            Special Session Fee
                                        </span>
                                        <div className="mt-1 flex items-baseline gap-2">
                                            <span className="text-3xl font-extrabold text-gold sm:text-4xl">
                                                ₹499
                                            </span>
                                            <span className="text-base text-white/40 line-through">
                                                ₹1,999
                                            </span>
                                            <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                                                Save ₹1,500
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1 text-xs font-medium text-white/70">
                                            <Clock className="h-3.5 w-3.5 text-gold" />
                                            30-Min Session
                                        </div>
                                        <div className="text-[11px] text-white/40">Only 5 slots/week</div>
                                    </div>
                                </div>

                                <div className="mt-3 border-t border-white/10 pt-3">
                                    <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                                        <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
                                        <span>100% Fee Credited on Any Filing or Service!</span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Highlights */}
                            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-white/80">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                                    <span>
                                        <strong className="text-white">Direct CA Access:</strong> 1:1 conversation with CA Shrish Tiwari (no assistants).
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                                    <span>
                                        <strong className="text-white">Personalized Tax Plan:</strong> Maximize deductions and legally reduce tax liability.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                                    <span>
                                        <strong className="text-white">Actionable Roadmap:</strong> Concrete next steps delivered right after the call.
                                    </span>
                                </li>
                            </ul>

                            {/* CTAs */}
                            <div className="mt-6 flex flex-col gap-3">
                                <Button
                                    onClick={handleProceedToTopmate}
                                    size="lg"
                                    className="group w-full rounded-xl bg-gold py-6 text-base font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
                                >
                                    <span>Book 1:1 Slot on Topmate (₹499)</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <div className="flex items-center justify-between text-xs text-white/50 px-1">
                                    <span className="flex items-center gap-1">
                                        <Users className="h-3.5 w-3.5 text-gold" />
                                        500+ Clients Advised
                                    </span>
                                    <button
                                        type="button"
                                        onClick={dismissPopup}
                                        className="text-white/50 underline-offset-4 hover:text-white/80 hover:underline"
                                    >
                                        Maybe later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
