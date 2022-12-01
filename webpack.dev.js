const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//////
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebPackPlugin = require('terser-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    // entry: './src/client/index.js',
    optimization: {
        minimizer: [new TerserWebPackPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/api': 'http://localhost:3100',
        },
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:3100',
        //     },
        // },

        //contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        // overlay: {
        //     warnings: true,
        //     errors: true,
        // },
        client: {
            overlay: true,
        },
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3100,
    },
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // }
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
})
