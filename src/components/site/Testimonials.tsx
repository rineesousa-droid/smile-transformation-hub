import { useReveal } from "@/hooks/useReveal";
import { Star, Quote } from "lucide-react";

const comments = [
  {
    name: "Mariana S.",
    role: "Facetas de Resina",
    rating: 5,
    quote:
      "Minha autoestima mudou completamente. A Dra. Yasmin entendeu exatamente o que eu queria e o resultado ficou natural e lindo. Não consigo parar de sorrir!",
  },
  {
    name: "Carolina F.",
    role: "Harmonização Facial",
    rating: 4,
    quote:
      "Resultado tão natural que ninguém percebe — só notam que estou mais bonita. Atendimento atencioso do começo ao fim.",
  },
  {
    name: "Beatriz L.",
    role: "Preenchimento Labial",
    rating: 5,
    quote:
      "Cuidado, técnica e bom gosto. Saí da clínica com lábios delicados e exatamente do jeito que sonhava. Recomendo de olhos fechados.",
  },
  {
    name: "Rafael M.",
    role: "Clareamento Dental",
    rating: 4,
    quote:
      "Voltei a sorrir com confiança. Equipe nota mil, ambiente impecável. Só achei a espera no dia um pouquinho longa, mas valeu a pena.",
  },
  {
    name: "Letícia A.",
    role: "Gengivoplastia",
    rating: 5,
    quote:
      "Sempre tive vergonha do meu sorriso gengival. Hoje sorrio sem medo. Obrigada Dra. Yasmin pela sensibilidade e cuidado!",
  },
  {
    name: "Patrícia M.",
    role: "Facetas + Clareamento",
    rating: 5,
    quote:
      "Profissional excepcional. Explicou cada etapa, me deixou super tranquila e o resultado superou todas as expectativas.",
  },
];

export function Testimonials() {
  const reveal = useReveal();

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-gold blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-light/20 blur-3xl rounded-full" />
      </div>

      <div ref={reveal} className="reveal relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium">O que dizem</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Comentários de quem <span className="italic text-gradient-gold">vive a experiência</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((c) => (
            <div
              key={c.name}
              className="relative glass rounded-3xl p-8 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote size={32} className="text-gold/60 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < c.rating ? "fill-gold text-gold" : "text-white/20"}
                  />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed text-[15px]">"{c.quote}"</p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="font-display text-lg">{c.name}</div>
                <div className="text-xs text-gold-light tracking-wider uppercase mt-1">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
