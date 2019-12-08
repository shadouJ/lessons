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

    <div class="d-flex">
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[0][0]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[0][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][1]"
        :disabled="gameStatus > 0"
        :style="{
          background: noStyle ? '' : addo.indexOf(gridData.data[0][1]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[0][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[0][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[0][2]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[0][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
    <div class="d-flex">
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][0]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[1][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][1]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][1]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[1][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[1][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[1][2]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[1][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
    <div class="d-flex">
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][0]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][0]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[2][0]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][1]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][1]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[2][1]) !== -1 ? 'yellow' : '')
        }"
      />
      <input
        type="text"
        min="0"
        max="99"
        step="1"
        class="form-control"
        :class="`app--grid${index}`"
        @blur="handleCheckDuplicateAndMessage"
        @input="handleCheckDuplicate"
        @keypress="handleSetNumber"
        v-model.number="gridData.data[2][2]"
        :disabled="gameStatus > 0"
        :style=" {
          background: noStyle ? '' : addo.indexOf(gridData.data[2][2]) !== -1 ? '#B7E1CD' : (additionList.indexOf(gridData.data[2][2]) !== -1 ? 'yellow' : '')
        }"
      />
    </div>
  </div>
</template>

<script>
import { checkDuplicate, checkAddo } from "./utils/utils";
export default {
  props: ["gridData", "gameStatus", "additionList", "noStyle", "index"],
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
