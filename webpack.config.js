// Webpack build script

const path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
};