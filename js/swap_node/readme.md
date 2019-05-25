- 无编译 不代码
 webpack 已经成为工作流程的霸主
 vue-cli
 编译过程和js 的 promise 异步
 1. 代码写在 dev src/
 2. 上现在 build dist/
 3. 启动一个web 服务器 webpack-dev-server

- webpack html template
  plugin html-webpack-plugin
- log 不在根目录下 怎么找到它呢 多写点地址 ./utils/log.js
  alias 路径的缩写 不需要去写完整路径

  resolve 去找.js ->                                  
    module 要搞定的问题用哪个来搞定 
        ->rules 
            -> .js babel-loader     yarn add babel-core babel-cli babel-preset-env -D

babel-core babel-cli babel-preset-env
babel-loader 有点兼容性问题
module
rules:[
    {
        test:/\.js$/,
        use:'babel-loader'
    }
]
resolve:{
    extensions:['.js]
}
8080 webpack-dev-server html-webpack-plugin 
template ./src/index.html

为什么 js 运行了
html+js

- webpack 一切皆可打包  打包到js里
  css 对于js来说 就是个文本
  img 对于js 打包成base64
  但是css应该独立打包
  main.js  显示是最慢的
  分开css 单独打包