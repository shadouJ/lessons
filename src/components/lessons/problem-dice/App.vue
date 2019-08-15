<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Problem Dice</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Problem Dice</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-demonstration-game v-if="selectedOption === 1"></app-demonstration-game>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-many-games v-if="selectedOption === 2"></app-play-many-games>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-distribution v-if="selectedOption === 3"></app-distribution>
			</transition>
		</div> 
    <!-- <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
			<app-bottom-nav></app-bottom-nav> 
		</transition> -->
	</div>
</template>

<script>
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue';
// import BottomNav from '../../layout/BottomNav.vue';
import Options from '../../layout/Options.vue';
import DemonstrationGame from './DemonstrationGame.vue';
import Distribution from './Distribution.vue';
import PlayManyGames from './PlayManyGames.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		// appTitle: Title,
		appTitleStatic: TitleStatic,		
		appTopNav: TopNav,
		appOptions: Options,
		// appBottomNav: BottomNav,
		appDemonstrationGame: DemonstrationGame,
		appPlayManyGames: PlayManyGames, 
		appDistribution: Distribution
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Demonstration game'}, 
				{id: 2, title: 'Play many games'},
				{id: 3, title: 'Experimental distribution of dice differences'}
			],
			selectedOption: -1
		}
	}
}
</script>

<style>
</style>
