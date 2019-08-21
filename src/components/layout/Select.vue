<template>
	<div class="alert alert-dark app--select-text">
		<h4><i class="fas fa-map-pin"></i>&nbsp;&nbsp;Select an option</h4>
		<div><router-link class="btn btn-outline-dark" to="/">
			<i class="fas fa-home"></i>&nbsp;Home</router-link>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app--select-text {
	display: flex;
	justify-content: space-between;
}
</style>

