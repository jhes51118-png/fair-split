import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fair-split/',  // 👈 加入這一行！注意前後都要有斜線
})
