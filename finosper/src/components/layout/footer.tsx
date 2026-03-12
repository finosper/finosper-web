import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    ArrowUpRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white/90">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy font-serif font-bold text-lg">
                                F
                            </div>
                            <div>
                                <p className="font-serif font-bold text-lg text-white leading-none">
                                    {siteConfig.name}
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50 mt-0.5">
                                    {siteConfig.tagline}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                            Professional Chartered Accountancy services with a commitment to
                            financial excellence and compliance. Trusted by 500+ clients across
                            India.
                        </p>
                        {/* Socials */}
                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                                { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
                                { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all hover:bg-gold hover:text-navy"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold font-sans">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {siteConfig.navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-sm text-white/60 transition-colors hover:text-white"
                                    >
                                        <ArrowUpRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold font-sans">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {siteConfig.services.slice(0, 6).map((service) => (
                                <li key={service.title}>
                                    <Link
                                        href={service.href}
                                        className="group flex items-center text-sm text-white/60 transition-colors hover:text-white"
                                    >
                                        <ArrowUpRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold font-sans">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                <span className="text-sm text-white/60 leading-relaxed">
                                    {siteConfig.contact.address}
                                </span>
                            </li>
                            <li>
                                <a
                                    href={`tel:${siteConfig.contact.phone}`}
                                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                                    {siteConfig.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                    <p className="text-[11px] text-white/30 leading-relaxed text-center">
                        <strong className="text-white/40">Disclaimer:</strong> The
                        information provided on this website is for general informational
                        purposes only and should not be construed as professional financial
                        or legal advice. For specific advice regarding your situation, please
                        book a consultation with us. Finosper is a Chartered Accountancy
                        practice registered under the Institute of Chartered Accountants of
                        India (ICAI).
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <Separator className="bg-white/10" />
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-xs text-white/40">
                    © {currentYear} {siteConfig.name}. All rights reserved.
                </p>
                <p className="text-xs text-white/40">
                    {siteConfig.caName} · Chartered Accountant · {siteConfig.location}
                </p>
            </div>
        </footer>
    );
}
