import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Procedures } from "@/components/site/Procedures";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YL Odontologia — Dra. Yasmin Lopes | Facetas, Estética & Harmonização em Fortaleza" },
      { name: "description", content: "Especialista em facetas de resina, estética do sorriso, harmonização facial e preenchimento labial em Fortaleza-CE. +30 mil sorrisos transformados." },
      { property: "og:title", content: "YL Odontologia — Dra. Yasmin Lopes" },
      { property: "og:description", content: "Facetas de resina, estética do sorriso e harmonização facial em Fortaleza-CE. Agende sua avaliação." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "YL Odontologia — Dra. Yasmin Lopes",
          image: "/og-image.jpg",
          telephone: "+55-85-99999-9999",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dom Luís, 1233",
            addressLocality: "Fortaleza",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          priceRange: "$$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "1000" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <Gallery />
      <Procedures />
      <About />
      <Differentials />
      <Testimonials />
      <Tour />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
