import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addItem(state, message) {
      let newItem = {
        id: state.items.length,
        message: message
      }
      state.items.push(newItem);
    }
  },
})
