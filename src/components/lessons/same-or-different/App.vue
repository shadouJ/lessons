<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Same or Different</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Same or Different</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-a-game v-if="selectedOption === 1"></app-play-a-game>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-many-trials v-if="selectedOption === 2"></app-many-trials>
			</transition> 
		</div>
	</div>
</template>

<script>
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue';
import Options from '../../layout/Options.vue';
import PlayAGame from './PlayAGame.vue';
import ManyTrials from './ManyTrials.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options,
		appPlayAGame: PlayAGame,
		appManyTrials: ManyTrials
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Play a game'},
				{id: 2, title: 'Many trials'}
			],
			selectedOption: -1
		}
	}
}
</script>

<style scoped>
/* */
</style>
