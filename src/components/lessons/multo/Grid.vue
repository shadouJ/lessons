<template>
  <div>
    <div class="d-flex">
      <input type="text" class="form-control" v-model="gridData.name" :disabled="gameStatus > 0" />
    </div>

    <div v-for="(row, rowIndex) in gridData.data" :key="rowIndex" class="d-flex">
      <div v-for="(data, colIndex) in row" :key="colIndex" class="d-flex">
        <input
          min="0"
          max="99"
          step="1"
          type="number"
          class="form-control"
          v-model.number="gridData.data[rowIndex][colIndex]"
          @blur="handleCheckDuplicateAndMessage"
          @input="handleCheckDuplicate"
          @keypress="handleSetNumber"
          :disabled="gameStatus > 0"
          :style=" {
          background: noStyle ? '' : multo.indexOf(gridData.data[rowIndex][colIndex]) !== -1 ? 'red' : (multiplicationList.indexOf(gridData.data[rowIndex][colIndex]) !== -1 ? 'yellow' : '')
        }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { checkMulto, checkDuplicate } from "./utils/utils";
export default {
  props: ["gridData", "gameStatus", "multiplicationList", "noStyle"],
  computed: {
    multo() {
      return checkMulto(this.gridData, this.multiplicationList);
    }
  },
  methods: {
    handleCheckDuplicate(e) {
      if (checkDuplicate(this.gridData.data)) {
        this.$emit("duplicateNumber", e.target.value);
      } else {
        this.$emit("duplicatenumber", null);
      }
    },
    handleCheckDuplicateAndMessage(e) {
      if (checkDuplicate(this.gridData.data)) {
        e.target.select();
        this.$emit("duplicateNumber", e.target.value);
        this.$emit("showMessage", `Duplicate ${e.target.value}`);
      } else {
        this.$emit("duplicateNumber", null);
        this.$emit("showMessage", "");
      }
    },
    handleSetNumber(e) {
      if (e.charCode === 101 || e.charCode === 45 || e.target.value >= 10) {
        // console.log("not number");
        e.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
input {
  padding: 0.2rem !important;
  border-radius: 0% !important;
  margin: 0.1rem;
  text-align: center;
}
</style>
