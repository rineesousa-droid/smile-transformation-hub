import { useReveal } from "@/hooks/useReveal";
import { MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { CLINIC, unitMapUrl } from "@/lib/clinic-data";
import { waLink, onWhatsAppClick } from "@/lib/whatsapp";

export function Units() {
  const reveal = useReveal();
  return (
    <section id="unidades" className="py-24 md:py-32 bg-cream scroll-mt-24">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Unidades
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Três endereços em{" "}
            <span className="italic text-gradient-gold">Fortaleza</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Escolha a unidade mais próxima e agende seu atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CLINIC.units.map((u) => (
            <div
              key={u.id}
              className="flex flex-col rounded-3xl border border-border bg-background p-7 hover:border-gold/50 hover:shadow-soft transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cream to-secondary flex items-center justify-center">
                <MapPin size={20} strokeWidth={1.75} className="text-gold-dark" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-2xl">{u.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {u.address}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href={unitMapUrl(u)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <ExternalLink size={15} aria-hidden />
                  Ver no mapa
                </a>
                <a
                  href={waLink(`Olá! Gostaria de agendar atendimento na ${u.name}.`)}
                  onClick={() => onWhatsAppClick("unit_card", { unit: u.id })}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-gold text-ink text-sm font-medium shadow-gold hover:shadow-luxe transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <MessageCircle size={15} aria-hidden />
                  Agendar atendimento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
