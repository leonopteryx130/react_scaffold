const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(options) {
    return {
        entry: path.resolve("src")
    }
}