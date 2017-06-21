// webpack --display-error-details 查看webpack 错误详细信息
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: process.env.NODE_ENV === 'production' ? 'build.[hash].js' : 'build.js',
        // filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项 只适合开发阶段
    module: {
        loaders: [{
            test: /\.vue$/,
            use: [
                "vue-loader"
            ]
        }, {
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
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            // "/api": "http://192.168.10.151:17000"
            "/api": {
                target: "http://192.168.10.151:17000",
                secure: false
            }
        },
        // proxy: {
        //     '/api/*': {
        //         "target": {
        //             "host": "192.168.10.151",
        //             "protocol": "http:",
        //             "port": 17000
        //         },
        //         secure: false
        //     }
        // },
        disableHostCheck: true
    }
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: __dirname + "/index.tmpl.html",
            filename: 'index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
