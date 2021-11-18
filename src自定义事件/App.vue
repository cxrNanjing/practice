<template>
  <div id="app">
    <!-- <Add :addMsg="add"></Add> -->
    <!-- <Add @addMsg="add"></Add> -->
    <Add ref="pp"></Add>
    <Show :title="title" :delMsg="del"></Show>
  </div>
</template>

<script>
import Add from "components/Add";
import Show from "components/Show";

export default {
  name: "App",
  components: {
    Add,
    Show,
  },
  mounted(){
    this.$refs.pp.$on("addMsg",this.add)
  },
  data() {
    return {
      title: [
        { name: "杨幂", msg: "nihai" },
        { name: "张i", msg: "nihai" },
        { name: "黄第三方", msg: "的" },
      ],
    };
  },
  methods: {
    add(val) {
      this.title.unshift(val);
    },
    del(index) {
      this.title.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
