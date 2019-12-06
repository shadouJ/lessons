<template>
	<div>
		<div class="app--dice" 
			:class="{ 'app--dice-1': number}" >
			<div v-if="number==1" class="app--dice-img" 
				style="font-size: 25px; display: flex; justify-content: center; align-items: center;">
				<i class="fas fa-circle"></i>
			</div>
			<div v-else-if="number==2" class="app--dice-img"
				style="font-size: 18px; padding: 3px; display: grid; grid-template-rows: repeat(2, 50%); grid-template-columns: repeat(2, 50%);">
				<i class="fas fa-circle" style="display: flex; justify-content: center; align-items: center;"></i>
				<i class="fas fa-circle" style="grid-row-start: 2; grid-column-start: 2; display: flex; justify-content: center; align-items: center;"></i>
			</div>
			<div v-else-if="number==3" class="app--dice-img"
				style="font-size: 13px; padding: 3px; display: grid; grid-template-rows: 1fr 1fr 1fr; grid-template-columns: 1fr 1fr 1fr;">
				<i class="fas fa-circle"></i>
				<i class="fas fa-circle" style="grid-row-start: 2; grid-column-start: 2;"></i>
				<i class="fas fa-circle" style="grid-row-start: 3; grid-column-start: 3;"></i>				
			</div>

			<div v-else-if="number==4" class="app--dice-img"
				style="font-size: 16px; padding: 3px; display: grid; grid-template-rows: repeat(2, 50%); grid-template-columns: repeat(2, 50%);">
				<i v-for="i in 4" :key="i" class="fas fa-circle" style="display: flex; justify-content: center; align-items: center"></i> 
			</div>
			<div v-else-if="number==5" class="app--dice-img" 
				style="font-size: 16px; padding: 3px; display: grid; grid-template-rows: repeat(3, 33.3%); grid-template-columns: repeat(3, 33.3%);" >
				<i class="fas fa-circle" style="display: flex; justify-content: center; align-items: center;"></i>
				<i class="fas fa-circle" style="grid-column-start: 3; display: flex; justify-content: center; align-items: center;"></i>
				<i class="fas fa-circle" style="grid-row-start: 2; grid-column-start: 2; display: flex; justify-content: center; align-items: center;"></i>
				<i class="fas fa-circle" style="grid-row-start: 3; grid-column-start: 1; display: flex; justify-content: center; align-items: center;"></i>
				<i class="fas fa-circle" style="grid-row-start: 3; grid-column-start: 3; display: flex; justify-content: center; align-items: center;"></i>
			</div>
			<div v-else-if="number==6" class="app--dice-img"
				style="font-size: 13px; padding: 5px; display: grid; grid-template-rows: 1fr 1fr 1fr; grid-template-columns: 1fr 1fr;" >
				<i v-for="i in 6" :key="i" class="fas fa-circle" style="display: flex; justify-content: center;"></i>
			</div>
			<div v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['number'] 
}
</script>

<style scoped>
	.app--dice {
		width: 50px;
		height: 50px; 
	}
	.app--dice-img {
		height: 100%;
	}
	.app--dice-1 {
		border: 1px solid black;
		border-radius: 20%;
		background-color: yellow
	}
	.app--dice-1 .app--dice-img {
		color: black;
	}
</style>
