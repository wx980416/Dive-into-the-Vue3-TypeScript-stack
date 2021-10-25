const path = require('path'); // 导入node.js的path模块

// 导出配置信息
module.exports = {
  entry: './src/main.js', // 入口文件 main.js
  output: {
    filename: 'bundle.js', // 目标文件
    path: path.resolve(__dirname, './dist'), // 导入文件目录，使用path.resolve进行路径拼接，__dirname当前文件所在目录
  },
  module: {
    // loader 配置
    rules: [
      {
        test: /\.css$/,
        // loader: 'css-loader' // 写法1
        // use: ['css-loader'] // 写法2
        // 完整写法
        // use: [
        //   { loader: 'style-loader' },
        // ]
        // loader是从右往左，从下往上执行，最先执行的loader放下面
        // css-loader先执行
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "less-loader"
      //   ]
      // }
    ],
  },
};
