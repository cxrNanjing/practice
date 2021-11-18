<template>
  <div>
    <slot :dd="msg">
      {{msg}}
    </slot>
    <slot>dsfdfdsf</slot>
  </div>
</template>

<script>

export default {

  name: "SlotB",
  props: ["msg"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
