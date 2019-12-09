<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Greedy Pig</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Greedy Pig</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-demo v-if="selectedOption === 1"></app-demo>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-testing-theories v-if="selectedOption === 2"></app-testing-theories>
			</transition> 
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-comparing-strategies v-if="selectedOption === 3"></app-comparing-strategies>
			</transition> 
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-change-killer-dice v-if="selectedOption === 4"></app-change-killer-dice>
			</transition>
		</div>
	</div>
</template>

<script>
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue';
import Options from '../../layout/Options.vue';
import Demo from './Demo.vue';
import TestingTheories from './TestingTheories.vue';
import ComparingStrategies from './ComparingStrategies.vue';
import ChangeKillerDice from './ChangeKillerDice';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options,
		appDemo: Demo,
		appTestingTheories: TestingTheories,
		appComparingStrategies: ComparingStrategies,
		appChangeKillerDice: ChangeKillerDice
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Demonstration game'},
				{id: 2, title: 'Testing theories'},
				{id: 3, title: 'Comparing strategies'},
				{id: 4, title: 'Change the killer dice'}
			],
			selectedOption: -1
		}
	}
}
</script>

<style scoped>
/* */
</style>
