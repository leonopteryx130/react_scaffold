const path = require('path')

module.exports = {
    entry: {
        path: path.resolve(process.cwd(), "src/index")
    },
    output: {
        filename: 'static/js/index.js',
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                    ],
                },
            }],
        },]
    }
}