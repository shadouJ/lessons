<template>
  <div>
    <div class="d-flex">
      <input
        type="text"
        class="form-control font-weight-bold"
        v-model="gridData.name"
        :disabled="gameStatus > 0"
      />
    </div>

    <div v-for="(row, rowIndex) in gridData.data" :key="rowIndex" class="d-flex">
      <div v-for="(data, colIndex) in row" :key="colIndex" class="d-flex">
        <input
          min="0"
          max="99"
          step="1"
          type="text"
          class="form-control"
          :class="`app--grid${index}`"
          v-model.number="gridData.data[rowIndex][colIndex]"
          @blur="handleCheckDuplicateAndMessage"
          @input="handleCheckDuplicate"
          @keypress="handleSetNumber"
          :disabled="gameStatus > 0"
          :style=" {
          background: noStyle ? '' : multo.indexOf(gridData.data[rowIndex][colIndex]) !== -1 ? '#B7E1CD' : (multiplicationList.indexOf(gridData.data[rowIndex][colIndex]) !== -1 ? 'yellow' : '')
        }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { checkMulto, checkDuplicate } from "./utils/utils";
export default {
  props: ["gridData", "gameStatus", "multiplicationList", "noStyle", "index"],
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
      let { charCode } = e;
      if (!((charCode >= 48 && charCode <= 57) || charCode === 44)) {
        e.preventDefault();
      }
      if (e.target.value.length >= 2) {
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
.app--grid1 {
  background-color: #fbe5e8;
}
.app--grid2 {
  background-color: #ddd;
}
.app--grid3 {
  background-color: #fffcc2;
}
</style>
