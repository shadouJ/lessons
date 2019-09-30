<template>
  <div v-if="!hasXRay">
    <div class="app--building-table">
      <div class="m-1" v-for="(oneBuilding, arrKey) in viewArray" :key="arrKey">
        <!-- one building -->
        <div v-if="oneBuilding.length===0" style="width: 40px;"></div>
        <div v-for="(number, buildingKey) in oneBuilding" :key="buildingKey">
          <app-number-block :number="number"></app-number-block>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="app--building-table">
      <div class="m-1" v-for="(oneBuilding, arrKey) in viewArrayX" :key="arrKey">
        <!-- one building -->
        <div v-if="oneBuilding.length===0" style="width: 40px;"></div>
        <div v-for="(el, buildingKey) in oneBuilding" :key="buildingKey">
          <app-number-block
            :number="el ? el.number : null"
            :hidden="el ? el.hidden : null"
            :hasXRay="hasXRay"
          ></app-number-block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberBlock from "./NumberBlock.vue";
import {
  fillArrayWithZero,
  convertArrayRowToCol,
  convertArrayByRow,
  convertArrayByEl,
  makeViewArray,
  makeViewArrayX
} from "./utils";
export default {
  components: {
    appNumberBlock: NumberBlock
  },
  props: ["buildingArray", "viewDirection", "hasXRay"],
  computed: {
    viewArray() {
      if (!this.buildingArray || this.buildingArray.length === 0) {
        return [];
      }
      switch (this.viewDirection) {
        case 1: // Front
          return makeViewArray(
            convertArrayRowToCol(
              convertArrayByRow(fillArrayWithZero(this.buildingArray))
            )
          );
        case 2: // Back
          return makeViewArray(
            convertArrayByRow(
              convertArrayRowToCol(fillArrayWithZero(this.buildingArray))
            )
          );
        case 3: // Left
          return makeViewArray(fillArrayWithZero(this.buildingArray));
        case 4: // Right
          return makeViewArray(
            convertArrayByRow(
              convertArrayByEl(fillArrayWithZero(this.buildingArray))
            )
          );
        default:
          return [];
      }
      // const viewArrayToReturn  = new Array(this.buildingArray.length);
    },
    viewArrayX() {
      if (!this.buildingArray || this.buildingArray.length === 0) {
        return [];
      }
      switch (this.viewDirection) {
        case 1: // Front
          return makeViewArrayX(
            convertArrayRowToCol(
              convertArrayByRow(fillArrayWithZero(this.buildingArray))
            )
          );
        case 2: // Back
          return makeViewArrayX(
            convertArrayByRow(
              convertArrayRowToCol(fillArrayWithZero(this.buildingArray))
            )
          );
        case 3: // Left
          return makeViewArrayX(fillArrayWithZero(this.buildingArray));
        case 4: // Right
          return makeViewArrayX(
            convertArrayByRow(
              convertArrayByEl(fillArrayWithZero(this.buildingArray))
            )
          );
        default:
          return [];
      }
    }
  }
};
</script>

<style scoped>
.app--building-table {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
</style>
