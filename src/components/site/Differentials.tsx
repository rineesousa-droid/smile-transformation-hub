import { useReveal } from "@/hooks/useReveal";
import { Cpu, Crown, Microscope, Leaf, Users, CreditCard } from "lucide-react";

const items = [
  { icon: Cpu, title: "Planejamento Digital", desc: "Pré-visualização 3D do seu novo sorriso antes de qualquer procedimento." },
  { icon: Crown, title: "Atendimento Exclusivo", desc: "Experiência VIP com atenção individualizada do início ao fim." },
  { icon: Microscope, title: "Equipamentos Modernos", desc: "Tecnologia de última geração para precisão e conforto absoluto." },
  { icon: Leaf, title: "Resultados Naturais", desc: "Estética sutil que valoriza a sua beleza, sem exageros." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais qualificados em cada área da odontologia estética." },
  { icon: CreditCard, title: "Parcelamento Facilitado", desc: "Condições especiais para você investir no seu sorriso sem complicações." },
];

export function Differentials() {
  const reveal = useReveal();
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Diferenciais</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Por que escolher a <span className="italic text-gradient-gold">YL</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="bg-card p-10 hover:bg-cream transition-colors duration-500 group">
                <Icon size={32} className="text-gold-dark group-hover:scale-110 transition-transform duration-500" />
                <h3 className="mt-5 font-display text-2xl">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
