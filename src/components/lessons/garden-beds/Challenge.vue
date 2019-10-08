<template>
	<div>
		<h2 class="text-success text-center">Challenge</h2>
		<div class="container mt-4 mb-5">
			<div class="row">
				<div class="col-6">
					<div class="row">
						<h4>Row of <strong>{{numPlants}}</strong> Plants</h4>
					</div>
					<div class="row">
						<form>
							<div class="form-group row">
								<label for="numTilesInput" class="col-sm-9 col-form-label"><b>Guess</b> final number of tiles:</label>
								<div class="col-sm-3">
									<input type="number" 
										v-model="numTilesInput"
										class="form-control"
										id="numTilesInput"
										:disabled="isSubmitted">
								</div>
							</div>
						</form>
					</div>
					<div class="row">
						<button type="button" class="btn btn-lg btn-block btn-outline-success" @click="reset" v-if="!isStarted">Start</button>
						<button type="button" class="btn btn-secondary btn-lg btn-block" @click="submitInput" :disabled="isSubmitted" v-else>Submit Guess</button>
					</div>
					<div class="row p-3 justify-content-center">
						<p v-bind:class="{'alert mr-3':true, 'alert-success':(isCorrect), 'alert-danger':(!isCorrect)}" v-if="isFinished"><b>{{guessRes}}</b></p>
						<p class="alert alert-info mr-3" v-if="isFinished">Garden bed built, click <b>Start</b> to make another.</p>
					</div>
				</div>
				<div class="col-6">
					<table class="table table-hover fixed-header">
						<thead class="thead-light">
							<tr>
								<th scope="col"># Plants</th>
								<th scope="col"># Tiles</th>
							</tr>
						</thead>
						<div>
							<tbody>
								<tr v-for="entry in tableEntries" :key="entry.key">
									<th scope="row">{{entry.numPlants}}</th>
									<td>{{entry.numTiles}}</td>
								</tr>
							</tbody>
						</div>
					</table>
				</div>
			</div>
			<div class="row justify-content-center" id="canvas-container">
				<canvas id="app-canvas"></canvas>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { 
	// getRandomNum
	addNextTile,
	drawNextCanvas
} from './utils';
import plant from "@/assets/plant.png";

export default {
	data: function() {
		return {
			plant: plant,
			numPlants: 0,
			numTiles: 0,

			//user input, and flags to show/hide buttons
			numTilesInput: 0,
			isSubmitted: false,
			isStarted: false,

			//flag used for reset button
			isDisabled: true,
			edgeCounter: 0,

			//array used for storing past garden beds
			tableEntries: [],
			key: 1,

			//These values are used by random random generator to create the plant length
			minBedLength: 1,
			maxBedLength: 10,

			//this value used by the timer, as to how fast the tiles should be added.
			timeDelay: 300,
			
			//this id is used to kill the timer interval
			intervalId: 0
		}
	},
	computed: {
		expectedNumTiles: function(){
			return this.numPlants*2+6;
		},
		isFinished: function(){
			if (this.numTiles === this.expectedNumTiles){
				//update the variables when finished
				this.isStarted = false;
				this.isSubmitted = false;

				//store the value in the table
				this.tableEntries.push({numPlants: this.numPlants, numTiles: this.numTiles});
				this.key += 1;
				return true;
			}
			else{
				return false;
			}
		},
		isCorrect: function(){
			//compare for correct answer and provide the output to user.
			if (parseInt(this.numTilesInput) === this.expectedNumTiles){
				return true;
			}
			else {
				return false;
			}
		},

		guessRes: function(){
			//Provide correct text output based on isCorrect value
			if (this.isCorrect){
				return 'Correct!';
			}
			else {
				return 'Wrong!';
			}
		}
	},
	methods: {
		submitInput(){
			this.isSubmitted = true;
		},
		//This function adds another tile to the canvas, going around the plants.
		addTile(){
			const canvas = document.querySelector('#app-canvas');
			addNextTile(canvas, this);
		},

		//This function resets the plant to a new value and removes all the tiles from the canvas. 
		reset(){
			//reset the variables
			this.numTiles = 0;
			this.edgeCounter = 0;
			this.isStarted = true;
			//create random number of plants between 1 and 50
			//NOTE: for testing purposes set the inputs to desired number of plants
			this.numPlants = this.getRandomNum(this.minBedLength, this.maxBedLength);
			//draw the canvas based on the numPlants
			const canvas = document.querySelector('#app-canvas');
			drawNextCanvas(canvas, this);

			//timer to delay the addition of next tile, using intervals of timeDelay
			this.intervalId = setInterval(() => {
				this.addTile();

				//continue adding tiles until all tiles added
				if (this.isFinished) {
					//Clear the interval addition timer.
					clearInterval(this.intervalId);
				}
			}, this.timeDelay);
		},

		//This function returns a random number between the given min and max
		getRandomNum(min, max){
			return Math.floor(Math.random() * (max-min)) + min;
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
	#canvas-container {
		height: 300px;
	}

	#app-canvas {
		width: 100%;
		height: 100%;
		border: none;
	}

	#app-canvas {
		width: 100%;
		border: none;
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
