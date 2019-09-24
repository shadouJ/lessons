<template>
  <div id="doctorDart">
    <div class="container mt-4 mb-5">
      <div class="row">
        <!-- LEFT -->
        <div class="col-12 col-md-6 app--lesson-left">
          <!-- GAMEBOARD DIV -->
          <div class="game-container">
            <div class="game-board">
              <div v-for="tile in tileItems" :key="tile.tileId" v-on:click="onItemClick(tile.tileId,tile.itemNum)" class="item" :class="[tile.class]" v-if="tile.isUnpicked && tile.row == 1" :style="{visibility:tile.isVisible}">{{ tile.itemNum }}</div>
              <div v-for="tile in tileItems" :key="tile.tileId" v-on:click="onItemClick(tile.tileId,tile.itemNum)" class="item" :class="[tile.class]" v-if="tile.isUnpicked && tile.row == 2" :style="{visibility:tile.isVisible}">{{ tile.itemNum }}</div>
              <div v-for="tile in tileItems" :key="tile.tileId" v-on:click="onItemClick(tile.tileId,tile.itemNum)" class="item" :class="[tile.class]" v-if="tile.isUnpicked && tile.row == 3" :style="{visibility:tile.isVisible}">{{ tile.itemNum }}</div>
            </div>

            <!-- BUTTONS -->
            <div>
              <input class="btn" type="button" value="Reset" v-on:click="onResetClicked" v-bind:disabled="resetDisabled">
              <input class="btn" type="button" value="New Target" v-on:click="onNewClicked">
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-12 col-md-6 app--lesson-right">
          <!-- INPUT TARGET DIV -->
          <div class="input-container" v-show="showTargetInput">
            <label class="instruction-label">Enter target score (1-99)</label>
            <div class="input-div">
              <input class="input-number" v-model="inputNumber" v-bind:disabled="errDisabled">
              <input type="button" class="ok-btn" value="OK" v-on:click="onOKClicked" v-bind:disabled="errDisabled">
            </div>
            <label class="error-label" v-bind:style="{display: errDisplay}">{{ errText }}</label>
          </div>

          <!-- RESULT DIV -->
          <div class="result-container" v-bind:style="{display: resultDisplay}">
            <span>Can you score {{ target }}?</span>
            <span>Attempt {{ attempt }}</span>
            <div class="result-div">
              <div class="result-line">
                <span>1 x 1st</span>
                <div class="select-number">{{ currentScores[0] }}</div>
                <div class="total-number">{{ currentTotals[0] }}</div>
              </div>
              <div class="result-line">
                <span>2 x 2nd</span>
                <div class="select-number">{{ currentScores[1] }}</div>
                <div class="total-number">{{ currentTotals[1] }}</div>
              </div>
              <div class="result-line">
                <span>3 x 3rd</span>
                <div class="select-number">{{ currentScores[2] }}</div>
                <div class="total-number">{{ currentTotals[2] }}</div>
              </div>
              <div class="score">
                <span>Score</span>
                <div class="total-number">{{ score }}</div>
              </div>
            </div>
          </div>
        </div>
        <p class="result-text" v-bind:style="{visibility:resultTextVisible}">{{ resultText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctorDart",
  props: ["item", "tiles"],
  data: function() {
    return {
      attempt: 0,
      score: "",
      target: 0,
      start: false,

      //onOKClicked()
      inputNumber: "",
      errDisplay: "none",
      errText: "Please enter a number.",
      errDisabled: false,
      resultDisplay: "none",
      showTargetInput: true,

      //onItemClick()
      pickedIds: [],
      tileItems: [
        { tileId: 0, isUnpicked: true, itemNum: 9, class: "item-9", row: 1, isVisible: "visible" },
        { tileId: 1, isUnpicked: true,  itemNum: 11, class: "item-11", row: 1, isVisible: "visible" },
        { tileId: 2, isUnpicked: true, itemNum: 8, class: "item-8", row: 1, isVisible: "visible" },
        { tileId: 3, isUnpicked: true, itemNum: 11, class: "item-11", row: 2, isVisible: "visible" },
        { tileId: 4, isUnpicked: true, itemNum: 8, class: "item-8", row: 2, isVisible: "visible" },
        { tileId: 5, isUnpicked: true, itemNum: 10, class: "item-10", row: 2, isVisible: "visible" },
        { tileId: 6, isUnpicked: true, itemNum: 8, class: "item-8", row: 3, isVisible: "visible" },
        { tileId: 7, isUnpicked: true, itemNum: 10, class: "item-10", row: 3, isVisible: "visible" },
        { tileId: 8, isUnpicked: true, itemNum: 9, class: "item-9", row: 3, isVisible: "visible" }
      ],

      //results div
      clicksCount: 0,
      currentScores: [],
      currentTotals: [],
      resultText: "",
      newBtnVisible: "hidden",
      resultTextVisible: "hidden",

      // reset & new buttons
      resetDisabled: true
    };
  },
  created() {
    for (var i = 0; i < 9; i++) 
      this.tileItems[i].itemNum = this.tiles[i];
  },

  methods: {
    /* INPUT TARGET */
    onOKClicked: function() {
      //Validate input
      if ( !(this.inputNumber >= 1 && this.inputNumber <= 99) || this.inputNumber === "" ) {
        this.errDisplay = "inline-block";
        this.errText = "Please enter a number from 1 to 99.";
        return;
      }

      this.errDisplay = "none";

      this.target = this.inputNumber;
      //Disable input and ok button, enable result area
      this.errDisabled = true;
      this.resultDisplay = "flex";
      this.resetDisabled = false;

      //Display question and target score
      this.attempt++;

      this.start = true;
      this.showTargetInput = false;
      return;
    },

    /* CLICK TILE */
    onItemClick: function(id, val) {
      //Check if pick id is valid
      if (this.pickedIds.length >= 3 || !this.start) return; //if already 3 tiles clicked
      if (id > 2) {
        //if above tileId not in pickedIds
        if (!this.pickedIds.includes(id - 3)) return;
      }

      //add item to array and make hide
      this.pickedIds.push(this.tileItems[id].tileId);
      this.tileItems[id].isVisible = "hidden";

      //add tile score to scores and totals arrays
      this.currentScores.push(val);
      this.currentTotals.push(this.pickedIds.length * val);

      //calculate total score
      let temp = 0;
      for (let i = 0; i < 3; i++) temp += this.currentTotals[i];

      //stop gameplay when 3 tiles clicked
      if (this.pickedIds.length >= 3) this.start = false;

      //Check result
      if (this.start === false && temp !== 0) {
        this.score = temp;
        if (this.score > this.target)
          this.resultText = "The tally is too big. Click reset button for a new attempt!";
        else if (this.score < this.target)
          this.resultText = "The tally is too small. Click reset button for a new attempt!";
        else {
          this.resultText = "Congratulations! Target reached.";
          this.resetDisabled = true;

          //ANIMATION on win
          let i = 0;
          let count = 0;
          let intervalId = setInterval(() => {
            this.pickedIds.forEach((id, index) => {
              if (index === i) this.tileItems[id].isVisible = "visible";
              else this.tileItems[id].isVisible = "hidden";
            });
            i++;
            if (i >= 3) i = 0;
            count++;
            if (count > 15) {
              clearInterval(intervalId);
              this.pickedIds.forEach(id => {
                this.tileItems[id].isVisible = "hidden";
              });
            }
          }, 200);
        }
        this.resultTextVisible = "visible";
      }
      return;
    },

    /* RESET ATTEMPT & NEW GAME */
    resetLayout: function() {
      for (let i = 0; i <= 8; i++) {
        this.tileItems[i].isVisible = "visible";
        this.resultTextDisplay = "hidden";
        this.newBtnVisible = "hidden";
        this.currentScores = [];
        this.currentTotals = [];
      }
      this.resultText = "";
    },

    onResetClicked: function() {
      this.score = "";
      this.pickedIds = [];
      this.start = true;
      this.attempt++;
      this.resetLayout();
    },

    onNewClicked: function() {
      this.score = "";
      this.target = 0;
      this.pickedIds = [];
      this.start = false;
      this.attempt = 0;
      this.resetLayout();
      this.errDisabled = false;
      this.resultDisplay = "none";
      this.resetDisabled = true;
      this.showTargetInput = true;
      this.inputNumber = "";
    }
  }
};
</script>


<style scoped>
.input-container {
  width: 90%;
  padding: 10px;
  margin-top: 15px;
}

.instruction-label {
  font-size: 22px;
  color: #27ae60;
}

.error-label {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #d35400;
}

.input-number {
  font-size: 20px;
  font-weight: bold;
}

.input-div {
  display: flex;
  flex-direction: row;
}

.ok-btn {
  width: 60px;
  font-size: 12px;
  margin-left: 10px;
}

.game-container {
  padding: 10px;
}

.game-board {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 5px;
}

.item {
  font-size: 40px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
}

.item:active {
  box-shadow: 0 1px grey;
}

.item-8 {
  background-color: #bdc3c7;
}

.item-9 {
  background-color: #3498db;
}

.item-10 {
  background-color: #9b59b6;
}

.item-11 {
  background-color: #1abc9c;
}

.btn {
  width: 145px;
  font-size: 12px;
  margin: 5px;
  margin-top: 10px;
}

.result-text {
  margin: auto;
  margin-top: 15px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #d35400;
}

.result-container {
  width: 70%;
  padding: 10px;
  margin-top: 15px;
  flex-direction: column;
  font-size: 25px;
  font-weight: 500;
  color: #2980b9;
}

.result-div {
  font-size: 24px;
  font-weight: 500;
  color: #34495e;
}

.result-line,
.score {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.select-number,
.total-number {
  width: 90px;
  height: 40px;
  border: 1px solid gray;
  margin-left: 10px;
  padding-right: 10px;
  text-align: right;
}

.select-number {
  color: #d35400;
}

.total-number {
  color: #2980b9;
}
</style>
