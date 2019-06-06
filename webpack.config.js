const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/scripts/'),
        filename: 'main.min.js',
        publicPath: '/src'
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['vue-style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
