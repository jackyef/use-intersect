import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';

export default {
  input: {
    index: 'src/index.js',
  },
  output: {
    name: 'useIntersect.js',
    format: 'cjs',
    dir: 'dist',
  },

  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ],
};