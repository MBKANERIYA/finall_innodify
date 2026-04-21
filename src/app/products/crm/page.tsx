import type { Metadata } from "next";
import CRMProductContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Kliently CRM | Multi-Tenant Business Growth Platform",
    description: "Consolidated growth platform blending traditional CRM with WhatsApp automation, universal webhook routing, and complete customizability.",
    alternates: { canonical: "/products/crm" },
    openGraph: {
        title: "Kliently CRM | Business Growth Platform | Innodify",
        description: "Automate daily operations, team performance, and lead management in a fraction of the time with Kliently CRM.",
        url: "https://innodify.in/products/crm",
    },
};

export default function CRMProductPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Products", url: "https://innodify.in/products" },
                { name: "CRM", url: "https://innodify.in/products/crm" },
            ]} />
            <ServiceJsonLd 
                name="Kliently CRM" 
                description="Consolidated growth platform bridging custom CRM, WhatsApp automation, and webhook routing." 
                url="https://innodify.in/products/crm" 
                serviceType="Software application"
            />
            <CRMProductContent />
        </>
    );
}
