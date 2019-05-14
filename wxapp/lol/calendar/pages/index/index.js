Page({
  data: {
    value: '2019-05014',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    lastMonth: 'lastMonth',
    nextMonth: 'nextMonth',
    selectVal: ''
  },
  select(e) {
    this.setData({
      selectVal: e.detail
    })
  }
})