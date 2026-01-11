import { useState } from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Markus Hoffmann",
    role: "Neueinsteiger",
    text: "Nach nur 3 Wochen mit dem KI-Trading-Bot habe ich bereits 920€ Gewinn erzielt. Als absoluter Anfänger hätte ich das nie für möglich gehalten. Die Aktivierungsgebühr von 200€ hat sich innerhalb der ersten Woche amortisiert.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Bergmann",
    role: "Erfahrene Traderin",
    text: "Ich trade seit 5 Jahren und war anfangs skeptisch. Nach einem Monat mit der KI habe ich meine bisherigen Ergebnisse verdreifacht. Die KI erkennt Muster, die ich selbst verpasst hätte. Die Rendite von 28% im letzten Monat hat alle meine Erwartungen übertroffen.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Florian Bauer",
    role: "Teilzeit-Investor",
    text: "Endlich kann ich nebenbei investieren, ohne ständig die Märkte beobachten zu müssen. Der Bot handelt für mich rund um die Uhr und erzielt durchschnittlich 1-3% Gewinn pro Trade. Die 200€ Aktivierungsgebühr ist fair und wird als Trading-Guthaben gutgeschrieben.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Dr. Katharina Richter",
    role: "Finanzexpertin",
    text: "Als Finanzexpertin war ich zunächst skeptisch. Aber die Algorithmen sind beeindruckend und die Erfolgsquote von über 90% spricht für sich. Dass die Nutzerzahl limitiert wird, zeigt mir, dass hier Qualität vor Quantität steht. Klare Empfehlung!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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
      ref={ref}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background to-primary/5 overflow-hidden"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Erfolgsgeschichten
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 right-6 text-8xl text-primary/10 font-serif leading-none">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={featured.avatar} 
                  alt={featured.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/20 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg md:text-xl text-foreground">{featured.name}</h4>
                  <p className="text-muted-foreground text-sm">{featured.role}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <StarRating />
              </div>
              
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90">
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
                <div className="flex items-center gap-3 mb-4">
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
                
                <div className="mb-3">
                  <StarRating />
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
