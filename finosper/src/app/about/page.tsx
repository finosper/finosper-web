import type { Metadata } from "next";
import { PageTransition } from "@/components/layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Finosper and CA Shrish Tiwari — a trusted Chartered Accountancy firm in Kanpur, Uttar Pradesh providing comprehensive financial services.",
};

export default function AboutPage() {
    return (
        <PageTransition>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-semibold">About {siteConfig.name}</h1>
                        <p className="mt-4 text-lg text-muted-foreground">{siteConfig.tagline}</p>
                        <p className="mt-6 text-base leading-7 text-muted-foreground">
                            {siteConfig.description} Our head office is located in {siteConfig.location} and
                            we are led by {siteConfig.caName}. We provide end-to-end financial and
                            compliance services tailored to small businesses, startups and professionals.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium">Our Mission</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                To deliver reliable, practical and timely financial advice that helps
                                clients grow their business while staying fully compliant with statutory
                                obligations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium">Our Approach</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                We combine years of professional experience with a client-first
                                approach — simplifying complex regulations into actionable recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-12 max-w-4xl">
                        <h3 className="text-xl font-semibold">Key Services</h3>
                        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {siteConfig.services.slice(0, 6).map((s) => (
                                <li key={s.title} className="rounded-md border px-4 py-3">
                                    <a href={s.href} className="block">
                                        <strong className="block">{s.title}</strong>
                                        <span className="text-sm text-muted-foreground">{s.description}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mx-auto mt-12 max-w-3xl text-center">
                        <a
                            href="/contact"
                            className="inline-block rounded-md bg-navy px-6 py-3 text-white shadow hover:opacity-95"
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
