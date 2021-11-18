<template>
  <div>
    <ul>
      <li @mouseenter="isShow = true" @mouseleave="isShow = false">
        <input type="checkbox" :checked="item.isChoose" @click="updateOne" />
        {{ item.content }}
        <button v-show="isShow" @click="delOne">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      isShow: false,
    };
  },
  props: ["item", "updateOneState", "index", "deleteOne"],
  methods: {
    updateOne() {
      this.updateOneState(this.index);
    },
    delOne() {
      this.deleteOne(this.index);
    },
  },
};
</script>

<style scoped>
</style>
