import { defineConfig } from 'vite'
// if this gives you errors after initial npm i, try restarting IDE
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
