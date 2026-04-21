import type { Metadata } from "next";
import RealEstateContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Real Estate Web & CRM | Advanced PropTech Platform",
    description: "Manage complex commercial and industrial properties with dynamic categorization, SEO-first UI, and internal CRM webhook synchronization.",
    alternates: { canonical: "/products/real-estate" },
    openGraph: {
        title: "Real Estate Web & CRM | Innodify",
        description: "High-performance storefront connected seamlessly to internal CRMs through event-driven webhooks.",
        url: "https://innodify.in/products/real-estate",
    },
};

export default function RealEstatePage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Products", url: "https://innodify.in/products" },
                { name: "Real Estate", url: "https://innodify.in/products/real-estate" },
            ]} />
            <ServiceJsonLd 
                name="Real Estate Platform" 
                description="Web platform and Admin CRM built for commercial and industrial real estate." 
                url="https://innodify.in/products/real-estate" 
                serviceType="Software application"
            />
            <RealEstateContent />
        </>
    );
}
