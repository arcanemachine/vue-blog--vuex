import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    itemModifyIndex: undefined,
  },
  getters: {
    items (state) {
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
    itemCreate (state, message) {
      let newItem = {
        id: this.state.items.length,
        message: message
      }
      state.items.push(newItem);
    },
    itemUpdateId (state, i) {
      state.items[i].id = i;
    },
    itemUpdateMessage (state, payload) {
      let item = payload.item;
      let updatedMessage = payload.updatedMessage;
      state.items[item.id].message = updatedMessage;
    },
    itemModifyIndex(state, index) {
      state.itemModifyIndex = index;
    },
    itemRemove(state, item) {
      state.items.splice(item.id, 1);
    },
    itemsDeleteAll(state) {
      state.items = [];
    }
  },
  actions: {
    itemUpdateIds (context) {
      for (let i = 0; i < context.getters.items.length; i++) {
        context.commit('itemUpdateId', i);
      }
    },
    itemDelete (context, item) {
      context.commit('itemRemove', item);
      this.dispatch('itemUpdateIds');
    }
  }
})


