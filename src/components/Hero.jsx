import { heroImages } from '../imageData'

const hasImages = heroImages.length > 0

function ImageCard({ image, style }) {
  return (
    <div
      className="absolute w-[130px] md:w-[150px] rounded-xl border border-border bg-surface shadow-xl shadow-black/50 overflow-hidden"
      style={style}
    >
      <div className="aspect-square bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#13131a_0%_50%)] bg-[length:14px_14px] flex items-center justify-center">
        <img src={image.url} alt={image.name} className="w-full h-full object-contain p-2" loading="lazy" />
      </div>
      <div className="px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] text-text-secondary font-medium truncate">{image.name}</span>
        <span className="text-[9px] text-text-muted px-1.5 py-0.5 rounded bg-border/50">{image.ext}</span>
      </div>
    </div>
  )
}

function ShirtMockup({ image, shirtColor, className, style }) {
  return (
    <div className={`relative ${className}`} style={style}>
      <svg viewBox="0 0 200 240" className="w-full h-full">
        <path
          d="M40,55 L15,75 L30,95 L50,80 L50,220 L150,220 L150,80 L170,95 L185,75 L160,55 L140,30 Q120,15 100,20 Q80,15 60,30 Z"
          fill={shirtColor}
          stroke="#ffffff08"
          strokeWidth="1"
        />
        <foreignObject x="55" y="55" width="90" height="90">
          <img src={image.url} alt={image.name} className="w-full h-full object-contain" />
        </foreignObject>
      </svg>
    </div>
  )
}

function PlaceholderVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface p-6">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {['Streetwear', 'Typography', 'Vintage', 'Abstract'].map((label, i) => (
          <div key={i} className="aspect-square rounded-xl bg-bg border border-border flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-border/40 flex items-center justify-center">
              <svg className="w-7 h-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
            <span className="text-xs text-text-muted font-medium">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-text-muted">Sample designs</span>
        <span className="text-xs text-cyan font-medium">PNG / 300 DPI</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const featured = heroImages[0]
  const cards = heroImages.slice(1, 4)
  const shirts = heroImages.slice(4, 7)
  const thumbs = heroImages.slice(0, 5)

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan-glow text-xs text-cyan font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            Premium Design Packs for Merch Sellers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.08] tracking-tight mb-6">
            101 High-Impact Shirt Designs Ready to Sell
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
            Launch faster with curated design packs for merch stores, print-on-demand offers, Gumroad bundles, and digital product sales.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#packs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyan text-bg font-bold text-sm hover:bg-cyan/90 transition-colors"
            >
              View Packs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#preview"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-border text-text-primary font-semibold text-sm hover:border-border-hover hover:bg-surface transition-colors"
            >
              Preview Designs
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              101 real designs
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Instant digital access
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Starter to full bundle
            </span>
          </div>
        </div>

        {/* Right: Product Showcase */}
        <div className="relative min-h-[500px] md:min-h-[560px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[100px]" />

          {hasImages ? (
            <>
              {/* Shirt mockups (back layer) */}
              {shirts[0] && <ShirtMockup image={shirts[0]} shirtColor="#1c1c1c" className="absolute top-0 left-0 w-[120px] md:w-[140px] opacity-50" style={{ transform: 'rotate(-8deg)' }} />}
              {shirts[1] && <ShirtMockup image={shirts[1]} shirtColor="#111111" className="absolute top-2 right-0 w-[120px] md:w-[140px] opacity-50" style={{ transform: 'rotate(5deg)' }} />}
              {shirts[2] && <ShirtMockup image={shirts[2]} shirtColor="#0d0d0d" className="absolute bottom-[100px] left-0 w-[110px] md:w-[130px] opacity-40" style={{ transform: 'rotate(3deg)' }} />}

              {/* Design file cards (middle layer) */}
              {cards[0] && <ImageCard image={cards[0]} style={{ top: '20px', left: '110px', transform: 'rotate(-3deg)', zIndex: 10 }} />}
              {cards[1] && <ImageCard image={cards[1]} style={{ top: '50px', right: '10px', transform: 'rotate(2deg)', zIndex: 10 }} />}
              {cards[2] && <ImageCard image={cards[2]} style={{ bottom: '130px', right: '-5px', transform: 'rotate(-2deg)', zIndex: 10 }} />}

              {/* Featured card (front layer) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] md:w-[250px] z-20">
                <div className="rounded-2xl border border-cyan/30 bg-surface shadow-2xl shadow-cyan/10 overflow-hidden">
                  <div className="aspect-square bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#13131a_0%_50%)] bg-[length:18px_18px] flex items-center justify-center relative p-4">
                    <img src={featured.url} alt={featured.name} className="w-full h-full object-contain" />
                    <span className="absolute top-3 right-3 text-[10px] text-cyan bg-bg/80 backdrop-blur px-2 py-0.5 rounded border border-cyan/20 font-medium">
                      4500 x 5400px
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-primary font-semibold">{featured.name}</span>
                      <span className="text-[10px] text-cyan font-medium bg-cyan-glow px-2 py-0.5 rounded">300 DPI</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-text-muted">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {featured.ext}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Transparent
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Commercial
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-3 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-lg shadow-black/30">
                <div className="flex -space-x-1.5">
                  {thumbs.map((img) => (
                    <div key={img.filename} className="w-8 h-8 rounded-lg bg-bg border-2 border-surface overflow-hidden">
                      <img src={img.url} alt={img.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <span className="text-text-primary font-semibold">+101 designs</span>
                  <span className="text-text-muted ml-1">in the full pack</span>
                </div>
              </div>
            </>
          ) : (
            <PlaceholderVisual />
          )}
        </div>
      </div>
    </section>
  )
}
