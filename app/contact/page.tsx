import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import Contactformulier from './Contactformulier'

export const metadata: Metadata = {
  title: 'Contact — OpStap',
  description: 'Vragen of ideeën over OpStap? Neem contact met ons op via e-mail of het contactformulier.',
  alternates: { canonical: '/contact' },
}

const INFO = [
  {
    titel: 'Algemeen',
    email: 'info@opstap.app',
  },
  {
    titel: 'Pers',
    email: 'pers@opstap.app',
  },
  {
    titel: 'Privacy',
    email: 'privacy@opstap.app',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <main className="pt-32">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto px-6 text-center relative">
            <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Vragen of ideeën?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Vul het formulier in en we reageren zo snel mogelijk.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="max-w-2xl mx-auto px-6">
            <Contactformulier />
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6">
          <div className="border-t border-white/5" />
        </div>

        <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
          <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
            {INFO.map(({ titel, email }) => (
              <div key={titel} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-2">
                <h3 className="text-base font-bold">{titel}</h3>
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#E8611A] text-sm transition-colors">
                  {email}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
