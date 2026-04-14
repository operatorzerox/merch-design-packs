export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#" className="text-text-primary font-bold text-lg tracking-tight">
          MerchPacks
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#packs" className="hover:text-text-primary transition-colors">Packs</a>
          <a href="#preview" className="hover:text-text-primary transition-colors">Preview</a>
          <a href="#faq" className="hover:text-text-primary transition-colors">FAQ</a>
        </nav>
        <a
          href="#packs"
          className="text-sm font-bold px-5 py-2 rounded-lg bg-cyan text-bg hover:bg-cyan/90 transition-colors"
        >
          Download Now
        </a>
      </div>
    </header>
  )
}
