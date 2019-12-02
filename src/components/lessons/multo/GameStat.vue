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
      >Card {{ cardNumber }}</h5>
      <h5
        class="text-dark font-weight-bold"
        :style="{
              visibility: gameStatus > 0
                ? 'visible'
                : 'hidden'
            }"
      >Game {{gameNumber}}</h5>
    </div>
    <div v-if="gameNumber >= 1">
      <h6 class="ml-2">Wins</h6>
      <div class="flex-grow-1 d-flex flex-row justify-content-around">
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[0] }}</div>
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[1] }}</div>
        <div class="border flex-fill mx-4 my-1 text-right pr-2">{{ winStats[2] }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardNumber", "gameNumber", "winStats", "gameStatus"]
};
</script>

<style scoped>
</style>