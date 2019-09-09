<template>
		<div class="app--table">
			<table class="table table-bordered" style="table-layout: fixed">
				<tr>
					<th>Plank length</th>
					<td>{{ plankLength }} each way</td>
				</tr>
				<tr>
					<th>Maximum</th>
					<td> <span v-if="maximum > 0" class="text-danger">{{ maximum }}</span> </td>
				</tr>
				<tr>
					<th>Game</th>
					<td> <span v-if="numberOfGames > 0">{{ numberOfGames }}</span> </td>
				</tr>
				<tr>
					<th>Average</th>
					<td><span v-if="average > 0">{{ average }}</span></td>
				</tr>
			</table>
		</div>
</template>

<script>
// Exactly the same as GameTable.vue except 'turns so far' is replaced with 'maximum'
export default {
	props: ['plankLength', 'maximum', 'numberOfGames', 'average']
}
</script>

<style scoped>

.app--table table {
	width: 65%;
	margin: 0 auto;
}

@media only screen and (max-width: 425px) {
	.app--table table {
		width: 100%;
	}
}
</style>
