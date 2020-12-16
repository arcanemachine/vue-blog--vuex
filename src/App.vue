<template>
  <div id="app">
  <h1 style="text-align: center;">Vue Items</h1>

    <p>
      <label for="new-item-input">New item:</label>
      <input type="text"
             v-model="itemCreateMessageText"
             @keyup.enter="itemCreate"
             class="ml-1">
      <button @click="itemCreate" class="ml-1">Add item</button>
    </p>

    <ul v-if="$store.getters.items.length" style="list-style-type: none;">
      <item-detail v-for="item in $store.getters.items" :item="item" :key="item.id"></item-detail>
    </ul>

  </div>
</template>

<script>

import ItemDetail from './components/ItemDetail.vue'

import 'animate.css'

export default {
  name: 'App',
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
      // debugger; // eslint-disable-line
      this.$store.commit('itemCreate', this.itemCreateMessageText);
      this.itemCreateMessageText = '';
    },
  }
}
</script>

<style>

.ml-1 {
  margin-left: 0.5em;
}

.ml-2 {
  margin-left: 1em;
}

.fade-enter-active .fade-leave-active {
    transition: opacity 1s;
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
