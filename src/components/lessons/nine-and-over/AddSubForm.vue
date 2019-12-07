<template>
  <div class="app--form pl-2">
    <form>
      <div class="form-group ml-2">
        <label class="col-form-label">Starting number</label>
        <input type="number" class="form-control" v-model="startingNumber" />
      </div>
      <div class="form-group ml-2">
        <label class="col-form-label">Target number</label>
        <input type="number" class="form-control" v-model="targetNumber" />
      </div>
      <div class="text-center">
        <div
          class="badge badge-danger"
          v-if="startingNumber && startingNumber > maxNumber"
        >Start is outside range</div>
        <div
          class="badge badge-danger"
          v-else-if="targetNumber && targetNumber > maxNumber"
        >Target is outside range</div>
        <div
          class="badge badge-danger"
          v-else-if="direction > 0 && startingNumber && targetNumber && Number(targetNumber) <= Number(startingNumber)"
        >
          Start is greater than or
          <br />equal to the target
        </div>
        <div
          class="badge badge-danger"
          v-else-if="direction < 0 && startingNumber && targetNumber && Number(targetNumber) >= Number(startingNumber)"
        >
          Start is less than or
          <br />equal to the target
        </div>
      </div>

      <div class="text-center mt-3">
        <button
          class="btn btn-outline-success"
          @click="handleSetNumber"
          :disabled="!isValidInput"
        >OK</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["totalDigit", "direction"],
  // direction:  1 - Add, -1 - Subtract
  data: function() {
    return {
      startingNumber: null,
      targetNumber: null,
      errorMessage: null
    };
  },
  computed: {
    maxNumber() {
      if (!this.totalDigit) return 0;
      return Math.pow(10, this.totalDigit) - 1;
    },
    isValidInput() {
      let startingNumber = Number(this.startingNumber);
      let targetNumber = Number(this.targetNumber);
      if (Number(this.direction) > 0) {
        // Addition
        if (
          this.startingNumber &&
          this.targetNumber &&
          startingNumber >= 0 &&
          startingNumber < this.maxNumber &&
          targetNumber >= 0 &&
          targetNumber < this.maxNumber &&
          startingNumber < targetNumber
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        // Subtraction
        if (
          this.startingNumber &&
          this.targetNumber &&
          startingNumber >= 0 &&
          startingNumber < this.maxNumber &&
          targetNumber >= 0 &&
          targetNumber < this.maxNumber &&
          startingNumber > targetNumber
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  methods: {
    handleSetNumber(e) {
      e.preventDefault();
      this.$emit("setNumber", {
        startingNumber: Number(this.startingNumber),
        targetNumber: Number(this.targetNumber)
      });
    }
  }
};
</script>

<style scoped>
</style>
