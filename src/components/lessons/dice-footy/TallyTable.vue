<template>
	<div class="app--tally-table">
		<div class="app--tally-table-item app--tally-table-title mb-2">
			<span class="badge badge-dark" style="transform: translateX(50%)">{{ title.col1 }}</span>
			<span class="badge badge-dark">{{ title.col2 }}</span>
		</div>
		<ul class="list-group">
			<li v-for="(item, index) in tallyTable"
				:key="index"
				class="list-group-item app--tally-table-item"
				:class="index%2===0 ? 'list-group-item-dark' :'' "
			>
				<span>{{ item.unit }}</span>
				<span>{{ item.tally }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['tallyTable', 'title']
}
</script>

<style scoped>
.app--tally-table-item {
	display: flex;
	justify-content: space-around;
}
</style>
