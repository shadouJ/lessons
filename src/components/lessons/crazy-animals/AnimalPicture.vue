<template>
	<div class="app--picture-drawn pl-3"> 
		<img 
			v-if="animalDrawn[0]" 
			:src="animalDrawn[0].src" 
			v-bind:class="{
				'horse-head': animalDrawn[0].name === 'H',
				'giraffe-head': animalDrawn[0].name==='Gir',			
				'duck-head': animalDrawn[0].name==='D'
			}"
			alt="">
		<img 
			v-if="animalDrawn[1]" 
			:src="animalDrawn[1].src"  
			v-bind:class="{
				'giraffe-body': animalDrawn[1].name === 'a'
			}"
			alt="">
		<img 
			v-if="animalDrawn[2]" 
			:src="animalDrawn[2].src"  
			v-bind:class="{
				'giraffe-leg': animalDrawn[2].name === 'ffe',
				'horse-leg': animalDrawn[2].name === 'se'
			}"
			alt="">
	</div>

</template>

<script>
export default {
	props: ['animalDrawn']
}
</script>

<style scoped>

.app--picture-drawn {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.app--picture-drawn img {
	margin: 0;
}

.giraffe-head {
	transform: translateX(-22%);
}
.horse-head {
	transform: translateX(-25%);
}
.duck-head {
	transform: translateX(7%);
}
.giraffe-leg {
	transform: translateX(-5%);
}
.horse-leg {
	transform: translateX(5%);
}
</style>
