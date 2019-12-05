<template>
  <div>
    <app-whole-and-part-app v-if="trialNumber" :trialNumber="trialNumber"></app-whole-and-part-app>
    <app-enter-trials-number v-else @acceptTrialNumber="trialNumber=$event"></app-enter-trials-number>
  </div>
</template>

<script>
import EnterTrialsNumber from "../../common/EnterTrialsNumber.vue";
import WholeAndPartApp from "./WholeAndPartApp.vue";
export default {
  components: {
    appEnterTrialsNumber: EnterTrialsNumber,
    appWholeAndPartApp: WholeAndPartApp
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
