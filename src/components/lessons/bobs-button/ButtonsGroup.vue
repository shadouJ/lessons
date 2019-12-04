<template>
  <div class="app--buttons-group">
    <app-button v-for="number in buttonsNumber" :key="number" class="float-left"></app-button>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    appButton: Button
  },
  props: ["buttonsNumber"]
};
</script>

<style scoped>
</style>