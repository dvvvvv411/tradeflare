import { LegalPageLayout } from '@/components/landing/LegalPageLayout';
import { Shield, Lock, UserCheck, Cookie } from 'lucide-react';

export default function Datenschutz() {
  return (
    <LegalPageLayout title="Datenschutzerklärung" lastUpdated="Januar 2025">
      <h2>Verantwortlicher</h2>
      <div className="legal-highlight">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p><strong>MJJ Invest GmbH</strong></p>
            <p>Kästrich 4, 55116 Mainz</p>
            <p>E-Mail: <a href="mailto:info@tradeflare.de">info@tradeflare.de</a></p>
          </div>
        </div>
      </div>

      <h2>Datenerfassung</h2>
      <p>Beim Besuch unserer Website werden automatisch technische Informationen erfasst:</p>
      <ul>
        <li>IP-Adresse, Browsertyp und -version</li>
        <li>Betriebssystem, Referrer URL</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
      </ul>

      <h2>Ihre Rechte</h2>
      <div className="legal-highlight">
        <div className="flex items-start gap-3">
          <UserCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground mb-2">Sie haben das Recht auf:</p>
            <ul>
              <li><strong>Auskunft</strong>, <strong>Berichtigung</strong>, <strong>Löschung</strong></li>
              <li><strong>Einschränkung</strong>, <strong>Datenübertragbarkeit</strong>, <strong>Widerspruch</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Cookies</h2>
      <div className="legal-box">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p>Unsere Website verwendet Cookies für eine nutzerfreundliche Erfahrung.</p>
        </div>
      </div>

      <h2>SSL-Verschlüsselung</h2>
      <div className="legal-box">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p>Diese Seite nutzt SSL/TLS-Verschlüsselung zum Schutz Ihrer Daten.</p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
