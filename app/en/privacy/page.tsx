import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — OpStap',
  description: 'Learn how OpStap handles your personal data: what we collect, why, and how we keep it safe.',
  alternates: {
    canonical: '/en/privacy',
    languages: { 'nl-NL': '/privacy' },
  },
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      lang="en"
      titel="Privacy Policy"
      bijwerking="12 June 2026"
      secties={[
        {
          titel: 'Introduction',
          inhoud: <p>OpStap is committed to protecting personal data. This privacy policy explains what personal data we collect, the purposes for which it is used, the legal bases on which we process it, and how we ensure secure and careful handling. OpStap is a product of Pascal Services, based in Groningen, the Netherlands.</p>,
        },
        {
          titel: '1. Personal data we process',
          inhoud: (
            <>
              <p><strong className="text-white">Account data:</strong> first name, username, email address, phone number, date of birth, profile photo.</p>
              <p><strong className="text-white">Profile data:</strong> interests, favourite music styles, favourite venues, group size preference, uploaded photos.</p>
              <p><strong className="text-white">Identity verification:</strong> verification via our partner Didit. We receive only a confirmation of successful verification and do not store the underlying documents.</p>
              <p><strong className="text-white">App usage:</strong> technical data (IP address, device ID, push token), time and frequency of check-ins, match data, trust score, and location data when setting a meeting point.</p>
            </>
          ),
        },
        {
          titel: '2. Purposes of processing',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Providing the OpStap application, matching, and group chat</li>
              <li>Identity verification for the safety of users</li>
              <li>Calculating and maintaining the trust score</li>
              <li>Communication via push notifications about matches and updates</li>
              <li>Compliance with legal obligations</li>
              <li>Security and monitoring, including detection of abuse</li>
            </ul>
          ),
        },
        {
          titel: '3. Legal bases',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">Performance of a contract:</strong> data necessary for providing the app and matching functionality</li>
              <li><strong className="text-white">Legitimate interest:</strong> security, fraud prevention, and trust score</li>
              <li><strong className="text-white">Consent:</strong> identity verification via Didit and use of push notifications</li>
              <li><strong className="text-white">Legal obligation:</strong> disclosure of data to competent authorities</li>
            </ul>
          ),
        },
        {
          titel: '4. Sub-processors',
          inhoud: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Processor</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Country</th>
                    <th className="text-left py-2 text-white font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Didit', 'Netherlands', 'Identity verification'],
                    ['Stream', 'US', 'Group chat and messaging'],
                    ['Mapbox', 'US', 'Map and location services'],
                    ['Supabase', 'US', 'Database, authentication, and storage'],
                    ['Resend', 'US', 'Transactional emails'],
                  ].map(([name, country, purpose]) => (
                    <tr key={name}>
                      <td className="py-2 pr-4">{name}</td>
                      <td className="py-2 pr-4">{country}</td>
                      <td className="py-2">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          titel: '5. Retention periods',
          inhoud: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Data type</th>
                    <th className="text-left py-2 text-white font-semibold">Retention period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Account data', 'Active account + up to 6 months after deletion'],
                    ['Match data and chat messages', 'Up to 90 days after the match'],
                    ['Trust score', 'For as long as the account is active'],
                    ['Verification result (Didit)', 'For as long as the account is active'],
                    ['Log files', 'Up to 12 months'],
                    ['Report data', 'Up to 12 months after resolution'],
                  ].map(([type, period]) => (
                    <tr key={type}>
                      <td className="py-2 pr-4">{type}</td>
                      <td className="py-2">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          titel: '6. Your rights',
          inhoud: (
            <>
              <p>As a data subject, you have the following rights under the GDPR:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (via account deletion in the app)</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing based on legitimate interest</li>
              </ul>
              <p className="mt-2">Requests can be sent to <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a>. We will respond within one month.</p>
            </>
          ),
        },
        {
          titel: '7. Complaints',
          inhoud: <p>Complaints may be submitted to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens), P.O. Box 93374, 2509 AJ The Hague — <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#E8611A] hover:underline">autoriteitpersoonsgegevens.nl</a></p>,
        },
        {
          titel: '8. Contact',
          inhoud: (
            <>
              <p><strong className="text-white">Pascal Services</strong></p>
              <p>Hoornsediep 34, 9725 HK Groningen, the Netherlands</p>
              <p>Tel: <a href="tel:0853016480" className="text-[#E8611A] hover:underline">085 301 6480</a></p>
              <p>Email: <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">info@opstap.app</a></p>
              <p>Website: opstap.app</p>
              <p className="mt-2 text-gray-500">CoC: 92166474 · VAT: NL004941205B42</p>
            </>
          ),
        },
      ]}
    />
  )
}
