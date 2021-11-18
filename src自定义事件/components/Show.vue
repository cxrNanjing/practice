<template>
  <div>
    <ul>
      <li v-for="(item,index) in title" :key="index">
        <div>
          {{item.name}}说：
          <button @click="del(index)">删除</button>  
        </div>
        <div>{{item.msg}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {};
  },
  props: ['title',"delMsg"],
  methods: {
    del(index) {
      this.delMsg(index)
    }
  },
};
</script>

<style scoped>
</style>
