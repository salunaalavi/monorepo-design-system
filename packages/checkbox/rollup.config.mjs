import {
  babel
} from '@rollup/plugin-babel';
import {
  terser
} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import postcss from "rollup-plugin-postcss";
import dts from 'rollup-plugin-dts';
import autoprefixer from "autoprefixer";

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
      postcss({
        plugins: [autoprefixer],
        sourceMap: true,
        extract: true,
        minimize: true,
      }),
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
      postcss({
        plugins: [autoprefixer],
        sourceMap: true,
        extract: true,
        minimize: true,
      }),
    ],
    output: {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  }
]