- 从`小程序`过渡到 `vue`
  react 技术栈  setState()  对应小程序 setData()
  vue  v-if 对应小程序 wx:if


 - new Vue({
     el:'#app', 
     data(){
         return {
             hero:'灭霸'
         }
     }

  }) MVVM 的能力
   #app的内部 是MVVM的世界 外部浏览器
   数据绑定可以实现

   组件
   Vue.component({})组件 template 是模板 要用模板字符串 
   data 数据部分

- ref MVVM 里面的 id 属性
 <audio preload ref="allAudio">
 </audio>