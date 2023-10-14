const path = require('path')

module.exports = function(options) {
    return {
        entry: {
            path: path.resolve("src"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "/"
        },
    }
}