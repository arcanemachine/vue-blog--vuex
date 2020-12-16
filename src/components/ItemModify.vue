<template>
  <span>

    <input type="text"
           v-model="itemMessageUpdateText"
           @keyup.enter="itemUpdate"
           class="ml-1">
    <button @click="itemUpdate" class="ml-1">Update</button>
    <button @click="showUpdatePanel = false">Cancel</button>

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
      showUpdatePanel: true,
      itemMessageUpdateText: ''
    }
  },
  methods: {
    showItemMessage: function (id) {
      alert(this.$store.getters.items[id].message);
    },
    itemUpdate: function () {
      this.$store.commit
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
