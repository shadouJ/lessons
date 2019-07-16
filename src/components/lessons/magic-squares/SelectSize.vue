<template>
	<div class="app--select">
		<label for="">Select square size</label>
		<select v-model="size" class="form-control" @change="handleSelectSize()">
			<option value="3">3 by 3 Square</option>
			<option value="4">4 by 4 Square</option>
		</select>
	</div>

</template>

<script>
export default {
	data: function() {
		return {
			size: 3
		};
	},
	methods: {
		handleSelectSize() {
			// console.log(size);
			// console.log(this.size);
			this.$emit('selectSize', this.size);
		}
	}
}
</script>

<style scoped>
	.app--select {
		margin: 0 auto;
		max-width: 500px;
	}
</style>

