import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('url')) {
          return new URLSearchParams()
        }
        return new URLSearchParams({
          format: 'webp',
          quality: '75',
        })
      },
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
})
