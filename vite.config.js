import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@lottiefiles/react-lottie'],
  },
};

