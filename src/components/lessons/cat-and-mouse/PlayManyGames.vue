<template>
  <div>
    <app-play-many-games-app
      v-if="trialNumber"
      :rule="rule"
      :currentGameboardIndex="currentGameboardIndex"
      :trialNumber="trialNumber"
    ></app-play-many-games-app>
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
  props: ["rule", "currentGameboardIndex"],
  data: function() {
    return {
      trialNumber: null
    };
  }
};
</script>

<style scoped>
</style>
