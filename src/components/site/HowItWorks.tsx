import { useReveal } from "@/hooks/useReveal";

const steps = [
  { n: "01", title: "Contato", desc: "Fale com nossa equipe pelo WhatsApp e agende sua avaliação." },
  { n: "02", title: "Avaliação", desc: "Consulta presencial com análise clínica e conversa sobre expectativas." },
  { n: "03", title: "Planejamento", desc: "Plano de tratamento personalizado, com etapas e investimento claros." },
  { n: "04", title: "Tratamento", desc: "Execução com técnica, tecnologia e foco no seu conforto." },
  { n: "05", title: "Acompanhamento", desc: "Suporte no pós-tratamento para preservar o resultado." },
];

export function HowItWorks() {
  const reveal = useReveal();
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Como Funciona
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Sua jornada até o{" "}
            <span className="italic text-gradient-gold">novo sorriso</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <ol className="grid md:grid-cols-5 gap-10 md:gap-4">
            {steps.map((s) => (
              <li key={s.n} className="text-center group">
                <div className="relative w-20 h-20 mx-auto rounded-full bg-background border border-border flex items-center justify-center font-display text-xl text-gold-dark group-hover:bg-gradient-gold group-hover:text-ink transition-all duration-500 shadow-soft">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
