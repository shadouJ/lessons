<template>
	<div>
		<div v-if="selectedOption===-1">
			<app-title-static>Magic Squares</app-title-static>
			<transition appear appear-class="options-appear" appear-active-class="options-appear-active">
				<app-options :options="options" @selectOption="selectedOption=$event"></app-options>
			</transition>
		</div>
		<div class="container-fluid" v-else>
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-top-nav @backToMenu="selectedOption = $event">Magic Squares</app-top-nav> 
			</transition> 
				
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-make-your-own v-if="selectedOption === 1"></app-make-your-own>
			</transition> 
			<transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
				<app-make-your-own-strategy v-if="selectedOption === 2"></app-make-your-own-strategy>
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
import MakeYourOwn from './MakeYourOwn.vue';
import MakeYourOwnStrategy from './MakeYourOwnStrategy.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	components: {
		appTitleStatic: TitleStatic,
		appTopNav: TopNav,
		appOptions: Options,
		// appBottomNav: BottomNav,
		appMakeYourOwn: MakeYourOwn,
		appMakeYourOwnStrategy: MakeYourOwnStrategy
	},
	data: function() {
		return {
			options: [
				{id: 1, title: 'Make your own'},
				{id: 2, title: 'Make your own using strategies'}
			],
			selectedOption: -1
		}
	}
}
</script>

<style>
</style>
