import { CLINIC } from "@/lib/clinic-data";
import { useReveal } from "@/hooks/useReveal";

export function SocialProof() {
  const reveal = useReveal();
  return (
    <section
      id="autoridade"
      aria-label="Autoridade profissional"
      className="py-16 md:py-20 bg-cream border-y border-border scroll-mt-24"
    >
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {CLINIC.credentials.map((c) => (
            <div key={c.key} className="text-center">
              <div className="font-display text-2xl md:text-4xl font-medium tracking-tight text-gradient-gold">
                {c.value}
              </div>
              <div className="mt-3 text-[11px] md:text-sm tracking-[0.18em] uppercase text-muted-foreground font-medium">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
