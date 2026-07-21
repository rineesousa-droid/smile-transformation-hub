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
      { title: "YL Odontologia — Dra. Yasmin Lopes | Estética do sorriso em Fortaleza" },
      {
        name: "description",
        content:
          "Facetas de resina, clareamento, harmonização facial e preenchimento labial em Fortaleza-CE. Atendimento com a Dra. Yasmin Lopes em três unidades.",
      },
      { property: "og:title", content: "YL Odontologia — Dra. Yasmin Lopes" },
      {
        property: "og:description",
        content:
          "Estética do sorriso, harmonização facial e preenchimento labial em Fortaleza-CE. Agende sua avaliação.",
      },
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
          areaServed: "Fortaleza, CE",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Av. Santos Dumont, 2122 — Sala 106",
              addressLocality: "Fortaleza",
              addressRegion: "CE",
              addressCountry: "BR",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Av. Castelo de Castro, 428",
              addressLocality: "Fortaleza",
              addressRegion: "CE",
              addressCountry: "BR",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Av. Bezerra de Menezes, 1250 — Sala 2103",
              addressLocality: "Fortaleza",
              addressRegion: "CE",
              addressCountry: "BR",
            },
          ],
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
      <Procedures />
      <About />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
