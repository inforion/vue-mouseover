// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';

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
        format: 'esm',
        globals: {
            vue: 'Vue'
        }
    }],
    plugins: [typescript()]
};