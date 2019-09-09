<template>
	<div class="container mt-3 mb-5">
		<app-number-occurs-app v-if="trialNumber" :trialNumber="trialNumber"></app-number-occurs-app>
		<app-enter-trials-number v-else @acceptTrialNumber="trialNumber=$event"></app-enter-trials-number>
	</div>
</template>

<script>
import EnterTrialsNumber from '../../common/EnterTrialsNumber.vue';
import NumberOccursApp from './NumberOccursApp.vue';
export default {
	components: {
		appEnterTrialsNumber: EnterTrialsNumber,
		appNumberOccursApp: NumberOccursApp
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
