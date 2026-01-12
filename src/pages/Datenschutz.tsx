import { LegalPageLayout } from '@/components/landing/LegalPageLayout';

export default function Datenschutz() {
  return (
    <LegalPageLayout title="Datenschutzerklärung" lastUpdated="Januar 2025">
      <h2>Verantwortlicher</h2>
      <p>
        <strong>MJJ Invest GmbH</strong><br />
        Kästrich 4, 55116 Mainz<br />
        E-Mail: <a href="mailto:info@tradeflare.de">info@tradeflare.de</a>
      </p>

      <h2>Datenerfassung</h2>
      <p>
        Beim Besuch unserer Website werden automatisch technische Informationen erfasst:
      </p>
      <ul>
        <li>IP-Adresse, Browsertyp und -version</li>
        <li>Betriebssystem, Referrer URL</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
      </ul>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf <strong>Auskunft</strong>, <strong>Berichtigung</strong>, <strong>Löschung</strong>, 
        <strong>Einschränkung der Verarbeitung</strong>, <strong>Datenübertragbarkeit</strong> und <strong>Widerspruch</strong> bezüglich Ihrer personenbezogenen Daten.
      </p>

      <h2>Cookies</h2>
      <p>
        Unsere Website verwendet Cookies für eine nutzerfreundliche Erfahrung. Sie können die 
        Speicherung von Cookies in Ihren Browsereinstellungen einschränken oder deaktivieren.
      </p>

      <h2>SSL-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
        eine <strong>SSL- bzw. TLS-Verschlüsselung</strong>.
      </p>
    </LegalPageLayout>
  );
}
