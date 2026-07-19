import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Richtlijnen — OpStap',
  description: 'De richtlijnen die gelden voor alle OpStap-gebruikers, zodat iedereen veilig en prettig een avond uit kan.',
  alternates: { canonical: '/richtlijnen' },
}

export default function RichtlijnenPage() {
  return (
    <LegalLayout
      titel="Community Richtlijnen"
      bijwerking="7 juni 2026"
      secties={[
        {
          titel: 'Inleiding',
          inhoud: <p>OpStap is bedoeld om mensen samen te brengen voor een leuke avond uit. Om dat voor iedereen veilig en prettig te houden, gelden de volgende richtlijnen voor alle gebruikers.</p>,
        },
        {
          titel: '1. Respectvol gedrag',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Behandel anderen zoals je zelf behandeld wil worden.</li>
              <li>Discriminatie op basis van afkomst, geslacht, religie, seksuele geaardheid of andere kenmerken wordt niet getolereerd.</li>
              <li>Intimidatie, pesten of bedreigen van andere gebruikers is ten strengste verboden.</li>
              <li>Ongepaste profielfoto&apos;s en gebruikersnamen zijn niet toegestaan.</li>
            </ul>
          ),
        },
        {
          titel: '2. Afspraken nakomen',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Als je incheckt voor een avond, verklaar je dat je serieus van plan bent te gaan.</li>
              <li>Kom je toch niet, meld dit dan zo vroeg mogelijk via de app.</li>
              <li>No-shows zonder afmelding verlagen je betrouwbaarheidsscore.</li>
              <li>Bij herhaalde no-shows kan je account tijdelijk of permanent worden geblokkeerd.</li>
            </ul>
          ),
        },
        {
          titel: '3. Veiligheid',
          inhoud: (
            <>
              <ul className="list-disc list-inside space-y-1">
                <li>Identiteitsverificatie is verplicht om te kunnen inchecken en deel te nemen aan groepschats.</li>
                <li>De app is uitsluitend toegankelijk voor personen van 18 jaar en ouder.</li>
                <li>Je kunt elke gebruiker rapporteren of blokkeren via het profiel of de groepschat.</li>
                <li>Alle rapporten worden door het OpStap-team beoordeeld en opgevolgd.</li>
              </ul>
              <p className="mt-2">Voel je je onveilig? Gebruik de rapporteerknop in de app of neem contact op via <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a>.</p>
            </>
          ),
        },
        {
          titel: '4. Verboden gedrag',
          inhoud: (
            <>
              <p>Het volgende gedrag leidt direct tot verwijdering van het account zonder waarschuwing:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Valse identiteitsgegevens opgeven bij de verificatie</li>
                <li>Meerdere accounts aanmaken</li>
                <li>Persoonlijke gegevens van andere gebruikers delen buiten de app</li>
                <li>Seksuele of gewelddadige berichten sturen in de groepschat</li>
                <li>De app gebruiken voor commerciële doeleinden of spam</li>
                <li>Misbruik maken van de rapporteer- of blokkeerknop</li>
              </ul>
            </>
          ),
        },
        {
          titel: '5. Betrouwbaarheidsscore',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Elke gebruiker heeft een betrouwbaarheidsscore van 1 tot 10.</li>
              <li>De score stijgt wanneer groepsleden bevestigen dat je aanwezig was.</li>
              <li>De score daalt bij no-shows of afzeggingen op het laatste moment.</li>
              <li>Een lage score kan invloed hebben op je kansen om gematcht te worden.</li>
            </ul>
          ),
        },
        {
          titel: '6. Handhaving',
          inhoud: (
            <>
              <p>Bij overtreding kan OpStap de volgende maatregelen nemen:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong className="text-white">Waarschuwing:</strong> eerste overtreding bij licht misbruik</li>
                <li><strong className="text-white">Tijdelijke blokkering:</strong> herhaald of ernstiger misbruik</li>
                <li><strong className="text-white">Permanente ban:</strong> ernstige overtredingen of aanhoudend wangedrag</li>
              </ul>
              <p className="mt-2">Bezwaar maken via <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a>. Wij reageren binnen 5 werkdagen.</p>
            </>
          ),
        },
        {
          titel: '7. Iemand rapporteren',
          inhoud: (
            <>
              <p>Rapporteer via:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>De rapporteerknop op het profiel van de gebruiker</li>
                <li>De rapporteerknop in de groepschat</li>
                <li>E-mail: <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a></li>
              </ul>
              <p className="mt-2">Alle rapporten zijn vertrouwelijk. Je identiteit wordt niet gedeeld met de gemelde gebruiker.</p>
            </>
          ),
        },
      ]}
    />
  )
}
