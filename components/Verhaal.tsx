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
              <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#1A1A1A]">
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
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-600">
                  <div className="w-20 h-20 rounded-full bg-[#E8611A]/20 border-2 border-[#E8611A]/30 flex items-center justify-center">
                    <span className="text-[#E8611A] text-3xl font-black">P</span>
                  </div>
                  <span className="text-sm">Foto komt hier</span>
                </div>
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
                Het begon met een avond alleen
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                Ik wilde uit. Gewoon een avond de stad in, wat drinken, nieuwe mensen ontmoeten.
                Maar iedereen had het druk. Of zin om thuis te blijven.
              </p>
              <p className="text-white/80 font-medium">
                Dus bleef ik ook thuis.
              </p>
              <p>
                Dat gevoel kende ik. En ik wist dat ik niet de enige was. Groningen bruist elke
                avond, maar hoeveel mensen zitten er thuis terwijl ze eigenlijk de deur uit wilden?
              </p>
              <p>
                Dus bouwde ik OpStap. Geen datingapp. Geen vriendenapp. Gewoon een manier om die
                avond toch te laten gebeuren. Met mensen die dezelfde muziek leuk vinden, dezelfde
                kroegen kennen, en ook gewoon zin hebben om te gaan.
              </p>
              <p className="text-white font-semibold text-lg">
                Omdat een goed avondje uit begint met één stap.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#E8611A]/20 border border-[#E8611A]/30 flex items-center justify-center shrink-0">
                <span className="text-[#E8611A] font-black">P</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Pascal</p>
                <p className="text-gray-500 text-xs">Oprichter · Pascal Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
