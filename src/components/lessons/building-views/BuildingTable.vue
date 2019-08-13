<template>
	<div class="app--building-table">
		<div class="m-1" v-for="(oneBuilding, arrKey) in viewArray" :key="arrKey"> <!-- one building -->
			<div v-if="oneBuilding.length===0" style="width: 40px;"> </div>
			<div v-for="(number, buildingKey) in oneBuilding" :key="buildingKey"> 
				<app-number-block :number="number"></app-number-block>
			</div>
		</div>
	</div>
</template>

<script>
import NumberBlock from './NumberBlock.vue';
import { 
	fillArrayWithZero,
	convertArrayRowToCol, 
	convertArrayByRow, 
	convertArrayByEl, 
	makeViewArray
} from './utils';
export default {
	components: {
		appNumberBlock: NumberBlock
	},
	props: ["buildingArray", "viewDirection"],
	computed: {
		viewArray() {
			if(!this.buildingArray || this.buildingArray.length === 0) {
				return [];
			}
			switch(this.viewDirection) {
				case 1:		// Front
					return makeViewArray(convertArrayRowToCol(convertArrayByRow(fillArrayWithZero(this.buildingArray))));
				case 2:		// Back
					return makeViewArray(convertArrayByRow(convertArrayRowToCol(fillArrayWithZero(this.buildingArray))));
				case 3:		// Left					
					return makeViewArray(fillArrayWithZero(this.buildingArray));
				case 4:		// Right
					return makeViewArray(convertArrayByRow(convertArrayByEl(fillArrayWithZero(this.buildingArray))));
				default:	
					return [];
			}
			// const viewArrayToReturn  = new Array(this.buildingArray.length);
		}
	}
}
</script>

<style scoped>
.app--building-table {
	display: flex;
	align-items: flex-end;
	height: 100%;
}
</style>
