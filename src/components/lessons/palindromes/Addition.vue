<template>
  <div class="d-flex justify-content-center align-items-center mt-3">
    <label class="mr-2">Addition #</label>
    <div class="app--addition-input">{{ additionNumber > 0 ? additionNumber : ''}}</div>
  </div>
</template>

<script>
export default {
  props: ["additionNumber"]
};
</script>

<style scoped>
.app--addition-input {
  width: 85px;
  height: 40px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>