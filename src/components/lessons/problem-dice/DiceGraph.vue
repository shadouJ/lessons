<template>
	<div class="app--dice-graph-in">
		<app-dice :index="1" :number="dice1" style="transform: translateX(-20%);"></app-dice>
		<br>
		<app-dice :index="2" :number="dice2" style="transform: translateX(20%);"></app-dice>
	</div>
</template>

<script>
import Dice from './Dice.vue';
export default {
	props: ['dice1', 'dice2'],
	components: {
		appDice: Dice
	}
}
</script>

<style scoped>
.app--dice-graph-in{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
