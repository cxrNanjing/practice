<template>
  <div>
    <SlotA>ssd</SlotA>
    <SlotA>ssd1</SlotA>
    <SlotA>ssd2</SlotA>
    <SlotA></SlotA>
    <SlotB :msg="msg">
      <template slot-scope="{dd}">
       <p> V{{dd}}</p>
      </template>
    </SlotB>
    <!-- <SlotB slot="b"></SlotB> -->
  </div>

</template>

<script>
import SlotA from "components/SlotA"
import SlotB from "components/SlotB"
export default {
  name:'App',
  data(){
   return {
     msg: 'I love you'
   }
  },
  components: {
    SlotA,
    SlotB,
  }
}
</script>

<style scoped>

</style>
