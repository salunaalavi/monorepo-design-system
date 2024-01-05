import {
  babel
} from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from "rollup-plugin-postcss";
import dts from 'rollup-plugin-dts';

export default [
  {
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
      dir: `./dist`,
      preserveModules: true,
      preserveModulesRoot: "src",
      format: 'esm'
    }
  },
  {
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
      dir: `./dist`,
      format: 'es'
    }
  }
]