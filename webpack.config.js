/**
 * Created by chiao on 10/18/2016.
 */

module.exports = {
    // 入口
    entry: {
        main: './src/index.js',
        vendors: ['vue', 'vue-router', 'vue-resource']
    },
    // 输出
    output: {
        path: './dist/',
        //资源路径根据需要可以更改CDN
        publicPath: './dist/',
        //带hash值的入口js名称
        filename: '[name].js',
        //带hash的路由文件
        chunkFilename: '[name].chunk.js'

    }
};
