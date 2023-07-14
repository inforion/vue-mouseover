// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'Mouseover',
        globals: {
            vue: 'Vue'
        }
    }, {
        file: 'dist/bundle.esm.js',
        format: 'esm'
    }],
    external: ['vue'],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript()
    ]
};