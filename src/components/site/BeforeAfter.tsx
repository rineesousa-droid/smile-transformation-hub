import { useRef, useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import { Move } from "lucide-react";

const cases = [
  { id: "facetas", label: "Facetas de Resina", before: beforeImg, after: afterImg },
  { id: "clareamento", label: "Clareamento", before: beforeImg, after: afterImg },
  { id: "harmonizacao", label: "Harmonização Facial", before: beforeImg, after: afterImg },
  { id: "labial", label: "Preenchimento Labial", before: beforeImg, after: afterImg },
];

export function BeforeAfter() {
  const reveal = useReveal();
  const [active, setActive] = useState(cases[0]);
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) => dragging.current && e.touches[0] && move(e.touches[0].clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-background">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Antes & Depois</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Resultados que <span className="italic text-gradient-gold">encantam</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Arraste o controle para ver a transformação real dos nossos pacientes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active.id === c.id
                  ? "bg-foreground text-background shadow-soft"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-luxe select-none cursor-ew-resize group"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
        >
          <img src={active.after} alt="Depois" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={active.before}
              alt="Antes"
              className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
              style={{ width: `${(100 / pos) * 100}%` }}
              loading="lazy"
            />
          </div>

          <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-white text-xs tracking-widest uppercase">Antes</div>
          <div className="absolute top-6 right-6 glass px-4 py-1.5 rounded-full text-white text-xs tracking-widest uppercase">Depois</div>

          <div
            className="absolute top-0 bottom-0 w-px bg-white shadow-luxe"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-luxe flex items-center justify-center group-hover:scale-110 transition-transform">
              <Move size={20} className="text-ink rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
