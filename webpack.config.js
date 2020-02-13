const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            // {
            //     test: require.resolve('index.js'),
            //     use: 'imports-loader?this=>window'
            // },
            {
                test: require.resolve('globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'shimming'
        }),
        new CleanWebpackPlugin({}),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
}