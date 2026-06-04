import { ArrowRight, Play, Star } from "lucide-react";
import heroImg from "@/assets/hero-smile.jpg";
import { waLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background "video" — animated image with slow zoom + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sorriso transformado por facetas de resina premium"
          className="w-full h-full object-cover animate-slow-zoom"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Floating gold accents */}
      <div className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full bg-gradient-gold opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-56 h-56 rounded-full bg-gold-light opacity-10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <Star size={14} className="fill-gold text-gold" />
            <span className="text-xs tracking-wider uppercase font-medium">+30.000 Sorrisos Transformados</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-medium">
            Transforme Seu
            <br />
            <span className="text-gradient-gold italic">Sorriso</span> e Sua
            <br />
            Autoestima
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
            Mais de 30 mil sorrisos transformados através de tratamentos
            personalizados e tecnologia de ponta com a Dra. Yasmin Lopes em Fortaleza.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 animate-pulse-gold"
            >
              Agendar Avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resultados"
              className="group inline-flex items-center gap-3 glass text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/15 transition-all"
            >
              <Play size={16} className="fill-white" />
              Ver Transformações
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-white/70 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white/30 bg-gradient-gold" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs">Avaliação 5.0 — Pacientes satisfeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase flex flex-col items-center gap-2">
        <span>Role para descobrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
