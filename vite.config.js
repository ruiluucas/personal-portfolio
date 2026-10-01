import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Separa os vendors grandes em chunks próprios: o conteúdo do site muda a cada
    // edição, Three/MUI/framer-motion quase nunca — o navegador reaproveita o cache.
    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            '@react-three/postprocessing',
            'three-stdlib',
          ],
          mui: ['@mui/material', '@mui/icons-material'],
          motion: [
            'framer-motion',
            '@react-spring/core',
            '@react-spring/three',
            '@react-spring/web',
          ],
        },
      },
    },
  },
})
