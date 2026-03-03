import { defineConfig } from 'tsdown'
import pkg from './package.json'

const isDev = process.argv.includes('--watch') || process.argv.includes('-w')
const env = isDev ? 'dev' : 'prod'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'esnext',
  outDir: 'dist',
  clean: true,
  dts: true,
  sourcemap: true,
  minify: !isDev,
  define: {
    'process.env.ENV': JSON.stringify(env),
    'process.env.PKGVERSION': JSON.stringify(pkg.version),
  },
})
