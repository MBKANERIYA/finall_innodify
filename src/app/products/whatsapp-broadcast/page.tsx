import type { Metadata } from "next";
import WhatsAppProductContent from "./Content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "WhatsApp Broadcast SaaS | Meta API Integration Platform",
    description: "Send Meta-approved broadcasts and manage two-way WhatsApp conversations with our bringing-your-own-API multi-tenant SaaS platform.",
    alternates: { canonical: "/products/whatsapp-broadcast" },
    openGraph: {
        title: "WhatsApp Broadcast SaaS | Bring Your Own API",
        description: "Scale your marketing with Meta-approved templates and a native split-panel inbox.",
        url: "https://innodify.in/products/whatsapp-broadcast",
    },
};

export default function WhatsAppProductPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: "Home", url: "https://innodify.in" },
                { name: "Products", url: "https://innodify.in/products" },
                { name: "WhatsApp Broadcast", url: "https://innodify.in/products/whatsapp-broadcast" },
            ]} />
            <ServiceJsonLd 
                name="WhatsApp Broadcast SaaS" 
                description="Platform for sending Meta-approved WhatsApp broadcasts and managing two-way conversations with direct Meta billing." 
                url="https://innodify.in/products/whatsapp-broadcast" 
                serviceType="Software application"
            />
            <WhatsAppProductContent />
        </>
    );
}
