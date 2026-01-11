import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { 
    q: 'Welche Kryptowährungen werden gehandelt?', 
    a: 'Die KI tradet primär Bitcoin (BTC), Ethereum (ETH), Solana (SOL) und weitere etablierte Altcoins. Die Auswahl basiert auf Liquidität und Marktkapitalisierung.' 
  },
  { 
    q: 'Wie viel Startkapital benötige ich?', 
    a: 'Du kannst bereits ab 200€ starten. Es gibt keine Obergrenze für dein Investment.' 
  },
  { 
    q: 'Ist mein Krypto-Investment sicher?', 
    a: 'Dein Kapital bleibt auf deiner eigenen Exchange (z.B. Binance, Kraken). Wir haben keinen direkten Zugriff auf deine Kryptos.' 
  },
  { 
    q: 'Brauche ich Krypto-Erfahrung?', 
    a: 'Nein. Unser persönlicher Berater erklärt dir alles Schritt für Schritt – von der Exchange-Einrichtung bis zur Bot-Aktivierung.' 
  },
  { 
    q: 'Wie kann ich Gewinne auszahlen?', 
    a: 'Jederzeit. Dein Kapital und Krypto-Gewinne sind immer auf deinem Exchange-Konto verfügbar.' 
  },
  { 
    q: 'Was passiert nach der Anmeldung?', 
    a: 'Du erhältst einen Anruf von deinem persönlichen Berater, der dich durch die Exchange-Verbindung und Bot-Einrichtung führt.' 
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Häufige Fragen zum Krypto-Trading</h2>
        </div>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-border rounded-xl px-6">
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
