import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/dra-yasmin.jpg";
import { waLink, onWhatsAppClick } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[85dvh] flex items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Retrato da Dra. Yasmin Lopes, cirurgiã-dentista especialista em estética do sorriso"
          className="w-full h-full object-cover object-[60%_20%] md:object-[60%_25%] animate-slow-zoom"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      <div className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full bg-gradient-gold opacity-20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-[5%] w-56 h-56 rounded-full bg-gold-light opacity-10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-wider uppercase font-medium">
              Estética do sorriso em Fortaleza
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] md:text-7xl lg:text-8xl font-medium">
            Transforme seu
            <br />
            <span className="text-gradient-gold italic">sorriso</span> e sua
            <br />
            autoestima
          </h1>

          <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
            Tratamentos personalizados de facetas, clareamento e harmonização
            facial com a Dra. Yasmin Lopes. Cada sorriso planejado com técnica,
            arte e sensibilidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink("Olá! Gostaria de agendar minha avaliação na YL Odontologia.")}
              onClick={() => onWhatsAppClick("hero_primary")}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 animate-pulse-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Agendar minha avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resultados"
              className="group inline-flex items-center gap-3 glass text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <Play size={16} className="fill-white" />
              Ver resultados
            </a>
          </div>

          <p className="mt-8 text-sm text-white/60">
            Atendimento humanizado · Três unidades em Fortaleza
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase hidden md:flex flex-col items-center gap-2">
        <span>Role para descobrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
