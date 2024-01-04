import {
  babel
} from '@rollup/plugin-babel';
import {
  terser
} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import postcss from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";
import dts from 'rollup-plugin-dts';
import autoprefixer from "autoprefixer";

export default [
  {
    input: 'src/index.ts',
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: "compressed",
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        include: ['src/**/*'],
        rootMode: 'upward'
      }),
      typescript(),
    ],
    output: {
      file: `dist/index.js`,
      format: 'esm'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: "compressed",
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        include: ['src/**/*'],
        rootMode: 'upward'
      }),
      typescript(),
      dts(),
    ],
    output: {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  }
]