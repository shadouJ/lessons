<template>
	<div class="tt--circle-box">
		<div class="tt--circle bg-danger"></div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped> 
	.tt--circle-box {
		margin: .2em;
	}
	.tt--circle {
		width: 1.5em;
		height: 1.5em;
		border-radius: 50%;
	}

	@media only screen and (max-width: 992px) {
		.tt--circle-box {
			margin: .2em;
		}
	}
	
	@media only screen and (max-width: 424px) {
		.tt--circle {
			width: 1em;
			height: 1em;
		}		
	}
</style>
