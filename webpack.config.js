const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        navbar: './src/navbar.js',
        coverImage: './src/cover-image.js',
        button: './src/button.js',
        homeMain: './src/home-main.js',
        tabLogic: './src/tab-logic.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ratatouille',
            favicon: './src/assets/images/favicon.ico'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif|ico)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|odt|ttf|eot|otf)/i,
                type: 'asset/resource'
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};