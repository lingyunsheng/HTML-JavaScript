Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addshow:false,
    addText:'',
    todos:[]
  },
  addInput:function(e){
    this.setData({
      addText:e.detail.value
    })

  },
  addTodo:function(e){
    // - 输入框是否有内容
    if(!this.data.addText.trim()){
      return;
    }
    let todos = this.data.todos;
    todos.push({
      id:new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    });
    this.hide.addTodoHide();
    // - todos 界面上一个 wx:for
    // setData() 重新绘制页面
    // - 当前的编单状态退出输入状态

  },
  getUserInfo: function(e) {
    // console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      // MVVM编程 响应式 状态
      hasUserInfo: true
    })
  },
  addTodoShow:function(e){
    this.setData({
      addShow:true,
    })

  },
  addTodoHide:function(e){
    this.setData({
        addShow:false
    })
  
  }
  
})