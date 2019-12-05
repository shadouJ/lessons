<template>
  <div>
    <div class="d-flex">
      <input type="text" class="form-control" v-model="gridData.name" :disabled="gameStatus > 0" />
    </div>

    <div class="d-flex">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[0][0]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[0][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][1]"
        :disabled="gameStatus > 0"
        :style="{
          background: noStyle ? '' : addo.indexOf(gridData.data[0][1]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[0][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[0][2]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[0][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
    <div class="d-flex">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][0]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[1][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][1]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][1]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[1][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][2]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[1][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
    <div class="d-flex">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][0]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[2][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][1]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][1]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[2][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][2]) !== -1 ? 'red' : (additionList.indexOf(gridData.data[2][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
  </div>
</template>

<script>
import { checkDuplicate, checkAddo } from "./utils/utils";
export default {
  props: ["gridData", "gameStatus", "additionList", "noStyle"],
  computed: {
    addo() {
      return checkAddo(this.gridData, this.additionList);
    }
  },
  methods: {
    handleCheckDuplicate(e) {
      if (checkDuplicate(this.gridData.data)) {
        this.$emit("duplicateNumber", e.target.value);
      } else {
        this.$emit("duplicateNumber", null);
      }
    },
    handleCheckDuplicateAndMessage(e) {
      if (checkDuplicate(this.gridData.data)) {
        e.target.select();
        // console.log("duplicate" + e.target.value);
        this.$emit("duplicateNumber", e.target.value);
        this.$emit("showMessage", `Duplicate ${e.target.value}`);
      } else {
        this.$emit("duplicateNumber", null);
        this.$emit("showMessage", "");
      }
    },
    handleSetNumber(e) {
      // console.log(e.target.value);
      /** Can't input '-', 'e' and number more than 99 */
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
