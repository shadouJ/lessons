<template>
	<div>
		<h2 class="text-success text-center">Play a game</h2>
		<div class="container mt-4 mb-5">
			<div v-if="showInputs" class="row justify-content-center">
				<form>
					<div class="form-group row">
						<label for="numPlantsInput" class="col-sm-9 col-form-label" style="color: red">Enter number of red blocks:</label>
						<div class="col-sm-3">
							<input type="number" 
								v-model="numRedBlocks"
								class="form-control"
								min="1"
								max="100" 
								id="numRedBlocks">
						</div>
					</div>
					<div class="form-group row">
						<label for="numTilesInput" class="col-sm-9 col-form-label" style="color: blue">Enter number of blue blocks:</label>
						<div class="col-sm-3">
							<input type="number" 
								v-model="numBlueBlocks"
								class="form-control"
								min="1"
								max="100" 
								id="numBlueBlocks">
						</div>
					</div>
					<p v-bind:class="{'alert mr-3':true, 'alert-info':(!showInputError), 'alert-danger':(showInputError)}">Please enter an whole number between {{minBlockInput}} to {{maxBlockInput}}.</p>
					<button type="button" class="btn btn-outline-success" @click="checkInputs" style="width: 30%">OK</button>
				</form>
			</div>
			<div v-else class="row">
				<div class="col-6">
					<div class="row">
						<h4>Bag contains <strong style="color:red">{{numRedBlocks}}</strong> and <strong style="color:blue">{{numBlueBlocks}}</strong></h4>
						<h5>Player A wins if the colours are the same.</h5>
						<h5>Player B wins if the colours are different.</h5>
					</div>

					<div class="row">
						<h5 class="statLabel col-3"></h5>
						<h5 class="statLabel col-2">Same (A)</h5>
						<h5 class="statLabel col-2">Different (B)</h5>
						<h5 class="statLabel col-2">Total</h5>
					</div>
					<div class="row">
						<h5 class="statLabel col-3">Number of wins:</h5>
						<h4 class="stat col-2">{{numSame}}</h4>
						<h4 class="stat col-2">{{numDiff}}</h4>
						<h4 class="stat col-2">{{numTotal}}</h4>
					</div>
					<div class="row">
						<h4 class="statLabel col-3"></h4>
						<h4 class="stat col-2">{{statSame}}</h4>
						<h4 class="stat col-2">{{statDiff}}</h4>
						<h4 class="stat col-2"></h4>
					</div>
					<div class="row">
						<h4 class="col-10">First draw (A)</h4>
						<div class="col-2"></div>
					</div>
					<div class="row">
						<h4 class="col-10">Second draw (B)</h4>
						<div class="col-2"></div>
					</div>

					<div class="app--action mt-3">
						<button v-if="showStart" id="startButton" type="button" class="btn btn-outline-success" @click="start">Tap here to begin</button>
						<div v-if="!showStart">
							<button type="button" class="btn btn-outline-dark mr-3" @click="reset" v-if="isFinished">Reset</button>
							<button type="button" class="btn btn-outline-success btn-lg mr-3" @click="drawBlock" v-else :disabled="isAuto">Tap here for Player {{player}} to draw a block at random</button>
						</div>
						<div class="app--demo-auto-option mt-2">
							<div class="form-check form-check-inline">
								<input type="radio" class="form-check-input" id="demo" name="demoOption" value= "demo" v-model="mode">
								<label class="form-check-label" for="demo">Demo</label>
								<input type="radio" class="ml-2 form-check-input" id="auto" name="autoOption" value= "auto" v-model="mode">
								<label class="form-check-label" for="auto">Auto</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="row justify-content-center" id="canvas-container">
						<canvas id="app-canvas"></canvas>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { 
	drawNextBlock,
	drawNextCanvas
} from './utils';

