const path = require('path');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'Mouseover',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: {
        vue: 'commonjs vue'
    }
};