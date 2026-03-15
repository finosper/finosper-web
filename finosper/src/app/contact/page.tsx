"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/config/animations";
import Image from "next/image";

const contactInfo = [
    {
        icon: MapPin,
        title: "Office Location",
        details: siteConfig.contact.address,
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5925254415642!2d80.3196873!3d26.4688605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39df263c4123%3A0xeb4b66864eb818b2!2sFinosper.in%20-%20ITR%20Filing%20GST%20registration%20Company%20incorporation!5e0!3m2!1sen!2sin!4v1773595485542!5m2!1sen!2sin",
    },
    {
        icon: Phone,
        title: "Phone Number",
        details: siteConfig.contact.phone,
        link: `tel:${siteConfig.contact.phone}`,
    },
    {
        icon: Mail,
        title: "Email Address",
        details: siteConfig.contact.email,
        link: `mailto:${siteConfig.contact.email}`,
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: "Mon – Sat: 10:00 AM – 7:00 PM",
    },
];

export default function ContactPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Get in Touch"
                subtitle="Professional CA Consultation for Tax & Compliance"
                badge="Contact Us"
            />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    {/* Contact Cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {contactInfo.map((info) => (
                            <motion.div
                                key={info.title}
                                variants={fadeInUp}
                                className="group relative rounded-2xl border border-border bg-white p-8 transition-all hover:border-gold/30 hover:shadow-elevated"
                            >
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-gold group-hover:text-navy">
                                    <info.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-navy">{info.title}</h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        target={info.link.startsWith("http") ? "_blank" : undefined}
                                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-gold"
                                    >
                                        {info.details}
                                    </a>
                                ) : (
                                    <p className="text-sm leading-relaxed text-muted-foreground">{info.details}</p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 overflow-hidden rounded-3xl border border-border shadow-soft"
                    >
                        <div className="aspect-[16/9] w-full lg:aspect-[21/9]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.8369343715!2d80.264639903964!3d26.447432322300486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a6fba7542!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709489562723!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Finosper Kanpur Office Location"
                            />
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 overflow-hidden rounded-3xl bg-navy p-12 text-center text-white"
                    >
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Book a Consultation with CA Shrish Tiwari
                            </h2>
                            <p className="mt-6 text-lg text-white/60">
                                Let&apos;s discuss your tax and compliance requirements. Get expert guidance
                                tailored to your business needs.
                            </p>
                            <div className="mt-10">
                                <Button
                                    asChild
                                    size="lg"
                                    className="group relative overflow-hidden rounded-full bg-gold px-10 py-7 text-lg font-bold text-navy hover:bg-gold-light"
                                >
                                    <a
                                        href={siteConfig.bookingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Book Consultation
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
