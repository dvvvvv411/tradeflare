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
        {/* Dezenter Hintergrund */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        
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
          
          {/* Header */}
          <div className="mb-8 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-sm text-muted-foreground">Zuletzt aktualisiert: {lastUpdated}</p>
          </div>
          
          {/* Content */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 md:p-10 max-w-4xl">
            <div className="prose prose-sm max-w-none
                          prose-headings:text-foreground
                          prose-h2:text-lg prose-h2:font-semibold prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-6 prose-h2:first:mt-0
                          prose-h3:text-base prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-4
                          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                          prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:ml-4 prose-ul:list-disc
                          prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:ml-4 prose-ol:list-decimal
                          prose-li:mb-2
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
