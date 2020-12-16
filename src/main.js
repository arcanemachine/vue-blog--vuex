import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [],
    itemModifyIndex: undefined,
    itemTotal: 0
  },
  getters: {
    items(state) {
      return state.items;
    },
    item(state, id) {
      return state.items[id];
    },
    itemModifyIndex(state) {
      return state.itemModifyIndex;
    }
  },
  mutations: {
    itemCreate(state, message) {
      let newItem = {
        id: this.state.items.length,
        message: message
      }
      state.items.push(newItem);
    },
    itemModifyIndex(state, itemId) {
      this.state.itemModifyIndex = itemId;
    }
  },
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
