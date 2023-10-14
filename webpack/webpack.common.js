const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = function(options) {
    return {
        entry: {
            path: path.resolve("src"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "/"
        },
        plugins:[
            new CleanWebpackPlugin(),
        ],
    }
}