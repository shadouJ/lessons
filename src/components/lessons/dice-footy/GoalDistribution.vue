<template>
 <div class="container">
		<app-goal-distribution-app v-if="trialNumber" :trialNumber="trialNumber">
		</app-goal-distribution-app>
		<app-enter-trials-number @acceptTrialNumber="trialNumber=$event" v-else></app-enter-trials-number>
 </div>
</template>

<script>
import EnterTrialsNumber from '../../common/EnterTrialsNumber.vue';
import GoalDistributionApp from './GoalDistributionApp.vue';
export default {
	components: {
		appEnterTrialsNumber: EnterTrialsNumber,
		AppGoalDistributionApp: GoalDistributionApp
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
