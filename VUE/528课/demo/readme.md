1. 大厂的代码风格都是一样的 eslint控制风格
npm run eslint
npm init -y
yarn add webpack webpack-cli webpack-dev-server -D开发阶段
yarn add babel-core babel-cli babel-preset-env -D
yarn add eslint eslint-loader -D
"babel-loader": "^7.1.4", 因为会有冲突
yarn 
webpack.config.js
src/index.js
test.js
node test 返回绝对的物理位置
PS D:\yue\js_fullStack\js\webpack\demo> node test
D:\yue\js_fullStack\js\webpack\demo
PS D:\yue\js_fullStack\js\webpack\demo> node test
D:\yue\js_fullStack\js\webpack\demo\src

端口设置

npm run start
http://localhost:1314/api/test.json

.eslintrc
 yarn add html-webpack-plugin -D
删去dist 没有编译的html是怎么出来的?

yarn add extract-text-webpack-plugin -D
yarn add css-loader style-loader file-loader -D



- eslint 是js风格 开始痛苦， 自由是建立在规范上的
__dirname 返回绝对的物理路径
项目未来发布到哪里都可以
- .eslintrc 是什么意思 : 采用一个业内的规范， 严格执行公司的
代码规范 对齐方式，声明变量，引用到eslintrc 会采用公司的规范
- webpack devserver不会生成dist目录，会将编译放在内存中 为了性能 编译在内存中拿是很快的


