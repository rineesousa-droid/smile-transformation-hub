import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/dra-yasmin.jpg";
import { CLINIC } from "@/lib/clinic-data";
import { useBooking } from "@/components/site/BookingProvider";

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <section
      id="top"
      className="relative min-h-[85dvh] flex items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Retrato da Dra. Yasmin Lopes, cirurgiã-dentista em Fortaleza"
          className="w-full h-full object-cover object-[60%_20%] md:object-[60%_25%] animate-slow-zoom"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      <div className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full bg-gradient-gold opacity-15 blur-3xl animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-wider uppercase font-medium">
              Facetas em resina e harmonização facial · Fortaleza
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] md:text-7xl lg:text-[5.5rem] font-medium">
            Seu sorriso em
            <br />
            <span className="text-gradient-gold italic">harmonia</span> com a
            <br />
            sua melhor versão.
          </h1>

          <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
            Facetas em resina e harmonização facial com atendimento
            personalizado em Fortaleza.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-white/85">
            <span className="font-display text-lg">
              {CLINIC.professional.fullName}
            </span>
            <span className="w-px h-4 bg-white/30" aria-hidden />
            <span className="tracking-widest uppercase text-xs text-gold-light">
              {CLINIC.professional.cro}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openBooking("hero_primary")}
              className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Agende sua avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#facetas"
              className="group inline-flex items-center gap-3 glass text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Conheça os tratamentos
              <ChevronDown size={16} />
            </a>
          </div>

          <p className="mt-8 text-sm text-white/60">
            Três unidades em Fortaleza · Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
}
