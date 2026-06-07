export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-[#141414] border border-white/5 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Contact</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Vragen of ideeën?</h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Stuur een e-mail en we reageren zo snel mogelijk.
            </p>
          </div>
          <a
            href="mailto:info@opstap.app"
            className="group flex items-center gap-3 bg-[#1E1E1E] hover:bg-[#E8611A] border border-white/8 hover:border-[#E8611A] text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200 shrink-0"
          >
            <svg className="w-4 h-4 text-[#E8611A] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@opstap.app
          </a>
        </div>
      </div>
    </section>
  )
}
