import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gestplan/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/icons-material', '@emotion/styled', '@mui/material/Unstable_Grid2'],
  },
})
