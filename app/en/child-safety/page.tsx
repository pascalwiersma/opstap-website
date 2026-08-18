import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Safety Standards — OpStap',
  description:
    'OpStap’s published standards against child sexual abuse and exploitation (CSAE), including prevention, reporting and contact.',
  alternates: {
    canonical: '/en/child-safety',
    languages: { 'nl-NL': '/child-safety', en: '/en/child-safety' },
  },
}

export default function ChildSafetyEnPage() {
  return (
    <LegalLayout
      lang="en"
      titel="Child Safety Standards (CSAE)"
      bijwerking="18 August 2026"
      secties={[
        {
          titel: 'Purpose',
          inhoud: (
            <>
              <p>
                OpStap is a social app for adults aged 18 and over who want to go out together. This page sets
                out our published standards against child sexual abuse and exploitation (CSAE), including child
                sexual abuse material (CSAM).
              </p>
              <p>
                Nederlands:{' '}
                <a href="/child-safety" className="text-opstap-orange hover:underline">
                  /child-safety
                </a>
              </p>
            </>
          ),
        },
        {
          titel: '1. Age restriction (18+)',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>OpStap is exclusively for people aged 18 and over.</li>
              <li>Age is checked at registration (date of birth) and via identity verification.</li>
              <li>Accounts of minors are removed immediately when discovered.</li>
              <li>We do not knowingly allow under-18s to create or use an account.</li>
            </ul>
          ),
        },
        {
          titel: '2. Zero tolerance for CSAE and CSAM',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>
                Any sexual content, solicitation, grooming or exploitation involving minors is strictly
                prohibited.
              </li>
              <li>
                Uploading, sharing, requesting or storing CSAM (images, video, text or links) is forbidden and
                leads to immediate account removal.
              </li>
              <li>
                Attempts to involve minors in meetings, chats or offline contact via OpStap are prohibited.
              </li>
            </ul>
          ),
        },
        {
          titel: '3. Prevention and detection',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Identity verification is required for key features (such as check-in and group chats).</li>
              <li>Users can report and block other users in the app.</li>
              <li>The OpStap team reviews reports and takes action (warning, temporary or permanent ban).</li>
              <li>
                We may review content and accounts when there is a reasonable suspicion of policy violations.
              </li>
            </ul>
          ),
        },
        {
          titel: '4. Reporting in the app',
          inhoud: (
            <>
              <p>Users can report child safety concerns via:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>the report function on a profile or in chat;</li>
                <li>
                  email:{' '}
                  <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">
                    opstap@pascal.services
                  </a>
                  ;
                </li>
                <li>
                  child safety contact:{' '}
                  <a href="mailto:pascal@psww.nl" className="text-opstap-orange hover:underline">
                    pascal@psww.nl
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-2">
                In an emergency in the Netherlands, always call the police first:{' '}
                <a href="tel:112" className="text-opstap-orange hover:underline">
                  112
                </a>
                . OpStap is not an emergency service.
              </p>
            </>
          ),
        },
        {
          titel: '5. Action and reporting to authorities',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Confirmed CSAE/CSAM leads to immediate removal of content and the account.</li>
              <li>
                Where required by law, we report to the relevant regional or national authorities and cooperate
                with lawful investigations.
              </li>
              <li>
                We retain relevant information as needed for safety, investigation and legal obligations.
              </li>
            </ul>
          ),
        },
        {
          titel: '6. Designated contact',
          inhoud: (
            <>
              <p>
                The designated point of contact for OpStap’s child sexual abuse material (CSAM) prevention
                practices and compliance is:
              </p>
              <p className="mt-2">
                Pascal Wiersma
                <br />
                Email:{' '}
                <a href="mailto:pascal@psww.nl" className="text-opstap-orange hover:underline">
                  pascal@psww.nl
                </a>
              </p>
              <p className="mt-2">
                General support:{' '}
                <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">
                  opstap@pascal.services
                </a>
              </p>
            </>
          ),
        },
        {
          titel: '7. Related policies',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a href="/richtlijnen" className="text-opstap-orange hover:underline">
                  Community guidelines
                </a>
              </li>
              <li>
                <a href="/en/terms" className="text-opstap-orange hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/en/privacy" className="text-opstap-orange hover:underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}
