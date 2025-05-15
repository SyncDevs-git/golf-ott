import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Get all HTML files under the project, excluding node_modules/dist/etc.
const htmlFiles = fg.sync('**/*.html', {
  cwd: __dirname,
  ignore: ['node_modules/**', 'dist/**'],
})

const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace(/\.html$/, '') // remove extension for naming
  entries[name] = resolve(__dirname, file)
  return entries
}, {})

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './pages')
    }
  },
  build: {
    rollupOptions: {
      input
    }
  }
})
