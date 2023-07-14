// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";

export default [{
    input: 'src/index.ts',
    output: [{
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'Mouseover'
    }, {
        file: 'dist/bundle.esm.js',
        format: 'esm'
    }],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript()
    ]
}, {
    input: 'types/index.d.ts',
    output: {
        file: 'dist/bundle.d.ts'
    },
    plugins: [dts()]
}];