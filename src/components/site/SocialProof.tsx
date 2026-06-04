import { useCounter } from "@/hooks/useReveal";

const stats = [
  { value: 30000, suffix: "+", label: "Sorrisos Transformados" },
  { value: 39000, suffix: "+", label: "Seguidores no Instagram" },
  { value: 1000, suffix: "+", label: "Atendimentos Realizados" },
  { value: 5, suffix: ".0★", label: "Avaliação dos Pacientes" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCounter(value);
  return (
    <div className="text-center group">
      <div className="font-display text-5xl md:text-6xl font-medium tracking-tight">
        <span ref={ref}>0</span>
        <span className="text-gradient-gold">{suffix}</span>
      </div>
      <div className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
