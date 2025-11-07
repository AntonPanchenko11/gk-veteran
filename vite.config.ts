import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rawBase = process.env.VITE_BASE_PATH

function resolveBasePath(base?: string) {
  if (!base || base === '/') {
    return '/'
  }

  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: resolveBasePath(rawBase),
  plugins: [react()],
})
