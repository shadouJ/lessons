<template>
  <div class="container">
    <app-chance-of-draw-app v-if="trialNumber" :trialNumber="trialNumber"></app-chance-of-draw-app>
    <app-enter-trials-number @acceptTrialNumber="trialNumber=$event" v-else></app-enter-trials-number>
  </div>
</template>

<script>
import EnterTrialsNumber from "../../common/EnterTrialsNumber.vue";
import ChanceOfDrawApp from "./ChanceOfDrawApp.vue";
export default {
  components: {
    appEnterTrialsNumber: EnterTrialsNumber,
    AppChanceOfDrawApp: ChanceOfDrawApp
  },
  data: function() {
    return {
      trialNumber: null
    };
  }
};
</script>
 
<style scoped>
</style>
