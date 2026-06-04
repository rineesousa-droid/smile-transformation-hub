import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { useReveal } from "@/hooks/useReveal";

export function FinalCTA() {
  const reveal = useReveal();
  return (
    <section className="relative py-32 md:py-40 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-gold opacity-15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gold-light opacity-10 blur-3xl rounded-full" />
      </div>

      <div ref={reveal} className="reveal relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium">Agende sua avaliação</span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
          Seu novo sorriso
          <br />
          <span className="italic text-gradient-gold">começa hoje</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Agende sua avaliação e descubra o tratamento ideal para revelar a melhor versão do seu sorriso.
        </p>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="mt-12 group inline-flex items-center gap-3 bg-gradient-gold text-ink px-10 py-5 rounded-full font-medium tracking-wide text-lg shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-1 animate-pulse-gold"
        >
          Quero agendar agora
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="mt-6 text-sm text-white/50">Resposta em até 5 minutos no WhatsApp</p>
      </div>
    </section>
  );
}
