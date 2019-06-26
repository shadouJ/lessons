<template>
  <div>
    <app-angle-est :maxDegree="360"></app-angle-est>
  </div>
</template>

<script>
import AngleEst from './AngleEst.vue';

export default {
  components: {
    appAngleEst: AngleEst
  }
}
</script>
