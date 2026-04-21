import type { Metadata } from "next";
import ECommerceComingSoonContent from "./Content";

export const metadata: Metadata = {
    title: "E-Commerce App | Coming Soon - Innodify",
    description: "Our high-performance E-Commerce application is currently under development. Stay tuned for an enterprise-grade shopping experience.",
    alternates: { canonical: "/products/e-commerce-app" }
};

export default function ECommercePage() {
    return (
        <ECommerceComingSoonContent />
    );
}