export default {
	data: function() {
		return {
			//flag used for reset button
			isDisabled: true,

			//player turn
			player: 'A',
			turn: 0,

			//variables used for getting input from user and input error msg
			showInputs: true,
			showInputError: false,
			showStart: true,

			//array used for storing the blocks
			blocks: [],
			takenBlocks: [],
			key: 1,
			width: 0,

			//input obtained from user
			numRedBlocks: 0,
			numBlueBlocks: 0,

			minBlockInput: 1,
			maxBlockInput: 100,

			//this variable is used for for auto or demo mode
			mode: 'demo',
			//this id is used to kill the timer interval
			intervalId: 0,

			//variables used for storing the statistics
			numSame: 0,
			numDiff: 0
		}
	},
	computed: {
		//this value used by the timer, as to how fast the tiles should be added.
		timeDelay: function(){
			//draw one block from the bag every 0.5s
			return (500);
		},
		isFinished: function(){
			if (this.turn === 2){
				return true;
			}
			else{
				return false;
			}
		},
		isAuto: function(){
			if (this.mode == "auto"){
				return true;
			}
			else {
				return false;
			}
		},
		//calculate the total and statistics for each player for each
		numTotal: function(){
			return this.numSame+this.numDiff;
		},
		statSame: function(){
			if (this.numTotal == 0)
				return 0 + '%';
			var res = parseFloat(((this.numSame/this.numTotal)*100).toFixed(2));
			return res + '%';
		},
		statDiff: function(){
			if (this.numTotal == 0)
				return 0 + '%';
			var res = parseFloat(((this.numDiff/this.numTotal)*100).toFixed(2));
			return  res + '%';
		}
	},
	watch: {
		isAuto: function(){
			if (!this.showStart){
				if (this.isAuto){
					//timer to delay the addition of next tile, using intervals of timeDelay
					this.intervalId = setInterval(() => {
						this.drawBlock();

						//continue adding tiles until all tiles added
						if (this.isFinished) {
							//Clear the interval addition timer.
							clearInterval(this.intervalId);
						}
					}, this.timeDelay);
				}
				//else demo mode, adds tiles using drawBlock button
				else {
					clearInterval(this.intervalId);
				}
			}
		},
		isFinished: function(){
			if (this.isFinished === true){
				//update the stats when finished the round
				if (this.takenBlocks[0].colour === this.takenBlocks[1].colour)
					this.numSame += 1;
				else
					this.numDiff += 1;
			}
		}
	},
	methods: {
		//this function changes the interface from inputs.
		checkInputs(){
			const inputRed = parseInt(this.numRedBlocks);
			const inputBlue = parseInt(this.numBlueBlocks);
			if ((inputRed >= this.minBlockInput) && (inputRed <= this.maxBlockInput) && (inputBlue >= this.minBlockInput) && (inputBlue <= this.maxBlockInput)){
				//input obtained from user
				this.numRedBlocks = inputRed;
				this.numBlueBlocks = inputBlue;

				this.showInputs = false;
			}
			else {
				this.showInputError = true;
			}
		},

		//This function draws a block from the canvas.
		drawBlock(){
			const canvas = document.querySelector('#app-canvas');
			drawNextBlock(canvas, this);

			//update player and turn
			if (this.player === 'A')
				this.player = 'B';
			else
				this.player = 'A';
			this.turn += 1;
		},

		//This function resets the plant to a new value and removes all the tiles from the canvas. 
		start(){
			//remove the Start button and input error msg on correct input
			this.showStart = false;

			const canvas = document.querySelector('#app-canvas');
			drawNextCanvas(canvas, this);

			if (this.isAuto){
				//timer to delay the addition of next tile, using intervals of timeDelay
				this.intervalId = setInterval(() => {
					this.drawBlock();

					//continue adding tiles until all tiles added
					if (this.isFinished) {
						//Clear the interval addition timer.
						clearInterval(this.intervalId);
					}
				}, this.timeDelay);
			}
			//else demo mode, adds tiles using drawBlock button
		},
		reset(){
			this.showStart = true;
			//store the value in the table

			//reset the variables
			this.player = 'A';
			this.turn = 0;
			this.blocks.splice(0, this.blocks.length);
			this.takenBlocks.splice(0, this.takenBlocks.length);

			//draw the canvas based on the user inputs
			const canvas = document.querySelector('#app-canvas');
			canvas.width = canvas.width;
		}
	},
	created() {
	},
	mounted() {
	},
	beforeDestroy(){
		//Clear the interval addition timer.
		clearInterval(this.intervalId);
	}
}
</script>

<style scoped>
	.statLabel {
		color: darkred;
		text-align: center;
	}
	.stat {
		color: blue;
		border: 1px solid grey;
		text-align: center;
		height: 60px;
		margin-right: 2px;
	}

	h5 {
		color: green;
	}
	.app--action {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#startButton {
		width: 60%;
	}

	.app--demo-auto-option input,	.app--demo-auto-option label  {
		cursor: pointer;
	}

	#canvas-container {
		height: 500px;
	}

	#app-canvas {
		width: 100%;
		height: 100%;
		border:1px solid #000000;
		background-color: #F5F85B;
	}

	/*Keep height and header fixed and overflow using scroll*/
	.fixed-header tbody {
		display: block;
		overflow: auto;
		height: 150px;
		border: #e9ecef 1px solid;
	}
	.fixed-header thead tr {
		display: block;
	}
	.fixed-header th, .fixed-header td {
		width: 270px;
	}
</style>
