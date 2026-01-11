import { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  profit: string;
  timeframe: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Markus Hoffmann",
    role: "Neueinsteiger",
    text: "Nach nur 3 Wochen mit dem KI-Trading-Bot habe ich bereits 920€ Gewinn erzielt. Als absoluter Anfänger hätte ich das nie für möglich gehalten. Die Aktivierungsgebühr von 200€ hat sich innerhalb der ersten Woche amortisiert.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    profit: "+920€",
    timeframe: "3 Wochen",
    date: "9. Januar 2026"
  },
  {
    id: 2,
    name: "Sarah Bergmann",
    role: "Erfahrene Traderin",
    text: "Ich trade seit 5 Jahren und war anfangs skeptisch. Nach einem Monat mit der KI habe ich meine bisherigen Ergebnisse verdreifacht. Die KI erkennt Muster, die ich selbst verpasst hätte. Die Rendite von 28% im letzten Monat hat alle meine Erwartungen übertroffen.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    profit: "+4.200€",
    timeframe: "1 Monat",
    date: "6. Januar 2026"
  },
  {
    id: 3,
    name: "Florian Bauer",
    role: "Teilzeit-Investor",
    text: "Endlich kann ich nebenbei investieren, ohne ständig die Märkte beobachten zu müssen. Der Bot handelt für mich rund um die Uhr und erzielt durchschnittlich 1-3% Gewinn pro Trade. Die 200€ Aktivierungsgebühr ist fair und wird als Trading-Guthaben gutgeschrieben.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    profit: "+1.850€",
    timeframe: "6 Wochen",
    date: "4. Januar 2026"
  },
  {
    id: 4,
    name: "Dr. Katharina Richter",
    role: "Finanzexpertin",
    text: "Als Finanzexpertin war ich zunächst skeptisch. Aber die Algorithmen sind beeindruckend und die Erfolgsquote von über 90% spricht für sich. Dass die Nutzerzahl limitiert wird, zeigt mir, dass hier Qualität vor Quantität steht. Klare Empfehlung!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    profit: "+3.100€",
    timeframe: "2 Monate",
    date: "28. Dezember 2025"
  }
];

const StarRating = ({ size = "default" }: { size?: "default" | "small" }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`fill-amber-400 text-amber-400 ${
          size === "small" ? "w-4 h-4" : "w-5 h-5"
        }`} 
      />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const featured = testimonials[selectedIndex];
  const otherTestimonials = testimonials.filter((_, i) => i !== selectedIndex);

  return (
    <section 
      id="erfahrungen"
      ref={ref}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background to-transparent overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Das sagen unsere Trader
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Über 20.000 zufriedene Nutzer vertrauen bereits auf unsere KI
          </p>
        </div>

        {/* Featured Testimonial */}
        <div 
          className={`max-w-5xl mx-auto mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Quote decoration - moved to left */}
            <div className="absolute -top-4 left-4 text-[120px] text-primary/10 font-serif leading-none select-none pointer-events-none">
              "
            </div>
            
            {/* Decorative accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={featured.avatar} 
                    alt={featured.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full ring-4 ring-primary/20 ring-offset-2 ring-offset-card object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg md:text-xl text-foreground">{featured.name}</h4>
                      <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verifiziert</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{featured.role}</p>
                    <p className="text-muted-foreground/70 text-xs mt-0.5">Bewertet am {featured.date}</p>
                  </div>
                </div>
                <StarRating />
              </div>
              
              <blockquote className="bg-muted/50 border border-border/50 rounded-xl p-6 text-lg md:text-xl leading-relaxed text-foreground/90">
                "{featured.text}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Other Testimonials Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {otherTestimonials.map((testimonial) => {
            const originalIndex = testimonials.findIndex(t => t.id === testimonial.id);
            return (
              <button
                key={testimonial.id}
                onClick={() => setSelectedIndex(originalIndex)}
                className="bg-card hover:bg-card/95 border border-border hover:border-primary/40 rounded-xl p-6 text-left transition-all duration-300 hover-lift shadow-lg group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border border-border group-hover:border-primary/30 object-cover transition-colors"
                    />
                    <div>
                      <h5 className="font-semibold text-sm text-foreground">{testimonial.name}</h5>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating size="small" />
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.text}"
                </p>
                
                <span className="inline-block mt-4 text-xs text-primary font-medium group-hover:underline">
                  Weiterlesen →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
