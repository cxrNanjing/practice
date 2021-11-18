<template>
  <div>
    <Item 
      :deleteOne="deleteOne"
      :updateOneState ="updateOneState"
      :index ="index"
      v-for="(item,index) in title"
      :key="item.id" 
      :item="item" ></Item>
  </div>
</template>

<script>
import Item from "components/Item.vue";
export default {
  name: "Show",
  data() {
    return {};
  },
  props: ["title","updateOneState","deleteOne"],
  components: {
    Item,
  },
};
</script>

<style scoped>
</style>
