<template>
	<div>
		<h4 style="color: blue">Radioactivity: Many trials</h4>
		<h5 style="color: darkgreen">Birthday paradox: What is the chance, for a given group of people, at least two share the same birthday?</h5>
		<div class="app--enter-number form-group row mt-5">
			<label for="trial-numbers" class="col-form-label col-sm-6">
				<span style="color: darkred">Enter the number of atoms</span> (10 - 10,000):
			</label>
			<div class="col-sm-6">
				<input type="number" class="form-control" v-model="numAtoms" required>
			</div>
			<label for="trial-numbers" class="col-form-label col-sm-8 mt-3">
				<span style="color: darkred">Enter the probability of decay</span> (2 - 100): <span style="color: blue">One in...</span>
			</label>
			<div class="col-sm-4 mt-3">
				<input type="number" class="form-control" v-model="probDecay" required>
			</div>
			<div class="form-action col-6 offset-sm-6 offset-4 mt-3">
				<button 
					:disabled="!isValidInput" 
					class="btn btn-outline-success btn-lg"
					@click="handleAcceptTrialInputs"
				>OK</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				numAtoms: null,
				probDecay: null
			}
		},
		computed: {
			isValidInput() {
				if (( !this.numAtoms || 
					isNaN(Number(this.numAtoms)) || 
					this.numAtoms < 1 || 
					this.numAtoms > 10000 ) ||
					( !this.probDecay || 
					isNaN(Number(this.probDecay)) || 
					this.probDecay < 2 || 
					this.probDecay > 100 )) {
						return false;
					}
				return true;
			},
			trialInputs() {
				return {'numAtoms':this.numAtoms, 'probDecay':this.probDecay};
			}
		},
		methods: {
			handleAcceptTrialInputs() {
				this.$emit('acceptTrialInputs', this.trialInputs);
			}
		}
	}
</script>

<style scoped>
	.app--enter-number {
		max-width: 700px;
		margin: 0 auto;
	}
</style>