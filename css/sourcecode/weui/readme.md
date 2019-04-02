### stylus
1. @import 文件引入， 一个文件做一件事
有利于代码的维护及管理 多人协作
/base/reset 基础的reset任务   @import "./base/reset"

- base 核心 widget 前端插件 核心基础功能
@import 让我们可以做文件的分离和管理
多人协作，目录让我们看到了思想及野心。

variable 当时个大项目时 有大量的变量要维护
variable 目录

weui.styl 入口文件 @import 串起来各个部分
base / widget

- reset.styl
- variable
  - global.styl
  - weui-button.styl
- weui-button