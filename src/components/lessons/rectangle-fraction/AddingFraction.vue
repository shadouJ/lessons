<template>
  <div class="container mt-3 mb-5">
    <h3 class="text-center text-success mb-4">Show The Fraction</h3>

    <div style="display: flex; flex-direction: row">
      <div>
        <table>
          <tr>
            <td>
              <h6 class="text-success">
                <b id="error2"
                  >Please enter the number of rows, columns to start (2-12)</b
                >
              </h6>
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                name="Reset"
                @click="reset()"
                class="btn btn-outline-success"
                id="resetBt"
              >
                Reset
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="row">
      <div align="center" style="width: 40%;position: center">
        <div>
          <div style="margin: 5px;">
            <p id="change" class="chain-text"></p>
            <p>Click on rows, columns or cells to show</p>
          </div>

          <div class="row" style="margin-left: 40%">
            <div width="40%">
              <b
                ><p style="margin:0;border-bottom: #0f0f0f solid">
                  {{ numeratorOne }}
                </p></b
              >
              <b
                ><p
                  v-if="denominatorOne == 1"
                  style="margin: 0;border-top: #0f0f0f solid"
                >
                  {{ denominatorOne + 1 }}
                </p>
                <p v-else style="margin: 0;border-top: #0f0f0f solid">
                  {{ denominatorOne }}
                </p></b
              >
            </div>
            <div style="width: 3%"></div>
            <div>
              &nbsp;
              <b><p style="color: #0f0f0f">+</p></b>
            </div>
            <div style="width: 3%"></div>
            <div>
              <b
                ><p style="margin:0;border-bottom: #0f0f0f solid">
                  {{ numeratorTwo }}
                </p></b
              >
              <b
                ><p
                  v-if="denominatorTwo == 1"
                  style="margin: 0;border-top: #0f0f0f solid"
                >
                  {{ denominatorTwo + 1 }}
                </p>
                <p v-else style="margin: 0;border-top: #0f0f0f solid">
                  {{ denominatorTwo }}
                </p></b
              >
            </div>
          </div>
        </div>
        <div style="width: 20%"></div>
      </div>

      <div style="width: 60%; margin-top: 17px">
        <div class="instructionLabel" v-if="!isSet">
          <p>
            Please enter your grid size
          </p>
          <p class="chain-text">
            Enter rows:
            <input
              id="rows"
              v-model.number="length"
              style=" width: 50px"
              class="inputLabel"
            />
          </p>
          <p class="chain-text">
            Enter columns:
            <input
              id="columns"
              v-model.number="width"
              style=" width: 50px"
              class="inputLabel"
            />
          </p>
          <table>
            <tr>
              <td>
                <button
                  id="ok"
                  @click="createTable()"
                  class="btn btn-outline-success"
                >
                  OK
                </button>
              </td>
              <td>
                <p id="error" style="color: red">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </td>
            </tr>
          </table>
        </div>

        <table v-if="isSet" id="table1" style="border: #0f0f0f solid;">
          <tbody id="tbody1">
            <tr v-for="i in length + 2">
              <td
                v-for="j in width + 2"
                @click="change($event, i, j)"
                v-bind:style="
                  j == 1 || i == 1 || j == width + 2 || i == length + 2
                    ? 'height: 2vw; width: 2vw;background: #F7F7F7'
                    : 'height: 2.5vw; width: 2.5vw; border: 1px solid #0f0f0f; color: #0f0f0f;'
                "
              ></td>
            </tr>
          </tbody>
        </table>
        <div style="height: 20px"></div>
        <div style="text-align: left">
          <table>
            <tr>
              <td>
                <b v-if="isSet" id="number" style="text-align: left">
                  Total number of cells =
                  <input v-model="cells" id="res" style="width:50px;" />
                </b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>

              <td>
                <button
                  id="finalOk"
                  v-if="isFinal1"
                  @click="checkRes()"
                  class="btn btn-outline-success"
                >
                  OK
                </button>
                <button
                  id="finalOk1"
                  v-if="isFinal2"
                  @click="checkRes1()"
                  class="btn btn-outline-success"
                >
                  OK
                </button>
              </td>
              <td>
                <p id="error1" style="color: red">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      denominatorOne: Math.round(Math.random() * 10) + 1,
      denominatorTwo: Math.round(Math.random() * 10) + 1,
      width: null,
      length: null,
      countClick: 0,
      isSet: false,
      isButton: false,
      cells: "",
      isFinal1: false,
      isFinal2: false
    };
  },
  computed: {
    numeratorOne: function() {
      return Math.round(Math.random() * (this.denominatorOne / 2 - 1) + 1);
    },
    numeratorTwo: function() {
      return Math.round(Math.random() * (this.denominatorTwo / 2 - 1) + 1);
    }
  },

  methods: {
    createTable() {
      if (
        this.length < 2 ||
        this.length > 12 ||
        this.width < 2 ||
        this.width > 12
      ) {
        document.getElementById("error").innerHTML =
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The rows and columns should be in 2-12";
      } else {
        this.isSet = true;
        this.isFinal1 = true;
        document.getElementById("error").innerHTML =
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
    },
    reset() {
      this.denominatorOne = Math.round(Math.random() * 10) + 1;
      this.denominatorTwo = Math.round(Math.random() * 10) + 1;
      this.width = null;
      this.length = null;
      this.countClick = 0;
      this.isSet = false;
      this.isButton = false;
      this.cells = "";
      this.isFinal1 = false;
      this.isFinal2 = false;
      document.getElementById("error").innerHTML =
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    },
    change(event, i, j) {
      var cur = event.target;
      var tab = document.getElementById("table1");
      var row = tab.rows;

      if (
        (i != 1) &
        (i != this.length + 2) &
        (j != 1) &
        (j != this.width + 2)
      ) {
        if (cur.classList == "") {
          cur.classList.add("Y");
        } else if (cur.classList == "Y") {
          cur.classList.remove("Y");
        }
      } else {
        if ((i == 1) & (j != 1)) {
          if (cur.classList == "") {
            for (let k = 1; k < this.length + 1; k++) {
              row[k].cells[j - 1].classList.add("Y");
            }
            cur.classList.add("Y");
          } else {
            for (let k = 1; k < this.length + 1; k++) {
              row[k].cells[j - 1].classList.remove("Y");
            }
            cur.classList.remove("Y");
          }
        }
        if ((j == 1) & (i != 1)) {
          if (cur.classList == "") {
            for (let k = 1; k < this.width + 1; k++) {
              row[i - 1].cells[k].classList.add("Y");
            }
            cur.classList.add("Y");
          } else {
            for (let k = 1; k < this.width + 1; k++) {
              row[i - 1].cells[k].classList.remove("Y");
            }
            cur.classList.remove("Y");
          }
        }
      }
    },
    checkRes1() {
      this.countClick=0;
      var tab = document.getElementById("table1");
      var row = tab.rows;
      for (var i = 1; i < this.length + 1; i++) {
        for (var j = 1; j < this.width + 1; j++) {
          var cell = row[i].cells;
          if (cell[j].classList == "Y") {
            this.countClick++;
          }
        }
      }
      if (this.denominatorOne == 1 && this.denominatorTwo != 1) {
        if (
          (this.numeratorTwo * (this.denominatorOne + 1) +
            this.denominatorTwo * this.numeratorOne) /
            ((this.denominatorOne + 1) * this.denominatorTwo) ==
          this.countClick / (this.length * this.width)
        ) {
          document.getElementById("number").innerHTML =
            "Your answer is correct.";
          document.getElementById("finalOk1").classList.add("hide");
        } else {
          document.getElementById("number").innerHTML =
            "Your answer is incorrect.";
        }
      }
      if (this.denominatorTwo == 1 && this.denominatorOne != 1) {
        if (
          (this.numeratorTwo * this.denominatorOne +
            (this.denominatorTwo + 1) * this.numeratorOne) /
            (this.denominatorOne * (this.denominatorTwo + 1)) ==
          this.countClick / (this.length * this.width)
        ) {
          document.getElementById("number").innerHTML =
            "Your answer is correct.";
          document.getElementById("finalOk1").classList.add("hide");
        } else {
          document.getElementById("number").innerHTML =
            "Your answer is incorrect.";
        }
      }
      if (this.denominatorTwo == 1 && this.denominatorOne == 1) {
        if (
          (this.numeratorTwo * (this.denominatorOne + 1) +
            (this.denominatorTwo + 1) * this.numeratorOne) /
            ((this.denominatorOne + 1) * (this.denominatorTwo + 1)) ==
          this.countClick / (this.length * this.width)
        ) {
          document.getElementById("number").innerHTML =
            "Your answer is correct.";
          document.getElementById("finalOk1").classList.add("hide");
        } else {
          document.getElementById("number").innerHTML =
            "Your answer is incorrect.";
        }
      }
      if (this.denominatorTwo != 1 && this.denominatorOne != 1) {
        if (
          (this.numeratorTwo * this.denominatorOne +
            this.denominatorTwo * this.numeratorOne) /
            (this.denominatorOne * this.denominatorTwo) ==
          this.countClick / (this.length * this.width)
        ) {
          document.getElementById("number").innerHTML =
            "Your answer is correct.";
          document.getElementById("finalOk1").classList.add("hide");
        } else {
          document.getElementById("number").innerHTML =
            "Your answer is incorrect.";
        }
      }
    },
    checkRes() {
      if (this.cells == this.width * this.length) {
        document.getElementById("number").innerHTML =
          "Correct! Then click the grids to show the result!";
        document.getElementById("error1").innerHTML = "";
        this.isFinal1 = false;
        this.isFinal2 = true;
      } else {
        document.getElementById("error1").innerHTML =
          "&nbsp;&nbsp;Incorrect! Please try again!";
      }
    }
  },
  name: "AddingFraction"
};
</script>

<style scoped>
.Y {
  background: #f4ffec;
}

.hide {
  width: 5vw;
  visibility: hidden;
}
.appear {
  width: 5vw;
}
</style>
