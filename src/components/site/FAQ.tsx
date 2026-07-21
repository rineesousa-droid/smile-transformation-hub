import { useReveal } from "@/hooks/useReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo dura um tratamento de facetas de resina?",
    a: "A duração é definida no planejamento após a avaliação — depende da quantidade de dentes, do tipo de faceta indicada e das particularidades de cada caso.",
  },
  {
    q: "As facetas têm aparência natural?",
    a: "Sim. Utilizamos técnicas e materiais que buscam o máximo de naturalidade, respeitando as proporções faciais e a personalidade de cada paciente.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "A longevidade depende dos cuidados diários, dos hábitos alimentares e das consultas de manutenção. Isso é conversado no planejamento do seu caso.",
  },
  {
    q: "Vocês oferecem parcelamento?",
    a: "Trabalhamos com diferentes formas de pagamento. As condições disponíveis são apresentadas na consulta de avaliação, junto com o orçamento personalizado.",
  },
  {
    q: "Como é feita a avaliação inicial?",
    a: "A consulta inclui análise clínica e conversa sobre suas expectativas. Ao final, você recebe um plano de tratamento claro e a estimativa de investimento.",
  },
  {
    q: "Onde ficam as unidades?",
    a: "Atendemos em três unidades em Fortaleza — Aldeota, São Cristóvão e Bezerra de Menezes. Os endereços completos estão na seção de contato.",
  },
];

export function FAQ() {
  const reveal = useReveal();
  return (
    <section id="faq" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div ref={reveal} className="reveal max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Perguntas Frequentes
          </span>
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
