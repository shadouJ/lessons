<template>
  <div>
    <div class="d-flex justify-content-around my-2">
      <h5
        class="text-dark font-weight-bold"
        :style="{
              visibility: gameStatus >= 0
                ? 'visible'
                : 'hidden'
            }"
      >Average number of cards {{ averageCardNumber }}</h5>
      <h5
        class="text-dark font-weight-bold"
        :style="{
              visibility: gameStatus > 0
                ? 'visible'
                : 'hidden'
            }"
      >Game {{gameNumber}} of {{trialNumber}}</h5>
    </div>
    <div>
      <h6 class="ml-2">Wins</h6>
      <div class="flex-grow-1 d-flex flex-row justify-content-around">
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[0] }}</div>
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[1] }}</div>
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[2] }}</div>
      </div>
      <div class="flex-grow-1 d-flex flex-row justify-content-around">
        <div class="border flex-grow-1 mx-4 my-1 text-right pr-2">{{ winPercent0 }}</div>
        <div class="border flex-grow-1 mx-4 my-1 text-right pr-2">{{ winPercent1 }}</div>
        <div class="border flex-grow-1 mx-4 my-1 text-right pr-2">{{ winPercent2 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "totalCardNumbers",
    "gameNumber",
    "winStats",
    "gameStatus",
    "trialNumber"
  ],
  computed: {
    averageCardNumber() {
      if (!this.gameNumber) {
        return 0;
      }
      return Number((this.totalCardNumbers / this.gameNumber).toFixed(3));
    },
    winPercent0() {
      if (!this.gameNumber) {
        return 0;
      }
      return (
        Number(((this.winStats[0] / this.gameNumber) * 100).toFixed(3)) + "%"
      );
    },
    winPercent1() {
      if (!this.gameNumber) {
        return 0;
      }
      return (
        Number(((this.winStats[1] / this.gameNumber) * 100).toFixed(3)) + "%"
      );
    },
    winPercent2() {
      if (!this.gameNumber) {
        return 0;
      }
      return (
        Number(((this.winStats[2] / this.gameNumber) * 100).toFixed(3)) + "%"
      );
    }
  }
};
</script>

<style scoped>
</style>