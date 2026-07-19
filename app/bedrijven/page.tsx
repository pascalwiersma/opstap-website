import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import Samenwerkformulier from './Samenwerkformulier'
import { FiCoffee, FiHome, FiThumbsUp } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Samenwerken met OpStap — Bedrijven & organisaties',
  description: 'Ben je een café, club of (semi-)overheidsorganisatie en zie je kansen om samen te werken met OpStap? Laat het alvast weten.',
  alternates: { canonical: '/bedrijven' },
}

const DOELGROEPEN = [
  {
    icoon: FiCoffee,
    titel: 'Horeca & clubs',
    tekst: 'Bars, cafés en clubs waar OpStap-groepen de avond doorbrengen.',
  },
  {
    icoon: FiHome,
    titel: '(Semi-)overheid',
    tekst: 'Gemeenten en organisaties die eenzaamheid of sociale verbinding aanpakken.',
  },
  {
    icoon: FiThumbsUp,
    titel: 'Overig',
    tekst: 'Zie je een andere kans om samen te werken? Laat het ons weten.',
  },
]

export default function BedrijvenPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <main className="pt-32">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 text-center relative">
            <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Bedrijven & organisaties</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              Samenwerken<br className="hidden sm:block" />
              <span className="text-[#E8611A]"> met OpStap</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              OpStap staat nog aan het begin. Ben je een café, club of (semi-)overheidsorganisatie
              en zie je kansen om samen te werken? We hebben nu nog geen concreet aanbod, maar
              horen graag alvast van je zodat we contact kunnen opnemen zodra dat kan.
            </p>
          </div>
        </section>

        {/* ── Doelgroepen ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Voor wie</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Wie we graag spreken</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {DOELGROEPEN.map(({ icoon: Icon, titel, tekst }) => (
                <div key={titel} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8611A]/10 border border-[#E8611A]/20 flex items-center justify-center text-[#E8611A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{titel}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formulier ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Interesse doorgeven</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Laat het ons weten</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Vul het formulier in, dan nemen we contact op zodra we samenwerkingen opzetten.
              </p>
            </div>
            <Samenwerkformulier />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
