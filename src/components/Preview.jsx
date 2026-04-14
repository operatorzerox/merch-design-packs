import { useState } from 'react'
import { starterImages, growthImages, ultimateImages, previewStarterImages, previewGrowthImages, previewUltimateImages } from '../imageData'

const packs = [
  { id: 'starter', label: 'Starter Pack', count: 10, images: previewStarterImages, total: starterImages.length },
  { id: 'growth', label: 'Growth Pack', count: 50, images: previewGrowthImages, total: growthImages.length },
  { id: 'ultimate', label: 'Ultimate Pack', count: 101, images: previewUltimateImages, total: ultimateImages.length },
]

function DesignCard({ image, index }) {
  return (
    <div className="group relative aspect-[4/5] rounded-xl bg-surface border border-border overflow-hidden hover:border-cyan/30 transition-all">
      {/* Checkerboard = transparent background indicator */}
      <div className="absolute inset-0 bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#161620_0%_50%)] bg-[length:16px_16px]" />

      <img
        src={image.url}
        alt={image.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain z-10 p-4 group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg via-bg/70 to-transparent z-20">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary font-medium truncate">{image.name}</span>
          <span className="text-[10px] text-text-muted px-2 py-0.5 rounded bg-surface/80 border border-border shrink-0 ml-2">PNG</span>
        </div>
      </div>
    </div>
  )
}

function PlaceholderCard({ index }) {
  return (
    <div className="group relative aspect-[4/5] rounded-xl bg-surface border border-border overflow-hidden hover:border-border-hover transition-colors">
      <div className="absolute inset-0 bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#161620_0%_50%)] bg-[length:16px_16px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="w-20 h-20 rounded-xl bg-border/30 flex items-center justify-center mb-2">
          <svg className="w-10 h-10 text-text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
        <span className="text-[10px] text-text-muted">Design #{String(index + 1).padStart(3, '0')}</span>
      </div>
    </div>
  )
}

function PackPreviewSection({ pack }) {
  const hasImages = pack.images.length > 0
  const displayImages = pack.images.slice(0, 8)

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-text-primary">{pack.label}</h3>
          <span className="text-xs text-text-muted px-2.5 py-1 rounded-full bg-surface border border-border">
            {pack.count} designs
          </span>
        </div>
        {hasImages && pack.total > displayImages.length && (
          <span className="text-xs text-text-muted">
            Showing {displayImages.length} of {pack.total}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hasImages
          ? displayImages.map((image, i) => (
              <DesignCard key={image.filename} image={image} index={i} />
            ))
          : Array.from({ length: Math.min(pack.count, 4) }, (_, i) => (
              <PlaceholderCard key={i} index={i} />
            ))
        }
      </div>

      {!hasImages && (
        <p className="text-center text-xs text-text-muted mt-4 italic">
          Add images to /images/{pack.id}/ to display real previews
        </p>
      )}
    </div>
  )
}

export default function Preview() {
  const [activeTab, setActiveTab] = useState('all')

  const totalImages = packs.reduce((sum, p) => sum + p.images.length, 0)
  const hasAnyImages = totalImages > 0

  const filteredPacks = activeTab === 'all'
    ? packs
    : packs.filter(p => p.id === activeTab)

  return (
    <section id="preview" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs text-text-muted font-medium mb-6">
            {hasAnyImages ? `${totalImages} real designs from the packs` : 'Real examples from the packs'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            This Is What You're Getting
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            No guesswork. Every design below is an actual sample from the packs — high-res, transparent background, ready to print on any shirt or product.
          </p>
        </div>

        {/* Pack filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-surface border border-border">
            {[
              { id: 'all', label: 'All Packs' },
              { id: 'starter', label: 'Starter (10)' },
              { id: 'growth', label: 'Growth (50)' },
              { id: 'ultimate', label: 'Ultimate (101)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan text-bg'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pack sections */}
        <div className="space-y-16 mb-16">
          {filteredPacks.map((pack) => (
            <PackPreviewSection key={pack.id} pack={pack} />
          ))}
        </div>

        {/* Transparency note */}
        {hasAnyImages && (
          <p className="text-center text-xs text-text-muted mb-12">
            Checkerboard pattern indicates transparent background &middot; All files are high-res PNG at 300 DPI
          </p>
        )}

        {/* Bottom CTA */}
        <div className="rounded-xl border border-cyan/20 bg-cyan-glow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-text-primary font-semibold mb-1">Want to see every design before you buy?</p>
            <p className="text-sm text-text-secondary">Each pack page includes a full preview gallery — no surprises.</p>
          </div>
          <a
            href="#packs"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-bg font-bold text-sm hover:bg-cyan/90 transition-colors"
          >
            Browse All Packs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
