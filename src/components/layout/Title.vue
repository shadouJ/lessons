<template>
	<div class="jumbotron jumbotron-fluid app--title">
		<div class="container">
			<div class="row">
				<transition appear appear-class="image-appear" appear-active-class="image-appear-active">
					<div class="col-12 col-sm-6 col-md-6 col-lg-4 app--title-img-container">
						<router-link to="/" >
							<img class="img-fluid" src="@/assets/logo.png">
						</router-link>
					</div>
				</transition>
				<transition appear appear-class="header-appear" appear-active-class="header-appear-active">
					<h1 class="col-12 col-sm-6 col-md-6 col-lg-8 display-4 text-center" style="transform: translateY(10%);">	
						<slot></slot>
					</h1>
				</transition>
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

	.header-appear {
		opacity: 0;
	}
	.header-appear-active {
		transition: all 1s;
		transition-delay: .3s;
	}
	.image-appear {
		opacity: 0;
		transform: translateY(-200px);
	}
	.image-appear-active {
		transition: all .5s;
	}
</style>

