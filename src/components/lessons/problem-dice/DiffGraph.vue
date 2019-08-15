<template>
<div class="app--diff-graph-out">
	<div class="app--diff-graph-in mb-2">
		<div
			v-for="(diff,index) in diceDiffArr"
			:key="index" 
			class="app--diff-graph-bar"
			:style="{height: diff*unit + 'px'}"
		>
		</div>
	</div>
	<div class="app--diff-data">
		<div
			v-for="(diff, index) in diceDiffArr"
			:key="index"
			class="app--diff-data-single font-weight-bold text-primary"
		>
		{{ diff }}
		</div>
	</div>
</div>
	
</template>

<script>
export default {
	props: ['diceDiffArr', 'trialNumber'],
	computed: {
		unit() {
			if(!this.trialNumber) {
				return 5;
			}
			if(this.trialNumber <= 500) {
				return 4;
			} else if(this.trialNumber <= 1000) {
				return 2;
			} else if(this.trialNumber <= 5000) {
				return 0.4;
			} else {
				return 0.2;
			}
		}
	}
}
</script>

<style scoped>
.app--diff-graph-out {
	width: 100%;
	min-height: 550px;
	padding-right: 10px;
}
.app--diff-graph-in {
	width: 100%;
	height: 100%;
	border: 1px solid #333;
	display: flex;
	align-items: flex-end;
}
.app--diff-graph-bar {
	background-color: red;
	border: 1px solid #000;
	border-bottom: none;
	flex: 1;
	margin: 0 5px;
}

.app--diff-data {
	display: flex;
}
.app--diff-data-single {
	flex: 1;
	margin: 0 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ccc;
}

@media only screen and (max-width: 425px)  {
	.app--diff-graph-bar {
		margin: 0 2px;
	}	
	.app--diff-data-single {
		margin: 0 2px;
	}
}
</style>
