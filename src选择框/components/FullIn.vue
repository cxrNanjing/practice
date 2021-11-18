<template>
  <div>
    <input type="text" placeholder="请输入" v-model="msg" @keyup.enter="add" />
  </div>
</template>

<script>
export default {
  name: "FullIn",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    add() {
      if (this.msg.trim()) {
        let obj = {
          id: Date.now(),
          content: this.msg,
          isChoose: true,
        };
        this.$emit("add", obj);
      }
      this.msg = ''
    },
  },
};
</script>

<style scoped>
</style>
