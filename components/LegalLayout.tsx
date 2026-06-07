import Nav from './Nav'
import Countdown from './Countdown'
import Footer from './Footer'

interface Section {
  titel: string
  inhoud: React.ReactNode
}

interface Props {
  titel: string
  bijwerking: string
  secties: Section[]
}

export default function LegalLayout({ titel, bijwerking, secties }: Props) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <article className="max-w-3xl mx-auto px-6 pt-40 pb-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">{titel}</h1>
          <p className="text-gray-500 text-sm">Laatste bijwerking: {bijwerking}</p>
        </div>

        {/* Secties */}
        <div className="flex flex-col gap-10">
          {secties.map((sectie, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-white mb-3">{sectie.titel}</h2>
              <div className="text-gray-400 leading-relaxed text-sm space-y-2">
                {sectie.inhoud}
              </div>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Vragen? Stuur een e-mail naar{' '}
            <a href="mailto:info@opstap.app" className="text-[#E8611A] hover:underline">
              info@opstap.app
            </a>
          </p>
        </div>
      </article>
      <Footer />
    </div>
  )
}
