<template>
  <div class="container mt-3 mb-5">
    <h3 class="text-center text-success mb-4">Show The Fraction</h3>

    <div style="display: flex; flex-direction: row">
      <div>
        <table>
          <tr>
            <td>
              <h6 class="text-success">
                <b id="error" style="">Please answer following question:</b>
              </h6>
            </td>
            <td>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                name="Reset"
                @click="reset()"
                class="btn btn-outline-success"
                id="resetBt"
              >
                Reset
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="row">
      <div align="center" style="width: 40%;position: center">
        <div style="width: 80%;">
          <div style="margin: 5px;">
            <p id="change" class="chain-text"></p>
            <p>Click on rows, columns or cells to show</p>
          </div>
          <table align="center">
            <tbody>
              <tr align="center">
                <td align="center" style="">
                  <b>
                    <p
                      v-if="fractionM != 0"
                      style="border-bottom: #0f0f0f solid;margin: 0px;"
                    >
                      {{ fractionM }}
                    </p>
                    <p v-else style="border-bottom: #0f0f0f solid;margin: 0px;">
                      {{ fractionM + 1 }}
                    </p>
                    <p style="border-top: #0f0f0f solid;margin: 0px;">
                      {{ fractionL }}
                    </p>
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <button
            @click="checkResult()"
            class="btn btn-outline-success"
            id="okBt"
          >
            OK
          </button>
        </div>
        <div style="width: 20%"></div>
      </div>
      <div style="width: 60%;">
        <table id="table1" style="border: #0f0f0f solid;">
          <tbody id="tbody1">
            <tr v-for="i in length + 2">
              <td
                v-for="j in width + 2"
                @click="change($event, i, j)"
                v-bind:style="
                  j == 1 || i == 1 || j == width + 2 || i == length + 2
                    ? 'height: 2vw; width: 2vw;background: #F7F7F7'
                    : 'height: 3vw; width: 3vw; border: 1px solid #0f0f0f; color: #0f0f0f;'
                "
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      length: Math.round(Math.random() * 10) + 1,
      width: Math.round(Math.random() * 10) + 1,
      countClick: 0,
      fractionL: "",
      fractionM: "",
      a: Math.random() * 10,
      b: 0,
      clickOrNot: true,
      timer: null
    };
  },
  mounted: function() {
    this.start();
  },
  methods: {
    start() {
      if (this.a < 5) {
        this.fractionL = this.width;
        this.fractionM = Math.round(Math.random() * this.fractionL);
      }
      if (this.a >= 5) {
        this.fractionL = this.length;
        this.fractionM = Math.round(Math.random() * this.fractionL);
      }
    },
    checkResult() {
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
      if (this.fractionM == 0) {
        if (this.a < 5) {
          if ((this.fractionM + 1) * this.length == this.countClick) {
            document.getElementById("error").innerHTML =
              "Your answer is correct.";
            document.getElementById("okBt").classList.add("hide");
          } else {
            document.getElementById("error").innerHTML =
              "Your answer is incorrect.";
            this.countClick = 0;
          }
        }
        if (this.a >= 5) {
          if ((this.fractionM + 1) * this.width == this.countClick) {
            document.getElementById("error").innerHTML =
              "Your answer is correct.";
            document.getElementById("okBt").classList.add("hide");
          } else {
            document.getElementById("error").innerHTML =
              "Your answer is incorrect.";
            this.countClick = 0;
          }
        }
      }
      if (this.fractionM != 0) {
        if (this.a < 5) {
          if (this.fractionM * this.length == this.countClick) {
            document.getElementById("error").innerHTML =
              "Your answer is correct.";
            document.getElementById("okBt").classList.add("hide");
          } else {
            document.getElementById("error").innerHTML =
              "Your answer is incorrect.";
            this.countClick = 0;
          }
        }
        if (this.a >= 5) {
          if (this.fractionM * this.width == this.countClick) {
            document.getElementById("error").innerHTML =
              "Your answer is correct.";
            document.getElementById("okBt").classList.add("hide");
          } else {
            document.getElementById("error").innerHTML =
              "Your answer is incorrect.";
            this.countClick = 0;
          }
        }
      }
    },
    reset() {
      var tab = document.getElementById("table1");
      var row = tab.rows;
      for (var i = 0; i < this.length + 2; i++) {
        for (var j = 0; j < this.width + 2; j++) {
          var cell = row[i].cells;
          if (cell[j].classList == "Y") {
            cell[j].classList.remove("Y");
          }
        }
      }
      this.length = Math.round(Math.random() * 10) + 1;
      this.width = Math.round(Math.random() * 10) + 1;
      this.fractionL = "";
      this.fractionM = "";
      this.a = Math.random() * 10;
      this.countClick = 0;
      this.start();
      document.getElementById("okBt").classList.replace("hide", "appear");
      document.getElementById("error").innerHTML =
        "Please enter the number of rows.";
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
          // this.countClick++;
        } else if (cur.classList == "Y") {
          cur.classList.remove("Y");
          // this.countClick--;
        }
      } else {
        if ((i == 1) & (j != 1)) {
          if (cur.classList == "") {
            for (let k = 1; k < this.length + 1; k++) {
              row[k].cells[j - 1].classList.add("Y");
            }
            // this.countClick = this.countClick + this.length;
            cur.classList.add("Y");
          } else {
            for (let k = 1; k < this.length + 1; k++) {
              row[k].cells[j - 1].classList.remove("Y");
            }
            // this.countClick = this.countClick - this.length;
            cur.classList.remove("Y");
          }
        }
        if ((j == 1) & (i != 1)) {
          if (cur.classList == "") {
            for (let k = 1; k < this.width + 1; k++) {
              row[i - 1].cells[k].classList.add("Y");
            }
            // this.countClick = this.countClick + this.width;
            cur.classList.add("Y");
          } else {
            for (let k = 1; k < this.width + 1; k++) {
              row[i - 1].cells[k].classList.remove("Y");
            }
            // this.countClick = this.countClick - this.width;
            cur.classList.remove("Y");
          }
        }
      }
    }
  },
  name: "HowManyRows"
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
