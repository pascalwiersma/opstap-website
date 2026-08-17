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
      bijwerking="17 August 2026"
      secties={[
        {
          titel: 'Introduction',
          inhoud: <p>OpStap is committed to protecting personal data. This privacy policy explains what personal data we collect, the purposes for which it is used, the legal bases on which we process it, and how we ensure secure and careful handling. OpStap is a product of Pascal Services, based in Groningen, the Netherlands.</p>,
        },
        {
          titel: '1. Personal data we process',
          inhoud: (
            <>
              <p><strong className="text-white">Account data:</strong> first name, username, email address, phone number, date of birth, gender, profile photo, and optional bio.</p>
              <p><strong className="text-white">Profile data:</strong> interests, favourite venues, preferences (including group size and travel radius), uploaded photos.</p>
              <p><strong className="text-white">Identity verification:</strong> verification via our partner Didit. This may process first name, last name, date of birth, age, gender, and nationality to confirm your identity. We do not store the underlying identity documents or selfies ourselves.</p>
              <p><strong className="text-white">App usage:</strong> technical data (IP address, device data, push token), time and frequency of check-ins, match and group data, trust score, and location data when you use the map, check in, or set a meeting point. We do not keep an ongoing location history beyond what is needed to provide the service.</p>
              <p><strong className="text-white">Moderation and reports:</strong> warning content, ban status, ban appeals, reports about users, reports about incorrect venue or event information, bug reports and feedback (including optional screenshots).</p>
              <p><strong className="text-white">Analytics events:</strong> anonymised or pseudonymised usage events to improve the app and detect abuse.</p>
            </>
          ),
        },
        {
          titel: '2. Purposes of processing',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Providing the OpStap application, matching (on the configured match day(s), default Thursday) and group chat</li>
              <li>Login and account security via SMS verification</li>
              <li>Identity verification for the safety of users</li>
              <li>Calculating and maintaining the trust score</li>
              <li>Communication via push notifications about matches, updates and moderation</li>
              <li>Moderation: warnings, bans, appeals and handling reports</li>
              <li>Improving the service and detecting abuse (security &amp; monitoring)</li>
              <li>Compliance with legal obligations</li>
            </ul>
          ),
        },
        {
          titel: '3. Legal bases',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">Performance of a contract:</strong> data necessary for providing the app, login, matching and chat</li>
              <li><strong className="text-white">Legitimate interest:</strong> security, fraud and abuse prevention, trust score, moderation and product improvement</li>
              <li><strong className="text-white">Consent:</strong> identity verification via Didit and use of push notifications (where required)</li>
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
                    ['Didit', 'Netherlands / EEA', 'Identity verification'],
                    ['Twilio', 'US', 'SMS for login (OTP)'],
                    ['Stream', 'US', 'Group chat and messaging'],
                    ['Mapbox', 'US', 'Map and location services'],
                    ['Supabase', 'US / EEA*', 'Database, authentication and storage'],
                    ['Resend', 'US', 'Transactional emails'],
                    ['Expo', 'US', 'Push notifications to devices'],
                  ].map(([name, country, purpose]) => (
                    <tr key={name}>
                      <td className="py-2 pr-4">{name}</td>
                      <td className="py-2 pr-4">{country}</td>
                      <td className="py-2">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-sm text-gray-400">* Where data is transferred outside the EEA, we use appropriate safeguards (including standard contractual clauses) where applicable.</p>
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
                    ['Moderation (warnings, bans, appeals)', 'As long as needed for safety and handling, then up to 12 months'],
                    ['Reports (users, content, bugs, feedback)', 'Up to 12 months after resolution'],
                    ['Analytics / technical logs', 'Up to 12 months'],
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
                <li>Right to withdraw consent (where processing is based on consent), without affecting lawfulness before withdrawal</li>
              </ul>
              <p className="mt-2">Requests can be sent to <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">opstap@pascal.services</a>. We will respond within one month.</p>
            </>
          ),
        },
        {
          titel: '7. Complaints',
          inhoud: <p>Complaints may be submitted to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens), P.O. Box 93374, 2509 AJ The Hague — <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-opstap-orange hover:underline">autoriteitpersoonsgegevens.nl</a></p>,
        },
        {
          titel: '8. Contact',
          inhoud: (
            <>
              <p><strong className="text-white">Pascal Services</strong></p>
              <p>Hoornsediep 34, 9725 HK Groningen, the Netherlands</p>
              <p>Tel: <a href="tel:0853016480" className="text-opstap-orange hover:underline">085 301 6480</a></p>
              <p>Email: <a href="mailto:opstap@pascal.services" className="text-opstap-orange hover:underline">opstap@pascal.services</a></p>
              <p>Website: opstap.app</p>
              <p className="mt-2 text-gray-500">CoC: 92166474 · VAT: NL004941205B42</p>
            </>
          ),
        },
      ]}
    />
  )
}
