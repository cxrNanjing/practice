<template>
  <div>
    <el-button type="primary" @click="add" :disabled="isOk">+1</el-button>
    <el-button type="primary" @click="sub" :disabled="isOk">-1</el-button>
    <el-button type="primary" @click="jshu" :disabled="isOk">奇数+1</el-button>
    <el-button type="primary" @click="jian" :disabled="isOk"
      >间隔一秒+1</el-button
    >

    <p>{{ $store.state.count }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      isOk: false,
    };
  },
  mounted() {
    console.log(this);
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["add", "sub", "jshu", "jian"]),
    // add() {
    //   this.$store.dispatch("add");
    // },
    // sub() {
    //   this.$store.dispatch("sub");
    // },
    // jshu() {
    //   this.$store.dispatch("jshu");
    // },
    // async jian() {
    //   this.isOk = true;
    //   // this.$store.dispatch("jian", this.isOk).then((res) => {
    //   //   this.isOk = false;
    //   // });
    //   await this.$store.dispatch("jian");
    //   this.isOk = false;
    // },
  },
};
</script>

<style scoped>
</style>
