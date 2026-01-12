import { LegalPageLayout } from '@/components/landing/LegalPageLayout';
import { Clock, AlertTriangle, Send } from 'lucide-react';

export default function Widerruf() {
  return (
    <LegalPageLayout title="Widerrufsbelehrung" lastUpdated="Januar 2025">
      <h2>Widerrufsrecht</h2>
      
      <div className="legal-highlight">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground mb-1">14 Tage Widerrufsrecht</p>
            <p>Sie haben das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
          </div>
        </div>
      </div>
      
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      
      <div className="legal-box">
        <p><strong>MJJ Invest GmbH</strong></p>
        <p>Kästrich 4, 55116 Mainz</p>
        <p>E-Mail: <a href="mailto:info@tradeflare.de">info@tradeflare.de</a></p>
      </div>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen unverzüglich und spätestens 
        binnen vierzehn Tagen zurückzuzahlen.
      </p>

      <h2>Besondere Hinweise</h2>
      <div className="legal-highlight" style={{ borderLeftColor: 'hsl(var(--destructive))' }}>
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground mb-1">Vorzeitiges Erlöschen</p>
            <p>Das Widerrufsrecht erlischt bei vollständiger Vertragserfüllung nach ausdrücklicher Zustimmung.</p>
          </div>
        </div>
      </div>

      <h2>Muster-Widerrufsformular</h2>
      <div className="legal-box">
        <div className="flex items-start gap-3 mb-4">
          <Send className="w-5 h-5 text-primary" />
          <p className="font-semibold text-foreground">Widerrufsformular</p>
        </div>
        <p>An: MJJ Invest GmbH, Kästrich 4, 55116 Mainz</p>
        <p className="mt-2">Hiermit widerrufe(n) ich/wir (*) den Vertrag über:</p>
        <p className="border-b border-border py-2 italic text-muted-foreground">_____________</p>
        <p className="text-xs text-muted-foreground mt-4">(*) Unzutreffendes streichen</p>
      </div>
    </LegalPageLayout>
  );
}
