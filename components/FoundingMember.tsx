export default function FoundingMember() {
  return (
    <section id="founding-member" className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#E8611A] p-8 sm:p-12">
          {/* Achtergrond patroon */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-white rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-white rounded-full -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-full" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏅</span>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Founding Member
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Word een van de eerste leden
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-md leading-relaxed">
                Download de app nu en ontvang de exclusieve{" "}
                <strong className="text-white">Founding Member badge</strong> op je profiel.
                Beschikbaar voor de eerste leden vóór{" "}
                <strong className="text-white">1 januari 2027</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5">
                <span className="text-xl">📅</span>
                <div>
                  <p className="text-white/60 text-xs">Beschikbaar vanaf</p>
                  <p className="text-white font-black text-lg leading-none">1 augustus 2026</p>
                </div>
              </div>
              <p className="text-white/60 text-xs text-center">App Store · Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
