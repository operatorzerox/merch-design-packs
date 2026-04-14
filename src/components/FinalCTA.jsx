export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative">
          <div className="absolute -inset-12 bg-cyan-glow rounded-3xl blur-3xl opacity-40" />
          <div className="relative rounded-2xl border border-cyan/20 bg-surface p-10 md:p-16">
            <p className="text-xs font-semibold text-cyan uppercase tracking-wider mb-4">Stop browsing, start selling</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
              Your Store Could Have New Products Tonight
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Pick a pack, download your designs, upload to your store. Most sellers have products live within 30 minutes of purchase.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
              <a
                href="#packs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cyan text-bg font-bold text-sm hover:bg-cyan/90 transition-colors"
              >
                Choose Your Pack & Download
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-text-muted">
              <span>Instant download</span>
              <span>&middot;</span>
              <span>Full commercial rights</span>
              <span>&middot;</span>
              <span>No subscription</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
