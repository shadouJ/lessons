<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Counter Escape</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Counter Escape</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-a-game v-if="selectedOption === 1" :gameRule="gameRule"></app-play-a-game>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-many-games v-if="selectedOption === 2" :gameRule="gameRule"></app-play-many-games>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-all-arrangements v-if="selectedOption === 3" :gameRule="gameRule" @backToMenu="selectedOption = $event"></app-all-arrangements>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-change-rules v-if="selectedOption === 4" :gameRule="gameRule"  @backToMenu="selectedOption = $event"></app-change-rules>
			</transition>
		</div> 
    <!-- <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
			<app-bottom-nav></app-bottom-nav> 
		</transition> -->
	</div>
</template>

<script>
// import Title from '../../layout/Title.vue';
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue';
// import BottomNav from '../../layout/BottomNav.vue';
import Options from '../../layout/Options.vue';
import PlayAGame from './PlayAGame.vue';
import PlayManyGames from './PlayManyGames.vue'; 
import AllArrangements from './AllArrangements.vue';
import ChangeRules from './ChangeRules.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		// appTitle: Title,
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options,
		// appBottomNav: BottomNav,
		appPlayManyGames: PlayManyGames,
		appPlayAGame: PlayAGame, 
		appAllArrangements: AllArrangements,
		appChangeRules: ChangeRules
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Play a game'}, 
				{id: 2, title: 'Play many games'},
				{id: 3, title: 'All possible arrangements for 3 counters in 3 boxes'},
				{id: 4, title: 'Change the rules'}
			],
			selectedOption: -1,
			gameRule: {
				diceFaces: 6,
				boxes: 3,
				rule: {
					1: [1],
					2: [2, 3],
					3: [4, 5, 6]
				}
			}
		}
	}
}
</script>

<style> 
</style>
