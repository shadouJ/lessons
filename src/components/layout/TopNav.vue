<template>
	<!-- <div class="container-fluid tt--top-nav">  
		<div class="tt--top-img-container" @click="backToMenu">
			<img class="img-fluid" src="@/assets/logo.png" title="Back">
		</div>
		<h1 class="display-4 text-center tt--top-text" style="margin: 0"><slot></slot></h1>  
	</div> -->
	<nav class="navbar navbar-light bg-light" style="padding-top: 1rem; padding-bottom: 1rem;">
		<div class="tt--top-img-container">
			<router-link to="/">
			<img src="@/assets/logo.png" width="auto" height="50" class="d-inline-block align-top" alt="">
			</router-link>
		</div>
		<h1 class="display-4 text-center tt--top-text"><slot></slot></h1>
		<div><button @click="backToMenu" class="btn btn-light"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;Back</button></div>
	</nav>
</template>

<script>
export default {
	methods: {
		backToMenu() {
			this.$emit('backToMenu', -1);
		}
	}
}
</script>

<style scoped> 
	.tt--top-nav { 
		background-color: #e9ecef;
		display: flex;
		justify-content: space-between;
	}
	.tt--top-img-container { 
		flex: initial;
		cursor: pointer;
	}
	.tt--top-text {
		flex: auto;
	}
</style>

