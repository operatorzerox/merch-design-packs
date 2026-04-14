import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// Virtual module that lists real image filenames from the public/images/{pack}
// directories at build/dev start. Source code references them as /images/... URLs.
function imageManifestPlugin() {
  const virtualId = 'virtual:image-manifest'
  const resolvedId = '\0' + virtualId

  function readPack(pack) {
    const dir = path.resolve(process.cwd(), 'public', 'images', pack)
    if (!fs.existsSync(dir)) return []
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g)$/i.test(f))
  }

  return {
    name: 'image-manifest',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id !== resolvedId) return
      const manifest = {
        starter: readPack('starter'),
        growth: readPack('growth'),
        ultimate: readPack('ultimate'),
      }
      return `export default ${JSON.stringify(manifest)}`
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), imageManifestPlugin()],
})
