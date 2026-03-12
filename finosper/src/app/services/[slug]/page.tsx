import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServicePage from "@/components/services/service-page";
import { siteConfig } from "@/config/site";

/* ── Static params for all service slugs ── */
export function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata per service ── */
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: "Service Not Found" };
    }

    return {
        title: service.title,
        description: service.shortDescription,
        openGraph: {
            title: `${service.title} | ${siteConfig.name}`,
            description: service.shortDescription,
            url: `${siteConfig.url}/services/${service.slug}`,
            siteName: siteConfig.name,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} | ${siteConfig.name}`,
            description: service.shortDescription,
        },
    };
}

/* ── Page component ── */
export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ServicePage service={service} />;
}
