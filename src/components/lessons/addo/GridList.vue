<template>
  <div class="d-flex flex-column flex-sm-row">
    <app-grid></app-grid>
    <app-grid></app-grid>
    <app-grid></app-grid>
  </div>
</template>

<script>
import Grid from "./Grid.vue";
export default {
  components: {
    appGrid: Grid
  }
};
</script>

<style scoped>
</style>