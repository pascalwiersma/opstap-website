export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#E8611A] flex items-center justify-center">
            <span className="text-white font-black text-sm">O</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">OpStap</span>
        </div>
        <a
          href="#download"
          className="hidden sm:inline-flex items-center gap-2 bg-[#E8611A] hover:bg-[#d4561a] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Download de app
        </a>
      </div>
    </header>
  );
}
