<template>
    <div>
        <transition appear appear-class="app-appear" appear-active-class="app-appear-active">
            <div class="container mt-4 mb5">
                <div class="row">
                    <!-- Left part -->
                    <div class="col-12 col-md-6 app--lesson-left">
                        <div>





                            <div class="app--lesson-action">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td v-bind:class="td1">1</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td2">4</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td3">{{content1}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td4">{{content2}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td5">2</td>
                                        <td class="disappear"></td>
                                        <td class="disappear" ></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td15">{{content5}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td6">3</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td16">{{content6}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td ></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td19">{{content9}}</td>
                                        <td></td>
                                        <td v-bind:class="td21" style="border-bottom: white">{{content11}}</td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td ></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td20">{{content10}}</td>
                                        <td></td>
                                        <td v-bind:class="td21" style="border-top: white">{{content12}}</td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td9">5</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td17">{{content7}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td10">8</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td18">{{content8}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td11">{{content3}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td v-bind:class="td12">{{content4}}</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td13">6</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>
                                    <tr>
                                        <td v-bind:class="td14">7</td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                        <td class="disappear"></td>
                                    </tr>


                                    </tbody>
                                </table>


                            </div>
                            <div class="tt--solutions mb-5" style="padding-bottom: 30px">

                                <div class="mr-3 tt--solutions-count">
                                    <button class="btn btn-outline-success" style="margin-right: 30px" @click="playDemo" v-if="playDemoGame">Play Demo</button>

                                    <button class="btn btn-outline-success" @click="playAuto" v-if="playAutoGame">{{PlayAutoWord}}</button>

                                </div>
                            </div>
                            <div>

                            </div>


                        </div>
                    </div>

                    <!-- Right part -->
                    <div class="col-12 col-md-6 app--lesson-right" style="overflow: visible;">
                        <div class="tt-right-box"></div>
                        <div>
                            <p v-if="appear">
                                <span style="font-size: 115%;" class="badge badge-dark">{{ vs1 }}</span> vs  <span style="font-size: 115%;" class="badge badge-dark">{{vs2}}</span>
                            </p>
                            <div class="row" style="height: 70px;width: 350px;">
                                <div v-html="diceOne" style="margin-right: 100px;margin-left: 15px;"></div>
                                <div v-html="diceTwo"></div>
                            </div>
                            <div class="row" style="height: 40px;width: 350px;">
                                <div v-html="diceThree" style="margin-right: 100px;margin-left: 15px;"></div>
                                <div v-html="diceFour"></div>
                            </div>

                            <table style="width: 350px;">
                                <tbody>
                                <tr v-bind:class="teamC1">
                                    <td>1</td>
                                    <td>{{team1}}</td>
                                </tr>
                                <tr v-bind:class="teamC2">
                                    <td>2</td>
                                    <td>{{team2}}</td>
                                </tr>
                                <tr v-bind:class="teamC3">
                                    <td>3</td>
                                    <td>{{team3}}</td>
                                </tr>
                                <tr v-bind:class="teamC4">
                                    <td>4</td>
                                    <td>{{team4}}</td>
                                </tr>
                                <tr v-bind:class="teamC5">
                                    <td>5</td>
                                    <td>{{team5}}</td>
                                </tr>
                                <tr  v-bind:class="teamC6">
                                    <td>6</td>
                                    <td>{{team6}}</td>
                                </tr>
                                <tr v-bind:class="teamC7">
                                    <td>7</td>
                                    <td>{{team7}}</td>
                                </tr>
                                <tr v-bind:class="teamC8">
                                    <td>8</td>
                                    <td>{{team8}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import global from "./EnterTeams"
    import pickedGlobal from "./PercentageAdvantage"

    export default {
        name: "PlayFinals",
        data:function () {
            return{
                td1: "appear",
                td2: "appear",
                td3:"appear",
                td4:"appear",
                td5: "appear",
                td6: "appear",
                td7:"appear",
                td8:"appear",
                td9: "appear",
                td10: "appear",
                td11:"appear",
                td12:"appear",
                td13: "appear",
                td14:"appear",
                td15:"appear",
                td16: "appear",
                td17: "appear",
                td18:"appear",
                td19:"appear",
                td20:"appear",
                td21:"appear",

                count:0,

                vs1:"",
                vs2:"",

                resTeam1:[],
                resTeam2:[],
                resTeam3:[],

                content1:"",
                content2:"",
                content3:"",
                content4:"",
                content5:"",
                content6:"",
                content7:"",
                content8:"",
                content9:"",
                content10:"",
                content11:"",
                content12:"",


                team1:"",
                team2:"",
                team3:"",
                team4:"",
                team5:"",
                team6:"",
                team7:"",
                team8:"",

                teamC1:"teamStyle",
                teamC2:"teamStyle",
                teamC3:"teamStyle",
                teamC4:"teamStyle",
                teamC5:"teamStyle",
                teamC6:"teamStyle",
                teamC7:"teamStyle",
                teamC8:"teamStyle",

                appear : false,
                playDemoGame:true,
                playAutoGame:true,

                diceOne:"",
                diceTwo:"",
                diceThree:"",
                diceFour:"",

                PlayAutoWord:"Play Auto",
                pause: false,


            }

        },
        mounted:function(){
            var finalTeam = global.methods.returnFinalTeam()
            this.team1 = finalTeam[0]
            this.team2 = finalTeam[1]
            this.team3 = finalTeam[2]
            this.team4 = finalTeam[3]
            this.team5 = finalTeam[4]
            this.team6 = finalTeam[5]
            this.team7 = finalTeam[6]
            this.team8 = finalTeam[7]

        },
        methods:{
            reset:function(){
                this.td1= "appear";
                this.td2= "appear";
                this.td3= "appear";
                this.td4= "appear";
                this.td5= "appear";
                this.td6= "appear";
                this.td7= "appear";
                this.td8= "appear";
                this.td9= "appear";
                this.td10= "appear";
                this.td11= "appear";
                this.td12= "appear";
                this.td13= "appear";
                this.td14= "appear";
                this.td15= "appear";
                this.td16= "appear";
                this.td17= "appear";
                this.td18 = "appear";
                this.td19= "appear";
                this.td20= "appear";
                this.td21= "appear";

                this.count = 0;


                this.vs1 = "";
                this.vs2 = "";



                this.content1 = "";
                this.content2="";
                this.content3 = "";
                this.content4="";
                this.content5 = "";
                this.content6="";
                this.content7 = "";
                this.content8="";
                this.content9 = "";
                this.content10="";
                this.content11= "";
                this.content12="";


                this.team1 = "";
                this.team2 = "";
                this.team3 = "";
                this.team4 = "";
                this.team5 = "";
                this.team6 = "";
                this.team7 = "";
                this.team8 = "";

                this.teamC1 ="teamStyle";
                this.teamC2 ="teamStyle";
                this.teamC3 ="teamStyle";
                this.teamC4 ="teamStyle";
                this.teamC5 ="teamStyle";
                this.teamC6 ="teamStyle";
                this.teamC7 ="teamStyle";
                this.teamC8 ="teamStyle";

                this.appear = false;
                this.playDemoGame = true;
                this.playAutoGame = true;

                this.diceOne = "";
                this.diceTwo = "";

                this.PlayAutoWord = "Play Auto";
                this.pause= false;
            },
            sleep: function(ms){
                return new Promise(resolve=>{
                    setTimeout(resolve,ms)
                })
            },

            playDemo:async function () {
                if(this.PlayAutoWord=="Play Auto")
                    {this.PlayAutoGame = false;}
                this.diceOne = ""
                this.diceTwo = ""
                var finalTeam = global.finalTeam
                var switcher;
                if(this.count==0){
                    this.appear = true
                    switcher = await this.randomTwoNumbers(finalTeam[0],finalTeam[3],0,3)

                    if (switcher==true){
                        this.td1="appear green"
                        this.td2 = "appear red"
                        this.content1 = 4
                        this.content5 = 1


                    }else if(switcher==false) {
                        this.td2="appear green"
                        this.td1 = "appear red"
                        this.content5 = 4
                        this.content1 = 1

                    }
                }else if(this.count==1){
                    switcher =await this.randomTwoNumbers(finalTeam[1],finalTeam[2],1,2)

                    if (switcher==true){


                        this.td5 = "appear green"
                        this.td6 = "appear red"
                        this.content3 = 3
                        this.content7 = 2


                    }else {
                        this.td6 = "appear green"
                        this.td5 = "appear red"
                        this.content7 = 3
                        this.content3 = 2

                    }
                }else if(this.count==2){
                    switcher = await this.randomTwoNumbers(finalTeam[4],finalTeam[7],4,7)
                    if(switcher==true){
                        this.td9 = "appear green"
                        this.td10 = "appear kickOut"
                        this.content2 = 5
                        this.teamC8 = "teamStyle kickOut"
                    }else {
                        this.td10 = "appear green"
                        this.td9 = "appear kickOut"
                        this.content2 = 8
                        this.teamC5 = "teamStyle kickOut"
                    }

                }else if(this.count==3){
                    switcher =await this.randomTwoNumbers(finalTeam[5],finalTeam[6],5,6)
                    if(switcher==true){
                        this.td13 = "appear green"
                        this.td14 = "appear kickOut"
                        this.content4 = 6
                        this.teamC7 = "teamStyle kickOut"
                    }else{
                        this.td14 = "appear green"
                        this.td13 = "appear kickOut"
                        this.content4 = 7
                        this.teamC6 = "teamStyle kickOut"

                    }
                }else if(this.count==4){
                    var a = this.content1
                    var b = this.content2
                    switcher =await this.randomTwoNumbers(finalTeam[a-1],finalTeam[b-1],a-1,b-1)
                    if(switcher==true){
                        this.content8 = this.content1
                        this.kickOutTeam(b)
                        this.td3 = "appear green"
                        this.td4 = "appear kickOut"

                    }else {
                        this.content8 = this.content2
                        this.kickOutTeam(a)
                        this.td4 = "appear green"
                        this.td3 = "appear kickOut"
                    }
                }else if(this.count ==5){
                    var a = this.content3
                    var b = this.content4
                    switcher =await this.randomTwoNumbers(finalTeam[a-1],finalTeam[b-1],a-1,b-1)
                    if(switcher==true){
                        this.content6 = this.content3
                        this.td11 = "appear green"
                        this.td12 = "appear kickOut"
                        this.kickOutTeam(b)

                    }else {
                        this.kickOutTeam(a)

                        this.content6 = this.content4
                        this.td12 = "appear green"
                        this.td11 = "appear kickOut"
                    }
                }else if(this.count==6){
                    var a = this.content5
                    var b = this.content6
                    switcher =await this.randomTwoNumbers(finalTeam[a-1],finalTeam[b-1],a-1,b-1)
                    if(switcher==true){
                        this.kickOutTeam(b)

                        this.content9 = this.content5
                        this.td15 = "appear green"
                        this.td16 = "appear kickOut"
                    }else {
                        this.kickOutTeam(a)

                        this.content9 = this.content6
                        this.td16 = "appear green"
                        this.td15 = "appear kickOut"
                    }

                }else if(this.count == 7){
                    var a = this.content7
                    var b = this.content8
                    switcher =await this.randomTwoNumbers(finalTeam[a-1],finalTeam[b-1],a-1,b-1)
                    if(switcher==true){
                        this.kickOutTeam(b)

                        this.content10 = this.content7
                        this.td17 = "appear green"
                        this.td18 = "appear kickOut"
                    }else {
                        this.kickOutTeam(a)

                        this.content10 = this.content8
                        this.td18 = "appear green"
                        this.td17 = "appear kickOut"
                    }

                }else if(this.count==8){
                    var a = this.content9
                    var b = this.content10
                    switcher =await this.randomTwoNumbers(finalTeam[a-1],finalTeam[b-1],a-1,b-1)
                    if(switcher==true){
                        this.kickOutTeam(b)

                        this.content11 = this.content9
                        this.td19 = "appear green"
                        this.td20 = "appear kickOut"
                    }else {
                        this.kickOutTeam(a)

                        this.content11 = this.content10
                        this.td20 = "appear green"
                        this.td19 = "appear kickOut"
                    }
                this.content12 = "wins";
                    this.playAutoWord = "reset"

                    this.playDemoGame = false
                }else if(this.count==9){


                }
                this.playAutoGame = true
                this.count++

                
            },
            playAuto:async function(){
                if(this.PlayAutoWord=="Play Auto") {
                    this.pause = false
                    this.PlayAutoWord = "Pause"
                    //this.playDemoGame = false
                    while (this.count <= 9) {
                        if(this.pause == true){break;}
                        var temple = await this.sleep(1500);
                        this.playDemo()
                    }
                    if(this.count>=8){
                        this.playAutoWord = "reset"

                        this.playDemoGame = false
                    }

                }
                else if(this.PlayAutoWord =="Pause"){
                    this.PlayAutoWord = "Play Auto";
                    this.pause = true
                }
                else if(this.PlayAutoWord == "reset"){
                    this.reset()
                }
            },
            randomTwoNumbers: async function (teamName1, teamName2,i,j) {
                this.playDemoGame = false
                this.PlayAutoGame = false
                this.diceThree = ""
                this.diceFour = ""

                this.vs1 = teamName1
                this.vs2 = teamName2
                var random1 = 0;
                var random2 = 0;
                if(pickedGlobal.methods.returnPicked()==0){
                random1 = Math.floor(Math.random()*6)+1
                random2 = Math.floor(Math.random()*6)+1

                var html1 = this.diceGenerator(random1)
                if(random1==random2){
                    if(random1>3){
                        random2 = random1-1
                    }else {
                        random2 = random1+1
                    }
                }
                var html2 = this.diceGenerator(random2)
                var temple=await this.sleep(500);
                this.diceOne = html1
                var temple=await this.sleep(500);
                this.diceTwo = html2}
                else {
                    var number = (pickedGlobal.methods.returnPicked())*(i-j)
                    var randomNumber = Math.floor(200*Math.random())+1
                    var html = this.diceGenerator(randomNumber)
                    var m1 = 100 - number
                    var m2 = m1+1
                    this.diceThree = "<div>("+1+"~"+m1+")</div>"
                    this.diceFour = "<div>("+m2+"~"+200+")</div>"
                    var temple=await this.sleep(500);
                    this.diceOne = html
                    random1 = randomNumber
                    if(randomNumber<=m1)
                        random2 = 0;
                    else random2 = 10000;

                }
                if(this.PlayAutoWord =="Play Auto"){
                this.playDemoGame = true}
                this.playAutoGame = true
                if(this.count>=8){
                    this.PlayAutoWord = "reset"
                }

                return random1>random2
            },
            kickOutTeam:function (i) {
                if(i==1){
                    this.teamC1 = "teamStyle kickOut"
                }else if(i==2){
                    this.teamC2 = "teamStyle kickOut"
                }else if(i==3){
                    this.teamC3 = "teamStyle kickOut"
                }else if(i==4){
                    this.teamC4 = "teamStyle kickOut"
                }else if(i==5){
                    this.teamC5 = "teamStyle kickOut"
                }else if(i==6){
                    this.teamC6 = "teamStyle kickOut"
                }else if(i==7){
                    this.teamC7 = "teamStyle kickOut"
                }else if(i==8){
                    this.teamC8 = "teamStyle kickOut"
                }

            },
            diceGenerator:function (i) {
                var percentage = pickedGlobal.methods.returnPicked()
                if(percentage==0){
                var htmlContent = ""
                if(i==1){
                    htmlContent ="<table class='dice'><tbody><tr><td class=\"disappearDice\"></td><td class=\"disappearDice\"></td><td class=\"disappearDice\"></td></tr><tr><td class=\"disappearDice\"></td><td class=\"diceCircle\"></td><td class=\"disappearDice\"></td></tr>\n" +
                        "                            <tr><td class=\"disappearDice\"></td><td class=\"disappearDice\"></td><td class=\"disappearDice\"></td></tr>\n" +
                        "                            </tbody></table>"
                }

                else if(i==2){
                    htmlContent = '<table class=\'dice\'><tbody><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr><tr><td><div class="diceCircle"></div></td><td class="disappearDice"></td><td><div class="diceCircle"></div></td></tr><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr></tbody></table>'

                }
                else if(i==3){
                    htmlContent = '<table class=\'dice\'><tbody><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr><tr><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td></tr><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr></tbody></table>'
                }
                else if(i==4){
                    htmlContent = '<table class=\'dice\'><tbody><tr><td><div class="diceCircle"></div></td><td class="disappearDice"></td><td><div class="diceCircle"></div></td></tr><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr><tr><td><div class="diceCircle"></div></td><td class="disappearDice"></td><td><div class="diceCircle"></div></td></tr></tbody></table>'
                }
                else if(i==5){
                    htmlContent ='<table class=\'dice\'><tbody><tr><td><div class="diceCircle"></div></td><td class="disappearDice"></td><td><div class="diceCircle"></div></td></tr><tr><td class="disappearDice"></td><td><div class="diceCircle"></div></td><td class="disappearDice"></td></tr><tr><td><div class="diceCircle"></div></td><td class="disappearDice"></td><td><div class="diceCircle"></div></td></tr></tbody></table>'
                }else if(i==6){
                    htmlContent = '<table class=\'dice\'><tbody><tr><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td></tr><tr><td class="disappearDice"></td><td class="disappearDice"></td><td class="disappearDice"></td></tr><tr><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td><td><div class="diceCircle"></div></td></tr></tbody></table>'
                }
                }else {

                    htmlContent = '<div class=\'dice\'>' +i+'</div>'
                }
                return htmlContent
            }

        }
    }
</script>

<style scoped>
    td.appear{
        text-align: center;
        width: 35px;
        height: 35px;
        border: black 1px solid;
        margin: 5px;
    }
    .disappear{
        width: 35px;
        height: 35px;

        margin: 5px;
    }
    .green{
        background: #A1D4AD;
    }
    .red{
        background: #aaaaaa;
    }
    .kickOut{
        background: red;
    }
    .teamStyle{
        border: black solid;
        width: 100%;
    }
    .teamStyle td{
        border:black solid;
        padding :10px;
        margin:3px;
        border-radius: 3px;

    }
    /deep/ .dice {

        width: 60px;
        height:60px;
        background-color: yellow;
        border-radius: 10px;
        text-align: center;
        font-size: 30px;

    }
    /deep/ .diceCircle{
        border-radius:10px;
        background: black;
        width: 20px;
        height: 20px;


    }
    /deep/ .disappearDice >>> td{
        width: 20px;
        height:20px
    }


</style>