import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Check } from "lucide-react";
import { waLink, onWhatsAppClick } from "@/lib/whatsapp";
import afterFacetas from "@/assets/after-1.jpg";

const points = [
  "Sorriso desenhado a partir das suas características",
  "Resultado natural, sem aparência artificial",
  "Correção de forma, cor e proporção dos dentes",
  "Planejamento e execução conduzidos pela Dra. Yasmin",
];

export function Facetas() {
  const reveal = useReveal();
  return (
    <section id="facetas" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
      >
        <div className="order-2 lg:order-1">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Tratamento principal
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
            Facetas em{" "}
            <span className="italic text-gradient-gold">Resina</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A transformação do sorriso com naturalidade. Cada faceta é
            esculpida de forma personalizada, respeitando a harmonia do rosto e
            as expectativas de cada paciente.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-ink" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink("Olá! Quero transformar meu sorriso com facetas em resina.")}
            onClick={() => onWhatsAppClick("facetas_cta")}
            target="_blank"
            rel="noopener"
            className="mt-10 group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Quero transformar meu sorriso
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe bg-cream">
            <img
              src={afterFacetas}
              alt="Resultado de facetas em resina realizado na YL Odontologia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-5 -right-5 w-28 h-28 border border-gold/40 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
