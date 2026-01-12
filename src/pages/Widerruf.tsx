import { LegalPageLayout } from '@/components/landing/LegalPageLayout';

export default function Widerruf() {
  return (
    <LegalPageLayout title="Widerrufsbelehrung" lastUpdated="Januar 2025">
      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung 
        (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag 
        zu widerrufen, informieren:
      </p>
      <p>
        <strong>MJJ Invest GmbH</strong><br />
        Kästrich 4, 55116 Mainz<br />
        E-Mail: <a href="mailto:info@tradeflare.de">info@tradeflare.de</a>
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
        unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung 
        über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
      </p>

      <h2>Besondere Hinweise</h2>
      <p>
        Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter die Dienstleistung vollständig erbracht hat 
        und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Nutzer seine ausdrückliche 
        Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht 
        bei vollständiger Vertragserfüllung verliert.
      </p>

      <h2>Muster-Widerrufsformular</h2>
      <p>
        Wenn Sie den Vertrag widerrufen wollen, können Sie das folgende Formular verwenden:
      </p>
      <p>
        An: MJJ Invest GmbH, Kästrich 4, 55116 Mainz, E-Mail: info@tradeflare.de
      </p>
      <p>
        Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung 
        der folgenden Dienstleistung: _____________
      </p>
      <p>
        Bestellt am (*) / erhalten am (*): _____________<br />
        Name des/der Verbraucher(s): _____________<br />
        Anschrift des/der Verbraucher(s): _____________<br />
        Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _____________<br />
        Datum: _____________
      </p>
      <p>
        (*) Unzutreffendes streichen.
      </p>
    </LegalPageLayout>
  );
}
