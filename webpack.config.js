var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './main.js',
    output: {
        filename: process.env.NODE_ENV === 'production' ? 'build.[hash].js' : 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项 只适合开发阶段
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        // color: true,
        historyApiFallback: true,
        // inline: false,
        hot: true
    }
}
