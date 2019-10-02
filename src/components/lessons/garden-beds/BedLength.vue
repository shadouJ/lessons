<template>
	<div>
		<h2 class="text-success text-center">Enter Your Own Bed Length</h2>
		<div class="container mt-4 mb-5">
			<div class="row">
				<div class="col-6">
					<div class="row">
						<h4>Row of <strong>{{numPlants}}</strong> Plants</h4>
					</div>
					<div class="row">
						<form>
							<div class="form-group row">
								<label for="numPlantsInput" class="col-sm-9 col-form-label">Current number of <b>plants</b>:</label>
								<div class="col-sm-3">
									<input type="number" 
										v-model="numPlantsInput"
										class="form-control"
										min="1"
										max="50" 
										id="numPlantsInput">
								</div>
							</div>
							<div class="form-group row">
								<label for="numTilesInput" class="col-sm-9 col-form-label">Current number of <b>tiles</b>:</label>
								<div class="col-sm-3">
									<input type="number" 
										v-model="numTiles"
										class="form-control"
										:disabled="isDisabled" 
										id="numTilesInput">
								</div>
							</div>
						</form>
					</div>
					<div class="row" v-if="showStart">
						<button type="button" class="btn btn-primary btn-lg btn-block" @click="reset">Start</button>
					</div>
					<div class="row" v-else>
						<button type="button" class="btn btn-outline-dark mr-3" @click="reset" :disabled="!isFinished">Reset</button>
						<button type="button" class="btn btn-outline-success btn-lg mr-3" @click="addTile" :disabled="isFinished">Add Tile</button>
					</div>
					<div class="row p-3 justify-content-center">
						<p class="alert alert-info mr-3" v-if="isFinished">Garden bed built, type <b>new</b> bed length and click <b>Reset</b> to make another.</p>
						<p class="alert alert-danger mr-3" v-if="showInputError">Please enter an whole number between {{minBedLength}} to {{maxBedLength}}.</p>
					</div>
				</div>
				<div class="col-6">
					<table class="table fixed-header table-hover">
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
			<div class="row justify-content-center">
				<canvas id="app-canvas"></canvas>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import { 
	addNextTile,
	drawNextCanvas
} from './utils';
import plant from "@/assets/plant.png";

export default {
	data: function() {
		return {
			//Used by the plant picture
			plant: plant,

			numPlants: 0,
			numTiles: 0,
			edgeCounter: 0,

			//flag used for reset button
			isDisabled: true,

			//variables used for showing start button and input error msg
			showInputError: false,
			showStart: true,

			//array used for storing past garden beds
			tableEntries: [],
			key: 1,

			//input obtained from user
			numPlantsInput: 0,

			minBedLength: 1,
			maxBedLength: 50
		}
	},
	computed: {
		expectedNumTiles: function(){
			return this.numPlants*2+6;
		},
		isFinished: function(){
			if (this.numTiles === this.expectedNumTiles){
				return true;
			}
			else{
				return false;
			}
		}
	},
	methods: {
		//This function adds another tile to the canvas, going around the plants.
		addTile(){
			const canvas = document.querySelector('#app-canvas');
			addNextTile(canvas, this);
		},

		//This function resets the plant to a new value and removes all the tiles from the canvas. 
		reset(){
			const input = parseInt(this.numPlantsInput);
			if ((input >= this.minBedLength) && (input <= this.maxBedLength)){
				//remove the Start button and input error msg on correct input
				this.showInputError = false;
				this.showStart = false;
				//store the value in the table
				if ((this.numTiles != 0) && (this.isFinished)){
					this.tableEntries.push({numPlants: this.numPlants, numTiles: this.numTiles});
					this.key += 1;
				}
				//reset the variables
				this.numTiles = 0;
				this.edgeCounter = 0;
				//number of plants obtained from user
				this.numPlants = input;
				//draw the canvas based on the numPlants
				const canvas = document.querySelector('#app-canvas');
				drawNextCanvas(canvas, this);
			}
			else {
				this.showInputError = true;
			}
		}
	},
	created() {
	},
	mounted() {
	}
}
</script>

<style scoped>
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
