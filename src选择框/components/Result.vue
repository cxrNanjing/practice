<template>
  <div>
    <input type="checkbox" v-model="isAll" />已完成{{ getHasChecked }}/全部{{
      getAll
    }}
    <button @click="clearHasCheck">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {};
  },
  props: ["title", "checkAll"],
  computed: {
    getAll() {
      return this.title.length;
    },
    getHasChecked() {
      return this.title.reduce((pre, cur) => {
        if (cur.isChoose) {
          pre += 1;
        }
        return pre;
      }, 0);
    },
    isAll: {
      get() {
        return this.getAll === this.getHasChecked && this.getAll > 0;
      },
      set(val) {
        this.checkAll(val);
      },
    },
  },
  methods: {
    clearHasCheck(){
      this.$emit("clearHasCheck")
    }
  }
};
</script>

<style scoped>
</style>
