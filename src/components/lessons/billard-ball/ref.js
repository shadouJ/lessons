/**
 * Javascripts for Billard lesson
 */

 //Variables
 let rows = 0;
 let currentPool = 0;
 let mode = 0; //Demo mode
 const START_X = 40;
 const START_Y = 20;
 const MAX_SIZE = 450.0;
 const DIRECTION = {
     UP_LEFT: 0,
     DOWN_LEFT: 1,
     UP_RIGHT: 2,
     DOWN_RIGHT: 3
 }
 
 //Unit for converting length and width to canvas size
 let unit = 0;
 
 //Remaining widht and height for calculating bounces points
 let glength = 0;
 let gwidth = 0;
 let poolWidth = 0;
 let poolHeight = 0;
 let rw = 0;
 let rh = 0;
 let dir = DIRECTION.UP_RIGHT;
 let bounces = 0;
 let finish = false;
 let autoRunning = false;
 let intervalId = '';
  //onload function
 function initBillardGame(){
     let table = document.getElementById("tblResult");
     for(let i = 0; i< 28; i++){
         let row = table.insertRow(i + 1);
         let cell1 = row.insertCell(0);
         let cell2 = row.insertCell(1);
         cell1.style = 'text-align: right; font-weight: bold; padding-right: 5px';
         cell1.innerHTML = "&nbsp";
         cell2.style = 'text-align: right; font-weight: bold; padding-right: 5px';
         cell2.innerHTML = "&nbsp";
     }
 }
 
 function onLengthChanged(){
     let length = document.querySelector('#length').value;
     let width = document.querySelector('#width').value;
 
     if(!checkValidInput(length) || !checkInput(length, width)){
         document.querySelector('#length').value = '';
     }
 }
 
 function onWidthChanged(){
     let length = document.querySelector('#length').value;
     let width = document.querySelector('#width').value;
     if(!checkValidInput(width) || !checkInput(length, width)){
         document.querySelector('#width').value = '';
     }
 }
 
 checkValidInput = (input)=>{
     if(input === '' || parseFloat(input) <= 0 || parseFloat(input) > 100)
         return false;
     return true;
 }
 
 checkInput = (length, width)=>{
     if(length === '' || width === '')
         return true;
     if((parseFloat(length) < 1 && parseFloat(width) > 10) || (parseFloat(length) > 10 && parseFloat(width) < 1))
         return false;
     return true;
 }
 
 function onOKClicked(){ 
 
     let length = document.querySelector('#length').value;
     let width = document.querySelector('#width').value;
 
     if(!checkValidInput(length) || !checkValidInput(width) || !checkInput(length, width))
         return;
     length = parseFloat(length);
     width = parseFloat(width);
 
     //Swap between length and widh if necessary
     if(length > width){
         let tmp = length;
         length = width;
         width = tmp;
     }
 
     glength = length;
     gwidth = width;
 
     //Add value to table result
     let table = document.getElementById("tblResult");
     if(rows >= 28){
         let row = table.insertRow(rows + 1);
         let cell1 = row.insertCell(0);
         let cell2 = row.insertCell(1);
         cell1.style = 'text-align: right; font-weight: bold; padding-right: 5px';
         cell1.innerHTML = "&nbsp";
         cell2.style = 'text-align: right; font-weight: bold; padding-right: 5px';
         cell2.innerHTML = "&nbsp";
     }
     let row = table.rows[rows+1];
     row.cells[0].innerHTML = length + ' by ' + width;
 
     //Show controller at the bottom
     document.getElementById('controller').style.visibility = 'visible';
     document.getElementById('controlBtn').value = 'Click here for the first pool';
     document.getElementById('modeGroup').style.visibility = 'visible';
     document.getElementById('demo').checked = true;
     document.getElementById('auto').checked = false;
 
     //Hide input area
     document.getElementById('instruction').style.visibility = 'hidden';
     document.getElementById('instruction').style.display = 'none'
     //document.getElementById('inputLW').style.visibility = 'hidden';
     document.getElementById('inputLW').style.display = 'none';
 
     //Draw canvas
     document.getElementById('myCanvas').style.border = '';
     drawPoolTable(length, width);
 
     rw = width;
     rh = length;
 }
 
 function drawPoolTable(length, width){
     //100W and 100H are equal to 500px in canvas
     if(length < width){
         poolWidth = MAX_SIZE;
         poolHeight = length*MAX_SIZE/width;
         unit = MAX_SIZE/width;
     }else{
         poolHeight = MAX_SIZE;
         poolWidth = width*MAX_SIZE/length;
         unit = MAX_SIZE/length;
     }
     
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     ctx.clearRect(0, 0, c.width, c.height);
 
     //Draw 4 holes
     drawPoolHole(ctx, START_X , START_Y)
     drawPoolHole(ctx, START_X , poolHeight + START_Y)
     drawPoolHole(ctx, poolWidth + START_X, START_Y)
     drawPoolHole(ctx, poolWidth + START_X , poolHeight + START_Y)
 
     //Draw Pool table
     ctx.fillStyle = "#16a085";
     ctx.lineWidth = 2;
     ctx.strokeStyle = '#2c3e50'
     ctx.fillRect(START_X, START_Y, poolWidth, poolHeight);
     ctx.strokeRect(START_X, START_Y, poolWidth, poolHeight);
 
     //Draw Unit lines
     for(let i = 1; i < width; i++){
         drawUnitLine(ctx, unit*i + START_X, START_Y - 4, unit*i + START_X, START_Y + 4);
         drawUnitLine(ctx, unit*i + START_X, START_Y + poolHeight - 4, unit*i + START_X, START_Y + poolHeight + 4);
     }
 
     for(i = 1; i < length; i++){
         drawUnitLine(ctx, START_X - 4, unit*i + START_Y, START_X + 4, unit*i + START_Y);
         drawUnitLine(ctx, START_X + poolWidth - 4, unit*i + START_Y, START_X + poolWidth + 4, unit*i + START_Y);
     }
 
     //Draw Text
     ctx.font = "22px Arial bold";
     ctx.fillStyle = "#2c3e50";
     ctx.textAlign = "right";
     ctx.fillText(length, START_X - 5, poolHeight/2 + START_Y + 10);
     ctx.fillText(width, poolWidth/2 + START_X + 10, START_Y - 5);
 
 }
 
 function drawUnitLine(ctx, x0, y0, x1, y1){
     ctx.beginPath();
     ctx.lineWidth = 1;
     ctx.moveTo(x0, y0);
     ctx.lineTo(x1, y1);
     ctx.strokeStyle = '#c0392b'
     ctx.stroke();
 }
 
 function drawPoolHole(ctx, x, y){
     ctx.beginPath();
     ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
     ctx.fillStyle = '#2c3e50';
     ctx.fill();
 }
 
 function onModeChanged(val){
     mode = parseInt(val);
     if(mode === 0){
         document.getElementById('controlBtn').value = 'Click here for the first pool';
     }else{
         document.getElementById('controlBtn').value = 'Click here to start';
     }
 }
 
 function onControlBtnClicked(){
     if(finish){
         //Reset game
         resetGame();
         return;
     }
     //Auto mode
     if(mode === 1){
         if(!autoRunning){
             autoRunning = true;
             intervalId = setInterval(executePool, 500);
         }else{
             //PAUSE
             autoRunning = false;
             clearInterval(intervalId);
             document.getElementById('controlBtn').value = 'Click here to resume';
         }
             
     }else{
         executePool();
     }
     
     
 }
 
 function executePool(){
     //Disable radio buttons
     document.getElementById('modeGroup').style.visibility = 'hidden';
 
     //Draw bounce lines
     bounce();
 
     //Update bounces text
     let table = document.getElementById("tblResult");
     let row = table.rows[rows+1];
 
     if(!finish){
         bounces++;
         //Update button text and bounces
         if(mode === 0)
             document.getElementById('controlBtn').value = 'Click here for the next pool';
         else{
             document.getElementById('controlBtn').value = 'Click here to pause';
         }
             
     }else{
         document.getElementById('finish').style.visibility = 'visible';
         document.getElementById('controlBtn').value = 'Click here to reset';
         rows++;
         if(mode === 1){
             clearInterval(intervalId);
         }
     }
     row.cells[1].innerHTML = bounces;
 }
 
 function bounce(){
     let x0, y0, x1, y1 = 0;
     rw = parseFloat(rw.toFixed(6));
     rh = parseFloat(rh.toFixed(6));
 
     switch(dir){
         case DIRECTION.UP_LEFT:{
             if(rw >= rh){
                 x0 = rw;
                 y0 = rh;
 
                 rw -= rh;
                 dir = DIRECTION.DOWN_LEFT;
                 rh = glength;
 
                 x1 = rw;
                 y1 = 0;
             }else{
                 x0 = rw;
                 y0 = rh;
 
                 rh -= rw;
                 rw = gwidth;
                 dir = DIRECTION.UP_RIGHT;
                 
                 x1 = 0;
                 y1 = rh;
             }
             break;
         }
         case DIRECTION.UP_RIGHT:{
             if(rw >= rh){
                 x0 = gwidth - rw;
                 y0 = rh;
 
                 rw -= rh;
                 dir = DIRECTION.DOWN_RIGHT;
                 rh = glength;
 
                 x1 = gwidth - rw;
                 y1 = 0;
             }else{
                 x0 = gwidth - rw;
                 y0 = rh;
 
                 rh -= rw;
                 rw = gwidth;
                 dir = DIRECTION.UP_LEFT;
 
                 x1 = rw;
                 y1 = rh;
             }
             break;
         }
         case DIRECTION.DOWN_LEFT:{
 
             if(rw >= rh){
                 x0 = rw;
                 y0 = glength - rh;
 
                 rw -= rh;
                 dir = DIRECTION.UP_LEFT;
                 rh = glength;
 
                 x1 = rw;
                 y1 = rh;
             }else{
                 x0 = rw;
                 y0 = 0;
 
                 rh -= rw;
                 rw = gwidth;
                 dir = DIRECTION.DOWN_RIGHT;
 
                 x1 = 0;
                 y1 = glength - rh;
             }
             break;
         }
         case DIRECTION.DOWN_RIGHT:{
             
             if(rw >= rh){
                 x0 = gwidth - rw;
                 y0 = glength - rh;
 
                 rw -= rh;
                 dir = DIRECTION.UP_RIGHT;
                 rh = glength;
 
                 x1 = gwidth - rw;
                 y1 = rh;
 
             }else{
                 x0 = gwidth - rw;
                 y0 = 0;
 
                 rh -= rw;
                 rw = gwidth;
                 dir = DIRECTION.DOWN_LEFT;
 
                 x1 = rw;
                 y1 = glength - rh;
             }
             break;
         }
     }
 
     //Draw bounce line
     drawBounceLine(x0, y0, x1, y1)
 
     if(rw === 0)
         finish = true;
 
 
 }
 
 function drawBounceLine(x0, y0, x1, y1){
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     ctx.lineWidth = 2;
     ctx.moveTo(START_X + x0*unit, START_Y + y0*unit);
     ctx.lineTo(START_X + x1*unit, START_Y + y1*unit);
     ctx.strokeStyle = '#f39c12'
     ctx.stroke();
 }
 
 function resetGame(){
     //Reset global variable
     mode = 0;
     unit = 0;
     glength = 0;
     gwidth = 0;
     poolWidth = 0;
     poolHeight = 0;
     rw = 0;
     rh = 0;
     dir = DIRECTION.UP_RIGHT;
     bounces = 0;
     finish = false;
     autoRunning = false;
     intervalId = '';
 
     //Reset UI
     //Input area
     document.getElementById('instruction').style.visibility = 'visible';
     document.getElementById('instruction').style.display = 'block';
     //document.getElementById('inputLW').style.visibility = 'visible';
     document.getElementById('inputLW').style.display = 'flex';
 
     //Canvas
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     ctx.clearRect(0, 0, c.width, c.height);
     c.style = "border: solid 0px";
 
     //Controller
     document.getElementById('controller').style.visibility = 'hidden';
     document.getElementById('finish').style.visibility = 'hidden';
 }