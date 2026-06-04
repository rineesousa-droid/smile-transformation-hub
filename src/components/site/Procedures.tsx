import { useReveal } from "@/hooks/useReveal";
import { Sparkles, Sun, Smile, Anchor, Wand2, Heart, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const procedures = [
  { icon: Sparkles, title: "Facetas de Resina", desc: "Transformação completa do sorriso em poucas sessões, com aparência natural e durabilidade." },
  { icon: Wand2, title: "Lentes Dentais", desc: "Lentes ultrafinas de porcelana para um sorriso perfeito e harmonioso." },
  { icon: Sun, title: "Clareamento Dental", desc: "Tons mais brancos com técnicas seguras e resultado imediato perceptível." },
  { icon: Anchor, title: "Implantes Dentários", desc: "Reabilitação completa com implantes de alta qualidade e função natural." },
  { icon: Smile, title: "Harmonização Facial", desc: "Equilíbrio e beleza facial com técnicas avançadas e resultados naturais." },
  { icon: Heart, title: "Preenchimento Labial", desc: "Lábios mais volumosos e definidos com aspecto delicado e personalizado." },
];

export function Procedures() {
  const reveal = useReveal();
  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-background">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Procedimentos</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Tratamentos de <span className="italic text-gradient-gold">alto padrão</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tecnologia de ponta combinada com sensibilidade artística para resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-card border border-border rounded-3xl p-8 hover-lift overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cream to-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-500">
                    <Icon size={24} className="text-gold-dark group-hover:text-ink transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a
                    href={waLink(`Olá! Tenho interesse em ${p.title}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold-dark transition-colors"
                  >
                    Saiba mais
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
