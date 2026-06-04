import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { waLink, INSTAGRAM_URL, CLINIC_ADDRESS } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl">
              YL <span className="text-gradient-gold">Odontologia</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Especialistas em estética do sorriso, harmonização facial e preenchimento labial em Fortaleza-CE. Tecnologia, arte e cuidado em cada detalhe.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all">
                <Instagram size={18} />
              </a>
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={16} className="text-gold-dark mt-0.5 flex-shrink-0" /> {CLINIC_ADDRESS}</li>
              <li className="flex items-start gap-2"><Phone size={16} className="text-gold-dark mt-0.5 flex-shrink-0" /> (85) 99999-9999</li>
              <li className="flex items-start gap-2"><Clock size={16} className="text-gold-dark mt-0.5 flex-shrink-0" /> Seg a Sex: 9h às 19h<br />Sáb: 9h às 13h</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Mapa</h4>
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-cream">
              <iframe
                title="Localização YL Odontologia"
                src="https://www.google.com/maps?q=Av.+Dom+Lu%C3%ADs+1233+Aldeota+Fortaleza&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
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
