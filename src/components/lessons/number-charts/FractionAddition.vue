<template>
    <div>
        <transition appear appear-class="app-appear" appear-active-class="app-appear-active">
            <div class="container mt-4 mb5">
                <div class="row" style="max-width: 100%">
                    <!-- Left part -->
                    <div class="col-12 col-md-6 app--lesson-left" style="max-width: 60%">
                        <div style="text-align: left;max-width: 70%">
                            <h3>Choose the grid size</h3><br>
                            <select id="gridSize" style="width:10vw;font-size: 1.5vw" v-model="selected" v-on:change="generateTable()">
                                <option v-for="option in options" v-bind:value="option.value">
                                    {{ option.text }}
                                </option>
                            </select><br><br>
                            <h5>Complete the fraction addition grid(0 to 99)</h5><br>
                            <div v-if="alertMessage" :class="allCorrect?'alert alert-success':'alert alert-danger'">
                                {{ alertMessage }}
                            </div>

                            <table id="tableAdd" class="col-lg-12 col-md-10 col-sm-6" align="center" style="text-align: center; align-items: center; visibility: visible; border: #7f8c8d solid;background: white;">
                                <tr v-for="i in selected + 1">
                                    <td v-for="j in selected + 1" :style="
                                      (j == 1 && i != 1)||(i==1&&j!=1)
                                        ? 'width: 4vw; height: 4vw; background: #e6ffe7;'
                                        : 'width: 4vw; height: 4vw;'">
                                        <b v-if="i==1&&j==1">+</b>

                                        <b v-else-if="i==1&&j==c[0]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw; background-color: #81ecec'>{{arrSimpleThree[j-2]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw; background-color: #81ecec'>{{arrSimpleOne[j-2]}}</div>
                                        </b>
                                        <b v-else-if="i==r[0]+1&&j==c[0]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[0]+1&&j==c[1]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[1]+1&&j==c[1]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[1]+1&&j==c[2]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[2]+1&&j==c[2]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[2]+1&&j==c[3]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[3]+1&&j==c[3]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[3]+1&&j==c[4]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==r[4]+1&&j==c[4]+1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'> {{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][0]}}</div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height: 3.5vw;'>{{purify(arrSimpleOne[j-2]*arrSimpleTwo[i-2], arrSimpleOne[j-2]*arrSimpleFour[i-2]+arrSimpleTwo[i-2]*arrSimpleThree[j-2])[0][1]}}</div>
                                        </b>
                                        <b v-else-if="i==1&&j!=1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw; height:3.5vw; background-color: #81ecec; '>
                                            <input :ref="(i*100+j*10+1)" v-model="inputNum[i*100+j*10+1]" v-on:input="checkNum((i*100+j*10+1), inputNum[i*100+j*10+1])" type="text" style='width: 3.5vw; height: 3.5vw;background: #81ecec;border: 1px' />
                                            </div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw;height:3.5vw;background-color: #81ecec'>
                                                <input :ref="(i*100+j*10+2)" v-model="inputNum[i*100+j*10+2]" v-on:input="checkNum((i*100+j*10+2), inputNum[i*100+j*10+2])" type="text" style='width: 3.5vw; height: 3.5vw;background: #81ecec;border: 1px' />
                                            </div>
                                        </b>
                                        <b v-else-if="j==1&&i!=1">
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw;height:3.5vw;background-color: #81ecec'>
                                            <input :ref="(i*100+j*10+1)" v-model="inputNum[i*100+j*10+1]" v-on:input="checkNum((i*100+j*10+1), inputNum[i*100+j*10+1])" type="text" style='width: 3.5vw; height: 3.5vw;background: #81ecec;border: 1px' />
                                            </div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw;height:3.5vw;background-color: #81ecec'>
                                                <input :ref="(i*100+j*10+2)" v-model="inputNum[i*100+j*10+2]" v-on:input="checkNum((i*100+j*10+2), inputNum[i*100+j*10+2])" type="text" style='width: 3.5vw; height: 3.5vw;background: #81ecec;border: 1px' />
                                            </div>
                                        </b>
                                        <b v-else>
                                            <div style='border-bottom: #0f0f0f solid;margin: 0 auto;width: 3.5vw;height:3.5vw; border-top: 1px solid; border-left: 1px solid; border-right: 1px solid;'>
                                            <input :ref="(i*100+j*10+1)" v-model="inputNum[i*100+j*10+1]" v-on:input="checkNum((i*100+j*10+1), inputNum[i*100+j*10+1])" type="text"  />
                                            </div>
                                            <div style='border-top: #0f0f0f solid;margin: 0 auto;width: 3.5vw;height:3.5vw; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid;'>
                                                <input :ref="(i*100+j*10+2)" v-model="inputNum[i*100+j*10+2]" v-on:input="checkNum((i*100+j*10+2), inputNum[i*100+j*10+2])" type="text" />
                                            </div>
                                        </b>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- Right part -->
                    <div class="col-12 col-md-6 app--lesson-right" ref="qqq" style="overflow: visible; max-width: 30%">
                        <div class="tt-right-box"></div>
                        <div><br><br><br><br>
                            <div style="max-width: 15%;font-size: 1vw;color: #0f0f0f;position: relative">
                                <select id="select1" style="width:10vw; font-size: 1.5vw" v-model="selected1" v-on:change="generateTable()">
                                    <option v-for="s1 in options1" v-bind:value="s1.value">
                                        {{ s1.text }}
                                    </option>
                                </select>

                                <br />
                                <br />
                                <br />
                                <br />
                                <button v-if="resetNow === false" v-on:click="check()" id="ok" class="btn btn-outline-success" style="margin: auto">
                                    Check
                                </button>
                                <button v-if="resetNow === true" v-on:click="reset()" id="rs" class="btn btn-outline-success" style="margin: auto">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                tbl_rows: 2,
                tbl_columns: 2,
                selected: "",
                selected1: "",

                alertMessage: "",
                resetNow: false,
                allCorrect: false,
                cur: [],
                inputNum: [],
                options: [{
                    text: "2 by 2",
                    value: 2
                },
                    {
                        text: "3 by 3",
                        value: 3
                    },
                    {
                        text: "4 by 4",
                        value: 4
                    },

                ],
                options1: [{
                    text: "Level 1",
                    value: "l1"
                },
                    {
                        text: "Level 2",
                        value: "l2"
                    },
                    {
                        text: "Expert",
                        value: "expert"
                    }
                ],

                arrSimpleOne: [],
                arrSimpleTwo: [],
                arrSimpleThree: [],
                arrSimpleFour: [],
                randomTable: [],
                r: [],
                c: [],
                crtNum: 0,
                checkNume: [],
                checkDemo: [],
                checkValNume: [],
                checkValDemo: [],
                correctNum: [],
            };
        },
        created() {
            this.selected = this.options[0].value;
            this.selected1 = this.options1[0].value;
        },
        mounted: function() {
            this.start();
        },
        methods: {
            start() {
                document
                    .getElementById("tableAdd")
                    .rows[0].cells[0].setAttribute("style", "width: 4vw; height: 4vw; background: #ffeaa5");

                this.generateTable();
            },
            randomsort() {
                return Math.random() > .5 ? -1 : 1;
            },
            generateTable: function() {
                var easy= [2,3,4,5,5,2,3,4];
                var dif= [2,3,4,5,6,7,8,7,6,5];
                var expert= [3,4,5,6,7,8,9,8,7,6,5,2,7,8];
                easy.sort(this.randomsort);
                dif.sort(this.randomsort);
                expert.sort(this.randomsort);
                this.checkValDemo = [];
                this.checkValNume = [];
                this.checkDemo = [];
                this.checkNume = [];
                this.correctNum = [];
                this.alertMessage = "";
                this.resetNow = false;
                this.inputNum = [];
                var i = this.selected;
                this.arrSimpleOne = [];
                this.arrSimpleTwo = [];
                this.arrSimpleThree = [];
                this.arrSimpleFour = [];
                this.r = [];
                this.c = [];

                for (let s = 0; s < i; s++) {
                    this.r.push(s + 1);
                    this.c.push(s + 1);

                }
                this.r.sort(this.randomsort);
                this.c.sort(this.randomsort);

                if (this.selected1 === "l1") {
                    for(var m=0;m<i;m++){
                        var random = easy.pop();
                        var random2 = easy.pop();
                        var random3 = Math.floor(Math.random()*random/2)+1;
                        var random4 = Math.floor(Math.random()*random2/2)+1;
                        this.arrSimpleOne.push(random);
                        this.arrSimpleTwo.push(random2);
                        this.arrSimpleThree.push(random3);
                        this.arrSimpleFour.push(random4);
                    }
                    // alert(this.arrSimpleOne)
                } else if (this.selected1 === "l2") {
                    for(m=0;m<i;m++){
                        random = dif.pop();
                        random2 = dif.pop();
                        random3 = Math.floor(Math.random()*random/2)+1;
                        random4 = Math.floor(Math.random()*random2/2)+1;
                        this.arrSimpleOne.push(random);
                        this.arrSimpleTwo.push(random2);
                        this.arrSimpleThree.push(random3);
                        this.arrSimpleFour.push(random4);
                    }
                } else if (this.selected1 === "expert") {
                    for(m=0;m<i;m++){
                        random = expert.pop();
                        random2 = expert.pop();
                        random3 = Math.floor(Math.random()*random/2)+1;
                        random4 = Math.floor(Math.random()*random2/2)+1;
                        this.arrSimpleOne.push(random);
                        this.arrSimpleTwo.push(random2);
                        this.arrSimpleThree.push(random3);
                        this.arrSimpleFour.push(random4);
                    }
                }

            },
            purify: function(mother ,son) {

                var x, y;
                var temp = [];
                var j = 2;
                mother = mother *100;
                son = son*100;
                while (j <= son && j <= mother) {
                    x = son / j;
                    y = mother / j;
                    ++j;
                    if ((x + '').indexOf('.') == -1 && (y + '').indexOf('.') == -1) {
                        son = x;
                        mother = y;
                        j = 2;
                    }
                    // this.console.log(x, y);
                }
                temp.push([son, mother]);
                // alert(temp);
                return temp;
            },
            check: function() {
                this.correctNum = [];
                this.alertMessage = "";
                    for (var i = 0; i < this.checkValDemo.length; i++) {
                        var indexDemo = this.checkDemo[i];
                        var indexNume = this.checkNume[i];
                        var r=Math.floor(indexDemo/100);
                        var c=Math.floor(indexDemo/10)-r*10;
                        if (r === 1) {

                            let result=this.purify(this.arrSimpleOne[c - 2], this.arrSimpleThree[c - 2]);
                            if (this.checkValDemo[i] === result[0][1]&&this.checkValNume[i] === result[0][0]) {
                                if (this.$refs[indexDemo][0].classList.value === "red" && this.$refs[indexNume][0].classList.value === "red") {
                                    this.$refs[indexDemo][0].classList.replace("red", "g");
                                    this.$refs[indexNume][0].classList.replace("red", "g");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("g");
                                    this.$refs[indexNume][0].classList.add("g");
                                }
                                this.correctNum[i] = "g";

                            } else {
                                if (this.$refs[indexDemo][0].classList.value === "g" && this.$refs[indexNume][0].classList.value === "g") {
                                    this.$refs[indexDemo][0].classList.replace("g", "red");
                                    this.$refs[indexNume][0].classList.replace("g", "red");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("red");
                                    this.$refs[indexNume][0].classList.add("red");
                                }
                                this.correctNum[i] = "red";
                            }
                        } else if (c === 1) {
                            let result=this.purify(this.arrSimpleTwo[r - 2], this.arrSimpleFour[r - 2]);
                            if (this.checkValDemo[i] === result[0][1]&&this.checkValNume[i] === result[0][0]) {
                                if (this.$refs[indexDemo][0].classList.value === "red" && this.$refs[indexNume][0].classList.value === "red") {
                                    this.$refs[indexDemo][0].classList.replace("red", "g");
                                    this.$refs[indexNume][0].classList.replace("red", "g");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("g");
                                    this.$refs[indexNume][0].classList.add("g");
                                }
                                this.correctNum[i] = "g";

                            } else {
                                if (this.$refs[indexDemo][0].classList.value === "g" && this.$refs[indexNume][0].classList.value === "g") {
                                    this.$refs[indexDemo][0].classList.replace("g", "red");
                                    this.$refs[indexNume][0].classList.replace("g", "red");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("red");
                                    this.$refs[indexNume][0].classList.add("red");
                                }
                                this.correctNum[i] = "red";
                            }
                        } else {
                            let result=this.purify(this.arrSimpleOne[c-2]*this.arrSimpleTwo[r-2], this.arrSimpleOne[c-2]*this.arrSimpleFour[r-2]+this.arrSimpleTwo[r-2]*this.arrSimpleThree[c-2]);
                            if (this.checkValDemo[i] === result[0][1] && this.checkValNume[i] === result[0][0]) {
                                if (this.$refs[indexDemo][0].classList.value === "red" && this.$refs[indexNume][0].classList.value === "red") {
                                    this.$refs[indexDemo][0].classList.replace("red", "g");
                                    this.$refs[indexNume][0].classList.replace("red", "g");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("g");
                                    this.$refs[indexNume][0].classList.add("g");
                                }
                                this.correctNum[i] = "g";

                            } else {
                                if (this.$refs[indexDemo][0].classList.value === "g" && this.$refs[indexNume][0].classList.value === "g") {
                                    this.$refs[indexDemo][0].classList.replace("g", "red");
                                    this.$refs[indexNume][0].classList.replace("g", "red");
                                } else {
                                    this.$refs[indexDemo][0].classList.add("red");
                                    this.$refs[indexNume][0].classList.add("red");
                                }
                                this.correctNum[i] = "red";
                            }
                        }

                    }
                    var l = this.selected * this.selected;
                    var count = 0;
                    if (this.correctNum.length === l) {

                        for (let a = 0; a < this.correctNum.length; a++) {
                            if (this.correctNum[a] === "g") {
                                count++;
                            }
                        }
                        if (count === l) {
                            this.allCorrect =true;
                            this.alertMessage = "All numbers are correct";
                            this.resetNow = true;
                        } else {
                            this.alertMessage = "Only " + count + " correct numbers, please input rest numbers correctly";
                        }
                    } else {

                        this.alertMessage = "Please input all numbers correctly";

                    }
            },
            checkNum: function(r, num) {
                if (num === "") {
                    return;
                } else {
                    if(r-Math.floor(r/10)*10===1){
                        for (let i = 0; i < this.checkNume.length; i++) {

                            if (this.checkNume[i] === r) {
                                let y=r+1;
                                this.$refs[r][0].classList.remove("red");
                                this.$refs[r][0].classList.remove("g");
                                this.$refs[y][0].classList.remove("red");
                                this.$refs[y][0].classList.remove("g");
                                this.checkValNume[i] = parseInt(num);
                                return;
                            }
                        }
                        this.checkNume.push(r);
                        this.checkValNume.push(parseInt(num));
                    }
                    if(r-Math.floor(r/10)*10===2){
                        for (let i = 0; i < this.checkDemo.length; i++) {

                            if (this.checkDemo[i] === r) {
                                let y=r-1;
                                this.$refs[r][0].classList.remove("red");
                                this.$refs[r][0].classList.remove("g");
                                this.$refs[y][0].classList.remove("red");
                                this.$refs[y][0].classList.remove("g");
                                this.checkValDemo[i] = parseInt(num);
                                return;
                            }
                        }
                        this.checkDemo.push(r);
                        this.checkValDemo.push(parseInt(num));
                    }

                }


            },
            reset: function() {
                this.alertMessage = "";
                for (var i = 0; i < this.checkDemo.length; i++) {
                    let indexDemo = this.checkDemo[i];
                    let indexNume=indexDemo-1;
                    this.$refs[indexDemo][0].classList.remove("red");
                    this.$refs[indexDemo][0].classList.remove("g");
                    this.$refs[indexNume][0].classList.remove("red");
                    this.$refs[indexNume][0].classList.remove("g");
                }
                this.generateTable();
            },
        },
    };
</script>

<style scoped>
    .g {
        color: #35b247;
    }

    .red {
        color: brown;
    }


    td {
        width: 8vw;
        height: 6vw;
        padding: 1vw;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size: 30px;
    }

    input {
        padding: 0px;
        border: white;
        background: transparent;
        text-align: center;
        font-size: 30px;
        width: 3.5vw;
        height: 3.5vw;
    }
</style>