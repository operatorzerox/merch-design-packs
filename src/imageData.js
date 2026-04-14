// Real design image manifest — filenames come from the Vite virtual module
// `virtual:image-manifest` which reads the image directories at build time.
// All URLs use the public root path: /images/{pack}/{file}
import manifest from 'virtual:image-manifest'

function naturalSort(a, b) {
  const re = /(\d+)/g
  const aParts = a.split(re)
  const bParts = b.split(re)
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const ap = aParts[i] ?? ''
    const bp = bParts[i] ?? ''
    const aNum = /^\d+$/.test(ap)
    const bNum = /^\d+$/.test(bp)
    if (aNum && bNum) {
      const diff = parseInt(ap, 10) - parseInt(bp, 10)
      if (diff !== 0) return diff
    } else if (ap !== bp) {
      return ap.localeCompare(bp)
    }
  }
  return 0
}

function buildPack(pack) {
  const files = [...(manifest[pack] || [])].sort(naturalSort)
  return files.map((filename) => {
    const ext = filename.split('.').pop().toUpperCase()
    const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
    return {
      url: `/images/${pack}/${filename}`,
      filename,
      name,
      ext,
    }
  })
}

export const starterImages = buildPack('starter')
export const growthImages = buildPack('growth')
export const ultimateImages = buildPack('ultimate')

// Curated subsets — lazy loading handles render cost past the viewport
export const heroImages = ultimateImages.slice(0, 8)
// Starter and Growth show the full pack; Ultimate is curated to keep the page tight
export const previewStarterImages = starterImages
export const previewGrowthImages = growthImages
export const previewUltimateImages = ultimateImages.slice(0, 8)
