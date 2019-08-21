<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Crazy Animals</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Crazy Animals</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-demo-game v-if="selectedOption === 1"></app-demo-game>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-most-likely-animal v-if="selectedOption === 2"></app-most-likely-animal>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-how-many-trials v-if="selectedOption === 3"></app-how-many-trials>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-whole-and-part v-if="selectedOption === 4"></app-whole-and-part>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-rule v-if="selectedOption === 5"></app-rule>
			</transition>
		</div>  
	</div>
</template>

<script>
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue'; 
import Options from '../../layout/Options.vue';
import DemoGame from './DemoGame.vue';
import HowManyTrials from './HowManyTrials.vue';
import MostLikelyAnimal from './MostLikelyAnimal.vue';
import Rule from './Rule.vue';
import WholeAndPart from './WholeAndPart.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options, 
		appDemoGame: DemoGame,
		appHowManyTrials: HowManyTrials,
		appMostLikelyAnimal: MostLikelyAnimal,
		appRule: Rule,
		appWholeAndPart: WholeAndPart
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Demonstration game'}, 
				{id: 2, title: 'Which animal is most likely?'},
				{id: 3, title: 'How many trials to make your favourite?'},
				{id: 4, title: 'Whole and part animals'},
				{id: 5, title: 'What is the rule?'}
			],
			selectedOption: -1
		}
	}
}
</script>

<style> 
</style>
