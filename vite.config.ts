import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         registerType: 'autoUpdate',
         injectRegister: 'script',
         manifest: {
            name: 'to-do-list',
            short_name: 'tdl',
            description: 'Simple to do list.',
            theme_color: '#F2F1F7',
         }
      })
   ],
})
