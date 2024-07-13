import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/WAY-OF-VICTORY-INTERNATIONAL-BIBLE-COLLEGE-MINSTRY/",
  build: {
    rollupOptions: {
      input: './src/main.jsx' // Add this line to specify your entry point
    }
  }
})
