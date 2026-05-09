import { createFileRoute } from "@tanstack/react-router";
import { AnimatedHero } from "@/components/AnimatedHero";
import { SiteNav } from "@/components/SiteNav";
import { ProductShowcase } from "@/components/ProductShowcase";
import { LatestDecor } from "@/components/LatestDecor";
import { Testimonials } from "@/components/Testimonials";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <SiteNav />
      <AnimatedHero />
      <ProductShowcase />
      <LatestDecor />
      <Testimonials />
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
