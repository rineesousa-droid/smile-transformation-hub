import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";
import dra from "@/assets/dra-yasmin.jpg";
import { waLink } from "@/lib/whatsapp";

const highlights = [
  "Referência em Facetas de Resina",
  "Mais de 30 mil casos realizados",
  "Atendimento totalmente personalizado",
  "Resultados naturais e duradouros",
  "Tecnologia de última geração",
];

export function About() {
  const reveal = useReveal();
  return (
    <section id="sobre" className="py-24 md:py-32 bg-cream">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
            <img src={dra} alt="Dra. Yasmin Lopes" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 glass-light shadow-luxe rounded-2xl p-6 max-w-xs">
            <div className="font-display text-4xl text-gradient-gold">+30K</div>
            <p className="text-sm text-muted-foreground mt-1">Sorrisos transformados ao longo da carreira</p>
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold/40 rounded-full -z-10" />
          <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-gradient-gold opacity-20 blur-3xl rounded-full -z-10" />
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">A Especialista</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Conheça a especialista por trás das <span className="italic text-gradient-gold">transformações</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A <strong className="text-foreground">Dra. Yasmin Lopes</strong> é referência em
            estética do sorriso em Fortaleza. Com formação contínua nos melhores centros
            do Brasil e exterior, alia técnica refinada e sensibilidade artística para
            entregar resultados que ressaltam a beleza única de cada paciente.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-ink" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink("Olá Dra. Yasmin! Gostaria de agendar uma avaliação.")}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5"
          >
            Falar com a Dra. Yasmin
          </a>
        </div>
      </div>
    </section>
  );
}
