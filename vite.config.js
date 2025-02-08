import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import legacyPlugin from '@vitejs/plugin-legacy'

// 打包库
const buildLib = false

// https://vitejs.dev/config/
// 用于打包发布库
const libBuildConfig = defineConfig({
  plugins: [vue(), vueJsx()],
  entry: './publish',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      $: fileURLToPath(new URL('./publish', import.meta.url))
    }
  }
})

// 用于打包网页项目
const webBuildConfig = defineConfig({
  base: './',
  build: {
    target: 'es2015'
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    legacyPlugin({
      targets: ['chrome 66'],
      // additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      $: fileURLToPath(new URL('./publish', import.meta.url))
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 8088
  }
})

export default buildLib ? libBuildConfig : webBuildConfig
