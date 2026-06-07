const STAPPEN = [
  {
    nummer: "01",
    titel: "Check in voor vanavond",
    beschrijving:
      "Open de app en tik op de check-in knop. Je geeft aan dat je vanavond de stad in wil. Dat is alles.",
    icoon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    nummer: "02",
    titel: "Om 22:00 krijg je een match",
    beschrijving:
      "Ons algoritme koppelt je aan mensen met dezelfde interesses en favoriete plekken in jouw stad. Je krijgt direct een pushmelding.",
    icoon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nummer: "03",
    titel: "Spreek af en ga samen de stad in",
    beschrijving:
      "In de groepschat spreken jullie een afspraakpunt af. Iedereen weet waar en wanneer. Gewoon gaan.",
    icoon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HoeHetWerkt() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Zo werkt het</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Klaar in drie stappen
          </h2>
        </div>

        {/* Stappen */}
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Verbindingslijn (desktop) */}
          <div className="hidden sm:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[#E8611A]/30 to-transparent" />

          {STAPPEN.map((stap, i) => (
            <div key={i} className="relative flex flex-col gap-5">
              {/* Nummer + icoon */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8611A]/10 border border-[#E8611A]/20 flex items-center justify-center text-[#E8611A]">
                    {stap.icoon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-black text-[#E8611A] bg-[#0D0D0D] border border-[#E8611A]/30 rounded-full w-5 h-5 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-snug">{stap.titel}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{stap.beschrijving}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
