<template>
    <div class="container mt-3 mb-5">
        <h3 class="text-center text-success mb-4">Demonstration</h3>
        <div v-if="!isSet">
            <div style="height: 20px"></div>
            <div class="text-center">
                <label for="description" class="col-sm-4" id="description">Select your dice(2, 3, or 4): </label>
            </div>
            <div style="margin-left: 43%">
                <div>
                    <div class="col-sm-12">
                        <input type="checkbox" @click="diceChoose('red')">&nbsp;
                        <label class="theRed">Red</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="checkbox" @click="diceChoose('blue')">&nbsp;
                        <label class="theBlue">Blue</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="checkbox" @click="diceChoose('green')">&nbsp;
                        <label class="theGreen">Green</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="checkbox" @click="diceChoose('black')">&nbsp;
                        <label class="theBlack">Black</label>
                    </div>
                    <button class="btn btn-outline-success" style="margin-top:10px" @click="startGame()">Start Game</button>
                    <label id="outOfRange" style="color: red; margin-left: 10px"></label>
                </div>
            </div>
        </div>
        <div class="row" v-if="isSet">
            <div class="col-md-6 pb-4">
                <table class="resultTable" style="width: 90%; text-align: center">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Wins</td>
                        <td>% Wins</td>
                    </tr>
                    <tr v-if="isRed" style="color: red">
                        <td>{{isRedWin?"Wins":""}}</td>
                        <td><input class="theRed" style="width: 80%; background: #fff7f2; border: 0px; text-align: center" v-model="redNumber" readonly id="redPlayNum"></td>
                        <td style="text-align: left">Red</td>
                        <td><input class="theRed" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="redWinNumber" readonly id="redWinNum"></td>
                        <td><input class="theRed" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="redWinPercentage" readonly id="redWinPercentage"></td>
                    </tr>
                    <tr v-if="isBlue" style="color: blue">
                        <td>{{isBlueWin?"Wins":""}}</td>
                        <td><input class="theBlue" style="width: 80%; background: #fff7f2; border: 0px; text-align: center" v-model="blueNumber" readonly id="bluePlayNum"></td>
                        <td style="text-align: left">Blue</td>
                        <td><input class="theBlue" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="blueWinNumber" readonly id="blueWinNum"></td>
                        <td><input class="theBlue" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="blueWinPercentage" readonly id="blueWinPercentage"></td>
                    </tr>
                    <tr v-if="isGreen" style="color: green">
                        <td>{{isGreenWin?"Wins":""}}</td>
                        <td><input class="theGreen" style="width: 80%; background: #fff7f2; border: 0px; text-align: center" v-model="greenNumber" readonly id="greenPlayNum"></td>
                        <td style="text-align: left">Green</td>
                        <td><input class="theGreen" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="greenWinNumber" readonly id="greenWinNum"></td>
                        <td><input class="theGreen" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="greenWinPercentage" readonly id="greenWinPercentage"></td>
                    </tr>
                    <tr v-if="isBlack" style="color: black">
                        <td>{{isBlackWin?"Wins":""}}</td>
                        <td><input class="theBlack" style="width: 80%; background: #fff7f2; border: 0px; text-align: center" v-model="blackNumber" readonly id="blackPlayNum"></td>
                        <td style="text-align: left">Black</td>
                        <td><input class="theBlack" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="blackWinNumber" readonly id="blackWinNum"></td>
                        <td><input class="theBlack" style="width: 80%; background: #ebffe8; border: 0px; text-align: center" v-model="blackWinPercentage" readonly id="blackWinPercentage"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colspan="3">Draws are ignored</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6">
                <table class="resultTable" style="width: 100%; text-align: center">
                    <tr>
                        <td :colspan="gameRule.diceFaces">{{gameRule.diceFaces}} faces</td>
                    </tr>
                    <tr v-if="isRed" style="color: red">
                        <td v-for="i in gameRule.diceFaces" style="">{{gameRule.redDiceFace[i]}}</td>
                    </tr>
                    <tr v-if="isBlue" style="color: blue">
                        <td v-for="i in gameRule.diceFaces">{{gameRule.blueDiceFace[i]}}</td>
                    </tr>
                    <tr v-if="isGreen" style="color: green">
                        <td v-for="i in gameRule.diceFaces">{{gameRule.greenDiceFace[i]}}</td>
                    </tr>
                    <tr v-if="isBlack" style="color: black">
                        <td v-for="i in gameRule.diceFaces">{{gameRule.blackDiceFace[i]}}</td>
                    </tr>
                    <tr>
                        <td :colspan="gameRule.diceFaces">Game {{count}}</td>
                    </tr>

                </table>
            </div>
        </div>
        <div class="text-center" v-if="isSet">
            <button class="btn btn-outline-success" v-if="!finished && demoAutoOption === '0'" @click="startManually">
                {{ isStart ? "Tap here for next game" : "Tap here for first game" }}
            </button>
            <button class="btn btn-outline-success" v-if="!finished && demoAutoOption === '1'" @click="startGameAuto">
                {{
                !isAutoStart
                ? "Tap here to begin"
                : timer
                ? "Tap here to pause"
                : "Tap here to resume"
                }}
            </button>
            <button class="btn btn-outline-dark" v-if="finished" @click="reset()">
                Click here to reset
            </button>
            <app-demo-auto-option class="mt-1" @changeOption="demoAutoOption = $event" :option="demoAutoOption"></app-demo-auto-option>
        </div>
    </div>
