import PhoneMockup from "./PhoneMockup";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      {/* Achtergrond glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E8611A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
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
              <span className="text-white font-medium">Elke avond om 20:00.</span>
            </p>

            <div id="download" className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base cursor-default">
                <FaApple className="w-7 h-7 shrink-0" />
                <span>
                  <span className="block text-xs font-normal text-gray-400 leading-none mb-0.5">Binnenkort in de</span>
                  App Store
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base cursor-default">
                <FaGooglePlay className="w-6 h-6 shrink-0" />
                <span>
                  <span className="block text-xs font-normal text-gray-400 leading-none mb-0.5">Binnenkort op</span>
                  Google Play
                </span>
              </div>
            </div>

          </div>

          {/* Telefoon */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

