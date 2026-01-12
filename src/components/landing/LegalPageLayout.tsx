import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { HeaderSection } from './HeaderSection';
import { FooterSection } from './FooterSection';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      
      <main className="pt-24 pb-16 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-grid-hero opacity-50" />
        
        {/* Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary 
                       transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Zurück zur Startseite</span>
          </Link>
          
          {/* Content Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl">
            <header className="mb-8 pb-6 border-b border-border">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{title}</h1>
              <p className="text-sm text-muted-foreground">Stand: {lastUpdated}</p>
            </header>
            
            <div className="prose prose-slate max-w-none
                          prose-headings:text-foreground prose-headings:font-semibold
                          prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                          prose-p:text-muted-foreground prose-p:leading-relaxed
                          prose-li:text-muted-foreground
                          prose-strong:text-foreground prose-strong:font-semibold
                          prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
