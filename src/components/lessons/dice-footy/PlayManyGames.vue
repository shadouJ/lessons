<template>
  <div class="container">
    <app-play-many-games-app v-if="trialNumber" :trialNumber="trialNumber"></app-play-many-games-app>
    <app-enter-trials-number v-else @acceptTrialNumber="trialNumber=$event"></app-enter-trials-number>
  </div>
</template>

<script>
import EnterTrialsNumber from "../../common/EnterTrialsNumber.vue";
import PlayManyGamesApp from "./PlayManyGamesApp.vue";
export default {
  components: {
    appEnterTrialsNumber: EnterTrialsNumber,
    appPlayManyGamesApp: PlayManyGamesApp
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
