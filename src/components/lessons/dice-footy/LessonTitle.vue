<template>
	<div class="app--lesson-title mb-3">
		<h4 class="text-success">
			{{ title }} - {{ trialNumber }} games
		</h4>
		<h4 class="text-success">
			Game {{ numberTried }}
		</h4>
	</div>

</template>

<script>
export default {
	props: ['title', 'trialNumber', 'numberTried']
}
</script>

<style scoped>
.app--lesson-title {
	display: flex;
	justify-content: space-between;
}
@media only screen and (max-width: 576px) {
	.app--lesson-title {
		flex-direction: column;
	}
}
</style>
