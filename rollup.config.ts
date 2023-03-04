import { readFileSync } from 'fs'
import { defineConfig } from 'rollup'
import ts from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'index.ts',
  output: [
    {
      file: 'lib/index.cjs',
      format: 'cjs',
      exports: 'default',
      preferConst: true,

      // https://nodejs.org/api/esm.html#esm_commonjs_namespaces
      interop: 'default',

      // Extract license header
      // @ts-ignore
      banner: () => readFileSync('index.ts', 'utf8').match(/^\/{4,}[^]+?\/{4,}/)[0],
    },
    {
      file: 'lib/index.js',
      format: 'esm',
      exports: 'default',
      preferConst: true,

      // https://nodejs.org/api/esm.html#esm_commonjs_namespaces
      interop: 'default',

      // Extract license header
      // @ts-ignore
      banner: () => readFileSync('index.ts', 'utf8').match(/^\/{4,}[^]+?\/{4,}/)[0],
    }
  ],
  external: () => true,
  plugins: [
    ts()
  ]
})
