<template>
  <div class="container mt-3 mb-5">
    <div style="height: 10px"></div>

    <div class="row">
      <div class="col-md-6 pb-4">
        <div class="app--score-table">
          <table
            style="margin-left: 20%; width: 60%; border:1px solid;"
            cellpadding="5"
          >
            <tr>
              <td style="text-align: right; color: brown; font-weight: bold">
                First:
              </td>
              <td style="color: #001cc6; font-weight: bold">6 for body</td>
            </tr>
            <tr>
              <td style="text-align: right; color: brown; font-weight: bold">
                Then:
              </td>
              <td style="color: #001cc6; font-weight: bold">1 for legs</td>
            </tr>
            <tr>
              <td></td>
              <td style="color: #001cc6; font-weight: bold">5 for head</td>
            </tr>
            <tr>
              <td style="text-align: right; color: brown; font-weight: bold">
                Then:
              </td>
              <td style="color: #001cc6; font-weight: bold">2 for eyes</td>
            </tr>
            <tr>
              <td></td>
              <td style="color: #001cc6; font-weight: bold">3 for feelers</td>
            </tr>
            <tr>
              <td></td>
              <td style="color: #001cc6; font-weight: bold">4 for mouth</td>
            </tr>
          </table>
        </div>
        <table
          style="margin-left: 20%; margin-top: 20px; width: 60%; border:1px solid;"
          border="5"
          cellpadding="5"
          cellspacing="0"
        >
          <tr>
            <td
              colspan="2"
              style="text-align: center; color: #001cc6; font-weight: bold"
            >
              {{ trialNum }} games
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              style="text-align: center; color: #001cc6; font-weight: bold"
            >
              Game {{ count }}
            </td>
          </tr>
          <tr>
            <td style="text-align: right; color: brown; font-weight: bold">
              Average:
            </td>
            <td style="color: #001cc6; font-weight: bold">{{ averageNum }}</td>
          </tr>
          <tr>
            <td style="text-align: right; color: brown; font-weight: bold">
              Minimum:
            </td>
            <td style="color: #001cc6; font-weight: bold">{{ minimum }}</td>
          </tr>
          <tr>
            <td style="text-align: right; color: brown; font-weight: bold">
              Maximum:
            </td>
            <td style="color: #001cc6; font-weight: bold">{{ maximum }}</td>
          </tr>
        </table>

        <div id="controller" class="text-center" style="margin-top: 20px;">
          <div>
            <button
              class="btn btn-outline-success"
              v-if="!finished && demoAutoOption === '0'"
              @click="startGameManually"
            >
              {{
                isStart ? "Tap here for next game" : "Tap here for first game"
              }}
            </button>
            <button
              class="btn btn-outline-success"
              v-if="!finished && demoAutoOption === '1'"
              @click="startGameAuto"
            >
              {{
                !isAutoStart
                  ? "Tap here to begin"
                  : timer
                  ? "Tap here to pause"
                  : "Tap here to resume"
              }}
            </button>
            <button
              class="btn btn-outline-dark"
              v-if="finished"
              @click="reset()"
            >
              Click here to reset</button
            >&nbsp;&nbsp;&nbsp;
            <app-demo-auto-option
              class="mt-1"
              @changeOption="demoAutoOption = $event"
              :option="demoAutoOption"
            ></app-demo-auto-option>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="col-sm-12" style="position:relative; margin-left: 20%;">
          <img
            src="../../../assets/beetle-game/beetle_body.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleBody"
          />
          <img
            src="../../../assets/beetle-game/beetle_head.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleHead"
          />
          <img
            src="../../../assets/beetle-game/beetle_mouth.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleMouth"
          />
          <img
            src="../../../assets/beetle-game/beetle_feelers_left.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleFeeler1"
          />
          <img
            src="../../../assets/beetle-game/beetle_feelers_right.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleFeeler2"
          />
          <img
            src="../../../assets/beetle-game/beetle_eyes_left.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleEye1"
          />
          <img
            src="../../../assets/beetle-game/beetle_eyes_right.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleEye2"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg1.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg1"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg2.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg2"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg3.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg3"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg4.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg4"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg5.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg5"
          />
          <img
            src="../../../assets/beetle-game/beetle_leg6.png"
            alt=""
            style="position:absolute;left:0px;top:0px;width: 70%;"
            id="beetleLeg6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DemoAutoOption from "./DemoAutoOption.vue";

