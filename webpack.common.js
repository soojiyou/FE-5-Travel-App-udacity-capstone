const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack'); // to access build-in plugins
const path = require('path');

const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // entry: {
    //     index: './src/client/views/page-index/main.js',
    //     trips: './src/client/views/page-trips/main.js',
    // },
    // output: {
    //     filename: '[name].bundle.js',
    //     path: path.resolve(__dirname, 'dist'),
    //     assetModuleFilename: 'img/[name][ext]',
    // },

    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env'],
    //                     plugins: ['@babel/transform-runtime'],
    //                 },
    //             },
    //         },
    //         {
    //             test: /\.(png|jpg)$/i,
    //             type: 'asset/resource',
    //             generator: {
    //                 // filename: 'img/[name][ext]',
    //             },
    //         },
    //     ],
    // },
    // plugins: [
    //     /**
    //     index.js is injected in index.html, achieved by creating the entry
    //     point and referencing it below using inject: true & chunks: ['index'].
    //     */
    //     new HtmlWebpackPlugin({
    //         template: './src/client/views/page-index/main.html',
    //         filename: 'index.html',
    //         inject: true,
    //         chunks: ['index'],
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: './src/client/views/page-trips/main.html',
    //         filename: 'trips.html',
    //         inject: true,
    //         chunks: ['trips'],
    //     }),
    //     new WorkboxPlugin.GenerateSW({
    //         clientsClaim: true,
    //         skipWaiting: true,
    //     }),
    // ],
};