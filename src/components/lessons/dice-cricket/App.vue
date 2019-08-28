<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Dice Cricket</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Dice Cricket</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-a-match 
					v-if="selectedOption === 1" 
				></app-play-a-match>
			</transition>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-play-many-matches 
					v-if="selectedOption === 2"
				></app-play-many-matches>
			</transition>
		</div> 
	</div>
</template>

<script>
import TitleStatic from '../../layout/TitleStatic.vue';
import TopNav from '../../layout/TopNav.vue'; 
import Options from '../../layout/Options.vue';
import PlayAMatch from './PlayAMatch.vue';
import PlayManyMatches from './PlayManyMatches.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options, 
		appPlayAMatch: PlayAMatch,
		appPlayManyMatches: PlayManyMatches
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Play a match'}, 
				{id: 2, title: 'Play many matches'} 
			],
			selectedOption: -1
		}
	}
}
</script>

<style>
</style>
