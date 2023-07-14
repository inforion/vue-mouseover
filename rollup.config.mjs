// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'Mouseover',
        globals: {
            vue: 'Vue',
            'merge-options': 'mergeOptions'
        }
    }, {
        file: 'dist/bundle.esm.js',
        format: 'esm'
    }],
    external: ['vue', 'merge-options'],
    plugins: [typescript()]
};