import { LegalPageLayout } from '@/components/landing/LegalPageLayout';

export default function Widerruf() {
  return (
    <LegalPageLayout title="Widerrufsbelehrung" lastUpdated="Januar 2025">
      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
      </p>
      <p>
        <strong>MJJ Invest GmbH</strong><br />
        Kästrich 4<br />
        55116 Mainz<br />
        E-Mail: <a href="mailto:info@tradeflare.de">info@tradeflare.de</a>
      </p>
      <p>
        mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren 
        Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte 
        Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
        Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
        einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass 
        Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt 
        haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die 
        Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
      </p>
      <p>
        Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion 
        eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall 
        werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <p>
        Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie 
        uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von 
        der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten 
        Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
      </p>

      <h2>Besondere Hinweise</h2>
      <p>
        <strong>Vorzeitiges Erlöschen des Widerrufsrechts:</strong><br />
        Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter die Dienstleistung vollständig erbracht hat 
        und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Verbraucher dazu seine 
        ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein 
        Widerrufsrecht bei vollständiger Vertragserfüllung durch den Anbieter verliert.
      </p>

      <h2>Muster-Widerrufsformular</h2>
      <p>
        <em>
          (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie 
          es zurück.)
        </em>
      </p>
      <div className="bg-muted/50 p-6 rounded-lg border border-border my-6">
        <p className="mb-4">
          An:<br />
          <strong>MJJ Invest GmbH</strong><br />
          Kästrich 4<br />
          55116 Mainz<br />
          E-Mail: info@tradeflare.de
        </p>
        <p className="mb-4">
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung 
          der folgenden Dienstleistung (*)
        </p>
        <p className="mb-4">_______________________________________________</p>
        <p className="mb-4">Bestellt am (*) / erhalten am (*): _______________________________________________</p>
        <p className="mb-4">Name des/der Verbraucher(s): _______________________________________________</p>
        <p className="mb-4">Anschrift des/der Verbraucher(s): _______________________________________________</p>
        <p className="mb-4">_______________________________________________</p>
        <p className="mb-4">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
        <p className="mb-4">_______________________________________________</p>
        <p>Datum: _______________________________________________</p>
        <p className="mt-4 text-sm text-muted-foreground">(*) Unzutreffendes streichen.</p>
      </div>
    </LegalPageLayout>
  );
}
