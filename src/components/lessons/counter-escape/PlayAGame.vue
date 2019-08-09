<template> 
	<app-play-game :gameRule="gameRule" :numberOfGames="1"></app-play-game>
</template>

<script>
import PlayGame from './PlayGame.vue';
export default {
	props: ['gameRule'],
	components: {
		appPlayGame: PlayGame
	}
}
</script>

<style scoped> 
</style>
