<template>
	<div>
		<h2 class="text-success text-center">Many trials</h2>
		<div class="container mt-4 mb-5">
			<div class="row justify-content-center" id="canvas-container-graph">
				<canvas id="app-canvas-graph"></canvas>
			</div>
			<div class="row p-3 m-auto">
				
					<div class="col-sm-4 app--action">
						<p class="alert alert-danger" v-if="stage==3">There are {{numDecayed}} {{diceRollText}}</p>
						<p class="alert alert-danger" v-else>There are {{atomLeft}} atoms</p>
					</div>
					<div class="col-sm-3 app--action">
						<button v-if="showStart" id="startButton" type="button" class="btn btn-outline-success" @click="start">Tap here to start</button>
						<div v-if="!showStart">
							<div v-if="!isFinished">
								<div v-if="isAuto">
									<button type="button" class="btn btn-outline-success mr-3" @click="showPause=!showPause" v-if="showPause">Tap here to pause</button>
									<button type="button" class="btn btn-outline-success mr-3" @click="showPause=!showPause" v-if="!showPause">Tap here to resume</button>
								</div>
								<div v-else>
									<button type="button" class="btn btn-outline-success" @click="nextStage" :disabled="disableButton" v-if="stage==1">Tap here to throw dice</button>
									<button type="button" class="btn btn-outline-success" @click="nextStage" :disabled="disableButton" v-else>Tap here to continue</button>
								</div>
							</div>
							<div v-else><button type="button" class="btn btn-outline-dark" @click="reset" v-if="isFinished">Tap here to reset</button></div>
						</div>
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input" id="demo" name="demoOption" value= "demo" v-model="mode">
							<label class="form-check-label" for="demo">Demo</label>
							<input type="radio" class="ml-2 form-check-input" id="auto" name="autoOption" value= "auto" v-model="mode">
							<label class="form-check-label" for="auto">Auto</label>
						</div>
					</div>
				
				<div class="col-sm-5 table-container">
					<table class="table">
						<tr>
							<td class="entryDesc">Initial number of atoms:</td>
							<td class="entryData">{{trialInputs.numAtoms}}</td>
						</tr>
						<tr>
							<td class="entryDesc">Prob of decay is 1 in {{trialInputs.probDecay}}</td>
							<td class="entryData">{{probDecay}}</td>
						</tr>
						<tr>
							<td class="entryDesc">Year:</td>
							<td class="entryData">{{currentYear}}</td>
						</tr>
						<tr>
							<td class="entryDesc">Atoms left:</td>
							<td class="entryData">{{atomLeft}}</td>
						</tr>
						<tr>
							<td class="entryDesc">Percentage left:</td>
							<td class="entryData">{{percentLeft}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import Dice from './Dice.vue';
import { 
	drawGrid,
	drawGraph,
	generateRandomValues,
	getRandomNumber,
	decayedAtoms
} from './utils';

export default {
	props: {trialInputs: Object},
	components: {
		appDice: Dice
	},
	data: function() {
		return {
			//variables used for showing start button
			showStart: true,

			disableButton: false,

			//variable used by the canvas
			width: 0,
			startXOffset: 0,

			//array used for storing all the atoms
			atoms: [],
			key: 1,

			//variables for current round/year
			stage: 0,
			currentYear: 0,
			diceRoll: 0,
			numDecayed: 0,

			//this variable is used for for auto or demo mode
			mode: 'demo',

			//used for auto mode buttons
			showPause: false,
			//this id is used to kill the timer interval
			intervalId: 0,
			timeDelay: 100,
			//used for the graph drawing
			graphIntervalId: 0,
			graphDelay: 10
		}
	},
	computed: {
		isFinished: function(){
			if (this.atoms.length === 0 || this.currentYear > 20){
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
		atomLeft: function(){
			return this.atoms.length;
		},
		diceRollText: function(){
			if (this.diceRoll === 1)
				return 'ones';
			else if (this.diceRoll === 2)
				return 'twos';
			else if (this.diceRoll === 3)
				return 'threes';
			else if (this.diceRoll === 4)
				return 'fours';
			else if (this.diceRoll === 5)
				return 'fives';
			else if (this.diceRoll === 6)
				return 'sixes';
			else
				return 'N/A';
		},
		percentLeft: function(){
			if (this.trialInputs.numAtoms == 0)
				return 0 + '%';
			var res = parseFloat(((this.atomLeft/this.trialInputs.numAtoms)*100).toFixed(2));
			return res + '%';
		},
		probDecay: function(){
			if (this.trialInputs.probDecay == 0)
				return 0 + '%';
			var res = parseFloat((1/this.trialInputs.probDecay).toFixed(2));
			return res;
		}
	},
	watch: {
		isAuto: function(){
			if (this.isAuto)
				this.showPause = false;
			else{
				this.showPause = false;
				clearInterval(this.intervalId);
			}
		},
		showPause: function(){
			if (!this.showPause)
				clearInterval(this.intervalId);
			else
				this.autoMode();
		}
	},
	methods: {
		//function used to run the auto mode
		autoMode(){
			if (this.isAuto && !this.showStart){
				//check if running and show Pause button is true
				if (this.showPause == true){
					//timer to delay the execution of next stage
					this.intervalId = setInterval(() => {
						//continue until 2 blocks taken
						if (this.isFinished){
							//Clear the interval addition timer.
							clearInterval(this.intervalId);
						}
						else{
							if (!this.disableButton)
								this.nextStage();
						}
					}, this.timeDelay);
				}
			}
		},

		//this method runs the function based on current stage of the decay process
		nextStage(){
			const canvasAtoms = null;
			const canvasGraph = document.querySelector('#app-canvas-graph');
			//there are 4 different stages for each year, 
			//stage 0 for generating rand number for atoms
			if (this.stage == 0){
				//generate the random values for the atoms
				generateRandomValues(canvasAtoms, canvasGraph, this);
			}
			//stage 1 for generating the dice roll
			else if (this.stage == 1){
				this.diceRoll = getRandomNumber(1,7);
			}
			//stage 2 is for highlighting the atoms with the dice roll (i.e. decayed atoms)
			else if (this.stage == 2){
				decayedAtoms(canvasAtoms, canvasGraph, this, true);
			}
			//stage 3, removes all the rolls for the atoms and sets decayed atoms to blue and removes them from atoms array
			else if (this.stage == 3){
				decayedAtoms(canvasAtoms, canvasGraph, this, false);
			}

			//update the stage
			this.stage += 1;
			if (this.stage === 4){
				//reset variables for current round/year
				this.numDecayed = 0;
				this.stage = 0;
				this.currentYear += 1;
			}
		},
		//This function initialises random numbers for all the 100 
		start(){
			//remove the Start button
			this.showStart = false;
			
			//generate the random values for the atoms
			const canvasAtoms = null;
			const canvasGraph = document.querySelector('#app-canvas-graph');
			generateRandomValues(canvasAtoms, canvasGraph, this);

			this.stage += 1;

			if (this.isAuto)
				this.autoMode();
			//else demo mode
		},
		reset(){
			this.showStart = true;
			this.currentYear = 0;
			
			//reset the variables
			this.atoms.splice(0,this.atoms.length);

			//reset the canvas
			this.initialiseCanvases();
		},
		initialiseCanvases(){
			//reset the canvas
			const canvas = document.querySelector('#app-canvas-graph');
			canvas.width = canvas.width;
			drawInitialGraph(canvas, this);
		}
	},
	created() {
	},
	mounted() {
		// this.initialiseCanvases();
		console.log(this.trialInputs);
	},
	beforeDestroy(){
		//Clear the interval addition timer.
		clearInterval(this.intervalId);
		clearInterval(this.graphIntervalId);
	}
}
</script>

<style scoped>
	td {
		padding: 2px;
		border: 1px solid black;
		border-radius: 5px;
		text-align: right;
	}
	table {
		table-layout: auto;
		border-collapse: separate;
		border-spacing: 5px;
	}
	.entryDesc {
		color: blue;
		border: none;
		width: auto;
	}
	.entryData {
		width: 70px;
	}
	.app--action {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.app--demo-auto-option input {
		cursor: pointer;
	}

	/*CSS for the atoms and graph canvases*/
	#canvas-container-graph {
		height: 300px;
	}

	#app-canvas-graph {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
