<template>
	<div class="app--gameboard-container text-center">
		<h5>Gameboard ({{ gameboardIndex+1 }})</h5>
		<img 
			:src="gameboardSrc" 
			class="image-fluid app--gameboard-image"  
			alt="gameboard"
		>
		<img 
			:src="mouseSrc"  
			class="app--mouse-image"
			:style="{left: `${mousePosition.left}%`,	top: `${mousePosition.top}%`}"
			alt="mouse">
		<app-step 
			v-for="(item, index) in stepArr" 
			:key="index"
			:step="item.step"
			:position="item.position"
		>
		</app-step>
	</div>
</template>

<script>
import Step from './Step.vue';
export default {
	components: {
		appStep: Step
	},
	props: ['gameboardSrc', 'mouseSrc', 'mousePosition', 'gameboardIndex', 'stepArr']
}
</script>

<style scoped>
	
.app--gameboard-container {
	max-width: 600px; 
	margin: 0 auto;
	position: relative;
}
.app--gameboard-container h5 {
	position: absolute;
	top: -25px;
}
.app--gameboard-image {
	width: 100%;
}
.app--mouse-image {
	position: absolute;
	width: 10%;
	
}
</style>
