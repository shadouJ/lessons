<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Radioactivity</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Radioactivity</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-demonstration v-if="selectedOption === 1"></app-demonstration>
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
import Demonstration from './Demonstration.vue';
import ManyTrials from './ManyTrials.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options,
		appDemonstration: Demonstration,
		appManyTrials: ManyTrials
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Demonstration'},
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
