<template> 
	<div class="app--one-counter bg-primary">
		<span style="visibility: hidden;">{{ counter }}</span>
	</div> 
</template>

<script>
export default {
	props: ['counter']
}
</script>

<style scoped> 
.app--one-counter	{
	width: 3em;
	height: 3em;
	border-radius: 50%;
	margin: 1em;
	border: 1.3px solid #333;
	-ms-touch-action: none;
	touch-action: none;
}
@media only screen and (max-width: 425px) {
	.app--one-counter {
		width: 2em;
		height: 2em;
		margin: .5em;
	}
}
</style>
