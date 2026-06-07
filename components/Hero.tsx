import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      {/* Achtergrond glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E8611A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#E8611A]/15 border border-[#E8611A]/30 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E8611A] animate-pulse" />
              <span className="text-[#E8611A] text-sm font-semibold">Lancering 1 juli · Groningen</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Niemand om{" "}
              <br className="hidden sm:block" />
              mee op stap{" "}
              <br className="hidden sm:block" />
              te gaan?
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-[#E8611A] leading-tight">
              OpStap koppelt je aan nieuwe mensen.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Check in, wij maken een groep op basis van jouw interesses.{" "}
              <span className="text-white font-medium">Elke avond om 22:00.</span>
            </p>

            <div id="download" className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base cursor-default">
                <AppleIcon />
                <span>
                  <span className="block text-xs font-normal text-gray-400 leading-none mb-0.5">Binnenkort in de</span>
                  App Store
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base cursor-default">
                <PlayStoreIcon />
                <span>
                  <span className="block text-xs font-normal text-gray-400 leading-none mb-0.5">Binnenkort op</span>
                  Google Play
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Beschikbaar vanaf 1 juli 2026 · Gratis · Geen abonnement
            </p>
          </div>

          {/* Telefoon */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 7.273c-.2.116-.43.165-.658.154a1.27 1.27 0 01-.066-.627zm10.531-10.501L1.571.336a1.27 1.27 0 01.066-.627c.228-.011.458.038.658.154l12.519 7.273zm0 0l3.712-3.701 4.477 2.601c.487.282.773.808.773 1.437s-.286 1.155-.773 1.437l-4.477 2.601zM4.13.905l14.092 8.189-3.712 3.701L4.13.905z" />
    </svg>
  );
}
