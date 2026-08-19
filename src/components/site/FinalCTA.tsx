import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useBooking } from "@/components/site/BookingProvider";

export function FinalCTA() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-gold opacity-10 blur-3xl rounded-full" />
      </div>

      <div ref={reveal} className="reveal relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium">
          Agende sua avaliação
        </span>
        <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
          Pronta para cuidar do
          <br />
          <span className="italic text-gradient-gold">seu sorriso?</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Escolha a unidade mais conveniente para você e fale com nossa equipe
          pelo WhatsApp.
        </p>

        <button
          type="button"
          onClick={() => openBooking("final_cta")}
          className="mt-12 group inline-flex items-center gap-3 bg-gradient-gold text-ink px-10 py-5 rounded-full font-medium tracking-wide text-lg shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Agendar minha avaliação
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-6 text-sm text-white/50">
          Segunda a sexta: 09:00 às 18:00 · Sábado: 09:00 às 13:00
        </p>
      </div>
    </section>
  );
}
