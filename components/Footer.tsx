export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="OpStap logo" className="w-7 h-7 rounded-xl" />
              <span className="text-white font-bold">OpStap</span>
            </div>
            <p className="text-gray-500 text-sm">Een product van Pascal Services</p>
            <a
              href="mailto:info@opstap.app"
              className="text-gray-500 hover:text-[#E8611A] text-sm transition-colors"
            >
              info@opstap.app
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacybeleid
            </a>
            <a href="/voorwaarden" className="text-gray-500 hover:text-white text-sm transition-colors">
              Gebruiksvoorwaarden
            </a>
            <a href="/richtlijnen" className="text-gray-500 hover:text-white text-sm transition-colors">
              Community Richtlijnen
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Pascal Services. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
