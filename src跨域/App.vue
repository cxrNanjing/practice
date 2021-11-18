<template>
  <div>
    <Search></Search>
    <Main></Main>
  </div>
</template>

<script>
import Search from 'components/Search'
import Main from 'components/Main'
export default {
  name:'App',
  data(){
   return {

   }
  },
  components: {
    Search,
    Main
  }
}
</script>

<style scoped>

</style>
