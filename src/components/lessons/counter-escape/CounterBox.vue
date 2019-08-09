<template> 
	<div class="app--one-counter-box">{{ boxName }}</div> 
</template>

<script>
export default {
	props: ['boxName']
}
</script>

<style scoped> 
.app--one-counter-box	{
	width: 6.5em;
	height: 6.5em; 
	border: 1px solid #555;
	margin: 1em;
	padding-left: 3px;
}
@media only screen and (max-width: 576px) {
	.app--one-counter-box {
		width: 4.5em;
		height: 4.5em;
		margin: .5em;
	}
}
@media only screen and (max-width: 425px) {
	.app--one-counter-box {
		width: 3.5em;
		height: 3.5em;
		margin: .2em;
	}
}
</style>
