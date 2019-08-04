<template>
	<div class="app--tally-graph-wrapper" 
		:style="{
			height: graphHeight ? graphHeight + '%' : '100%'
		}"> 
		<div class="app--tally-graph">
			<div
				v-for="(item, index) in tallyTable"
				:key="index"
				class="app--tally-graph-bar"
				:style="{
					height: item.tally*heightUnit + 'px',
					width: widthPercent + '%'
				}"
			>
				<div class="app--tally-graph-index" v-if="item.mark===true">
					<div class="app--tally-graph-index-mark">|</div>
					<div class="app--tally-graph-index-num">{{ item.unit }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { getUnit } from './utils';
export default {
	props: ['tallyTable', 'trialNumber', 'graphHeight', 'heightUnit'],
	data: function() {
		return {
			wdithPercent: 0
		}
	},
	created() {
		this.widthPercent = (1 / this.tallyTable.length * 100).toFixed(2) ;
	}
}
</script>

<style scoped>
.app--tally-graph-wrapper {
	min-height: 650px;
}
.app--tally-graph {
	display: flex;
	align-items: flex-end;
	margin: 0 auto;
	width: 100%;
	border: 1px solid #555;
	border-bottom: none;
	height: 100%;
}
.app--tally-graph-bar {
	background-color: blue;
	border: 1px solid #000;
	border-bottom: none;
	position: relative;
}
.app--tally-graph-index {
	width: 100%;
	position: absolute;
	bottom: -28px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.app--tally-graph-index-mark {
	height: 10px;
	overflow: hidden;
}
/* .app--tally-graph-mark {

} */
</style>
