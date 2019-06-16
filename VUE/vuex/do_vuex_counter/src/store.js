// VUE的大型项目开发  分成两种任务
// - 组件开发工作  业务量开发
// - vuex  数据设计
//   store 独立于组件之外的  应用app的中央数据管理中心
//   公司：
//   CEO  state {count：0} 共享的状态
//   ations 日常动(工)作， 修改状态
//   修改：dispatch 派发 action('name',playload)=>action commit('mutation name')mutations=>state  修改数据
//   mutations  财务部 跟老板接触 state
//   审核对状态的修改是否和公司规定

//   组件 读操作 this.$store.state.count
//   写  actions(组件调用方法)

import Vue from 'vue';
import Vuex from 'vuex';
// this.$store new 的 vue实例   vue全局实力
Vue.use(Vuex);//（启用Vuex，可拔插的）  vue只负责 mvvm

const state = {
  count: 0
}

// 改？ 修改要关起来  要严谨
const mutations = {
  // 按我的方式来
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--
  }
}
//computers 状态的包装
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
// 组件只能跟actions交流，
// 组件不可以直接跟state修改交流
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    // 是否是奇数
    // state.count=1;  只能读
    // 将组件逻辑放到action
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 2000)
    })
  }
}

// 构建store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});



