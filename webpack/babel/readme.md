生产线 Webpack 代码生产工艺 全面定义了生产开发流程  工作流 Work Flow

- html + css + js =
develoment 开发阶段 工作执行一部分
    html template {{}}
    css  stylus
    js   es6,7,8,9=>es5
最后代码运行的env

- js
  babel 
  试用最新的技术来开发， babel 编译成es5  试用最新的技术写 babel 将js编译成 es5 所有平台都运行

- babel-core 核心的转译库
  npm run build "babel ...."  脚本文件
  babel-cli 由这个执行脚本 
  //babel-preset-env babel 预编译的规则 按照当前环境
  babel-preset-env .babelrc
  {
      "presets":["env"]
  }
  build
  dev

- preset 预处理
    env 搞不定 安装插件

- webpack 是一切工作流的主宰
  webpack --mode development
  /src 开发目录
  /dist

- 开发时   写代码  development  代码可读性  dev 本地
- 上线时 production  代码要压缩 混淆 build
-  测试 test 局域网
  


  npm init -y //node模块初始化
  npm install -g yarn //安装全局
  yarn --version //版本
  yarn add babel-core //安装库
  yarn add babel-core babel-cli babel-preset-env  命令行
  npm run 运行脚本的命令
  npm run build 编译要执行的文件  babel index.js -o babel-compiled.js

   .babelrc 是配置文件

    yarn global add babel-core babel-cli  全局安装

   yarn add babel-plugin-transform-object-rest-spread 展开

   yarn add eslint

     "eslint":"", 代码检测工具 风格
      

      yarn add webpack webpack-cli webpack-dev-server
      yarn add webpack 
      npm run build   多了个 发布上线的 dist文件夹

      yarn global add webpack webpack-cli