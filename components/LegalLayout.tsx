import Link from 'next/link'

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
      {/* Terug knop */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar opstap.app
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8 pb-24">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-transparant.png" alt="OpStap" className="w-8 h-8 object-contain" />
            <span className="text-sm text-gray-400 font-medium">OpStap</span>
          </div>
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
    </div>
  )
}
