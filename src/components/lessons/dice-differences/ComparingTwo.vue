<template>
    <div>
        <div v-if="!next" class="container mt-4 mb-5">
            <div class="top">
                <div class="row justify-content-end">
                    <label class="col-sm-5 label1" >Enter the number of trials:</label>
                    <div class="col-sm-4">
                        <input type="number" min="1" max="100000" class="roll1" oninput="value=value.replace('.','');if(value>100000)value=100000;if(value<1)value=null"  v-model="trails">
                    </div>
                </div>
                <div class="row justify-content-end">
                    <label class="col-sm-4" style="font-weight: bold">Range is 1 to 100000</label>
                </div>
            </div>
            <div class="top" style="margin-top: 10px;">
                <div class="row justify-content-end">
                    <div class="col-3"><label disabled class="zone1 noborder" style="color: #0067d2; line-height: 50px; height:50px; font-size: 25px" >Cell:</label></div>
                    <input disabled class="zone2 noborder" value="0">
                    <input disabled class="zone2 noborder" value="1">
                    <input disabled class="zone2 noborder" value="2">
                    <input disabled class="zone2 noborder" value="3">
                    <input disabled class="zone2 noborder" value="4">
                    <input disabled class="zone2 noborder" value="5">
                </div>
                <div class="row justify-content-end">
                    <div class="col-4"><label class="zone1 noborder" style="color: #0067d2; line-height: 50px; height:50px; font-size: 25px" >Number of prisoners:</label></div>
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" @focus="displayInputPrompt" maxlength="1" class="zone2 border" v-model="num1" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" class="zone2 border" @focus="displayInputPrompt" v-model="num2" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" @focus="displayInputPrompt" maxlength="1" class="zone2 border" v-model="num3" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" @focus="displayInputPrompt" maxlength="1" class="zone2 border" v-model="num4" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" @focus="displayInputPrompt" maxlength="1" class="zone2 border" v-model="num5" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums" @blur="hideInputPrompt" @focus="displayInputPrompt" maxlength="1" class="zone2 border" v-model="num6" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                </div>
            </div>

            <div class="top" style="margin-top: 10px; border: none">
                <div  class="row justify-content-end" style="height: 30px; color: red; font-size: 20px">
                    <div v-if="promp1"  v-text="ShowPromp"></div>
                    <div v-else style="color: red; font-size: 20px;" v-text="ErrorPromp"></div>

                </div>

            </div>

            <div class="top" style="margin-top: 10px;">
                <div class="row justify-content-end">
                    <div class="col-3"><label disabled class="zone1 noborder" style="color: #0067d2; line-height: 50px; height:50px; font-size: 25px" >Cell:</label></div>
                    <input disabled class="zone2 noborder" value="0">
                    <input disabled class="zone2 noborder" value="1">
                    <input disabled class="zone2 noborder" value="2">
                    <input disabled class="zone2 noborder" value="3">
                    <input disabled class="zone2 noborder" value="4">
                    <input disabled class="zone2 noborder" value="5">
                </div>
                <div class="row justify-content-end">
                    <div class="col-4"><label class="zone1 noborder" style="color: #0067d2; line-height: 50px; height:50px; font-size: 25px" >Number of prisoners:</label></div>
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" @focus="displayInputPrompt1" maxlength="1" class="zone2 border" v-model="num7" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" class="zone2 border" @focus="displayInputPrompt1" v-model="num8" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" @focus="displayInputPrompt1" maxlength="1" class="zone2 border" v-model="num9" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" @focus="displayInputPrompt1" maxlength="1" class="zone2 border" v-model="num10" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" @focus="displayInputPrompt1" maxlength="1" class="zone2 border" v-model="num11" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                    <input type="number" min="0"  max="9" @keyup="CheckNums1" @blur="hideInputPrompt1" @focus="displayInputPrompt1" maxlength="1" class="zone2 border" v-model="num12" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')">
                </div>
            </div>

            <div  class="top" style="margin-top: 10px; border: none">
                <div class="row justify-content-end"  style="height: 30px;  color: red; font-size: 20px" >
                    <div v-if="promp2" v-text="ShowPromp"></div>
                    <div v-else style="color: red; font-size: 20px;" v-text="ErrorPromp1"></div>
                </div>
                <div class="row justify-content-end">
                    <button style="margin-top: 8px;" class="btn btn-outline-success" @click="CheckError">OK</button>
                </div>
            </div>
        </div>

        <div v-else class="container mt-4 mb-5">
            <div class="top" style="border: none">
                <div class="row justify-content-center">
                    <label class="col-sm-5 label1" >Number of trials: {{numberoftrials}}</label>
                    <label class="col-sm-5 label1" >{{trails}} trials</label>
                </div>
            </div>
            <div class="top">
                <div class="row justify-content-end">
                    <label class="col-sm-5 label1"></label>
                    <div class="col-sm-3">
                        <label style="margin-top: 5px; text-align: center;font-size: 25px; color: #0067d2"> Strategy 1:</label>
                    </div>
                    <div class="col-sm-3">
                        <label style="margin-top: 5px; text-align: center;font-size: 25px; color: red"> Strategy 2:</label>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <label class="col-sm-5 label1" >Average:</label>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Average1">
                    </div>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Average2">
                    </div>
                </div>
                <div class="row justify-content-end">
                    <label class="col-sm-5 label1">Minimum:</label>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Minimum1">
                    </div>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Minimum2">
                    </div>
                </div>
                <div class="row justify-content-end">
                    <label class="col-sm-5 label1" >Maximum:</label>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Maximum1">
                    </div>
                    <div class="col-sm-3">
                        <input class="roll1" style="width: 150px" disabled v-model="Maximum2">
                    </div>
                </div>
            </div>
            <div class="top" style="margin-top: 10px;">
                <div class="row justify-content-end">
                    <div class="col-3"><label disabled class="zone1 noborder" style="line-height: 50px; height:50px; font-size: 25px" >Cell:</label></div>
                    <input disabled class="zone2 noborder" value="0">
                    <input disabled class="zone2 noborder" value="1">
                    <input disabled class="zone2 noborder" value="2">
                    <input disabled class="zone2 noborder" value="3">
                    <input disabled class="zone2 noborder" value="4">
                    <input disabled class="zone2 noborder" value="5">
                </div>
                <div class="row justify-content-end">
                    <div class="col-4"><label disabled class="zone1 noborder" style="color: #0067d2; line-height: 50px; height:50px; font-size: 25px" >Strategy 1:</label></div>
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1" class="zone2 noborder1" oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" v-model="num1">
                    <input  type="number"  :disabled="disabled" min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" class="zone2 noborder1" v-model="num2">
                    <input  type="number"  :disabled="disabled" min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" class="zone2 noborder1" v-model="num3">
                    <input  type="number"  :disabled="disabled" min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" class="zone2 noborder1" v-model="num4">
                    <input  type="number"  :disabled="disabled" min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" class="zone2 noborder1" v-model="num5">
                    <input type="number"  :disabled="disabled" min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')" class="zone2 noborder1" v-model="num6">
                </div>
                <div class="row justify-content-end">
                    <div class="col-4"><label disabled class="zone1 noborder" style="color: red; line-height: 50px; height:50px; font-size: 25px" >Strategy 2:</label></div>
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num7">
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num8">
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num9">
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num10">
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num11">
                    <input  type="number"  :disabled="disabled"  min="0"  max="9" maxlength="1"  oninput="value=value.replace('.',''); if(value>9)value=value.substr(-1);else if(value==0) value=0 ;else if (value >= 1) value=value.replace(/\b(0+)/gi,'')"  class="zone2 noborder2" v-model="num12">
                </div>
            </div>

            <div v-if="!reset1" class="top" style="margin-top: 20px; border: none">
                <div class="row justify-content-end">
                    <div v-if="!disabled" style="color: red; font-size: 20px; margin-right: 15px;margin-top: 3px">{{resetwords}}</div>
                    <button class="btn btn-outline-success" style="margin-right: 20px" @click="playDemo" v-bind:style="{visibility: !playDemoGame ? 'hidden' : 'visible' }">Play Demo</button>
                    <div v-if="!disabled" style="color: red; font-size: 20px; margin-right: 15px;margin-top: 3px">{{resetwords1}}</div>

                    <button class="btn btn-outline-success"  style="margin-right: 30px" @click="playAuto" v-if="playAutoGame">{{PlayAutoWord}}</button>
                </div>
            </div>
            <div v-else class="top" style="margin-top: 20px; border: none">
                <div class="row justify-content-center" style="margin-top: 20px;">
                    <button  class="btn btn-outline-success" @click="Reset">Finished! Tap here to reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                numberoftrials:0,
                Average1:null,
                Average11:null,
                Average2:null,
                Average22:null,
                Minimum1:null,
                Maximum1:null,
                Minimum2:null,
                Maximum2:null,
                trails: null,
                strategy: 1,
                PlayAutoWord:"Play Auto",
                next: false,
                promp1:true,
                promp2:true,
                inputPromp:false,
                ErrorPromp: "",
                Error1: 2,
                Error: 2,
                ErrorPromp1: "",
                playDemoGame:true,
                playAutoGame:true,
                MaxPrisoner: 9,
                disabled:true,
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
                num11: 0,
                num12: 0,
                MaxPrisoner1: 9,
                nums1:[],
                nums2:[],
                reset1:false,
                resetwords:"Change the number of prisoners or",
                resetwords1:"or",
            }
        },
        watch:{
            next(value){
                if (value){
                    this.nums1.push(this.num1);
                    this.nums1.push(this.num2);
                    this.nums1.push(this.num3);
                    this.nums1.push(this.num4);
                    this.nums1.push(this.num5);
                    this.nums1.push(this.num6);
                    this.nums2.push(this.num7);
                    this.nums2.push(this.num8);
                    this.nums2.push(this.num9);
                    this.nums2.push(this.num10);
                    this.nums2.push(this.num11);
                    this.nums2.push(this.num12);
                }
            },
            numberoftrials(value){
                if (value == this.trails){
                    this.reset1 = true;
                }
            }
        },
        computed:{
            ShowPromp(){
                if (this.promp1){
                    return "Enter the number of prisoners (0-" + (this.MaxPrisoner - this.num1 - this.num2 - this.num3 - this.num4 - this.num5 - this.num6) +")";
                }
                if (this.promp2){
                    return "Enter the number of prisoners (0-" + (this.MaxPrisoner1 - this.num7 - this.num8 - this.num9 - this.num10 - this.num11 - this.num12) +")";
                }
            },
        },
        methods:{
            CheckError(){
                this.promp1 = false;
                this.promp2 = false;
                if (this.Error1 == 1) this.ErrorPromp = "Enter a smaller number for strategy 1";
                else if (this.Error1 == 2) this.ErrorPromp = "Enter at least one prisoner for strategy 1";
                else this.ErrorPromp = "";
                if (this.Error == 1) this.ErrorPromp1 = "Enter a smaller number for strategy 2";
                else if (this.Error == 2) this.ErrorPromp1 = "Enter at least one prisoner for strategy 2";
                else {
                    this.ErrorPromp1 = "";
                    if(this.Error1 == 0){
                        if (this.trails > 0)
                            this.next = true;
                        else this.ErrorPromp1 = "Enter the number of trials (1-100000)";
                    }

                }
            },
            sleep: function(ms){
                return new Promise(resolve=>{
                    setTimeout(resolve,ms)
                })
            },
            setnums(){
                this.nums1[0] = this.num1;
                this.nums1[1] = this.num2;
                this.nums1[2] = this.num3;
                this.nums1[3] = this.num4;
                this.nums1[4] = this.num5;
                this.nums1[5] = this.num6;
                this.nums2[0] = this.num7;
                this.nums2[1] = this.num8;
                this.nums2[2] = this.num9;
                this.nums2[3] = this.num10;
                this.nums2[4] = this.num11;
                this.nums2[5] = this.num12;
            },

            playDemo(){
                if (!this.disabled){
                    this.setnums();
                    if (this.nums1.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)) > 9){
                        this.resetwords = "Enter a smaller number for strategy 1";
                        this.resetwords1 = "";
                        return;
                    } else if (this.nums1.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)) == 0) {
                        this.resetwords = "Enter at least one prisoner for strategy 1";
                        this.resetwords1 = "";
                        return;
                    }
                    if (this.nums2.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)) > 9){
                        this.resetwords = "Enter a smaller number for strategy 2";
                        this.resetwords1 = "";
                        return;
                    } else if (this.nums2.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)) == 0) {
                        this.resetwords = "Enter at least one prisoner for strategy 2";
                        this.resetwords1 = "";
                        return;
                    }
                }
                this.disabled = true;
                this.playDemoGame = false;
                this.playAutoGame = false;

                this.loop1();
                this.loop2();
                this.numberoftrials += 1;
                this.playDemoGame = true;
                this.playAutoGame = true;
            },
            playAuto:async function(){
                if (!this.disabled){
                    this.setnums();
                    if (this.nums1.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)) > 9){
                        this.resetwords = "Enter a smaller number for strategy 1";
                        this.resetwords1 = "";
                        return;
                    } else if (this.nums1.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b))  == 0) {
                        this.resetwords = "Enter at least one prisoner for strategy 1";
                        this.resetwords1 = "";
                        return;
                    }
                    if (this.nums2.reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b))  > 9){
                        this.resetwords = "Enter a smaller number for strategy 2";
                        this.resetwords1 = "";
                        return;
                    } else if (this.nums2.reduce((a,b)=> Number.parseInt(a)+Number.parseInt(b)) == 0) {
                        this.resetwords = "Enter at least one prisoner for strategy 2";
                        this.resetwords1 = "";
                        return;
                    }
                }

                this.disabled = true;
                if(this.PlayAutoWord == "Play Auto") {
                    this.PlayAutoWord = "Pause";
                    this.playDemoGame = false;
                    var temple = await this.sleep(250);
                    this.stop = false;
                    while (!this.stop && this.numberoftrials < this.trails) {
                        if (this.trails <= 100){
                            var temple = await this.sleep(100);
                            this.loop1();
                            this.loop2();
                            this.numberoftrials += 1;
                        }else if (this.trails <= 1000) {
                            var temple = await this.sleep(20);
                            this.loop1();
                            this.loop2();
                            this.numberoftrials += 1;

                        }else if (this.trails <= 10000) {
                            var temple = await this.sleep(10);
                            this.loop1();
                            this.loop2();
                            this.numberoftrials += 1;

                        }else{
                            this.loop1();
                            this.loop2();
                            this.numberoftrials += 1;

                        }
                    }
                } else if(this.PlayAutoWord == "Pause"){
                    this.stop = true;
                    this.playDemoGame = true;
                    this.PlayAutoWord = "Play Auto";
                    this.playAutoGame = true;
                }
            },
            loop1(){
                let p = 0;
                while(this.nums1.reduce((a,b) =>Number.parseInt(a)+Number.parseInt(b)) > 0){
                    let random1 = Math.floor(Math.random()*36)+1;
                    random1 = this.diceDifference(random1);
                    if (this.nums1[random1] > 0){
                        this.nums1[random1] -= 1;
                    }
                    p += 1;
                }
                if (this.numberoftrials == 0){
                    this.Maximum1 = p;
                    this.Minimum1 = p;
                    this.Average1 = p;
                    this.Average11 = p;
                } else {
                    this.Maximum1 = this.Maximum1 > p ? this.Maximum1 : p;
                    this.Minimum1 = this.Minimum1 < p ? this.Minimum1 : p;
                    this.Average11 = ((this.Average11 * this.numberoftrials + p) / (this.numberoftrials + 1));
                    this.Average1 = this.Average11.toFixed(2);
                }
                this.nums1[0] = this.num1;
                this.nums1[1] = this.num2;
                this.nums1[2] = this.num3;
                this.nums1[3] = this.num4;
                this.nums1[4] = this.num5;
                this.nums1[5] = this.num6;
            },
            loop2(){
                let p = 0;
                while(this.nums2.reduce((a,b) =>Number.parseInt(a)+Number.parseInt(b)) > 0){
                    let random1 = Math.floor(Math.random()*36)+1;
                    random1 = this.diceDifference(random1);
                    if (this.nums2[random1] > 0){
                        this.nums2[random1] -= 1;
                    }
                    p += 1;
                }
                if (this.numberoftrials == 0){
                    this.Maximum2 = p;
                    this.Minimum2 = p;
                    this.Average2 = p;
                    this.Average22 = p;
                } else {
                    this.Maximum2 = this.Maximum2 > p ? this.Maximum2 : p;
                    this.Minimum2 = this.Minimum2 < p ? this.Minimum2 : p;
                    this.Average22 = ((this.Average22 * this.numberoftrials + p) / (this.numberoftrials + 1));
                    this.Average2 = this.Average22.toFixed(2);
                }
                this.nums2[0] = this.num7;
                this.nums2[1] = this.num8;
                this.nums2[2] = this.num9;
                this.nums2[3] = this.num10;
                this.nums2[4] = this.num11;
                this.nums2[5] = this.num12;
            },
            Reset(){
                this.disabled = false;
                this.reset1 = false;
                this.numberoftrials = 0;
                this.Average1 = null;
                this.Average11 = null;
                this.Minimum1 = null;
                this.Maximum1 = null;
                this.Average2 = null;
                this.Average22 = null;
                this.Minimum2 = null;
                this.Maximum2 = null;
                this.playDemoGame = true;
                this.playAutoGame = true;
                this.PlayAutoWord = "Play Auto";
            },
            diceDifference(random){
                if (random < 7){
                    return 0;
                }else if (random < 17) {
                    return 1;
                }else if (random < 25) {
                    return 2;
                }else if (random < 31) {
                    return 3;
                }else if (random < 35) {
                    return 4;
                }else{
                    return 5;
                }
            },
            displayInputPrompt(){
                this.promp1 = true;
            },
            displayInputPrompt1(){
                this.promp2 = true;
            },
            hideInputPrompt(){
                this.promp1 =false;
            },
            hideInputPrompt1(){
                this.promp2 =false;
            },

            convertNum(num) {
                switch (num) {
                    case 1:
                        return "One";
                    case 2:
                        return "Two";
                    case 3:
                        return "Three";
                    case 4:
                        return "Four";
                    case 5:
                        return "Five";
                    case 6:
                        return "Six";
                    case 7:
                        return "Seven";
                    case 8:
                        return "Eight";
                    case 9:
                        return "Nine";
                }
            },
            CheckNums(){
                if (this.num1 > 0 || this.num2 > 0 ||  this.num3 > 0|| this.num4 > 0|| this.num5 > 0|| this.num6 > 0){
                    let sum = Number.parseInt(this.num1)+ Number.parseInt(this.num2) + Number.parseInt(this.num3) + Number.parseInt(this.num4) + Number.parseInt(this.num5) + Number.parseInt(this.num6);
                    if ( 9 < sum ){
                        // 1 : sum of input numbers are biger than MaxPrisoner
                        this.Error1 = 1;
                        this.ErrorPromp = "Enter a smaller number for strategy "+this.strategy;
                    }else if (9 == sum){
                        this.Error1 = 0;
                        this.ErrorPromp = "All "+ this.MaxPrisoner +" prisoners have been entered for strategy "+this.strategy;
                    }else{
                        this.ErrorPromp = this.convertNum(sum)+" prisoners have been entered for strategy "+this.strategy;
                        this.Error1 = 0;
                    }
                }else{
                    // 1 : all input numbers are 0
                    this.Error1 = 2;
                    this.ErrorPromp = "Enter at least one prisoner for strategy " + this.strategy;
                    // this.inputPromp = true;
                }
                this.promp1 = false;
            },
            CheckNums1(){
                if (this.num7 > 0 || this.num8 > 0 ||  this.num9 > 0|| this.num10 > 0|| this.num11 > 0|| this.num12 > 0){
                    let sum = Number.parseInt(this.num7)+ Number.parseInt(this.num8) + Number.parseInt(this.num9) + Number.parseInt(this.num10) + Number.parseInt(this.num11) + Number.parseInt(this.num12);
                    if ( 9 < sum ){
                        // 1 : sum of input numbers are biger than MaxPrisoner
                        this.Error = 1;
                        this.ErrorPromp1 = "Enter a smaller number for strategy 2";
                    }else if (9 == sum){
                        this.Error = 0;
                        this.ErrorPromp1 = "All "+ this.MaxPrisoner1 +" prisoners have been entered for strategy 2";
                    }else{
                        this.ErrorPromp1 = this.convertNum(sum)+" prisoners have been entered for strategy 2";
                        this.Error = 0;
                    }
                }else{
                    // 1 : all input numbers are 0
                    this.Error = 2;
                    this.ErrorPromp1 = "Enter at least one prisoner for strategy 2";
                    // this.inputPromp = true;
                }
                this.promp2 = false;
            },
        },
        name: "PlayGames"
    }
</script>

<style scoped>
    .roll1{
        margin-top: 5px;
        text-align: right;
        font-weight: bold;
        min-width: 80px;
    }
    .top{
        max-width: 800px;
        margin: 0 auto;
        border: 2px solid gainsboro;
    }
    .label1{
        text-align: right;
        color: #961100;
        font-size: 25px;
    }
    .zone1{
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        font-size: 35px;
        height:60px;
        padding: 0;
        width: 100%;
        text-align: right;
    }
    .noborder{
        border: none;
        color: #961100;;
    }
    .noborder1{
        border: none;
        color: black;
        background-color: #78ecff
    }
    .noborder2{
        border: none;
        color: black;
        background-color: #FF78AE
    }
    .border{
        border: 2px solid gainsboro;
    }
    .zone2{
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        font-size: 25px;
        height:50px;
        width: 50px;
        padding: 0;
        text-align: center;
        margin-right: 15px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0;
    }

</style>