export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="OpStap logo" className="w-8 h-8 rounded-xl" />
          <span className="text-white font-bold text-lg tracking-tight">OpStap</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-[#E8611A]/15 border border-[#E8611A]/30 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-[#E8611A] animate-pulse" />
          <span className="text-[#E8611A] text-sm font-semibold">Lancering 1 juli</span>
        </div>
      </div>
    </header>
  );
}
