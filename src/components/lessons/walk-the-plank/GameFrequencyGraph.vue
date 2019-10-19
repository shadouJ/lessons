<template>
  <div class="app--graph-container">
    <div class="app--graph">
      <div
        class="app--graph-data app--graph-graph"
        :style="{minHeight: minHeight ? minHeight+'px' : 250+'px' }"
      >
        <div
          v-for="(freq, index) in frequency"
          :key="index"
          class="app--graph-bar app--graph-graph-bar"
          :class="{'app--graph-bar-last': index==19}"
          :style="{height: freq*unit+'px'}"
        ></div>
      </div>
      <div class="app--graph-data app--graph-frequency">
        <div class="app--graph-mark badge badge-primary">Frequency</div>
        <div
          v-for="(freq, index) in frequency"
          :key="index"
          class="app--graph-bar app--graph-frequency-bar"
        >{{ freq }}</div>
      </div>
      <div class="app--graph-data app--graph-moves">
        <div class="app--graph-mark badge badge-primary">#Moves</div>
        <div
          v-for="(move, index) in moves"
          :key="index"
          class="app--graph-bar app--graph-moves-bar"
        >{{ move }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["frequency", "moves", "unit", "minHeight"]
};
</script>

<style scoped>
/* .app--graph-container {

} */
.app--graph-mark {
  position: absolute;
  left: -7%;
}
.app--graph {
  width: 80%;
  margin: 0 auto;
}
.app--graph-data {
  display: flex;
  position: relative;
}
.app--graph-graph {
  min-height: 250px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  align-items: flex-end;
}
/* .app--graph-frequency {

}
.app--graph-moves {

} */
.app--graph-bar {
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app--graph-graph-bar {
  background-color: blue;
  border: 1px solid #ccc;
}
.app--graph-bar-last {
  background-color: red;
}
@media only screen and (max-width: 992px) {
  .app--graph-mark {
    left: -12%;
  }
}
@media only screen and (max-width: 768px) {
  .app--graph-mark {
    left: -18%;
  }
}
</style>
