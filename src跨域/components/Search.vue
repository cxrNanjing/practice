<template>
  <div>
    <input type="text" v-model="word">
    <button @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      word:''
    };
  },
  methods: {
    search(){
      if (this.word.trim()) {
        this.$bus.$emit("search",this.word)
      }else{
        alert('为空')
      }
      this.word=""
    }
  }
};
</script>

<style scoped>
</style>
