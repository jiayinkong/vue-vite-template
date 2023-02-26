import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    https: false,
    port: 3000,
    // 监听所有地址
    host: '0.0.0.0',
    open: true,
    cors: true,
    // 自定义代理规则
    proxy: {}
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'ESNext',
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false
  }
})
