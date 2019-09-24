<template>
  <div id="designDart">
    <div class="container mt-4 mb-5">
      <div class="row">
        <!-- LEFT - GRID -->
        <div class="col-12 col-md-5 app--lesson-left">
          <div>
            <p>Enter a number (1-16)</p>
            <div class="game-area">
              <input class="item" v-for="tile in 9" :key="tile" v-model.number="nums[tile-1]">
            </div>
            <input class="btn" type="button" value="Reset" v-on:click="reset">
            <input class="btn" type="button" value="Save" v-on:click="saveGridValues">
          </div>
        </div>

        <!-- RIGHT - TREE -->
        <div class="col-12 col-md-7 app--lesson-right">
          <div class="tree-container">
            <svg>
              <!-- 1st level -->
              <line :key="l1" v-for="(l1,i) in x1node" :x1="xroot" :y1="yroot[0]" :x2="x1node[i]" :y2="ynode[0]"></line>
              <text :key="t1" v-for="(t1,i) in x1node" :x="x1node[i]" :y="ytext[0]">{{ nodes[i] }}</text>
              
              <!-- 2nd level -->
              <!-- left -->
              <line :key="l2L" v-for="(l2L,i) in 3" :x1="x1node[0]" :y1="yroot[1]" :x2="x2node[i]" :y2="ynode[1]"></line>
              <text :key="t2L" v-for="(t2L,i) in 3" :x="x2node[i]" :y="ytext[1]">{{ nodes[i+3] }}</text>
              <!-- middle -->
              <line :key="l2M" v-for="(l2M,i) in 3" :x1="x1node[1]" :y1="yroot[1]" :x2="x2node[i+3]" :y2="ynode[1]"></line>
              <text :key="t2M" v-for="(t2M,i) in 3" :x="x2node[i+3]" :y="ytext[1]">{{ nodes[i+6] }}</text>
              <!-- right -->
              <line :key="l2R" v-for="(l2R,i) in 3" :x1="x1node[2]" :y1="yroot[1]" :x2="x2node[i+6]" :y2="ynode[1]"></line>
              <text :key="t2R" v-for="(t2R,i) in 3" :x="x2node[i+6]" :y="ytext[1]">{{ nodes[i+9] }}</text>
             
              <!-- 3rd level -->
              <!-- left -->
              <line :key="l3L1" v-for="(l3L1,i) in 3" :x1="x2node[0]" :y1="yroot[2]" :x2="x3node[i]" :y2="ynode[2]"></line>
              <text :key="t3L1" v-for="(t3L1,i) in 3" :x="x3node[i]" :y="ytext[2]">{{ nodes[i+12] }}</text>
              <line :key="l3L2" v-for="(l3L2,i) in 3" :x1="x2node[1]" :y1="yroot[2]" :x2="x3node[i+3]" :y2="ynode[2]"></line>
              <text :key="t3L2" v-for="(t3L2,i) in 3" :x="x3node[i+3]" :y="ytext[2]">{{ nodes[i+15] }}</text>
              <line :key="l3L3" v-for="(l3L3,i) in 3" :x1="x2node[2]" :y1="yroot[2]" :x2="x3node[i+6]" :y2="ynode[2]"></line>
              <text :key="t3L3" v-for="(t3L3,i) in 3" :x="x3node[i+6]" :y="ytext[2]">{{ nodes[i+18] }}</text>
              <!-- middle -->
              <line :key="l3M1" v-for="(l3M1,i) in 3" :x1="x2node[3]" :y1="yroot[2]" :x2="x3node[i+9]" :y2="ynode[2]"></line>
              <text :key="t3M1" v-for="(t3M1,i) in 3" :x="x3node[i+9]" :y="ytext[2]">{{ nodes[i+21] }}</text>
              <line :key="l3M2" v-for="(l3M2,i) in 3" :x1="x2node[4]" :y1="yroot[2]" :x2="x3node[i+12]" :y2="ynode[2]"></line>
              <text :key="t3M2" v-for="(t3M2,i) in 3" :x="x3node[i+12]" :y="ytext[2]">{{ nodes[i+24] }}</text>              
              <line :key="l3M3" v-for="(l3M3,i) in 3" :x1="x2node[5]" :y1="yroot[2]" :x2="x3node[i+15]" :y2="ynode[2]"></line>
              <text :key="t3M3" v-for="(t3M3,i) in 3" :x="x3node[i+15]" :y="ytext[2]">{{ nodes[i+27] }}</text>
              <!-- right -->
              <line :key="l3R1" v-for="(l3R1,i) in 3" :x1="x2node[6]" :y1="yroot[2]" :x2="x3node[i+18]" :y2="ynode[2]"></line>
              <text :key="t3R1" v-for="(t3R1,i) in 3" :x="x3node[i+18]" :y="ytext[2]">{{ nodes[i+30] }}</text>
              <line :key="l3R2" v-for="(l3R2,i) in 3" :x1="x2node[7]" :y1="yroot[2]" :x2="x3node[i+21]" :y2="ynode[2]"></line>
              <text :key="t3R2" v-for="(t3R2,i) in 3" :x="x3node[i+21]" :y="ytext[2]">{{ nodes[i+33] }}</text>
              <line :key="l3R3" v-for="(l3R3,i) in 3" :x1="x2node[8]" :y1="yroot[2]" :x2="x3node[i+24]" :y2="ynode[2]"></line>
              <text :key="t3R3" v-for="(t3R3,i) in 3" :x="x3node[i+24]" :y="ytext[2]">{{ nodes[i+36] }}</text>
            </svg>
            <div class="sums-div">
              <div class="sums" v-for="sum in 27" :key="sum">{{ sums[sum-1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "designDart",
  props: ["textSums", "btn","tiles"],
  data: function() {
    return {
      nums: [],
      sums: [],
      //y-values
      yroot: ["10%","35%","65%"],
      ynode: ["20%","50%","80%"],
      //root node
      xroot: "50%",
      //1st level
      x1node: ["20%", "50%", "80%"],
      //2nd level
      x2node: ["10%", "20%", "30%", "40%", "50%", "60%", "70%","80%", "90%"],
      //3rd level
      x3node: ["7%", "10%","13%", "17%", "20%","23%", "27%", "30%","33%", 
      "37%", "40%","43%", "47%", "50%","53%", "57%", "60%","63%", 
      "67%", "70%","73%", "80%","77%", "83%", "87%", "90%","93%"],
      //text
      ytext: ["30%", "60%", "90%"]
    };
  },
  methods: {
    /* reset grid to default values */
    reset() {
      this.nums = [9, 11, 8, 11, 8, 10, 8, 10, 9];
    },

    /* save new grid values for next gameplay */
    saveGridValues() {
      // check if valid grid inputs, exit function otherwise
      for (var i = 0; i < 9; i++)
        if (!(this.nums[i] >= 1 && this.nums[i] <= 16)) return;
      // update values 
      for (var j = 0; j < 9; j++) 
        this.tiles[i] = this.nums[i];
    }
  },
  computed: {
    /* corresponding node to tile value */
    nodes() {
      var nodes = [
        this.nums[0],this.nums[1],this.nums[2],
        this.nums[3],this.nums[1],this.nums[2],
        this.nums[0],this.nums[4],this.nums[2],
        this.nums[0],this.nums[1],this.nums[5],
        this.nums[6],this.nums[1],this.nums[2],
        this.nums[3],this.nums[4],this.nums[2],
        this.nums[3],this.nums[1],this.nums[5],
        this.nums[3],this.nums[4],this.nums[2],
        this.nums[0],this.nums[7],this.nums[2],
        this.nums[0],this.nums[4],this.nums[5],
        this.nums[3],this.nums[1],this.nums[5],
        this.nums[0],this.nums[4],this.nums[5],
        this.nums[0],this.nums[1],this.nums[8]
      ];
      return nodes;
    }
  },
  watch: {
    /* watcher for when updated grid input */
    nums() {
      var node1 = 0; // variables for array index of nodes to sum
      var node2 = 0;
      var node3 = 0;
      var index = 0; // index for sums array

      // watch for num between 1-16, set to null if invalid
      for (var n = 0; n < this.nums.length; n++) {
        if (!Number.isInteger(this.nums[n])) this.nums[n] = null;
        if (!(this.nums[n] >= 1 && this.nums[n] <= 16)) this.nums[n] = null;
      }

      // each loop for each level in tree
      for (var i = 0; i <= 2; i++) {
        node1 = i;
        for (var j = 0; j <= 2; j++) {
          node2 = 3 * (i + 1) + j;
          for (var k = 0; k <= 2; k++) {
            node3 = 9 * i + 3 * (j + 1) + 9 + k;
            // only update sum text if new tile value inputted (not when left blank)
            if ( (this.nodes[node1] >= 1 && this.nodes[node1] <= 16) && (this.nodes[node2] >= 1 && this.nodes[node2] <= 16) && (this.nodes[node3] >= 1 && this.nodes[node3] <= 16) ) {
              var result1 = this.nodes[node1];
              var result2 = this.nodes[node2] * 2;
              var result3 = this.nodes[node3] * 3;
              this.sums[index] = result1 + result2 + result3;
            }
            index++;
          }
        }
      }
    }
  }
};
</script>


<style scoped>
p {
  font-size: 20px;
  font-weight: bold;
  color: orange;
}

.game-area {
  display: grid;
  grid-template-rows: 85px 85px 85px;
  grid-template-columns: 85px 85px 85px;
  grid-gap: 4px;
}

.item {
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
  text-align: center;
}

.btn {
  width: 121.5px;
  font-size: 12px;
  margin: 5px;
  margin-top: 10px;
}

.tree-container {
  margin: auto;
  width: 100%;
  height: 100%;
}

svg {
  width: 100%;
  height: 87%;
}

line {
  stroke: black;
  stroke-width: 2;
}

text {
  font-size: 1.5vw;
  text-anchor: middle;
  margin: auto;
}

.sums-div {
  display: flex;
  justify-content: center;
  text-align: center;
}

.sums {
  border: 1px solid orange;
  margin: auto;
  width: 2vw;
  height: 2vw;
  font-size: 1.1vw;
}
</style>
