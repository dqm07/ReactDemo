const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/loaderFile/a.txt'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'a.txt'
  },
  mode: 'production',
  resolveLoader:{
    // 去哪些目录下寻找 Loader，有先后顺序之分
    modules: [path.resolve(__dirname, './loaders/'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ['reverse', 'uppercase']
      }
    ]  
  },
  plugins: []
}