//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   date: [
     {
      id: 'd22',
      time: '05月15日'
    },
    {
      id: 'd23',
      time: '5月13日'
    },
    {
      id: 'd24',
      time: '5月24日'
    },
    {
      id: 'd25',
      time: '6月7日'
    }
  ],
  result: [{
    id: 'd22',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
    leftgrade: 119,
    leftname: '开拓者',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    rightgrade: 120,
    rightname: '勇士',
  },
  {
    id: 'd23',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
    leftgrade: 90,
    leftname: '76人',
    rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
    rightgrade: 92,
    rightname: '猛龙',
  },
  {
    id: 'd24',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    leftgrade: 118,
    leftname: '勇士',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
    rightgrade: 113,
    rightname: '火箭',
  },
  {
    id: 'd25',
    leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    leftgrade: 95,
    leftname: '勇士',
    rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
    rightgrade: 89,
    rightname: '雄鹿',
  }],

  current: 0,
  agenda: {}
  },
  turnLeft() {
    // es6 解构 var a = [1, 2, 3]
    // const [aa, bb, cc] = a;
    let { current } = this.data;
    if(current <= 0) return false;
    current--;
    this.setData({
      current
    })
    this.handleAgendaDate();
  },
  turnRight() {
    let {current, date} = this.data;
    if(current >= date.length-1) return;
    current++;
    this.setData({
      current
    })
    this.handleAgendaDate();
  },
  handleAgendaDate() {
    // date: 时间的数组  result: 比赛结果数组  id
    let { current, result, date} = this.data;
    let { id } = date[current];
    // 数组api
    const agenda = result.find(item => id === item.id);
    if(agenda) {
      this.setData({
        agenda
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.handleAgendaDate();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})