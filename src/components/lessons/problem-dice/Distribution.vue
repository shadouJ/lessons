<template>
	<div>
		<app-distribution-app v-if="trialNumber" :trialNumber="trialNumber" :gameType="2"></app-distribution-app>
		<app-enter-trials-number v-else @acceptTrialNumber="trialNumber=$event"></app-enter-trials-number>
	</div>
</template>

<script>
import EnterTrialsNumber from './EnterTrialsNumber.vue';
import DistributionApp from './DistributionApp.vue';

export default {
	components: {
		appEnterTrialsNumber: EnterTrialsNumber,
		appDistributionApp: DistributionApp
	},
	data: function() {
		return {
			trialNumber: null
		}
	}
}
</script>

<style scoped>

</style>