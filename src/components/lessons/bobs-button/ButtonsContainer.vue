<template>
  <div class="app--buttons-container" style="position: relative">
    <app-button
      v-for="button in buttonsArr"
      :key="button.number"
      :style="{left: `${button.x}%`, top: `${button.y}%`, position: 'absolute'}"
    ></app-button>
  </div>
</template>

<script>
import Button from "./Button";
import { pickNumber } from "./utils";
export default {
  components: {
    appButton: Button
  },
  props: ["countersNumber"],
  data: function() {
    return {
      buttonsArr: []
    };
  },
  watch: {
    countersNumber(value, prevValue) {
      if (value === 0 && prevValue > 0) {
        this.buttonsArr = [];
      }
      if (value > 0 && !prevValue) {
        let number = 1;
        while (number <= this.countersNumber) {
          this.buttonsArr.push({
            number,
            x: pickNumber(5, 85),
            y: pickNumber(5, 85)
          });
          number++;
        }
      }

      if (value < prevValue) {
        this.buttonsArr.splice(0, prevValue - value);
      }
    }
  }
};
</script>

<style scoped>
.app--buttons-container {
  min-height: 400px;
  border: 1px solid #ccc;
}
</style>