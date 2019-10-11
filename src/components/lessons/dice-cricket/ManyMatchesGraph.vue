<template>
  <div style="position: relative;">
    <div style="position: absolute; z-index: 100; right: 8%; top: 2%;">
      <input type="checkbox" id="check-tail" v-model="isCheckTail">
      <label for="check-tail">Check to show tail</label>&nbsp;&nbsp;
      <br>
      <span v-if="isCheckTail && tail!==null" class="font-weight-bold">{{ tail }}% in the tail</span>
      <span
        v-if="isCheckTail && tail===null"
        class="badge badge-danger"
      >Click on the graph to fill tail</span>
    </div>
    <div class="app--graph">
      <div
        v-for="(item, index) in graphData"
        :key="index"
        class="app--graph-bar-wrapper"
        :style="{width: 1/unitWidth*100+'%' }"
        @click="handleShowTail"
        ref="graph-bar-wrapper"
        :data-item="item"
        :data-index="index"
      >
        <div
          class="app--graph-bar"
          ref="graph-bar"
          :style="{ 
					height: item*heightUnit+'px'
				}"
          :data-item="item"
          :data-index="index"
        ></div>
        <div class="app--graph-mark app--graph-mark-min" v-if="(index+1)*10===minimum">
          <i class="fas fa-caret-up"></i>
        </div>
        <div class="app--graph-mark app--graph-mark-max" v-if="(index+1)*10===maximum">
          <i class="fas fa-caret-up"></i>
        </div>
        <div class="app--graph-mark app--graph-mark-mean" v-if="(index+1)*10===mean">
          <i class="fas fa-caret-up"></i>
        </div>
        <div class="app--graph-mark app--graph-mark-median" v-if="(index+1)*10===median">
          <i class="fas fa-caret-up"></i>
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <span class="badge badge-light">The interval width is 10</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gameData", "graphData", "heightUnit", "gamePlayedNumber"],
  data: function() {
    return {
      unitWidth: 50, // 50 means Graph is divided into 50 parts evenly
      tail: null,
      isCheckTail: false
    };
  },
  watch: {
    isCheckTail(value) {
      if (value) {
        this.tail = null;
      }
    }
  },
  watch: {
    isCheckTail(value) {
      // console.log(value);
      if (value === false) {
        for (let i = 0; i < this.graphData.length; i++) {
          this.$refs["graph-bar"][i].removeAttribute("data-filled");
        }
      }
    }
  },
  computed: {
    minimum() {
      return Math.ceil(this.gameData[0] / 10) * 10;
    },
    maximum() {
      return Math.ceil(this.gameData[this.gameData.length - 1] / 10) * 10;
    },
    mean() {
      let total = 0;
      for (let i = 0; i < this.gameData.length; i++) {
        total += this.gameData[i];
      }
      let meanNumber = Number((total / this.gameData.length).toFixed(1));
      return Math.ceil(meanNumber / 10) * 10;
    },
    median() {
      let middle = this.gameData.length / 2;
      let inMiddle = this.gameData.length % 2;
      let medianNumber =
        inMiddle === 0
          ? Number(
              ((this.gameData[middle - 1] + this.gameData[middle]) / 2).toFixed(
                1
              )
            )
          : Number(this.gameData[Math.floor(middle)].toFixed(1));
      return Math.ceil(medianNumber / 10) * 10;
    }
    // unit() {
    // 	return 10;
    // }
    // graphArray() {
    // 	if(this.gameData.length === 0) {
    // 		let reGraphArray = new Array(this.unitWidth);
    // 		for(let i = 0; i<this.unitWidth; i++) {	// Initiazlie graphArray with an array of 50 items and each item has value 0
    // 			reGraphArray[i] = 0;
    // 		}
    // 		return graphArray;
    // 	}

    // }
  },
  methods: {
    handleShowTail(e) {
      if (!this.isCheckTail) {
        return;
      }
      let count = Number(e.target.getAttribute("data-item"));
      let index = Number(e.target.getAttribute("data-index"));
      // console.log(this.$refs['graph-bar']);
      // console.log('tail number', this.gamePlayedNumber*2 );
      for (let i = index + 1; i < this.graphData.length; i++) {
        count += this.graphData[i];
        // console.log(this.$refs['graph-bar'][i]);
      }
      for (let i = 0; i < this.graphData.length; i++) {
        if (i < index) {
          this.$refs["graph-bar"][i].removeAttribute("data-filled");
        } else {
          this.$refs["graph-bar"][i].setAttribute("data-filled", "1");
        }
      }
      // for(let i = index; i<this.graphData.length; i++) {
      // }
      // for(let i = index-1; i>=0; i--) {
      // }
      // console.log(count);
      this.tail = Number(
        ((count / (this.gamePlayedNumber * 2)) * 100).toFixed(2)
      );
    }
  },
  created() {}
};
</script>

<style scoped>
.app--graph {
  border: 1px solid #000;
  min-height: 450px;
  display: flex;
  align-items: flex-end;
}
.app--graph-bar-wrapper {
  min-height: 450px;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.app--graph-bar {
  width: 100%;
  background-color: red;
  border: 1px solid #000;
  border-bottom: none;
  position: relative;
}
.app--graph-bar[data-filled="1"] {
  background-color: yellow;
}
.app--graph-mark {
  position: absolute;
  width: 10%;
  height: 10px;
  bottom: -10px;
}
.app--graph-mark i {
  transform: translate(-20%, -50%);
}
.app--graph-mark-min i {
  color: blue;
}
.app--graph-mark-max i {
  color: blue;
}
.app--graph-mark-mean i {
  color: red;
}
.app--graph-mark-median i {
  color: green;
}
</style>
