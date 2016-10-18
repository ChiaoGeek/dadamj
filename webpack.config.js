/**
 * Created by chiao on 10/18/2016.
 */
var path = require('path');
var webpack = require('webpack');
//用来生成入口HTML文件并把输出的静态文件夹在进来
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        main: './src/index.js',
        vendors: ['vue', 'vue-router', 'vue-resource']
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        //资源路径根据需要可以更改CDN
        publicPath: './dist/',
        //带hash值的入口js名称
        filename: '[name].js',
        //带hash的路由文件
        chunkFilename: '[name].chunk.js'

    },// 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: true
      })
    ]
};
