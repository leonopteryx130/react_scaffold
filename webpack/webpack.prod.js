const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: "production",
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ],
})
