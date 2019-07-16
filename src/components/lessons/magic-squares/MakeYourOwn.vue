<template>
	<div>
		<div class="container mt-4 mb-5" style="max-width: 700px;">
			<div class="row">
				<div class="col-12 mb-5">
					<h4 class="text-success text-center mb-3">Drag the number tiles to make a magic square</h4>
					<app-select-size @selectSize="selectedSize=$event"></app-select-size>
					<app-square :size="selectedSize"></app-square>
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
import Square from './Square.vue';
import SelectSize from './SelectSize.vue';
export default {
	components: {
		appSquare: Square,
		appSelectSize: SelectSize
	},
	data: function() {
		return {
			selectedSize: '3'
		};
	}
}
</script>

<style scoped>

</style>
