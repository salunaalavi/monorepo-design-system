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
    preserveModules: true,
    input: 'src/index.ts',
    plugins: [
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        include: ['src/**/*'],
        rootMode: 'upward'
      }),
    ],
    output: {
      dir: `dist`,
      format: 'esm'
    }
  },
  {
    preserveModules: true,
    input: 'src/index.ts',
    plugins: [
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      typescript(),
      dts(),
    ],
    output: {
      dir: `dist`,
      format: 'es'
    }
  }
]