<template>
	<div class="app--dice">{{ diceNumber }}</div>
</template>

<script>
export default {
	props: ['diceNumber']
}
</script>

<style scoped>
.app--dice {
	width: 50px;
	height: 50px;
	background-color: black;
	color: yellow;
	font-size: 25px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
