import { svgSprite } from './plugins/svg-sprite'

import ssl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import _ from 'lodash'
import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode'
import { tsAlias } from 'vite-plugin-ts-alias'

import { parse } from 'node:path'

export default defineConfig({
  appType: 'custom',
  base: '/',
  build: {
    outDir: './dist',
    assetsDir: './',
    rollupOptions: {
      input: './src/entry.client.tsx',
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  },
  css: {
    modules: {
      localsConvention: (className, generatedClassName, fileName) => {
        const file = parse(fileName).name.replace(/\..*/, '')

        const name = _.upperFirst(_.camelCase(className)).replace(
          new RegExp(`^${file}`, 'g'),
          '',
        )
        return `$${file}${name}`
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 443,
  },
  plugins: [
    tsAlias(),
    svgSprite(),
    react(),
    ssl(),
    process.argv.includes('--qr') && qrcode(),
  ],
})
