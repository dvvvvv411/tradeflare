import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, MessageCircle, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REGISTER_URL = '#register';

export function AdvisorSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium">
              <Award className="w-4 h-4" />
              Premium Service
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold">
              Dein persönlicher <span className="text-gradient-premium">Berater</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Nach deiner Anmeldung erhältst du einen dedizierten Ansprechpartner, der dich 
              telefonisch durch jeden Schritt begleitet – von der Einrichtung bis zur Optimierung.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, title: 'Persönliche Telefonberatung', desc: 'Keine Chatbots – echte Experten' },
                { icon: Calendar, title: 'Flexible Terminvereinbarung', desc: 'Beratung nach deinem Zeitplan' },
                { icon: MessageCircle, title: 'Ongoing Support', desc: 'Jederzeit erreichbar bei Fragen' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl glass-card">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-success hover:bg-success/90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => window.location.href = REGISTER_URL}
            >
              <Phone className="w-5 h-5 mr-2" />
              Kostenlose Beratung sichern
            </Button>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative glass-strong rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Dein Expertenteam</h3>
              <p className="text-center text-muted-foreground mb-6">
                Finanz- und Kryptoexperten mit jahrelanger Erfahrung begleiten dich auf deinem Weg.
              </p>
              <div className="flex justify-center gap-2">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="text-warning text-xl">★</span>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">4.9 / 5 Kundenbewertung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
