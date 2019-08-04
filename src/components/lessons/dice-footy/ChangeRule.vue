<template>
	<div>
		<div class="form-check">
			<input 
				type="checkbox" 
				class="form-check-input" 
				id="change-dice-rule"
				v-model="changeRule"
				@change="handleChangeRule"
				:disabled="isDisable">
			<label for="change-dice-rule">Change dice rule</label>
		</div>
		<div class="app--changed-rule" v-if="changeRule"> 
			Throw two dice and then use the higher value for the goal score
		</div>
	</div>
</template>

<script>
export default {
	props: ['isDisable'],
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
