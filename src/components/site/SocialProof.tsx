import { useCounter } from "@/hooks/useReveal";
import { CLINIC } from "@/lib/clinic-data";

function Stat({
  value,
  suffix,
  label,
  confirmed,
  fallback,
}: {
  value: number | null;
  suffix: string;
  label: string;
  confirmed: boolean;
  fallback: string;
}) {
  const ref = useCounter(value ?? 0);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl font-medium tracking-tight">
        {confirmed && value !== null ? (
          <>
            <span ref={ref}>0</span>
            <span className="text-gradient-gold">{suffix}</span>
          </>
        ) : (
          <span className="text-gradient-gold">{fallback}</span>
        )}
      </div>
      <div className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section aria-label="Prova social" className="py-16 md:py-24 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {CLINIC.stats.map(({ key, ...s }) => (
            <Stat key={key} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
