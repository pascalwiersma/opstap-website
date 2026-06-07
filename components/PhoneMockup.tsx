export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow achter telefoon */}
      <div className="absolute inset-0 bg-[#E8611A]/20 blur-3xl rounded-full scale-75 pointer-events-none" />

      {/* iPhone frame */}
      <div className="relative w-[280px] sm:w-[320px] mx-auto">
        <div className="relative bg-[#1A1A1A] rounded-[48px] p-3 shadow-2xl border border-white/10">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0D0D0D] rounded-full z-10" />

          {/* Scherm */}
          <div className="bg-[#0D0D0D] rounded-[40px] overflow-hidden aspect-[9/19.5] relative">
            {/* App content placeholder */}
            <div className="absolute inset-0 flex flex-col">
              {/* Status bar */}
              <div className="h-12 flex items-end justify-between px-6 pb-1">
                <span className="text-white text-xs font-medium">22:00</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 items-end">
                    <div className="w-1 h-2 bg-white rounded-sm opacity-60" />
                    <div className="w-1 h-3 bg-white rounded-sm opacity-80" />
                    <div className="w-1 h-4 bg-white rounded-sm" />
                  </div>
                  <div className="w-4 h-2.5 border border-white rounded-sm relative">
                    <div className="absolute inset-0.5 bg-white rounded-sm w-2/3" />
                  </div>
                </div>
              </div>

              {/* App UI */}
              <div className="flex-1 px-4 py-3 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-xs">Vanavond in Groningen</p>
                    <p className="text-white font-bold text-base">Inchecken</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E8611A]/20 border border-[#E8611A]/40 flex items-center justify-center">
                    <span className="text-[#E8611A] text-xs font-bold">O</span>
                  </div>
                </div>

                {/* Teller */}
                <div className="bg-[#1A1A1A] rounded-2xl p-4 text-center">
                  <p className="text-[#E8611A] font-black text-5xl">24</p>
                  <p className="text-white/50 text-xs mt-1">gaan vanavond uit</p>
                </div>

                {/* Timer */}
                <div className="bg-[#1A1A1A] rounded-2xl p-3 flex items-center justify-between">
                  <p className="text-white/60 text-xs">Match om</p>
                  <p className="text-white font-bold text-sm">22:00</p>
                </div>

                {/* Check-in knop */}
                <button className="w-full bg-[#E8611A] rounded-2xl py-3.5 text-white font-bold text-sm">
                  Inchecken voor vanavond
                </button>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {[
                    { label: "Groningen", val: "24" },
                    { label: "Matches", val: "6" },
                    { label: "Rating", val: "4.8" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#1A1A1A] rounded-xl p-2.5 text-center">
                      <p className="text-white font-bold text-sm">{s.val}</p>
                      <p className="text-white/40 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tab bar */}
              <div className="h-16 border-t border-white/5 flex items-center justify-around px-4 pb-2">
                {["Kaart", "Inchecken", "Chat", "Profiel"].map((tab, i) => (
                  <div key={tab} className="flex flex-col items-center gap-1">
                    <div className={`w-5 h-5 rounded-md ${i === 1 ? "bg-[#E8611A]" : "bg-white/10"}`} />
                    <span className={`text-xs ${i === 1 ? "text-[#E8611A]" : "text-white/30"}`}>{tab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Zijknopjes */}
        <div className="absolute right-0 top-[80px] w-1 h-12 bg-[#2A2A2A] rounded-l-sm" />
        <div className="absolute left-0 top-[72px] w-1 h-8 bg-[#2A2A2A] rounded-r-sm" />
        <div className="absolute left-0 top-[90px] w-1 h-8 bg-[#2A2A2A] rounded-r-sm" />
        <div className="absolute left-0 top-[108px] w-1 h-8 bg-[#2A2A2A] rounded-r-sm" />
      </div>
    </div>
  );
}
