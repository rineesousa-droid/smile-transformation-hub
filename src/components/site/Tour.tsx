import { useReveal } from "@/hooks/useReveal";
import interior from "@/assets/clinic-interior.jpg";
import room from "@/assets/clinic-room.jpg";

export function Tour() {
  const reveal = useReveal();
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Tour Virtual</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Um espaço pensado para o seu <span className="italic text-gradient-gold">bem-estar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 relative h-[460px] rounded-3xl overflow-hidden shadow-luxe group">
            <img src={interior} alt="Recepção" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs tracking-widest uppercase text-gold-light">01</span>
              <div className="font-display text-3xl">Recepção</div>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-luxe group">
              <img src={room} alt="Consultório" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <span className="text-xs tracking-widest uppercase text-gold-light">02</span>
                <div className="font-display text-2xl">Consultório</div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-luxe bg-gradient-to-br from-cream to-secondary p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs tracking-widest uppercase text-gold-dark">03</span>
                <div className="font-display text-2xl mt-1">Tecnologia de ponta</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Equipamentos digitais, scanner intraoral e ambiente climatizado para uma experiência sensorial completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