export default {
  props: ["trialNum"],
  components: {
    appDemoAutoOption: DemoAutoOption
  },
  data: function() {
    return {
      demoAutoOption: "1",
      count: 0,
      averageNum: "",
      minimum: "",
      maximum: "",
      partsNum: 0,
      rollsNum: 0,
      randomNum: "",
      body: 0,
      head: 0,
      eyes: 0,
      legs: 0,
      feelers: 0,
      mouth: 0,
      allGameResults: [],
      finished: false,
      timer: null,
      timer1: null,
      isStart: false,
      isAutoStart: false,
      manualFinished: false
    };
  },
  computed: {
    forTime() {
      if (this.trialNum <= 200) {
        return 10;
      } else if (this.trialNum <= 1000) {
        return 50;
      } else if (this.trialNum <= 2000) {
        return 70;
      } else if (this.trialNum <= 5000) {
        return 100;
      } else if (this.trialNum <= 10000) {
        return 300;
      } else {
        return 400;
      }
    }
  },
  watch: {
    demoAutoOption(value) {
      if (value === "0" && this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    finished(value) {
      if (value === true && this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    manualFinished(value) {
      if (value === true && this.timer1) {
        clearInterval(this.timer1);
        this.timer1 = null;
      }
    }
  },
  mounted: function() {},
  methods: {
    generateRandom(num) {
      //from 0 - num
      return Math.round(Math.random() * (num - 1)) + 1;
    },
    startGameAuto() {
      this.isAutoStart = true;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(this.startGame, 0.1);
      }
    },
    startGame() {
      let times = this.forTime;
      for (let i = 0; i < times; i++) {
        this.rollDice();
        if (parseInt(this.count) === parseInt(this.trialNum)) {
          this.finished = true;
          break;
        }
      }
    },
    startGameManually() {
      this.manualFinished = false;
      while (!this.manualFinished) {
        this.rollDice();
      }
    },
    rollDice() {
      this.p = this.generateRandom(3);
      this.randomNum = this.generateRandom(6);
      this.rollsNum++;
      this.drawBeetle();
    },
    drawBeetle() {
      if (this.randomNum === 6) {
        if (this.body === 0) {
          this.partsNum++;
          this.body = 1;
        }
      } else if (this.randomNum === 5 || this.randomNum === 1) {
        if (this.randomNum === 5) {
          if (this.body === 1) {
            if (this.head === 0) {
              this.partsNum++;
            }
            this.head = 1;
          } else {
            return;
          }
        }
        if (this.randomNum === 1) {
          if (this.body === 1) {
            if (this.legs === 0) {
              this.partsNum++;
              this.legs++;
            } else if (this.legs === 1) {
              this.partsNum++;
              this.legs++;
            } else if (this.legs === 2) {
              this.partsNum++;
              this.legs++;
            } else if (this.legs === 3) {
              this.partsNum++;
              this.legs++;
            } else if (this.legs === 4) {
              this.partsNum++;
              this.legs++;
            } else if (this.legs === 5) {
              this.partsNum++;
              this.legs++;
            } else {
              return;
            }
          } else {
            return;
          }
        }
      } else if (
        this.randomNum === 2 ||
        this.randomNum === 3 ||
        this.randomNum === 4
      ) {
        if (this.randomNum === 4) {
          if (this.head === 1) {
            if (this.mouth === 0) {
              this.partsNum++;
            }
            this.mouth = 1;
          } else {
            return;
          }
        }
        if (this.randomNum === 3) {
          if (this.head === 1) {
            if (this.feelers === 0) {
              this.partsNum++;
              this.feelers += 1;
            } else if (this.feelers === 1) {
              this.partsNum++;
              this.feelers += 1;
            } else {
              return;
            }
          }
        }
        if (this.randomNum === 2) {
          if (this.head === 1) {
            if (this.eyes === 0) {
              this.partsNum++;
              this.eyes += 1;
            } else if (this.eyes === 1) {
              this.partsNum++;
              this.eyes += 1;
            } else {
              return;
            }
          }
        }
      }
      if (this.partsNum === 13) {
        this.count++;
        this.freshData();
        this.partsNum = 0;
        this.rollsNum = 0;
        this.randomNum = "";
        this.body = 0;
        this.head = 0;
        this.eyes = 0;
        this.legs = 0;
        this.feelers = 0;
        this.mouth = 0;
        this.manualFinished = true;
      }
    },
    freshData() {
      this.allGameResults.push(this.rollsNum);
      if (this.count === 1) {
        this.maximum = this.rollsNum;
        this.minimum = this.rollsNum;
        this.averageNum = this.rollsNum;
      } else {
        if (this.rollsNum >= this.maximum) {
          this.maximum = this.rollsNum;
        }
        if (this.rollsNum < this.minimum) {
          this.minimum = this.rollsNum;
        }
        let allResults = 0;
        for (let i = 0; i < this.allGameResults.length; i++) {
          allResults += this.allGameResults[i];
        }
        this.averageNum = (allResults / this.count).toFixed(2);
      }
    },
    reset() {
      this.count = 0;
      this.allGameResults = [];
      this.partsNum = 0;
      this.rollsNum = 0;
      this.randomNum = "";
      this.body = 0;
      this.head = 0;
      this.eyes = 0;
      this.legs = 0;
      this.feelers = 0;
      this.mouth = 0;
      this.minimum = "";
      this.maximum = "";
      this.averageNum = "";
      this.finished = false;
      this.timer = null;
      this.isStart = false;
      this.isAutoStart = false;
    }
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.timer1) {
      clearInterval(this.timer1);
      this.timer1 = null;
    }
  },
  name: "MakeManyBeetles"
};
</script>

<style scoped></style>
