import {
  babel
} from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        include: ['src/**/*'],
        rootMode: 'upward'
      })
    ],
    output: {
      file: `dist/index.js`,
      format: 'esm'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
      dts(),
    ],
    output: {
      file: `dist/d.ts`,
      format: 'es'
    }
  }
]