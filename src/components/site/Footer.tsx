import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { waLink, INSTAGRAM_URL, onWhatsAppClick } from "@/lib/whatsapp";
import { CLINIC } from "@/lib/clinic-data";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="font-display text-3xl">
              YL <span className="text-gradient-gold">Odontologia</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Estética do sorriso, harmonização facial e preenchimento labial em
              Fortaleza-CE. Técnica, cuidado e planejamento individual em cada
              atendimento.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gold-dark mt-0.5 flex-shrink-0" aria-hidden />
                {CLINIC.contact.phoneDisplay}
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-gold-dark mt-0.5 flex-shrink-0" aria-hidden />
                <span>
                  {CLINIC.hours.map((h, i) => (
                    <span key={i} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da YL Odontologia"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={waLink()}
                onClick={() => onWhatsAppClick("footer_icon")}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp da YL Odontologia"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h4 className="font-display text-lg mb-5">Nossas unidades em Fortaleza</h4>
            <div className="grid md:grid-cols-3 gap-5">
              {CLINIC.units.map((u) => (
                <div
                  key={u.id}
                  className="group rounded-2xl border border-border overflow-hidden hover:border-gold/50 hover:shadow-soft transition-all bg-card"
                >
                  <a
                    href={`https://www.google.com/maps?q=${u.mapQuery}`}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Abrir ${u.name} no Google Maps`}
                    className="block aspect-[4/3] bg-cream overflow-hidden"
                  >
                    <iframe
                      title={`Mapa — ${u.name}`}
                      src={`https://www.google.com/maps?q=${u.mapQuery}&output=embed`}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                    />
                  </a>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-gold-dark mt-1 flex-shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm">
                          {u.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {u.address}
                        </p>
                        <a
                          href={waLink(`Olá! Gostaria de agendar uma avaliação na ${u.name}.`)}
                          onClick={() => onWhatsAppClick("footer_unit", { unit: u.id })}
                          target="_blank"
                          rel="noopener"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold-dark hover:underline"
                        >
                          Agendar nesta unidade →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {CLINIC.brand} — {CLINIC.professional.fullName}. Todos os direitos reservados.
          </span>
          <span>
            Responsável técnica: {CLINIC.professional.fullName} · {CLINIC.professional.cro}
          </span>
        </div>
        <p className="mt-4 text-[11px] text-muted-foreground/80 max-w-3xl leading-relaxed">
          Os resultados apresentados são de casos reais, divulgados com
          autorização, e podem variar conforme as condições individuais de cada
          paciente. As indicações e planos de tratamento são definidos após
          avaliação profissional presencial.
        </p>
      </div>
    </footer>
  );
}
