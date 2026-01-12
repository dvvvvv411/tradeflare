import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
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
        <div className="absolute inset-0 bg-grid-hero opacity-30" />
        
        {/* Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        
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
          
          {/* Header Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mb-6 border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{title}</h1>
                <p className="text-sm text-muted-foreground">Zuletzt aktualisiert: {lastUpdated}</p>
              </div>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl">
            <div className="legal-content space-y-6
                          [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-3 
                          [&>h2]:pl-4 [&>h2]:border-l-2 [&>h2]:border-primary
                          [&>h3]:text-base [&>h3]:font-medium [&>h3]:text-foreground [&>h3]:mt-5 [&>h3]:mb-2
                          [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:text-sm
                          [&>ul]:text-muted-foreground [&>ul]:text-sm [&>ul]:space-y-1 [&>ul]:ml-4 [&>ul]:list-disc
                          [&>ol]:text-muted-foreground [&>ol]:text-sm [&>ol]:space-y-1 [&>ol]:ml-4 [&>ol]:list-decimal
                          [&_strong]:text-foreground [&_strong]:font-semibold
                          [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline
                          [&_.legal-highlight]:p-4 [&_.legal-highlight]:rounded-lg [&_.legal-highlight]:bg-primary/5 
                          [&_.legal-highlight]:border-l-4 [&_.legal-highlight]:border-primary [&_.legal-highlight]:my-4
                          [&_.legal-box]:p-4 [&_.legal-box]:rounded-lg [&_.legal-box]:bg-muted/50 
                          [&_.legal-box]:border [&_.legal-box]:border-border [&_.legal-box]:my-4">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
