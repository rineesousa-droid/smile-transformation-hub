import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Sparkles, Droplet } from "lucide-react";
import { waLink, onWhatsAppClick } from "@/lib/whatsapp";
import afterHarmonizacao from "@/assets/after-labial.jpg";

const items = [
  {
    icon: Sparkles,
    title: "Botox",
    desc: "Suavização de linhas de expressão preservando a naturalidade dos movimentos do rosto.",
  },
  {
    icon: Droplet,
    title: "Preenchimento facial",
    desc: "Devolve volume e contorno em pontos específicos, valorizando as características individuais.",
  },
];

export function Harmonizacao() {
  const reveal = useReveal();
  return (
    <section id="harmonizacao" className="py-24 md:py-32 bg-cream scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
      >
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe bg-background">
            <img
              src={afterHarmonizacao}
              alt="Resultado de harmonização facial realizada na YL Odontologia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-gold opacity-20 blur-3xl rounded-full -z-10" />
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Estética facial
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
            Harmonização{" "}
            <span className="italic text-gradient-gold">Facial</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Procedimentos realizados com foco em equilíbrio, naturalidade e
            valorização das suas características — nunca em padronizar rostos.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.title}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cream to-secondary flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.75} className="text-gold-dark" />
                  </div>
                  <h3 className="font-display text-xl">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {i.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <a
            href={waLink("Olá! Quero saber mais sobre harmonização facial.")}
            onClick={() => onWhatsAppClick("harmonizacao_cta")}
            target="_blank"
            rel="noopener"
            className="mt-10 group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Quero saber mais
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
