<template>
	<div class="app--score-table">
		<table class="table">
			<thead>
				<tr>
					<th>Over</th>
					<th>B1</th>
					<th>B2</th>
					<th>B3</th>
					<th>B4</th>
					<th>B5</th>
					<th>B6</th>
					<th>Over Tally</th>
					<th>Tally</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(subArr, index) in scoreData" :key="index">
					<td class="text-center font-weight-bold">{{ index+1 }}</td>
					<td v-for="index in 6" :key="index">
						<span :class="{ 'text-danger': subArr[index-1]==='W' }">{{ subArr[index-1] }}</span>
					</td>
					<td class="text-primary">
						<span v-if="overTally[index]">{{ overTally[index][0] }} - {{ overTally[index][1] }}</span>
					</td>
					<td class="text-danger">
						<span v-if="tally[index]">{{ tally[index][0] }} - {{ tally[index][1] }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ['data', 'shouldTally'],
	data: function() {
		return {
			scoreDataForCalc: []
		};
	},
	computed: {
		scoreData() {
			return this.convertScoreData(this.data);
		},
		overTally() {
			const reOverTally = [];
			for(let i = 0; i < this.scoreDataForCalc.length; i++) {
				if(!reOverTally[i]) {
					reOverTally[i] = [0, 0];
				}
				for(let j = 0; j < this.scoreDataForCalc[i].length; j++) {
					if(this.scoreDataForCalc[i][j] === 'W') {
						reOverTally[i][0]++;
					} else {
						reOverTally[i][1] += this.scoreDataForCalc[i][j];
					}
				}
			}
			return [...reOverTally];
		},
		tally() {
			const reTally = [];
			for(let i = 0; i < this.overTally.length; i++) {
				if(i === 0) {
					reTally.push([this.overTally[i][0], this.overTally[i][1]]);
				} else {
					reTally.push([
						this.overTally[i][0] + reTally[i-1][0],
						this.overTally[i][1] + reTally[i-1][1]
					]);
				}
			}
			return [...reTally];
		}
	},
	watch: {
		shouldTally(value) {
			if(value) {
				this.scoreDataForCalc = this.convertScoreData(this.data);
			}
		}
	},
	methods: {
		/** convert the array of score data to a two-dimentional array */
		convertScoreData(scoreData) {
			const reScoreData = []; 
			const length = 6;
			let rowIndex = 0;
			for(let i = 0; i < scoreData.length; i++) {
				if(!reScoreData[rowIndex]) {
					reScoreData[rowIndex] = [];
				}
				reScoreData[rowIndex].push(scoreData[i]);
				if(reScoreData[rowIndex].length >= length ) {
					rowIndex++;
				} 
			}
			return reScoreData;
		}
	}
}
</script>

<style scoped>
.app--score-table {
	height: 400px;
	overflow-y: auto;
}
@media only screen and (max-width: 528px){
	.app--score-table {
		overflow-x: scroll;
	}
}
</style>
