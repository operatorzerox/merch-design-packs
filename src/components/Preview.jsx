import { useState, useEffect, useCallback } from 'react'
import { starterImages, growthImages, ultimateImages, previewStarterImages, previewGrowthImages, previewUltimateImages } from '../imageData'

const packs = [
  { id: 'starter', label: 'Starter Pack', count: 10, images: previewStarterImages, total: starterImages.length },
  { id: 'growth', label: 'Growth Pack', count: 50, images: previewGrowthImages, total: growthImages.length },
  { id: 'ultimate', label: 'Ultimate Pack', count: 101, images: previewUltimateImages, total: ultimateImages.length },
]

function DesignCard({ image, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open preview of ${image.name}`}
      className="group relative aspect-square rounded-lg bg-surface border border-border overflow-hidden cursor-pointer text-left hover:border-cyan/40 hover:shadow-lg hover:shadow-cyan/10 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="absolute inset-0 bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#161620_0%_50%)] bg-[length:14px_14px]" />

      <img
        src={image.url}
        alt={image.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain z-10 p-2 group-hover:scale-[1.04] transition-transform duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-bg via-bg/90 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] text-text-secondary font-medium truncate">{image.name}</span>
          <span className="text-[9px] text-text-muted px-1.5 py-0.5 rounded bg-surface/80 border border-border shrink-0">{image.ext}</span>
        </div>
      </div>
    </button>
  )
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${image.name}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[640px] md:max-w-[720px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10 w-10 h-10 rounded-full bg-surface border border-border text-text-primary hover:bg-surface-hover hover:border-cyan/40 transition-colors shadow-xl shadow-black/50 flex items-center justify-center cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/50">
          <div className="relative bg-[repeating-conic-gradient(#1e1e2a_0%_25%,#161620_0%_50%)] bg-[length:20px_20px] flex items-center justify-center p-6 md:p-8">
            <img
              src={image.url}
              alt={image.name}
              className="block w-auto h-auto max-w-full max-h-[70vh] object-contain"
            />
          </div>

          <div className="px-5 py-3 flex items-center justify-between border-t border-border bg-bg/40">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-sm text-text-primary font-medium truncate">{image.name}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] text-text-muted px-2 py-0.5 rounded bg-bg border border-border">{image.ext}</span>
              <span className="text-[10px] text-cyan font-medium bg-cyan-glow px-2 py-0.5 rounded border border-cyan/20">300 DPI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PackPreviewSection({ pack, onOpen }) {
  const hasImages = pack.images.length > 0
  const displayImages = pack.images

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

      {hasImages ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayImages.map((image) => (
            <DesignCard key={image.filename} image={image} onOpen={() => onOpen(image)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xs text-text-muted italic py-8">
          Add images to /images/{pack.id}/ to display real previews
        </p>
      )}
    </div>
  )
}

export default function Preview() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const openLightbox = useCallback((image) => setLightboxImage(image), [])
  const closeLightbox = useCallback(() => setLightboxImage(null), [])

  const totalImages = packs.reduce((sum, p) => sum + p.images.length, 0)
  const hasAnyImages = totalImages > 0

  const filteredPacks = activeTab === 'all'
    ? packs
    : packs.filter(p => p.id === activeTab)

  return (
    <section id="preview" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
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

        <div className="space-y-14 mb-16">
          {filteredPacks.map((pack) => (
            <PackPreviewSection key={pack.id} pack={pack} onOpen={openLightbox} />
          ))}
        </div>

        {hasAnyImages && (
          <p className="text-center text-xs text-text-muted mb-12">
            Click any design to view larger &middot; Checkerboard indicates transparent background &middot; High-res PNG at 300 DPI
          </p>
        )}

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

      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </section>
  )
}
