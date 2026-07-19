import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — OpStap',
  description: 'The terms of service for the OpStap app: what you can expect and what is expected of you as a user.',
  alternates: {
    canonical: '/en/terms',
    languages: { 'nl-NL': '/voorwaarden' },
  },
}

export default function TermsPage() {
  return (
    <LegalLayout
      lang="en"
      titel="Terms of Service"
      bijwerking="12 June 2026"
      secties={[
        {
          titel: 'Introduction',
          inhoud: <p>These terms of service apply to the use of the OpStap application and related services, a product of Pascal Services, based in Groningen, the Netherlands. By using the app, you agree to these terms.</p>,
        },
        {
          titel: '1. Definitions',
          inhoud: (
            <ul className="space-y-1">
              <li><strong className="text-white">OpStap:</strong> the application and associated digital services of Pascal Services.</li>
              <li><strong className="text-white">User:</strong> any natural person who downloads or uses the application.</li>
              <li><strong className="text-white">Services:</strong> check-ins, matching, group chats, map view, and identity verification.</li>
              <li><strong className="text-white">Match:</strong> an automatically composed group based on shared interests and favourite venues.</li>
            </ul>
          ),
        },
        {
          titel: '2. Use of the application',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>The application is intended solely for personal, non-commercial use.</li>
              <li>The user warrants that all information provided is accurate, current, and complete.</li>
              <li>Harassing, threatening, or deceiving other users is prohibited.</li>
              <li>Bugs or security vulnerabilities must be reported promptly to info@opstap.app.</li>
              <li>No-shows may result in a reduction of your trust score or suspension of your account.</li>
            </ul>
          ),
        },
        {
          titel: '3. Identity verification',
          inhoud: (
            <>
              <p>OpStap requires identity verification via Didit to ensure the safety of all users.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Verification is required to check in and participate in group chats.</li>
                <li>Users without verification can explore the app but cannot use it fully.</li>
                <li>By starting the verification process, the user agrees to Didit&apos;s terms and conditions.</li>
              </ul>
            </>
          ),
        },
        {
          titel: '4. Availability and liability',
          inhoud: (
            <>
              <p>OpStap does not guarantee that the application will be available at all times or operate without errors. OpStap is not liable for any damages arising from:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>The failure to form a match due to insufficient registrations</li>
                <li>The behaviour of other users during or after a meeting</li>
                <li>Outages in networks, servers, or third-party services</li>
                <li>Loss of data or unauthorised access by third parties</li>
              </ul>
            </>
          ),
        },
        {
          titel: '5. Intellectual property',
          inhoud: <p>All intellectual property rights relating to the application are held by Pascal Services or its licensors. Reproduction or distribution without written permission is prohibited.</p>,
        },
        {
          titel: '6. Minors',
          inhoud: <p>The application is intended exclusively for persons aged 18 and over. Age is verified at registration via date of birth and identity verification. Accounts of minors will be removed immediately.</p>,
        },
        {
          titel: '7. Termination',
          inhoud: <p>OpStap may terminate use or block access in the event of a breach of these terms. Users may delete their account at any time via the settings in the app.</p>,
        },
        {
          titel: '8. Amendment of terms',
          inhoud: (
            <>
              <p>OpStap reserves the right to amend these terms of service at any time. In the event of a material change, users will receive a notification via the app or by email at least seven days before the effective date.</p>
              <p className="mt-2">By continuing to use the application after the effective date of any amendment, the user accepts the updated terms. Users who do not agree must stop using the app and delete their account via the settings.</p>
            </>
          ),
        },
        {
          titel: '9. Governing law',
          inhoud: <p>These terms of service are governed exclusively by Dutch law. Disputes shall be submitted to the competent court in Groningen, the Netherlands.</p>,
        },
        {
          titel: '10. Contact',
          inhoud: (
            <>
              <p><strong className="text-white">Pascal Services</strong></p>
              <p>Hoornsediep 34, 9725 HK Groningen, the Netherlands</p>
              <p>Tel: <a href="tel:0853016480" className="text-[#E8611A] hover:underline">085 301 6480</a></p>
              <p>Email: <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a></p>
              <p className="mt-2 text-gray-500">CoC: 92166474 · VAT: NL004941205B42</p>
            </>
          ),
        },
      ]}
    />
  )
}
