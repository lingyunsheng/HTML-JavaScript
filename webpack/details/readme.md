
devDependencies 开发
Dependencies 所有阶段
webpacck 打包工具 构建应用


打包之前 development
打包之后 build （有了dist目录） 不再需要webpack 部署到服务器上

   "dev":"webpack --mode development",
    "build":"webpack --mode production",
    "start":"webpack-dev-server --mode development "

webpack-dev-server  
webpack打包之后 将打包后的内容 在浏览器中8080端口启动 是前端开发的标准 
在一个端口打开web-server
实时编译 watch HMR 

网页Web-Serevr打包过程是这样的

index.js 是入口  打包成为 main.js
index.html 首页的模板 main.js 会由webpack-dev-server 自动的放在index的最后面 script 引入


yarn add webpack
yarn add webpack-cli webpack-dev-server -D
yarn add babel-core babel-cli babel-preset-env -D
 npm run dev
 node dist/main.js
 npm run build
 node dist/main.js

 yarn add css-loader style-loader