require('shelljs/global');
var webpack = require('webpack');
var path = require('path');

rm('-rf', 'dist/');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', '.json'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}