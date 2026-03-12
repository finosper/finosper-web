"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, Plus, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const actions = [
    {
        icon: Phone,
        label: "Call Now",
        href: `tel:${siteConfig.contact.phone}`,
        color: "bg-blue-600",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}`,
        color: "bg-green-600",
    },
    {
        icon: Calendar,
        label: "Book Consultation",
        href: siteConfig.bookingUrl,
        color: "bg-gold",
        isExternal: true,
    },
];

export default function SpeedDial() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        className="flex flex-col items-center gap-3"
                    >
                        {actions.map((action, index) => (
                            <motion.a
                                key={action.label}
                                href={action.href}
                                target={action.isExternal ? "_blank" : undefined}
                                rel={action.isExternal ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative flex items-center gap-3"
                                aria-label={action.label}
                            >
                                <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-xs font-medium text-white shadow-md opacity-0 transition-opacity group-hover:opacity-100">
                                    {action.label}
                                </span>
                                <div className={`${action.color} flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110`}>
                                    <action.icon className="h-5 w-5" />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Contact options"
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-elevated transition-transform hover:scale-105 active:scale-95 ${isOpen ? 'rotate-0' : ''}`}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                </motion.div>
            </button>
        </div>
    );
}
