<template>
  <div id="app">
  <h1 style="text-align: center;">Vue Items</h1>

    <p>
      <span @click="itemsDeleteAll" class="fake-link">Clear all</span>
    </p>

    <p class="mt-4">
      <label for="new-item-input">New item:</label>
      <input type="text"
             v-model="itemCreateMessageText"
             @keyup.enter="itemCreate"
             class="ml-1">
      <button @click="itemCreate" class="ml-1">Add item</button>
    </p>

    <ul v-if="$store.getters.items.length" class="mt-3" style="list-style-type: none;">
      <transition-group name="fade" mode="out-in">
        <item-detail v-for="item in $store.getters.items" :item="item" :key="item.id"></item-detail>
      </transition-group>
    </ul>

  </div>
</template>

<script>

import ItemDetail from './components/ItemDetail.vue'
import store from './store'
import 'animate.css'

export default {
  name: 'App',
  store,
  components: {
    ItemDetail
  },
  data: function () {
    return {
      itemCreateMessageText: '',
    }
  },
  methods: {
    itemCreate: function () {
      this.$store.commit('itemCreate', this.itemCreateMessageText);
      this.itemCreateMessageText = '';
      this.$store.commit('itemModifyIndex', undefined);
    },
    itemsDeleteAll: function () {
      this.$store.commit('itemsDeleteAll');
    }
  }
}
</script>

<style>

.fake-link {
  font-weight: bold;
  cursor: pointer;
}

.underline {
  text-decoration: underline;
}

.mt-1 {
  margin-top: 0.5em;
}

.mt-2 {
  margin-top: 1em;
}
.mt-3 {
  margin-top: 1.5em;
}
.mt-4 {
  margin-top: 2em;
}

.ml-1 {
  margin-left: 0.5em;
}

.ml-2 {
  margin-left: 1em;
}

.fade-enter-active .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter .fade-leave-to {
  opacity: 0;
}

body {
  background-color: #FFF;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 2rem;
}

</style>
