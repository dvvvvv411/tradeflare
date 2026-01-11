import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'Wie viel Startkapital benötige ich?', a: 'Du kannst bereits ab 200€ starten. Es gibt keine Obergrenze.' },
  { q: 'Ist mein Geld sicher?', a: 'Dein Kapital bleibt auf deinem eigenen Exchange-Konto. Wir haben keinen direkten Zugriff auf deine Gelder.' },
  { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Unser persönlicher Berater erklärt dir alles Schritt für Schritt am Telefon.' },
  { q: 'Wie kann ich Gewinne auszahlen?', a: 'Jederzeit. Dein Kapital und Gewinne sind immer auf deinem Exchange-Konto verfügbar.' },
  { q: 'Was passiert nach der Anmeldung?', a: 'Du erhältst einen Anruf von deinem persönlichen Berater, der dich durch die Einrichtung führt.' },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Häufige Fragen</h2>
        </div>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
