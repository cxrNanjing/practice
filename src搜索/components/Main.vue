<template>
  <div>
    <div v-if="isNoData">无数据</div>
    <div v-else-if="isLoading">正在搜索</div>
    <div v-else-if="isError">{{ isError }}</div>
    <div v-else>
      <ul>
        <li v-for="(item, index) in users" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      isNoData: true,
      isLoading: false,
      isError: "",
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("search", this.search);
  },
  methods: {
    async search(q) {
      this.isNoData = false;
      this.isLoading = true;
      try {
        let res = await Axios({
          url: "https://api.github.com/search/users",
          method: "get",
          params: {
            q,
          },
        });
        this.isLoading = false;
        this.users = res.data.items.map((item) => item.login);
      } catch (error) {
        this.isLoading = false;
        this.isError = error.response.data.message;
      }
  
      // .then((res) => {
      //  console.log(res);
      //   this.isLoading = false;
      //   this.users = res.data.items.map((item) => item.login);
      // })
      // .catch((err) => {
      //   console.log(err.response);
      //   this.isLoading = false;
      //   this.isError = err.response.data.message;
      // });
    },
  },
};
</script>

<style scoped>
</style>
