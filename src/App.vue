<template>
  <div>
    <Left></Left>
    <Right></Right>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from "components/Left";
import Right from "components/Right";
export default {
  name: "App",
  components: {
    Left,
    Right,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
