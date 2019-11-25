<template>
  <div class="container mt-3 mb-5">
    <h3 class="text-center text-success mb-4">How Many Rows</h3>

    <div style="display: flex; flex-direction: row">
      <div>
        <table>
          <tr>
            <td>
              <h6 class="text-success">
                <b id="error" style="">Please enter the number of rows.</b>
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
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="row">
      <div align="center" style="width: 40%;position: center">
        <table style="width: 100%; text-align: left;">
          <tr>
            <td width="80%" style="text-align: left">
              <p v-if="Q1">
                There are
                <input
                  type="number"
                  id="test"
                  style=" width: 50px"
                  class="inputLabel"
                  align="center"
                  v-model="inputRows"
                />rows.
              </p>
            </td>
            <td style="alignment: right">
              <p v-if="Q1">
                <img src="../../../assets/right.png" class="hide" id="1" />
              </p>
            </td>
          </tr>
          <tr>
            <td width="80%">
              <div v-if="Q2" style="vertical-align: center;">
                <p style="display: inline-block">
                  Each row is&nbsp;&nbsp;
                </p>
                <div style="display: inline-block;">
                  <div style="border-bottom: #0f0f0f 0.25vw solid;margin: 0px;">
                    <input
                      style=" width: 50px"
                      id="test1"
                      v-model="inputRowUp"
                      class="inputLabel"
                    />
                  </div>
                  <div style="margin: 0px">
                    <input
                      style=" width: 50px"
                      id="test2"
                      v-model="inputRowDown"
                      class="inputLabel"
                    />
                  </div>
                </div>
                of the whole.
              </div>
            </td>
            <td width="20%">
              <div v-if="Q2">
                <img src="../../../assets/right.png" class="hide" id="2" />
              </div>
            </td>
          </tr>
          <tr>
            <td width="80%">
              <p v-if="Q3">
                There are
                <input
                  id="test3"
                  style=" width: 50px"
                  v-model="inputColumns"
                  class="inputLabel"
                />columns.
              </p>
            </td>
            <td width="20%">
              <p v-if="Q3">
                <img src="../../../assets/right.png" class="hide" id="3" />
              </p>
            </td>
          </tr>
          <tr>
            <td width="80%">
              <div v-if="Q4">
                <p style="display: inline-block">Each column is</p>
                <div style="display: inline-block;">
                  <div style="border-bottom: #0f0f0f 0.25vw solid;margin: 0px">
                    <input
                      style=" width: 50px"
                      id="test4"
                      v-model="inputColumnUp"
                      class="inputLabel"
                    />
                  </div>
                  <div style="margin: 0px">
                    <input
                      style=" width: 50px"
                      id="test5"
                      v-model="inputColumnDown"
                      class="inputLabel"
                    />
                  </div>
                </div>
                of the whole.
              </div>
            </td>
            <td width="20%">
              <div v-if="Q4">
                <img src="../../../assets/right.png" class="hide" id="4" />
              </div>
            </td>
          </tr>
          <tr>
            <td width="80%">
              <p v-if="Q5">
                There are
                <input
                  id="test6"
                  class="inputLabel"
                  v-model="inputCells"
                  style=" width: 50px"
                />
                cells.
              </p>
            </td>
            <td width="20%">
              <p v-if="Q5">
                <img src="../../../assets/right.png" class="hide" id="5" />
              </p>
            </td>
          </tr>
          <tr>
            <td width="80%">
              <div v-if="Q6">
                <p style="display: inline-block">Each cell is</p>
                <div style="display: inline-block;">
                  <div style="border-bottom: #0f0f0f 0.25vw solid;margin: 0px">
                    <input
                      id="test7"
                      style=" width: 50px"
                      v-model="inputCellUp"
                      class="inputLabel"
                    />
                  </div>
                  <div style="margin: 0px">
                    <input
                      id="test8"
                      style=" width: 50px"
                      v-model="inputCellDown"
                      class="inputLabel"
                    />
                  </div>
                </div>
                of the whole.
              </div>
            </td>
            <td width="20%">
              <div v-if="Q6">
                <img src="../../../assets/right.png" class="hide" id="6" />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button
                name="OK"
                @click="checkResult()"
                class="btn btn-outline-success"
                id="okBt"
              >
                OK
              </button>
            </td>
          </tr>
        </table>
      </div>
      <table
        id="table1"
        align="left"
        cellpadding="0"
        cellspacing="0"
        style="border: #0f0f0f solid; "
      >
        <tbody id="tbody1">
          <tr v-for="i in length" id="tr">
            <td
              v-for="j in width"
              @click="change($event)"
              style="height: 5vw; width: 5vw; border: 1px solid #0f0f0f; color: #0f0f0f;"
              id="td"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      length: Math.round(Math.random() * 3) + 3,
      width: Math.round(Math.random() * 3) + 3,
      countClick: 0,
      inputRows: "",
      inputRowUp: "",
      inputRowDown: "",
      inputColumns: "",
      inputColumnUp: "",
      inputColumnDown: "",
      inputCells: "",
      inputCellUp: "",
      inputCellDown: "",
      Q1: true,
      Q2: false,
      Q3: false,
      Q4: false,
      Q5: false,
      Q6: false,
      objects: []
    };
  },

  methods: {
    checkResult() {
      if (this.inputRows == this.length & this.Q2 == false) {
        document.getElementById("1").classList.replace("hide", "appear");
        document.getElementById("test").setAttribute("readonly", "true");
        this.Q2 = true;
        document.getElementById("error").innerHTML =
          "Please enter the row fraction";
      }
      else if ((this.inputRowUp == 1) & (this.inputRowDown == this.length) & this.Q3 == false) {
        document.getElementById("2").classList.replace("hide", "appear");
        document.getElementById("test1").setAttribute("readonly", "true");
        document.getElementById("test2").setAttribute("readonly", "true");
        this.Q3 = true;
        document.getElementById("error").innerHTML =
          "Please enter the number of columns.";
      }
      else if (this.inputColumns == this.width & this.Q4 == false) {
        document.getElementById("3").classList.replace("hide", "appear");
        document.getElementById("test3").setAttribute("readonly", "true");
        this.Q4 = true;
        document.getElementById("error").innerHTML =
          "Please enter the columns fraction.";
      }
     else if ((this.inputColumnUp == 1) & (this.inputColumnDown == this.width) & this.Q5 == false) {
        document.getElementById("4").classList.replace("hide", "appear");
        document.getElementById("test4").setAttribute("readonly", "true");
        document.getElementById("test5").setAttribute("readonly", "true");
        this.Q5 = true;
        document.getElementById("error").innerHTML =
          "Please enter the number of cells.";
      }
     else if (this.inputCells == this.width * this.length & this.Q6 == false) {
        document.getElementById("5").classList.replace("hide", "appear");
        document.getElementById("test6").setAttribute("readonly", "true");
        this.Q6 = true;
        document.getElementById("error").innerHTML =
          "Please enter the cells fraction.";
      }
      else if (
        (this.inputCellUp == 1) &
        (this.inputCellDown == this.width * this.length) & document.getElementById("error").innerHTML != "All correct!"
      ) {
        document.getElementById("6").classList.replace("hide", "appear");
        document.getElementById("test7").setAttribute("readonly", "true");
        document.getElementById("test8").setAttribute("readonly", "true");
        document.getElementById("okBt").classList.add("hide");
        document.getElementById("error").innerHTML = "All correct!";
      }else{
        document.getElementById("error").innerHTML = "The answer is incorrect!";
      }
    },
    reset() {
      var tab = document.getElementById("table1");
      var row = tab.rows;
      for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.width; j++) {
          var cell = row[i].cells;
          if (cell[j].classList == "Y") {
            cell[j].classList.remove("Y");
          }
        }
      }
      this.length = Math.round(Math.random() * 3) + 3;
      this.width = Math.round(Math.random() * 3) + 3;
      this.countClick = 0;
      this.inputRows = "";
      this.inputRowUp = "";
      this.inputRowDown = "";
      this.inputColumns = "";
      this.inputColumnUp = "";
      this.inputColumnDown = "";
      this.inputCells = "";
      this.inputCellUp = "";
      this.inputCellDown = "";
      this.Q1 = true;
      this.Q2 = false;
      this.Q3 = false;
      this.Q4 = false;
      this.Q5 = false;
      this.Q6 = false;
      document.getElementById("okBt").classList.replace("hide", "appear");
      document.getElementById("test").removeAttribute("readonly");
      document.getElementById("test1").removeAttribute("readonly");
      document.getElementById("test2").removeAttribute("readonly");
      document.getElementById("test3").removeAttribute("readonly");
      document.getElementById("test4").removeAttribute("readonly");
      document.getElementById("test5").removeAttribute("readonly");
      document.getElementById("test6").removeAttribute("readonly");
      document.getElementById("test7").removeAttribute("readonly");
      document.getElementById("test8").removeAttribute("readonly");
      document.getElementById("1").classList.replace("appear", "hide");
      document.getElementById("2").classList.replace("appear", "hide");
      document.getElementById("3").classList.replace("appear", "hide");
      document.getElementById("4").classList.replace("appear", "hide");
      document.getElementById("5").classList.replace("appear", "hide");
      document.getElementById("6").classList.replace("appear", "hide");
      document.getElementById("error").innerHTML = "Please enter the number of rows.";
    },

    change(event) {
      var cur = event.target;
      if (cur.classList == "") {
        cur.classList.add("Y");
        this.countClick++;
      } else if (cur.classList == "Y") {
        cur.classList.remove("Y");
        this.countClick--;
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
