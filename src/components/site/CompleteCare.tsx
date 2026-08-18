import { useReveal } from "@/hooks/useReveal";
import { Stethoscope } from "lucide-react";
import { waLink, onWhatsAppClick } from "@/lib/whatsapp";

export function CompleteCare() {
  const reveal = useReveal();
  return (
    <section
      id="odontologia-completa"
      className="py-16 md:py-20 bg-background scroll-mt-24"
    >
      <div ref={reveal} className="reveal max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-border bg-cream p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
            <Stethoscope size={24} strokeWidth={1.75} className="text-ink" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl">
              Odontologia completa
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Além da estética, a YL Odontologia oferece atendimento
              odontológico completo, com profissionais de diferentes
              especialidades que atendem em dias e horários específicos nas
              unidades.
            </p>
          </div>
          <a
            href={waLink("Olá! Gostaria de saber quais especialidades atendem nas unidades.")}
            onClick={() => onWhatsAppClick("odontologia_completa")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Consultar especialidades
          </a>
        </div>
      </div>
    </section>
  );
}
