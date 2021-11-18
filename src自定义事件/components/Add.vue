<template>
  <div>
    <input type="text" v-model="name" /><br />
    <input type="text" v-model="msg" /><br />
    <button @click="add">提交</button>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      name: "",
      msg: "",
    };
  },
  props: ["addMsg"],
  methods: {
    add() {
      if (this.name.trim() && this.msg.trim()) {
        let obj = {
          name: this.name,
          msg: this.msg,
        };
        // this.addMsg(obj);
        this.$emit("addMsg",obj)
      } else {
        alert("为空");
      }

      this.name = "";
      this.msg = "";
    },
  },
};
</script>

<style scoped>
</style>
