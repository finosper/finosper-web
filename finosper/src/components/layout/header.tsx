"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { fadeInDown, navIndicator } from "@/config/animations";
import { cn } from "@/lib/utils";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <motion.header
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border"
                    : "bg-white"
            )}
        >
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white font-serif font-bold text-lg transition-transform group-hover:scale-105">
                        F
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-navy font-serif leading-none">
                            {siteConfig.name}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">
                            {siteConfig.tagline}
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 md:flex">
                    {siteConfig.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 group"
                        >
                            <motion.span
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isActive(link.href)
                                        ? "text-navy"
                                        : "text-muted-foreground hover:text-navy"
                                )}
                            >
                                {link.label}
                            </motion.span>
                            {/* Active / hover indicator */}
                            {isActive(link.href) ? (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gold"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            ) : (
                                <motion.div
                                    variants={navIndicator}
                                    initial="rest"
                                    whileHover="hover"
                                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gold/40"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        size="sm"
                        className="hidden rounded-lg bg-gold px-5 font-semibold text-navy hover:bg-gold-light shadow-sm transition-all hover:shadow-md sm:inline-flex"
                    >
                        <a
                            href={siteConfig.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Phone className="mr-2 h-4 w-4" />
                            Book Consultation
                        </a>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" aria-label="Toggle menu">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={mobileOpen ? "close" : "open"}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {mobileOpen ? (
                                            <X className="h-5 w-5" />
                                        ) : (
                                            <Menu className="h-5 w-5" />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 bg-white p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex h-full flex-col">
                                {/* Mobile Header */}
                                <div className="flex items-center gap-3 border-b border-border px-6 py-5">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white font-serif font-bold text-base">
                                        F
                                    </div>
                                    <div>
                                        <p className="font-serif font-bold text-navy">
                                            {siteConfig.name}
                                        </p>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                            {siteConfig.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Links */}
                                <nav className="flex-1 px-4 py-6 space-y-1">
                                    {siteConfig.navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className={cn(
                                                    "flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                                    isActive(link.href)
                                                        ? "bg-navy/5 text-navy border-l-2 border-gold"
                                                        : "text-muted-foreground hover:bg-secondary hover:text-navy"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <div className="border-t border-border p-6">
                                    <Button
                                        asChild
                                        className="w-full rounded-lg bg-gold font-semibold text-navy hover:bg-gold-light"
                                    >
                                        <a
                                            href={siteConfig.bookingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Phone className="mr-2 h-4 w-4" />
                                            Book Consultation
                                        </a>
                                    </Button>
                                    <p className="mt-3 text-center text-xs text-muted-foreground">
                                        {siteConfig.caName} · {siteConfig.location}
                                    </p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
