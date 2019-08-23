<template>
	<div style="position: absolute"
		:style="{
			left: `${position.left + 2}%`,
			top: `${position.top + 6}%`,
		}"
	>
		<div class="badge badge-light" style="width: 40px;">	
			{{ step === 0 ? 'Start' : step }}
		</div>
	</div>
</template>

<script>
export default {
	props: ['step', 'position']
}
</script>

<style scoped>

</style>
