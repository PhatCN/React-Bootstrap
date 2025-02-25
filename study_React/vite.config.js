import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //port: 5173, // Đảm bảo cổng đúng
    open: true, // Tự động mở trình duyệt khi chạy
    }
})
