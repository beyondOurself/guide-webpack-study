var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
    },
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
          title: 'Development'
        })
    ],
    output: {
        filename: 'webpack-numbers.js',
        library:'webpackNumbers',
        libraryTarget: 'var',
        path: path.resolve(__dirname, 'dist')
    }
}