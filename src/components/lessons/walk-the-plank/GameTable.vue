<template>
		<div class="app--table">
			<table class="table table-bordered" style="table-layout: fixed">
				<tr>
					<th>Plank length</th>
					<td>{{ plankLength }} each way</td>
				</tr>
				<tr>
					<th>Turns so far</th>
					<td> <span v-if="turns > 0">{{ turns }}</span> </td>
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
export default {
	props: ['plankLength', 'turns', 'numberOfGames', 'average']
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
