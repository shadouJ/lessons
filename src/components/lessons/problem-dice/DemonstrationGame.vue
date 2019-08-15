<template>
	<div>
		<app-game :gameType="1"></app-game>		
	</div>
</template>

<script>
import Game from './Game.vue';

export default {
	components: {
		appGame: Game
	},
}
</script>

<style scoped>

</style>
