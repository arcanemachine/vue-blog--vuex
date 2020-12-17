<template>
  <span>

    <transition name="fade" mode="out-in">
    <span v-if="!showUpdatePanel && !showDeletePanel" key="if" @click="showUpdatePanel = !showUpdatePanel; showDeletePanel = false" class="ml-1 underline fake-link">Update</span>
    <span v-if="showUpdatePanel" key="else" class="ml-1">Enter a new message
      <input type="text"
             id="'update-item-input"
             v-model="itemUpdateMessageText"
             @keyup.enter="itemUpdateMessage"
             @keyup.escape="showUpdatePanel = !showUpdatePanel"
             class="ml-1">
      <button @click="itemUpdateMessage" class="ml-1">Update</button>
      <button @click="showUpdatePanel = !showUpdatePanel" class="ml-1">Cancel</button>
    </span>
    </transition>

    <transition name="fade" mode="out-in">
    <span v-if="!showDeletePanel && !showUpdatePanel" key="if"
          @click="showDeletePanel = !showDeletePanel; showUpdatePanel = false"
          class="ml-1 underline fake-link">Delete</span>
    <span v-if="showDeletePanel" key="else" class="ml-1">Are you sure you want to delete this item?
      <button @click="itemDelete" class="ml-1">Delete</button>
      <button @click="showDeletePanel = !showDeletePanel" class="ml-1">Cancel</button>
    </span>
    </transition>

  </span>
</template>

<script>

export default {
  name: 'ItemModify',
  props: {
    item: Object
  },
  data: function () {
    return {
      showUpdatePanel: false,
      showDeletePanel: false,
      itemUpdateMessageText: ''
    }
  },
  methods: {
    itemUpdateMessage: function () {
      let args = {
        item: this.item,
        updatedMessage: this.itemUpdateMessageText
      }
      this.$store.commit('itemUpdateMessage', args);
      this.itemUpdateMessageText = '';
      this.showUpdatePanel = false;
      this.showDeletePanel = false;
      this.$store.commit('itemModifyIndex', undefined);
    },
    itemDelete: function() {
      this.$store.dispatch('itemDelete', this.item);
      this.$store.commit('itemModifyIndex', undefined);
    }
  }
}
</script>

<style>

.fake-link {
  font-weight: bold;
  cursor: pointer;
}

</style>
