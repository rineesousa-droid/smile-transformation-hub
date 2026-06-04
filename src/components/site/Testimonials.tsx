import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Play, Star, X } from "lucide-react";
import p1 from "@/assets/patient-1.jpg";
import p2 from "@/assets/patient-2.jpg";
import p3 from "@/assets/patient-3.jpg";
import p4 from "@/assets/patient-4.jpg";

const testimonials = [
  { img: p1, name: "Mariana S.", role: "Facetas de Resina", quote: "Minha autoestima mudou completamente. Não consigo parar de sorrir!" },
  { img: p2, name: "Carolina F.", role: "Harmonização Facial", quote: "Resultado tão natural que ninguém percebe — só que estou mais bonita." },
  { img: p3, name: "Beatriz L.", role: "Preenchimento Labial", quote: "Atendimento impecável e um cuidado que fez toda a diferença." },
  { img: p4, name: "Rafael M.", role: "Clareamento + Implantes", quote: "Voltei a sorrir com confiança. Equipe nota mil." },
];

export function Testimonials() {
  const reveal = useReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-gold blur-3xl rounded-full" />
      </div>
      <div ref={reveal} className="reveal relative">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium">Depoimentos</span>
          <div className="mt-3 flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-6xl max-w-xl">
              Histórias que <span className="italic text-gradient-gold">inspiram</span>
            </h2>
            <p className="text-white/60 max-w-sm">
              Veja em primeira mão o que nossos pacientes têm a dizer sobre a transformação.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 px-6 max-w-7xl mx-auto min-w-min">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="group relative flex-shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-luxe text-left"
              >
                <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <Play size={18} className="text-ink fill-ink ml-0.5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-2">"{t.quote}"</p>
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-gold-light tracking-wider uppercase">{t.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button onClick={() => setOpen(null)} className="absolute top-6 right-6 text-white p-2 glass rounded-full">
            <X size={24} />
          </button>
          <div className="max-w-2xl w-full bg-card text-foreground rounded-3xl overflow-hidden shadow-luxe" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-ink flex items-center justify-center relative">
              <img src={testimonials[open].img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <Play size={32} className="text-ink fill-ink ml-1" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
              </div>
              <p className="font-display text-2xl leading-relaxed">"{testimonials[open].quote}"</p>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">{testimonials[open].name}</strong> — {testimonials[open].role}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
