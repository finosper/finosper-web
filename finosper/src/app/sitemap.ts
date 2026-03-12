import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllServiceSlugs } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const staticPages = ["", "/about", "/contact", "/services"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const servicePages = getAllServiceSlugs().map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages];
}
