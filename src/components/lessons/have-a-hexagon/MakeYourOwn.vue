<template>
	<div class="container mt-3 mb-5">
		<h3 class="text-center text-success">
			Make your own hexagon
		</h3>
		<div class="mt-4 row">
			<app-hexagon class="col-md-4" 
				:data="hexLeft" 
				:selected="[]"
			></app-hexagon>
			<app-hexagon class="col-md-4" 
				:data="hexMiddle" 
				:selected="[]"
			></app-hexagon>
			<app-hexagon class="col-md-4" 
				:data="hexRight" 
				:selected="[]"
			></app-hexagon>
		</div>
		<div class="app--set-hexagon">
			<div class="app--set-hexagon-row">
				<div class="app--set-hexagon-label">Left</div>
				<div class="app--set-hexagon-input" v-for="(number, index) in hexLeft" :key="index">
					<input 
						type="number" 
						min="1"
						max="36"
						class="form-control"
						v-model.number="hexLeft[index]"
					>
				</div>
			</div>
			<div class="app--set-hexagon-row">
				<div class="app--set-hexagon-label">Middle</div>
				<div class="app--set-hexagon-input" v-for="(number, index) in hexMiddle" :key="index">
					<input 
						type="number" 
						min="1"
						max="36"
						class="form-control"
						v-model.number="hexMiddle[index]" >
				</div>
			</div>
			<div class="app--set-hexagon-row">
				<div class="app--set-hexagon-label">Right</div>
				<div class="app--set-hexagon-input" v-for="(number, index) in hexRight" :key="index">
					<input 
						type="number" 
						min="1"
						max="36"
						class="form-control"
						v-model.number="hexRight[index]">
				</div>
			</div>
		</div>
		<div class="app--action mt-3">
			<button class="btn btn-outline-success" @click="handleSetting">OK</button>
			<button class="btn btn-outline-dark" @click="handleRestore">Restore</button>
		</div>
		<div class="text-center mt-2" v-if="invalidMessage">
			<div class="badge badge-danger">{{ invalidMessage }}</div>
		</div>
	</div>
</template>

<script>
import Hexagon from './Hexagon.vue';

export default {
	components: {
		appHexagon: Hexagon
	},
	props: ['hexSetting'],
	data: function() {
		return {
			hexLeft: [],
			hexMiddle: [],
			hexRight: [],
			invalidMessage: ''
		}
	},
	methods: {
		handleSetting() {
			if(!this.checkInputHexagon()) {
				this.invalidMessage="There's invalid number, please check your input!";
				return;
			}
			this.$emit('backToMenu', -1);
		},
		handleRestore() {
			// this.hexSetting[0][0] = 8;
			this.hexLeft = [8, 9, 10, 12, 15, 16];
			this.hexMiddle = [1, 2, 3, 4, 5, 6];
			this.hexRight = [18, 20, 24, 25, 30, 36];
			// this.hexLeft = [...this.hexSetting[0]];
			// this.hexMiddle = [...this.hexSetting[1]];
			// this.hexRight = [...this.hexSetting[2]];
		},
		checkInputHexagon() {
			const numberList = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 30, 36];
			const checkList = [...this.hexLeft, ...this.hexMiddle, ...this.hexRight];
			for(let i=0; i<numberList.length; i++) {
				if(checkList.indexOf(numberList[i]) === -1) {
					return false;
				}
			}
			return true;
		}
	},
	created() {
		this.hexLeft = this.hexSetting[0];
		this.hexMiddle = this.hexSetting[1];
		this.hexRight = this.hexSetting[2];
	}
}
</script>

<style scoped>
.app--set-hexagon-row {
	display: flex;
	margin-bottom: 1rem;
}
.app--set-hexagon-label {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: .5rem;
	width: 35px;
}
.app--set-hexagon-input {
	flex: 1;
	margin-left: 1rem;
}
.app--action  {
	display: flex;
	justify-content: space-around;
	max-width: 400px;
	margin: 0 auto;
}

@media only screen and (max-width: 425px) {
	.app--set-hexagon-label {		
		font-size: 12px;
		width: 30px;
	}
	.app--set-hexagon-input{
		margin-left: 0;
	}
}
</style>
