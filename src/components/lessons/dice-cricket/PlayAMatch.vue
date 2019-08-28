<template>
	<div class="container mt-4 mb-5">
		<app-play-a-match-app 
			v-if="matchSetting" 
			:matchSetting="matchSetting" 
		></app-play-a-match-app>
		<app-set-match v-else @setMatch="matchSetting=$event"></app-set-match>
	</div>
</template>

<script>
import SetMatch from './SetMatch.vue';
import PlayAMatchApp from './PlayAMatchApp.vue';

export default {
	components: {
		appSetMatch: SetMatch,
		appPlayAMatchApp: PlayAMatchApp,
	},
	data: function() {
		return {
			matchSetting: null
		}
	}
}
</script>

<style scoped>
</style>
