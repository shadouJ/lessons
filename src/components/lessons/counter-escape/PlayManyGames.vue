<template>
  <div class="container">
    <app-play-game v-if="trialNumber" :numberOfGames="trialNumber" :gameRule="gameRule"></app-play-game>
    <app-enter-trials-number v-else @acceptTrialNumber="trialNumber=$event"></app-enter-trials-number>
  </div>
</template>

<script>
import EnterTrialsNumber from "../../common/EnterTrialsNumber.vue";
import PlayGame from "./PlayGame.vue";
export default {
  props: ["gameRule"],
  components: {
    appEnterTrialsNumber: EnterTrialsNumber,
    appPlayGame: PlayGame
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
