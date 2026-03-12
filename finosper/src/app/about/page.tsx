import type { Metadata } from "next";
import { PageTransition } from "@/components/layout";

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
                    <h1 className="text-center">About Us</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                        About page content coming soon.
                    </p>
                </div>
            </section>
        </PageTransition>
    );
}
