import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Account verwijderen — OpStap' }

export default function AccountVerwijderenPage() {
  return (
    <LegalLayout
      titel="Account verwijderen"
      bijwerking="12 juni 2026"
      secties={[
        {
          titel: 'Hoe verwijder je je account?',
          inhoud: (
            <>
              <p>Je kunt je account rechtstreeks vanuit de OpStap-app verwijderen. Ga hiervoor naar:</p>
              <p className="mt-3 px-4 py-3 bg-white/5 rounded-lg text-white font-medium">
                Instellingen → Account verwijderen
              </p>
              <p className="mt-3">Bevestig je keuze en je account wordt direct gedeactiveerd. Je kunt dan niet meer inloggen en andere gebruikers zien je profiel niet meer.</p>
            </>
          ),
        },
        {
          titel: 'Wat gebeurt er met je gegevens?',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Je profiel en alle bijbehorende gegevens worden direct verborgen voor andere gebruikers.</li>
              <li>Alle persoonsgegevens worden binnen <strong className="text-white">6 maanden</strong> na verwijdering permanent en onherstelbaar gewist uit onze systemen.</li>
              <li>Geanonimiseerde statistische gegevens kunnen langer worden bewaard voor analyse, maar zijn niet herleidbaar tot jou persoonlijk.</li>
            </ul>
          ),
        },
        {
          titel: 'Vragen of hulp nodig?',
          inhoud: (
            <p>
              Lukt het niet via de app of heb je een andere vraag over het verwijderen van je account? Stuur dan een e-mail naar{' '}
              <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">
                info@opstap.app
              </a>
              . We reageren binnen twee werkdagen.
            </p>
          ),
        },
      ]}
    />
  )
}
