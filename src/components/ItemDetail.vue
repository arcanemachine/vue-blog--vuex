<template>

  <li style="margin-top: 0.5em">
    <span class="fake-link" @click="updateItemModifyIndex(item.id)">{{ item.id + 1 }}. {{ item.message }}</span>
    <transition name="fade" mode="out-in">
      <item-modify :item="item" v-if="itemModifyIndex === item.id"></item-modify>
    </transition>
  </li>

</template>

<script>
import ItemModify from './ItemModify.vue'

export default {
  name: 'ItemDetail',
  props: {
    item: Object
  },
  components: {ItemModify},
  data: function () {
    return {
      itemMessageUpdateText: ''
    }
  },
  computed: {
    itemModifyIndex: function () {
      return this.$store.getters.itemModifyIndex;
    }
  },
  methods: {
    updateItemModifyIndex: function() {
      if (this.$store.getters.itemModifyIndex === this.item.id) {
        this.$store.commit('itemModifyIndex', undefined);
      } else {
        this.$store.commit('itemModifyIndex', this.item.id);
      }
    },
    itemUpdate: function () {
      return false;
    }
  }
}
</script>

<style>

.fake-link {
  font-weight: bold;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
