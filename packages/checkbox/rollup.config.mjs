import {
  babel
} from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import css from "@modular-css/rollup";
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
      }),
      css(),
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
      css(),
    ],
    output: {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  }
]