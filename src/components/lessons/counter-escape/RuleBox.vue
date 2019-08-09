<template> 
	<div class="app--one-rule-box text-danger font-weight-bold">{{ ruleNumber }}</div> 
</template>

<script>
export default {
	props: ['ruleNumber']
}
</script>

<style scoped> 
.app--one-rule-box	{
	width: 6.5em;
	height: 3.5em; 
	border: 1px solid #555;
	margin: 1em;
	padding-left: 3px;
}
@media only screen and (max-width: 576px) {
	.app--one-rule-box {
		width: 4.5em;
		height: 3.5em;
		margin: .5em;
	}
}
@media only screen and (max-width: 425px) {
	.app--one-rule-box {
		width: 3.5em;
		height: 3em;
		margin: .2em;
	}
}
</style>
