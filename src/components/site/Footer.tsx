import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { waLink, INSTAGRAM_URL } from "@/lib/whatsapp";

const units = [
  {
    name: "Unidade Aldeota",
    address: "Av. Santos Dumont, 2122 — Sala 106",
    mapQ: "Av.+Santos+Dumont+2122+Aldeota+Fortaleza",
  },
  {
    name: "Unidade São Cristóvão",
    address: "Av. Castelo de Castro, 428",
    mapQ: "Av.+Castelo+de+Castro+428+Fortaleza",
  },
  {
    name: "Unidade Bezerra de Menezes",
    address: "Av. Bezerra de Menezes, 1250 — Sala 2103",
    mapQ: "Av.+Bezerra+de+Menezes+1250+Fortaleza",
  },
];

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
              Especialistas em estética do sorriso, harmonização facial e preenchimento labial em Fortaleza-CE. Tecnologia, arte e cuidado em cada detalhe.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gold-dark mt-0.5 flex-shrink-0" /> (85) 99999-9999
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-gold-dark mt-0.5 flex-shrink-0" />
                <span>
                  Seg a Sex: 9h às 19h
                  <br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h4 className="font-display text-lg mb-5">Nossas Unidades em Fortaleza</h4>
            <div className="grid md:grid-cols-3 gap-5">
              {units.map((u) => (
                <a
                  key={u.name}
                  href={`https://www.google.com/maps?q=${u.mapQ}`}
                  target="_blank"
                  rel="noopener"
                  className="group block rounded-2xl border border-border overflow-hidden hover:border-gold/50 hover:shadow-soft transition-all"
                >
                  <div className="aspect-[4/3] bg-cream overflow-hidden">
                    <iframe
                      title={u.name}
                      src={`https://www.google.com/maps?q=${u.mapQ}&output=embed`}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-gold-dark mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground text-sm group-hover:text-gold-dark transition-colors">
                          {u.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{u.address}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} YL Odontologia — Dra. Yasmin Lopes. Todos os direitos reservados.</span>
          <span>CRO-CE • Responsável Técnica: Dra. Yasmin Lopes</span>
        </div>
      </div>
    </footer>
  );
}

