<template>
	<div class="container mt-3 mb-5"> 
		<app-many-games-app 
			v-if="gameSetting"
			:gameSetting="gameSetting" 
		></app-many-games-app>
		<app-set-game v-else @acceptGameSetting="gameSetting=$event"></app-set-game>
	</div>
</template>

<script>
import SetGame from './SetGame.vue';
import ManyGamesApp from './ManyGamesApp.vue';

export default {
	components: {
		appSetGame: SetGame,
		appManyGamesApp: ManyGamesApp
	}, 
	data: function() {
		return {
			gameSetting: null
		}
	}
}
</script>

<style scoped>
 
</style>
