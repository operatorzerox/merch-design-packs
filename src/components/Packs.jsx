import { starterImages, growthImages, ultimateImages } from '../imageData'

const packs = [
  {
    name: 'Starter Pack',
    count: 10,
    price: '$29',
    perDesign: '$2.90',
    position: 'Test the Quality',
    tagline: 'See if it works for you — low risk, high quality.',
    description: 'Try before you go big. 10 hand-picked designs to test with your audience and validate demand before scaling up.',
    audience: 'First-time sellers, niche testing, small product lines',
    features: [
      '10 unique shirt-ready designs',
      'High-res PNG (300 DPI)',
      'Transparent backgrounds',
      'Full commercial license',
      'Instant digital download',
    ],
    cta: 'Start With 10 Designs',
    highlight: false,
    scale: false,
    previews: starterImages.slice(0, 3),
  },
  {
    name: 'Growth Pack',
    count: 50,
    price: '$79',
    perDesign: '$1.58',
    position: 'Scale Your Store',
    tagline: '5x the designs. Half the cost per file.',
    description: 'Fill your catalog fast. 50 diverse designs across multiple styles — enough to cover trending niches and attract a wider audience.',
    audience: 'Active sellers, multi-niche stores, growing brands',
    features: [
      '50 unique shirt-ready designs',
      'High-res PNG (300 DPI)',
      'Transparent backgrounds',
      'Full commercial license',
      'Instant digital download',
      'Organized by category',
    ],
    cta: 'Get 50 Designs — Best Seller',
    highlight: true,
    badge: 'Most Popular',
    scale: true,
    previews: growthImages.slice(0, 4),
  },
  {
    name: 'Ultimate Pack',
    count: 101,
    price: '$129',
    perDesign: '$1.28',
    savings: 'Save $163 vs buying individually',
    position: 'Maximum Leverage',
    tagline: 'The entire collection. Lowest cost per design.',
    description: 'The full arsenal. 101 premium designs to build a brand-level merch catalog from day one — more variety, more sales, more profit.',
    audience: 'Serious creators, brands, power sellers',
    features: [
      '101 unique shirt-ready designs',
      'High-res PNG (300 DPI)',
      'Transparent backgrounds',
      'Full commercial license',
      'Instant digital download',
      'Organized by category',
      'Priority support',
    ],
    cta: 'Get All 101 Designs',
    highlight: false,
    badge: 'Best Value — $1.28 each',
    scale: false,
    previews: ultimateImages.slice(0, 4),
  },
]

function DesignCountVisual({ count, highlight }) {
  return (
    <div className="flex items-center gap-1.5 mb-6">
      {Array.from({ length: Math.min(count, 10) }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${highlight ? 'bg-cyan/50' : 'bg-border-hover'}`}
        />
      ))}
      {count > 10 && (
        <span className={`text-[10px] ml-1 ${highlight ? 'text-cyan/70' : 'text-text-muted'}`}>
          +{count - 10}
        </span>
      )}
    </div>
  )
}

function PackCard({ pack }) {
  return (
    <div
      className={`relative rounded-2xl border flex flex-col transition-all ${
        pack.highlight
          ? 'border-cyan/40 bg-gradient-to-b from-cyan-glow to-surface shadow-lg shadow-cyan/5 md:scale-[1.03]'
          : 'border-border bg-surface hover:border-border-hover'
      }`}
    >
      {pack.badge && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
            pack.highlight ? 'bg-cyan text-bg shadow-md shadow-cyan/20' : 'bg-surface border border-cyan/40 text-cyan'
          }`}
        >
          {pack.badge}
        </span>
      )}

      <div className="p-8 pb-0">
        <p className="text-[11px] font-bold text-cyan uppercase tracking-[0.15em] mb-4">{pack.position}</p>

        <h3 className="text-2xl font-bold text-text-primary mb-1">{pack.name}</h3>
        <p className="text-xs text-text-muted italic mb-5">{pack.tagline}</p>

        <p className="text-sm text-text-secondary leading-relaxed mb-6">{pack.description}</p>

        {pack.previews.length > 0 && (
          <div className="flex gap-2 mb-6">
            {pack.previews.map((img) => (
              <div key={img.filename} className="flex-1 aspect-square rounded-lg bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#13131a_0%_50%)] bg-[length:10px_10px] border border-border overflow-hidden">
                <img src={img.url} alt={img.name} loading="lazy" decoding="async" className="w-full h-full object-contain p-1.5" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`mx-8 p-5 rounded-xl mb-6 ${pack.highlight ? 'bg-bg/50' : 'bg-bg/80'} border border-border`}>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-5xl font-bold text-text-primary tracking-tight">{pack.price}</span>
          <span className="text-text-muted text-sm">one-time</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>{pack.perDesign} per design</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="font-semibold text-text-secondary">{pack.count} designs</span>
        </div>
        {pack.savings && (
          <p className="text-xs text-cyan font-medium mt-2">{pack.savings}</p>
        )}
      </div>

      <div className="px-8">
        <DesignCountVisual count={pack.count} highlight={pack.highlight} />

        <a
          href="#"
          className={`block text-center py-4 rounded-xl font-bold text-sm transition-all ${
            pack.highlight
              ? 'bg-cyan text-bg hover:bg-cyan/90 shadow-md shadow-cyan/20'
              : 'border border-border text-text-primary hover:border-border-hover hover:bg-surface-hover'
          }`}
        >
          {pack.cta}
        </a>
      </div>

      <div className="px-8 pt-6 pb-8">
        <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-4">Everything included:</p>
        <ul className="space-y-3">
          {pack.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
              <svg className={`w-4 h-4 mt-0.5 shrink-0 ${pack.highlight ? 'text-cyan' : 'text-cyan/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto mx-8 mb-8 pt-5 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-glow border border-cyan/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">Best for</p>
            <p className="text-[11px] text-text-muted">{pack.audience}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Packs() {
  return (
    <section id="packs" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Pick the Pack That Fits Your Goals
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every pack is a one-time purchase with full commercial rights. No subscriptions, no hidden fees, no royalties. Download and sell immediately.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs text-text-muted">
            <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure checkout &middot; Instant delivery &middot; Lifetime access
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packs.map((pack) => (
            <PackCard key={pack.name} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  )
}
