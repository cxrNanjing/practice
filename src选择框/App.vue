<template>
  <div id="app">
    <full-in @add="add"></full-in>
    <Show
      :deleteOne="deleteOne"
      :title="title"
      :updateOneState="updateOneState"
    ></Show>
    <Result
      :title="title"
      :checkAll="checkAll"
      @clearHasCheck="clearHasCheck"
    ></Result>
  </div>
</template>

<script>
import FullIn from "components/FullIn";
import Show from "components/Show";
import Result from "components/Result";

export default {
  name: "App",
  components: {
    FullIn,
    Show,
    Result,
  },
  data() {
    return {
      // title: [
      //   { id: 1, content: "dsdrdf", isChoose: true },
      //   { id: 2, content: "dsdhdf", isChoose: false },
      //   { id: 3, content: "dsfggf", isChoose: true },
      // ],
      title: JSON.parse(localStorage.getItem("TITLE")) || []
    };
  },
  watch: {
    title: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("TITLE", JSON.stringify(this.title));
      },
    },
  },
  methods: {
    add(val) {
      this.title.unshift(val);
    },
    updateOneState(index) {
      this.title[index].isChoose = !this.title[index].isChoose;
    },
    deleteOne(index) {
      this.title.splice(index, 1);
    },
    checkAll(val) {
      this.title.forEach((item) => (item.isChoose = val));
    },
    clearHasCheck() {
      this.title = this.title.filter((item) => !item.isChoose);
    },
  },
};
</script>

<style>
</style>
