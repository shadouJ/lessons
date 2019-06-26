<template>
	<div class="app--estimate-graph" :style="{
		marginTop: convertErrorToHeight(maxError) + 15 + 'px',
		marginBottom: convertErrorToHeight(negativeMaxError) + 15 +'px'
	}">
		<div 
			v-for="est in estimateHistory" 
			:key="est.id"
			:style="{
				height: convertErrorToHeight(est.error) + 'px',
				top: est.error>0 ? '-'+convertErrorToHeight(est.error) + 'px' : ( est.error === 0 ? -5+'px' : 0 )
			}"
			:class="[
				{larger: est.error>0}, 
				{smaller: est.error<0}, 
				{equal: est.error===0},
			]"
			class="error"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		estimateHistory: Array
	}, 
	// data: function() {
	// 	return {
	// 		maxError: this.getMaxError(),
	// 		negativeMaxError: this.getNegativeMaxError()
	// 	}
	// },
	methods: {
		convertErrorToHeight(error) {
			const absError = Math.abs(error);
			if(absError <= 5) return Math.abs(error)*4;
			else if(absError <= 40 ) return 4*5 + (absError-5);
			else return 4*5 + (40-5) + (absError-40)*.5; 
		}
	},
	computed: {
		maxError: function() {	/** Get maximum error on positive side */
			let maxError = 10;
			if(this.estimateHistory && this.estimateHistory.length >0) {
				for(let est of this.estimateHistory) {
					if(est.error > maxError) {
						maxError = est.error;
					}
				}
			}			
			return maxError;
		},
		negativeMaxError: function() {	/** Get maximum error on negative side */
			let maxError = -10;
			if(this.estimateHistory && this.estimateHistory.length >0) {
				for(let est of this.estimateHistory) {
					if(est.error < maxError) {
						maxError = est.error;
					}
				}
			}			
			return maxError;
		}
	}
}
</script>

<style scoped>
	.app--estimate-graph{
		height: 0;
		display: flex;
		border-bottom: 1px solid #999;
	}
	.error{
		width: 25px; 
		margin-right: 5px;
		position: relative;
	}
	.larger {
		background-color: #004085;
	}
	.smaller {
		background-color: #721C24;  
	}
	.equal {
		background-color: #6E9D79;
		height: 10px !important; 
	}
</style>
