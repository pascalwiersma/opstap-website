import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Delete your account — OpStap' }

export default function AccountDeletionPage() {
  return (
    <LegalLayout
      lang="en"
      titel="Delete your account"
      bijwerking="12 June 2026"
      secties={[
        {
          titel: 'How do you delete your account?',
          inhoud: (
            <>
              <p>You can delete your account directly from within the OpStap app. To do so, go to:</p>
              <p className="mt-3 px-4 py-3 bg-white/5 rounded-lg text-white font-medium">
                Settings → Delete account
              </p>
              <p className="mt-3">Confirm your choice and your account will be deactivated immediately. You will no longer be able to log in and other users will no longer be able to see your profile.</p>
            </>
          ),
        },
        {
          titel: 'What happens to your data?',
          inhoud: (
            <ul className="list-disc list-inside space-y-1">
              <li>Your profile and all associated data are hidden from other users immediately.</li>
              <li>All personal data will be permanently and irreversibly deleted from our systems within <strong className="text-white">6 months</strong> of account deletion.</li>
              <li>Anonymised statistical data may be retained for longer for analytical purposes, but cannot be traced back to you personally.</li>
            </ul>
          ),
        },
        {
          titel: 'Questions or need help?',
          inhoud: (
            <p>
              Can&apos;t find the option in the app or do you have another question about deleting your account? Send an email to{' '}
              <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">
                info@opstap.app
              </a>
              . We will respond within two business days.
            </p>
          ),
        },
      ]}
    />
  )
}
