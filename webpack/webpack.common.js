const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        path: path.resolve(process.cwd(), "src/index")
    },
    output: {
        filename: 'static/js/index.js',
        path: path.resolve(process.cwd(), "dist"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'], // Assuming that your files are inside the src dir
        alias: {
            '@': path.resolve(process.cwd(), 'src')
        }
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
        },{
            test: /\.(s[ac]ss|css)$/i,
            use: [
                // 将 JS 字符串生成为 style 节点s
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                {
                    loader: 'css-loader',
                    // 启动css module并配置
                    options: {
                        importLoaders: 2, // postcss-loader + sass-loader
                        modules: {
                            auto: /\.(s[ac]ss|css)$/i,
                            localIdentName: '[local]_[hash:base64:10]',
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, '../postcss.config.js'),
                        },
                    },
                },
                // 将 Sass 编译成 CSS
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass-embedded'),
                    }
                },
            ],
        },{
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/images/[name][ext]'
            }
        },]
    },
    plugins:[
        //webpack-dev-serve开启的时候也需要配置，因此这个插件在开发和打包时候都需要用到
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }), 
    ],
}