module.exports = {
  //入口，要进行处理的实例（js）
  entry: './src/page/index/index.js',
  //出口
  output: {
    //输出到哪个目录
    path: './asset/dev/',
    //静态资源引用路径
    publication: '/asset/dev',
    //实例最终输出的名字
    filename: 'test.js'
  }
};
