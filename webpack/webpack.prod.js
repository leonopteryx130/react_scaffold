const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        publicPath: "./"
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(process.cwd(), 'public/assets'),
                    to: path.resolve(process.cwd(), 'dist/assets')
                },
                {
                    from: path.resolve(process.cwd(), 'public/fonts'),
                    to: path.resolve(process.cwd(), 'dist/fonts')
                }
            ]
        })
    ],
})
