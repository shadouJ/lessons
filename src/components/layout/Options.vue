<template>
	<div class="container" >
		<app-select></app-select>
		<ul class="list-group" >
			<li class="list-group-item list-group-item-success t--option-link"
				v-for="option in options" 
				:key="option.id"
				@click="selectOption(option.id)"
				@mouseover="handleMouseOver"
				@mouseout="handleMouseOut">
				<i class="far fa-hand-point-right hand-icon" style="visibility: hidden;"></i> &nbsp;{{ option.title }}
			</li>
		</ul>
	</div>
</template>

<script>
import Select from './Select.vue'; 
export default { 
	components: {
		appSelect: Select,
		// appOption: Option
	},
	props: {
		options: Array
	},
	methods: {
		selectOption(id) {
			// console.log(id);
			this.$emit('selectOption', id);
		},
		handleMouseOver(e) {
			// console.log(e.target.firstElementChild);
			e.target.firstElementChild.style.visibility = "visible"; 
		},
		handleMouseOut(e) {
			// console.log(e.target.firstElementChild);
			e.target.firstElementChild.style.visibility = "hidden"; 
		}
	}
}
</script>

<style>
.t--option-link {
	cursor: pointer;
}
.t--option-link:hover {
	background-color: #A1D4AD;
}
.hide-icon {
	display: none;
}
</style>

