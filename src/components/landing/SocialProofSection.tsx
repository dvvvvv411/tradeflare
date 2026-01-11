import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Michael K.', role: 'Unternehmer', text: 'Endlich kann ich mich auf mein Business konzentrieren, während die KI mein Portfolio managed. Genau das, was ich gesucht habe.', rating: 5 },
  { name: 'Sarah M.', role: 'Ärztin', text: 'Als Vollzeit-Berufstätige hatte ich nie Zeit für Trading. Jetzt arbeitet die KI für mich – und das Ergebnis spricht für sich.', rating: 5 },
  { name: 'Thomas B.', role: 'Ingenieur', text: 'Die persönliche Beratung hat mir den Einstieg extrem erleichtert. Professionell und vertrauenswürdig.', rating: 5 },
];

export function SocialProofSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Das sagen unsere <span className="text-gradient-premium">Nutzer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={t.name}
              className={`glass-card rounded-2xl p-6 hover-lift transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
