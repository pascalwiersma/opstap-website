import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Safety Standards — OpStap',
  description:
    'Gepubliceerde standaarden van OpStap tegen seksueel misbruik en uitbuiting van kinderen (CSAE), inclusief preventie, melding en contact.',
  alternates: {
    canonical: '/child-safety',
    languages: { 'nl-NL': '/child-safety', en: '/en/child-safety' },
  },
}

export default function ChildSafetyPage() {
  return (
    <LegalLayout
      titel="Child Safety Standards (CSAE)"
      bijwerking="18 augustus 2026"
      secties={[
        {
          titel: 'Doel',
          inhoud: (
            <>
              <p>
                OpStap is een sociale app voor volwassenen van 18 jaar en ouder die samen willen uitgaan. Op
                deze pagina beschrijven we onze gepubliceerde standaarden tegen seksueel misbruik en
                uitbuiting van kinderen (CSAE), inclusief child sexual abuse material (CSAM).
              </p>
              <p>
                English:{' '}
                <a href="/en/child-safety" className="text-opstap-orange hover:underline">
                  /en/child-safety
                </a>
              </p>
            </>
          ),
        },
        {
          titel: '1. Leeftijdsgrens (18+)',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>OpStap is uitsluitend bestemd voor personen van 18 jaar en ouder.</li>
              <li>Leeftijd wordt gecontroleerd bij registratie (geboortedatum) en via identiteitsverificatie.</li>
              <li>Accounts van minderjarigen worden onmiddellijk verwijderd zodra dit blijkt.</li>
              <li>Wij staan willens en wetens geen gebruik door personen onder de 18 toe.</li>
            </ul>
          ),
        },
        {
          titel: '2. Nultolerantie voor CSAE en CSAM',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>
                Elke vorm van seksuele content, grooming, werving of uitbuiting waarbij minderjarigen betrokken
                zijn, is strikt verboden.
              </li>
              <li>
                Het uploaden, delen, vragen of bewaren van CSAM (beeld, video, tekst of links) is verboden en
                leidt tot directe accountverwijdering.
              </li>
              <li>
                Pogingen om minderjarigen te betrekken bij afspraken, chats of offline contact via OpStap zijn
                verboden.
              </li>
            </ul>
          ),
        },
        {
          titel: '3. Preventie en detectie',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Identiteitsverificatie is verplicht voor kernfuncties (zoals inchecken en groepschats).</li>
              <li>Gebruikers kunnen anderen in de app rapporteren en blokkeren.</li>
              <li>
                Het OpStap-team beoordeelt meldingen en neemt maatregelen (waarschuwing, tijdelijke of
                permanente ban).
              </li>
              <li>
                Bij een redelijk vermoeden van schendingen kunnen we content en accounts nader bekijken.
              </li>
            </ul>
          ),
        },
        {
          titel: '4. Melden in de app',
          inhoud: (
            <>
              <p>Gebruikers kunnen kinderveiligheidszorgen melden via:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>de rapporteerfunctie op een profiel of in de chat;</li>
                <li>
                  e-mail:{' '}
                  <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">
                    opstap@pascal.services
                  </a>
                  ;
                </li>
                <li>
                  kinderveiligheidscontact:{' '}
                  <a href="mailto:pascal@psww.nl" className="text-opstap-orange hover:underline">
                    pascal@psww.nl
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-2">
                Bij nood in Nederland: bel eerst de politie via{' '}
                <a href="tel:112" className="text-opstap-orange hover:underline">
                  112
                </a>
                . OpStap is geen hulpdienst.
              </p>
            </>
          ),
        },
        {
          titel: '5. Actie en melding aan autoriteiten',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Bevestigde CSAE/CSAM leidt tot directe verwijdering van content en het account.</li>
              <li>
                Waar de wet dat vereist, melden wij aan de bevoegde regionale of nationale autoriteiten en
                werken wij mee aan rechtmatige onderzoeken.
              </li>
              <li>
                Relevante informatie bewaren we zolang nodig voor veiligheid, onderzoek en wettelijke
                verplichtingen.
              </li>
            </ul>
          ),
        },
        {
          titel: '6. Aangewezen contactpersoon',
          inhoud: (
            <>
              <p>
                Het aangewezen aanspreekpunt voor OpStap over preventie van child sexual abuse material (CSAM)
                en naleving is:
              </p>
              <p className="mt-2">
                Pascal Wiersma
                <br />
                E-mail:{' '}
                <a href="mailto:pascal@psww.nl" className="text-opstap-orange hover:underline">
                  pascal@psww.nl
                </a>
              </p>
              <p className="mt-2">
                Algemene support:{' '}
                <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">
                  opstap@pascal.services
                </a>
              </p>
            </>
          ),
        },
        {
          titel: '7. Gerelateerd beleid',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a href="/richtlijnen" className="text-opstap-orange hover:underline">
                  Community Richtlijnen
                </a>
              </li>
              <li>
                <a href="/voorwaarden" className="text-opstap-orange hover:underline">
                  Gebruiksvoorwaarden
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-opstap-orange hover:underline">
                  Privacybeleid
                </a>
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}
