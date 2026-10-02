import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vendors grandes separados do código do site: o conteúdo muda a cada edição,
    // as libs quase nunca — o navegador reaproveita o cache.
    //
    // IMPORTANTE: three/@react-three/*, @mui/* e framer-motion/@react-spring/*
    // importam uns aos outros (@react-spring/three importa three E framer-motion,
    // @react-three/drei importa framer-motion, etc.). Separar esses grupos em
    // chunks manuais distintos cria CICLOS entre os chunks e quebra a ordem de
    // inicialização dos módulos em produção (TDZ em const/class — "Cannot access
    // 'X' before initialization"). Por isso eles ficam juntos num único chunk
    // de vendor, eliminando os ciclos sem perder o cache.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (
            /[\\/]node_modules[\\/](three|three-stdlib|@react-three|@react-spring|framer-motion|@mui)[\\/]/.test(
              id,
            )
          ) {
            return 'vendor'
          }
          return undefined
        },
      },
    },
  },
})