</template>

<script>
    import DemoAutoOption from "./DemoAutoOption.vue";
    export default {
        components: {
            appDemoAutoOption: DemoAutoOption
        },
        props: ["gameRule"],
        data: function() {
            return {
                activatedDices: [],
                diceNumandCol: [],
                redNumber: "",
                blueNumber: "",
                greenNumber: "",
                blackNumber: "",
                demoAutoOption: "1",
                redWinNumber: 0,
                blueWinNumber: 0,
                greenWinNumber: 0,
                blackWinNumber: 0,
                redWinPercentage: "",
                blueWinPercentage: "",
                greenWinPercentage: "",
                blackWinPercentage: "",
                count: 0,
                timer: null,
                isSet: false,
                finished: false,
                isStart: false,
                isAutoStart: false,
                isRed: false,
                isBlue: false,
                isGreen: false,
                isBlack: false,
                isRedWin: false,
                isBlueWin: false,
                isGreenWin: false,
                isBlackWin: false,
                a: [],
            };
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
        },
        mounted: function() {},
        updated: function() {},
        methods: {
            diceChoose(dice) {
                if (dice === "red") {
                    this.isRed = !this.isRed;
                }
                if (dice === "blue") {
                    this.isBlue = !this.isBlue;
                }
                if (dice === "green") {
                    this.isGreen = !this.isGreen;
                }
                if (dice === "black") {
                    this.isBlack = !this.isBlack;
                }
                for (let i = 0; i < this.activatedDices.length; i++) {
                    if (this.activatedDices[i] === dice) {
                        this.activatedDices.splice(i, 1);
                        return;
                    }
                }

                this.activatedDices.push(dice);
            },
            startGame() {
                if (this.activatedDices.length < 2) {
                    document.getElementById("outOfRange").innerHTML = "Please select more than 2 dices!";
                    return;
                }
                document.getElementById("outOfRange").innerHTML = "";
                this.isSet = true;
            },
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
                    this.timer = setInterval(this.startManually, 500);
                }
            },
            startManually() {
                this.isStart = true;
                this.count++;
                let winDices = [];
                this.isRedWin = false;
                this.isGreenWin = false;
                this.isBlueWin = false;
                this.isBlackWin = false;
                this.diceNumandCol = [];

                if (this.isRed) {
                    this.redNumber = this.gameRule.redDiceFace[this.generateRandom(this.gameRule.diceFaces)];
                    this.diceNumandCol.push([this.redNumber, "red"]);
                }
                if (this.isBlue) {
                    this.blueNumber = this.gameRule.blueDiceFace[this.generateRandom(this.gameRule.diceFaces)];
                    this.diceNumandCol.push([this.blueNumber, "blue"]);
                }
                if (this.isGreen) {
                    this.greenNumber = this.gameRule.greenDiceFace[this.generateRandom(this.gameRule.diceFaces)];
                    this.diceNumandCol.push([this.greenNumber, "green"]);
                }
                if (this.isBlack) {
                    this.blackNumber = this.gameRule.blackDiceFace[this.generateRandom(this.gameRule.diceFaces)];
                    this.diceNumandCol.push([this.blackNumber, "black"]);
                }
                let winner = this.biggestNum(this.diceNumandCol);

                for (let i = 0; i < this.diceNumandCol.length; i++) {
                    if (parseInt(this.diceNumandCol[i][0]) === parseInt(winner[0])) {
                        winDices.push(this.diceNumandCol[i]);
                    }
                }
                for (let i = 0; i < winDices.length; i++) {
                    if (winDices[i][1] === "red") {
                        this.redWinNumber++;
                        this.isRedWin = true;
                    }
                    if (winDices[i][1] === "blue") {
                        this.blueWinNumber++;
                        this.isBlueWin = true;
                    }
                    if (winDices[i][1] === "green") {
                        this.greenWinNumber++;
                        this.isGreenWin = true;
                    }
                    if (winDices[i][1] === "black") {
                        this.blackWinNumber++;
                        this.isBlackWin = true;
                    }
                }
                this.redWinPercentage = (this.redWinNumber * 100 / this.count).toFixed(1);
                this.blackWinPercentage = (this.blackWinNumber * 100 / this.count).toFixed(1);
                this.greenWinPercentage = (this.greenWinNumber * 100 / this.count).toFixed(1);
                this.blueWinPercentage = (this.blueWinNumber * 100 / this.count).toFixed(1);

            },
            biggestNum(array) {
                let tempN = 0;
                let color = "";
                for (let i = 0; i < array.length; i++) {
                    if (array[i][0] >= tempN) {
                        tempN = array[i][0];
                        color = array[i];
                    }
                }
                return color;
            }
        },
        destroyed() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        name: "Demonstration"
    }
</script>

<style scoped>
    .theRed {
        color: red;
    }

    .theBlue {
        color: blue;
    }

    .theGreen {
        color: green;
    }

    .theBlack {
        color: black;
    }

    .resultTable {
        font-size: 20px;
        font-weight: bold;
    }

    td {
        height: 50px;
    }
</style>