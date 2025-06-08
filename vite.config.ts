import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Todo List React',
        short_name: 'TodoList',
        description: "Manage your tasks with Todo List React!",
        id: "/",
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1976d2',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
        {
          src: "screenshot-wide.png",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide"
        },
        {
          src: "screenshot-narrow.png",
          sizes: "375x667",
          type: "image/png",
          form_factor: "narrow"
        }
      ]}
    })
  ],
})
