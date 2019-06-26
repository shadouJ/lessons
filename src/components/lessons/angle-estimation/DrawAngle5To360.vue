<template>
  <div>
    <app-draw-angle :maxDegree="360"></app-draw-angle>
  </div>
</template>

<script>
import DrawAngle from './DrawAngle.vue';

export default {
  components: {
    appDrawAngle: DrawAngle
  }
}
</script>
