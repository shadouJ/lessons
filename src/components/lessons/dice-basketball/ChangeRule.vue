<template>
	<div>
		<div class="form-check">
			<input 
				type="checkbox" 
				class="form-check-input" 
				id="change-dice-rule"
				v-model="changeRule"
				@change="handleChangeRule"
				:disabled="isStart">
			<label for="change-dice-rule">Change dice rule</label>
		</div>
		<div class="app--changed-rule" v-if="changeRule">
			Throw three dice and then use the highest value for the 3 pointer,
			the second highest for the 2 pointer
			and the lowest for the 1 pointer.
		</div>
	</div>
</template>

<script>
export default {
	props: ['isStart'],
	data: function() {
		return {
			changeRule: false
		}
	},
	methods: {
		handleChangeRule() {
			this.$emit('changeRule', this.changeRule);
		}
	}

}
</script>

<style scoped>

</style>
