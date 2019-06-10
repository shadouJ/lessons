<template>
	<div class="jumbotron jumbotron-fluid app--title">
		<div class="container">
			<div class="row"> 
				<div class="col-12 col-sm-6 col-md-6 col-lg-4 app--title-img-container">
					<router-link to="/" >
						<img class="img-fluid" src="@/assets/logo.png">
					</router-link>
				</div> 
				<h1 class="col-12 col-sm-6 col-md-6 col-lg-8 display-4 text-center" style="transform: translateY(10%);">	
				<slot></slot>
				</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.app--title .app--title-img-container {
		display: flex;
		justify-content: center;
		align-items: center; 
	}
</style>

