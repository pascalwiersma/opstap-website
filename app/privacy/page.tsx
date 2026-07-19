import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid — OpStap',
  description: 'Lees hoe OpStap omgaat met jouw persoonsgegevens: welke gegevens we verzamelen, waarom, en hoe we ze beschermen.',
  alternates: {
    canonical: '/privacy',
    languages: { 'en-US': '/en/privacy' },
  },
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      titel="Privacybeleid"
      bijwerking="7 juni 2026"
      secties={[
        {
          titel: 'Inleiding',
          inhoud: <p>OpStap hecht groot belang aan de bescherming van persoonsgegevens. Dit privacybeleid legt uit welke persoonsgegevens wij verzamelen, voor welke doeleinden deze worden gebruikt, op welke rechtsgronden wij dit doen en hoe wij zorgen voor een veilige en zorgvuldige verwerking. OpStap is een product van Pascal Services, gevestigd te Groningen, Nederland.</p>,
        },
        {
          titel: '1. Welke persoonsgegevens wij verwerken',
          inhoud: (
            <>
              <p><strong className="text-white">Accountgegevens:</strong> voornaam, gebruikersnaam, e-mailadres, telefoonnummer, geboortedatum, profielfoto.</p>
              <p><strong className="text-white">Profielgegevens:</strong> interesses, favoriete muziekstijlen, favoriete venues, groepsgroottevoorkeur, geplaatste foto&apos;s.</p>
              <p><strong className="text-white">Identiteitsverificatie:</strong> verificatie via partner Didit. Wij ontvangen uitsluitend een bevestiging van de geslaagde verificatie en slaan geen onderliggende documenten op.</p>
              <p><strong className="text-white">Gebruik van de applicatie:</strong> technische gegevens (IP-adres, apparaat-ID, push token), tijdstip en frequentie van inchecks, matchgegevens, betrouwbaarheidsscore en locatiegegevens bij het instellen van een afspraakpunt.</p>
            </>
          ),
        },
        {
          titel: '2. Doeleinden van verwerking',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Aanbieden van de OpStap-applicatie, matching en groepschat</li>
              <li>Identiteitsverificatie voor de veiligheid van gebruikers</li>
              <li>Berekenen en bijhouden van de betrouwbaarheidsscore</li>
              <li>Communicatie via pushberichten over matches en updates</li>
              <li>Naleving van wettelijke verplichtingen</li>
              <li>Beveiliging en monitoring, inclusief het opsporen van misbruik</li>
            </ul>
          ),
        },
        {
          titel: '3. Rechtsgrondslagen',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">Uitvoering van een overeenkomst:</strong> gegevens noodzakelijk voor het aanbieden van de app en matchingfunctionaliteit</li>
              <li><strong className="text-white">Gerechtvaardigd belang:</strong> beveiliging, fraudepreventie en betrouwbaarheidsscore</li>
              <li><strong className="text-white">Toestemming:</strong> identiteitsverificatie via Didit en gebruik van pushberichten</li>
              <li><strong className="text-white">Wettelijke verplichting:</strong> gegevensverstrekking aan bevoegde instanties</li>
            </ul>
          ),
        },
        {
          titel: '4. Externe verwerkers',
          inhoud: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Verwerker</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Land</th>
                    <th className="text-left py-2 text-white font-semibold">Doel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Didit', 'Nederland', 'Identiteitsverificatie'],
                    ['Stream', 'VS', 'Groepschat en berichtendienst'],
                    ['Mapbox', 'VS', 'Kaart en locatiediensten'],
                    ['Supabase', 'VS', 'Database, authenticatie en opslag'],
                    ['Resend', 'VS', 'Transactionele e-mails'],
                  ].map(([naam, land, doel]) => (
                    <tr key={naam}>
                      <td className="py-2 pr-4">{naam}</td>
                      <td className="py-2 pr-4">{land}</td>
                      <td className="py-2">{doel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          titel: '5. Bewaartermijnen',
          inhoud: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Gegevenstype</th>
                    <th className="text-left py-2 text-white font-semibold">Bewaartermijn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Accountgegevens', 'Actief account + maximaal 6 maanden na beëindiging'],
                    ['Matchgegevens en chatberichten', 'Maximaal 90 dagen na de match'],
                    ['Betrouwbaarheidsscore', 'Zolang het account actief is'],
                    ['Verificatieresultaat (Didit)', 'Zolang het account actief is'],
                    ['Logbestanden', 'Maximaal 12 maanden'],
                    ['Rapportgegevens', 'Maximaal 12 maanden na afhandeling'],
                  ].map(([type, termijn]) => (
                    <tr key={type}>
                      <td className="py-2 pr-4">{type}</td>
                      <td className="py-2">{termijn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          titel: '6. Uw rechten',
          inhoud: (
            <>
              <p>Als betrokkene heeft u de volgende rechten onder de AVG:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Recht op inzage in uw persoonsgegevens</li>
                <li>Recht op rectificatie van onjuiste gegevens</li>
                <li>Recht op verwijdering (via accountverwijdering in de app)</li>
                <li>Recht op beperking van verwerking</li>
                <li>Recht op gegevensoverdraagbaarheid</li>
                <li>Recht van bezwaar tegen verwerking op basis van gerechtvaardigd belang</li>
              </ul>
              <p className="mt-2">Verzoeken richten aan <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a>. Wij reageren binnen één maand.</p>
            </>
          ),
        },
        {
          titel: '7. Klachten',
          inhoud: <p>Klachten kunnen worden ingediend bij de Autoriteit Persoonsgegevens, Postbus 93374, 2509 AJ Den Haag — <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#E8611A] hover:underline">autoriteitpersoonsgegevens.nl</a></p>,
        },
        {
          titel: '8. Contactgegevens',
          inhoud: (
            <>
              <p><strong className="text-white">Pascal Services</strong></p>
              <p>Hoornsediep 34, 9725 HK Groningen</p>
              <p>Tel: <a href="tel:0853016480" className="text-[#E8611A] hover:underline">085 301 6480</a></p>
              <p>E-mail: <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a></p>
              <p>Website: opstap.app</p>
              <p className="mt-2 text-gray-500">KvK: 92166474 · BTW: NL004941205B42</p>
            </>
          ),
        },
      ]}
    />
  )
}
