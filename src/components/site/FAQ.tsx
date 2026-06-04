import { useReveal } from "@/hooks/useReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto tempo dura um tratamento de facetas de resina?", a: "Em média, o tratamento completo é finalizado em 1 a 3 sessões, com duração de algumas horas cada — sempre adaptado ao planejamento individual." },
  { q: "As facetas têm aparência natural?", a: "Sim. Utilizamos técnicas avançadas e materiais premium para que o resultado seja indistinguível de dentes naturais — apenas mais bonitos." },
  { q: "Quanto tempo dura o resultado?", a: "Com os cuidados corretos, facetas de resina podem durar de 5 a 10 anos. Lentes de porcelana, ainda mais." },
  { q: "Vocês oferecem parcelamento?", a: "Sim, trabalhamos com condições facilitadas e parcelamento em diversas vezes para você investir no seu sorriso sem preocupações." },
  { q: "Como é feita a avaliação inicial?", a: "A consulta inclui análise facial, exame clínico e planejamento digital — você sai com um plano claro e estimativa de investimento." },
  { q: "Onde fica a clínica?", a: "Estamos na Av. Dom Luís, 1233 — Aldeota, Fortaleza-CE. Ambiente exclusivo, com fácil acesso e estacionamento." },
];

export function FAQ() {
  const reveal = useReveal();
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div ref={reveal} className="reveal max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">Perguntas Frequentes</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Tire suas <span className="italic text-gradient-gold">dúvidas</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-2xl px-6 bg-card hover:shadow-soft transition-shadow data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
