<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col" class="text-align">Angle</th>
					<th scope="col">Estimate</th>
					<th scope="col">Error</th>
				</tr>
			</thead>
			<tbody v-if="estimateHistory && estimateHistory.length > 0">
				<tr v-for="est in this.estimateHistory" :key="est.id">
					<td>{{est.angle}}</td>
					<td>{{est.estimate}}</td>
					<td>{{est.error}}</td>
				</tr>
				<tr v-if="estimateHistory && estimateHistory.length>0">
					<td colspan="3" class="table-danger">
						Average: {{ averageError }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		estimateHistory: Array
	}, 
	computed: {
		averageError: function() {
			// let averageError = 0;
			let sumError = 0;
			for(let est of this.estimateHistory) {
				sumError += Math.abs(est.error);
			}
			return (sumError/this.estimateHistory.length).toFixed(1);
		}
	}
}
</script>
