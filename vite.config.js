import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import SetEnvByCommandArg, { getCommandArgv  } from 'vite-plugin-env-command';
import { viteStaticCopy } from "vite-plugin-static-copy";
import Components from 'unplugin-vue-components/vite'
import { IduxResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  plugins: [
    vue(), 
    viteMockServe({
      mockPath: 'mock',
      localEnabled: getCommandArgv() === 'dev',
      ignore: /_util\.ts|_interface\.ts/
    }),
    SetEnvByCommandArg({
      key: 'APP_ENV'
    }),
    // 支持图标资源的动态加载
    viteStaticCopy({
      targets: [
        {
          src: "./node_modules/@idux/components/icon/assets/*.svg",
          dest: "idux-icons",
        },
      ],
    }),
    Components({
      // 可以通过指定 `importStyle` 来按需加载 css 或 less 代码, 也支持不同的主题
      // 别忘了修改 idux.ts 中的样式导入代码
      resolvers: [IduxResolver({ importStyle: 'css', importStyleTheme: 'default' })],
    }),
  ],
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
