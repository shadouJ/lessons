<template>
	<div class="app--container mt-4 mb-5">
		<div class="form-group row">
			<label for="teamAName" class="col-sm-6 col-md-4 col-form-label">
				Enter a name for Team A
			</label>
			<div class="col-sm-6 col-md-8">
				<input type="text" id="teamAName" class="form-control" v-model="teamAName"/>
			</div>
		</div>
		<div class="form-group row">
			<label for="teamBName" class="col-sm-6 col-md-4 col-form-label">
				Enter a name for Team B
			</label>
			<div class="col-sm-6 col-md-8">
				<input type="text" id="teamBName" class="form-control" v-model="teamBName" />
			</div>
		</div>
		<fieldset class="form-group">
			<div class="row">
				<legend class="pt-0 col-sm-6 col-md-4 col-form-label">
					Set the wicket taker
				</legend>
				<div class="col-sm-6 col-md-8">
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-1" class="form-check-input" v-model="wicketTaker" value="1" />
						<label for="wicket-taker-1" class="form-check-label"> 1 </label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-2" class="form-check-input" v-model="wicketTaker" value="2" />
						<label for="wicket-taker-2" class="form-check-label"> 2 </label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-3" class="form-check-input" v-model="wicketTaker" value="3" />
						<label for="wicket-taker-3" class="form-check-label"> 3 </label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-4" class="form-check-input" v-model="wicketTaker" value="4" />
						<label for="wicket-taker-4" class="form-check-label"> 4 </label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-5" class="form-check-input" v-model="wicketTaker" value="5" />
						<label for="wicket-taker-5" class="form-check-label"> 5 </label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" id="wicket-taker-6" class="form-check-input" v-model="wicketTaker" value="6" />
						<label for="wicket-taker-6" class="form-check-label"> 6 </label>
					</div>
				</div>
			</div>
		</fieldset>
		<div class="form-check form-check-inline">
			<label for="is-change" class="form-check-label">Change batting team each over</label>
			<input type="checkbox" id="is-change" class="form-check-input ml-3" v-model="isChange">
		</div>
		<div class="app--action mt-4 text-center">
			<button 
				class="btn btn-outline-success text-center"
				:disabled="!validInput"
				@click="handleSettingMatch"
			>
				OK
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			teamAName: 'Team A',
			teamBName: 'Team B',
			wicketTaker: 5,
			isChange: true
		}
	},
	computed: {
		validInput() {
			return this.teamAName.trim().length > 0 &&
							this.teamBName.trim().length > 0 &&
							this.teamAName.trim().length < 20 && 
							this.teamBName.trim().length < 20
		}
	},
	methods: {
		handleSettingMatch() {
			this.$emit('setMatch', {
				teamAName: this.teamAName.trim(),
				teamBName: this.teamBName.trim(),
				wicketTaker: Number(this.wicketTaker),
				isChange: this.isChange
			});
		}
	}
}
</script>

<style scoped>
.app--container {
	max-width: 600px;
	margin: 0 auto;
}
</style>
