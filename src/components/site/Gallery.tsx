import { useReveal } from "@/hooks/useReveal";
import p1 from "@/assets/patient-1.jpg";
import p2 from "@/assets/patient-2.jpg";
import p3 from "@/assets/patient-3.jpg";
import p4 from "@/assets/patient-4.jpg";
import after from "@/assets/after-1.jpg";
import before from "@/assets/before-1.jpg";
import room from "@/assets/clinic-room.jpg";

const items = [
  { src: p1, h: "tall", label: "Facetas de Resina" },
  { src: after, h: "short", label: "Clareamento" },
  { src: p2, h: "mid", label: "Harmonização" },
  { src: p3, h: "tall", label: "Preenchimento Labial" },
  { src: before, h: "mid", label: "Antes" },
  { src: p4, h: "short", label: "Implantes" },
  { src: room, h: "mid", label: "Ambiente" },
  { src: after, h: "tall", label: "Depois" },
];

const hClass: Record<string, string> = {
  short: "row-span-1 h-64",
  mid: "row-span-2 h-80",
  tall: "row-span-3 h-[28rem]",
};

export function Gallery() {
  const reveal = useReveal();
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Galeria</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-xl">
              Cada sorriso, uma <span className="italic text-gradient-gold">obra única</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Uma curadoria dos resultados mais marcantes da nossa clínica. Cada caso é planejado individualmente para realçar a beleza natural.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative break-inside-avoid overflow-hidden rounded-2xl shadow-soft hover-lift ${hClass[it.h]}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs tracking-widest uppercase text-gold-light">YL Odontologia</span>
                <div className="font-display text-lg">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
