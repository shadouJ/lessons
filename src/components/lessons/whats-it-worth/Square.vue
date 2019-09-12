<template>
	<div class="app--square-container">
		<div 
			class="app--square" 
			:class="{
				'app--square-yellow': !hasStyle,
				'app--square-red': hasStyle && Number(id)%2===0,
				'app--square-blue': hasStyle && Number(id)%2!==0}" 
			:style="{visibility: display? 'visible': 'hidden'}"
		>
		</div>
	</div>
</template>

<script>
export default {
	props: ['id', 'hasStyle', 'display'],
}
</script>

<style scoped>
.app--square {
	width: 50px;
	height: 50px;
}
.app--square-yellow {
	background-color: #EFEF34;
}
.app--square-blue {
	background-color: blue;
}
.app--square-red {
	background-color: red;
}
</style>
