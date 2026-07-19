import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gebruiksvoorwaarden — OpStap',
  description: 'De gebruiksvoorwaarden voor de OpStap-app: wat mag, wat niet, en waar je aan toe bent als gebruiker.',
  alternates: {
    canonical: '/voorwaarden',
    languages: { 'en-US': '/en/terms' },
  },
}

export default function VoorwaardenPage() {
  return (
    <LegalLayout
      titel="Gebruiksvoorwaarden"
      bijwerking="12 juni 2026"
      secties={[
        {
          titel: 'Inleiding',
          inhoud: <p>Deze gebruiksvoorwaarden zijn van toepassing op het gebruik van de applicatie en dienstverlening van OpStap, een product van Pascal Services, gevestigd te Groningen. Door gebruik te maken van de app gaat u akkoord met deze voorwaarden.</p>,
        },
        {
          titel: '1. Definities',
          inhoud: (
            <ul className="space-y-1">
              <li><strong className="text-white">OpStap:</strong> de applicatie en bijbehorende digitale dienstverlening van Pascal Services.</li>
              <li><strong className="text-white">Gebruiker:</strong> iedere natuurlijke persoon die de applicatie downloadt of gebruikt.</li>
              <li><strong className="text-white">Diensten:</strong> inchecken, matching, groepschats, kaartweergave en identiteitsverificatie.</li>
              <li><strong className="text-white">Match:</strong> een automatisch samengestelde groep op basis van gedeelde interesses en favoriete venues.</li>
            </ul>
          ),
        },
        {
          titel: '2. Gebruik van de applicatie',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>De applicatie is uitsluitend bedoeld voor persoonlijk, niet-commercieel gebruik.</li>
              <li>De gebruiker garandeert dat ingevoerde gegevens juist, actueel en volledig zijn.</li>
              <li>Lastigvallen, bedreigen of misleiden van andere gebruikers is verboden.</li>
              <li>Bugs of beveiligingslekken dienen onverwijld gemeld te worden via info@opstap.app.</li>
              <li>No-shows kunnen leiden tot verlaging van de betrouwbaarheidsscore of blokkering van het account.</li>
            </ul>
          ),
        },
        {
          titel: '3. Identiteitsverificatie',
          inhoud: (
            <>
              <p>OpStap vereist identiteitsverificatie via Didit om de veiligheid van alle gebruikers te waarborgen.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Verificatie is vereist om te kunnen inchecken en deel te nemen aan groepschats.</li>
                <li>Gebruikers zonder verificatie kunnen de app verkennen maar niet volledig gebruiken.</li>
                <li>Door te starten met verificatie gaat de gebruiker akkoord met de voorwaarden van Didit.</li>
              </ul>
            </>
          ),
        },
        {
          titel: '4. Beschikbaarheid en aansprakelijkheid',
          inhoud: (
            <>
              <p>OpStap garandeert niet dat de applicatie te allen tijde ononderbroken of foutloos functioneert. OpStap is niet aansprakelijk voor schade die voortvloeit uit:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Het niet of niet tijdig samenstellen van een match wegens te weinig aanmeldingen</li>
                <li>Gedrag van andere gebruikers tijdens of na een afspraak</li>
                <li>Storingen in netwerken, servers of externe diensten</li>
                <li>Verlies van gegevens of ongeoorloofde toegang door derden</li>
              </ul>
            </>
          ),
        },
        {
          titel: '5. Intellectuele eigendom',
          inhoud: <p>Alle rechten van intellectuele eigendom met betrekking tot de applicatie berusten bij Pascal Services of haar licentiegevers. Zonder schriftelijke toestemming is reproductie of distributie verboden.</p>,
        },
        {
          titel: '6. Minderjarigen',
          inhoud: <p>De applicatie is uitsluitend bedoeld voor personen van 18 jaar en ouder. Bij registratie wordt leeftijd gecontroleerd via geboortedatum en identiteitsverificatie. Accounts van minderjarigen worden onmiddellijk verwijderd.</p>,
        },
        {
          titel: '7. Beëindiging',
          inhoud: <p>OpStap kan het gebruik beëindigen of toegang blokkeren bij overtreding van deze voorwaarden. De gebruiker kan het account op elk moment verwijderen via de instellingen in de app.</p>,
        },
        {
          titel: '8. Wijziging van de voorwaarden',
          inhoud: (
            <>
              <p>OpStap behoudt zich het recht voor deze gebruiksvoorwaarden op elk moment te wijzigen. Bij een wezenlijke wijziging ontvangen gebruikers een melding via de app of per e-mail, ten minste zeven dagen voor de ingangsdatum.</p>
              <p className="mt-2">Door de applicatie te blijven gebruiken na de ingangsdatum van een wijziging, aanvaardt de gebruiker de gewijzigde voorwaarden. Wie niet akkoord gaat, dient het gebruik te staken en het account te verwijderen via de instellingen in de app.</p>
            </>
          ),
        },
        {
          titel: '9. Toepasselijk recht',
          inhoud: <p>Op deze gebruiksvoorwaarden is uitsluitend Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Groningen.</p>,
        },
        {
          titel: '10. Contactgegevens',
          inhoud: (
            <>
              <p><strong className="text-white">Pascal Services</strong></p>
              <p>Hoornsediep 34, 9725 HK Groningen</p>
              <p>Tel: <a href="tel:0853016480" className="text-[#E8611A] hover:underline">085 301 6480</a></p>
              <p>E-mail: <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a></p>
              <p className="mt-2 text-gray-500">KvK: 92166474 · BTW: NL004941205B42</p>
            </>
          ),
        },
      ]}
    />
  )
}
