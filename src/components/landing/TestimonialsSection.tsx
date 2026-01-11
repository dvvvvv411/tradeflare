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
    name: "Michael Schmidt",
    role: "Neueinsteiger",
    text: "Nach nur 3 Wochen mit dem KI-Trading-Bot habe ich bereits 920€ Gewinn gemacht. Die automatischen Trades sind ein Gamechanger für mich als Anfänger. Die Aktivierungsgebühr von 200€ hat sich schnell amortisiert.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=b6e3f4"
  },
  {
    id: 2,
    name: "Hannah Weber",
    role: "Erfahrene Traderin",
    text: "Ich trade seit 5 Jahren und war skeptisch. Nach einem Monat mit der KI habe ich meine bisherigen Ergebnisse verdreifacht. Die KI erkennt Muster, die ich verpasst hätte. Die Rendite von 28% im letzten Monat hat meine Erwartungen übertroffen.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hannah&backgroundColor=ffd5dc"
  },
  {
    id: 3,
    name: "Thomas Müller",
    role: "Teilzeit-Investor",
    text: "Endlich kann ich nebenbei investieren, ohne ständig die Märkte beobachten zu müssen. Der Bot handelt für mich rund um die Uhr und erzielt durchschnittlich 1-3% Gewinn pro Trade. Die 200€ Aktivierungsgebühr ist fair und wird als Trading-Guthaben gutgeschrieben.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas&backgroundColor=c0aede"
  },
  {
    id: 4,
    name: "Julia Fischer",
    role: "Finanzberaterin",
    text: "Als Fachfrau bin ich begeistert von der Technologie. Die Algorithmen sind beeindruckend und die Erfolgsquote von über 90% spricht für sich. Dass die Plattform die Nutzerzahl limitiert, um die Performance hoch zu halten, ist ein kluger Schritt. Klare Empfehlung!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=julia&backgroundColor=ffdfbf"
  }
];

const StarRating = () => (
  <div className="flex gap-0.5">
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
              Kundenstimmen
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Echte Erfahrungen von echten Tradern – überzeuge dich selbst
          </p>
        </div>

        {/* Featured Testimonial */}
        <div 
          className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${
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
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/20 bg-muted"
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
                className="bg-card/50 hover:bg-card border border-border hover:border-primary/30 rounded-xl p-5 text-left transition-all duration-300 hover-lift group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border border-border group-hover:border-primary/20 bg-muted transition-colors"
                  />
                  <div>
                    <h5 className="font-semibold text-sm text-foreground">{testimonial.name}</h5>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-2 scale-90 origin-left">
                  <StarRating />
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  "{testimonial.text}"
                </p>
                
                <span className="inline-block mt-3 text-xs text-primary font-medium group-hover:underline">
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
