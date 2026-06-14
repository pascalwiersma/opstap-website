'use client'

export default function Verhaal() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Foto links */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Achtergrond decoratie */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E8611A]/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Foto frame */}
              <div className="relative w-80 sm:w-96 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#1A1A1A]">
                {/* Vervang dit img-element door je eigen foto */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pascal.jpg"
                  alt="Pascal, oprichter van OpStap"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>

              {/* Naam kaartje */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-white/10 rounded-2xl px-5 py-3 shadow-xl whitespace-nowrap">
                <p className="text-white font-bold text-sm">Pascal</p>
                <p className="text-gray-400 text-xs">Oprichter van OpStap</p>
              </div>
            </div>
          </div>

          {/* Verhaal rechts */}
          <div className="flex flex-col gap-6 lg:pt-0 pt-8">
            <div>
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Het verhaal</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Groningen bruist &apos;s avonds, maar ik ken eigenlijk niemand hier in de stad.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                Ik ga soms graag uit op een donderdagavond of een zaterdagavond. Ik zit bij een
                studievereniging, iedereen is aardig, iedereen is leuk. Alleen matcht het niet altijd
                om daar samen mee de stad in te gaan.
              </p>
              <p>
                En verder heb ik niet zo heel veel mensen die ook houden van &apos;s avonds een terrasje
                pakken of lekker stappen. Terwijl je als je door de stad loopt zoveel mensen ziet,
                allemaal in groepsverband.
              </p>
              <p>
                Maar er zomaar op afstappen? Daar heb je best wat doorzettingsvermogen voor nodig.
                En de kans dat je afgewezen wordt is er gewoon ook.
              </p>
              <p className="text-white/90 font-medium">
                Dus dacht ik: wat als je gewoon op één knop drukt? Geen planning, geen groep aanmaken.
                Gewoon inchecken, en om 20:00 word je gematcht met mensen die hetzelfde profiel hebben
                als jij en ook vanavond de stad in willen.
              </p>
              <p>
                We beginnen in Groningen. Om te kijken of andere mensen er net zo over denken en of er
                echt vraag naar is. Als dat zo is, breiden we uit naar de rest van Nederland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
