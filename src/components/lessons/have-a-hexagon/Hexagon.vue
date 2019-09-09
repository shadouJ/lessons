<template>
	<div class="app--hexagon-container mb-3">
		<div class="app--hexagon">
			<div class="app--hexagon-up">
				<div class="app--hexagon-tripart app--hexagon-tripart-left">
					<div class="app--hexagon-number" 
						:class="{'app--hexagon-number-selected': selected.indexOf(data[0]) >= 0}">
						{{ data[0] }}
					</div>
				</div>
				<div class="app--hexagon-tripart app--hexagon-tripart-middle">
					<div class="app--hexagon-number"
						:class="{'app--hexagon-number-selected': selected.indexOf(data[1]) >= 0 }">
						{{ data[1] }}
					</div>
				</div>
				<div class="app--hexagon-tripart app--hexagon-tripart-right">
					<div class="app--hexagon-number"
						:class="{'app--hexagon-number-selected': selected.indexOf(data[2]) >= 0 }">
						{{ data[2] }}
					</div>
				</div>
			</div>
			<div class="app--hexagon-down">
				<div class="app--hexagon-tripart app--hexagon-tripart-left">
					<div class="app--hexagon-number" 
						:class="{'app--hexagon-number-selected': selected.indexOf(data[5]) >= 0 }">
						{{ data[5] }}
					</div>
				</div>
				<div class="app--hexagon-tripart app--hexagon-tripart-middle">
					<div class="app--hexagon-number" 
						:class="{'app--hexagon-number-selected': selected.indexOf(data[4]) >= 0 }">
						{{ data[4] }}
					</div>
				</div>
				<div class="app--hexagon-tripart app--hexagon-tripart-right">
					<div class="app--hexagon-number" 
						:class="{'app--hexagon-number-selected': selected.indexOf(data[3]) >= 0 }">
						{{ data[3] }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['data', 'selected']
}
</script>

<style scoped>
.app--hexagon {
	transform: translateX(-20%);
	margin: 15px;
}
.app--hexagon-up, .app--hexagon-down {
	display: flex;
}
.app--hexagon-tripart {
	width: 0;
	border-left: 60px solid transparent;
	border-right: 60px solid transparent;
}
.app--hexagon-up .app--hexagon-tripart-left {
	/* border-top: 100px solid #C66; */
	border-bottom: 100px solid #6C6; 
	position: relative;
	transform: translateX(50%);
}
.app--hexagon-up .app--hexagon-tripart-right { 
	/* border-top: 100px solid #C66; */
	border-bottom: 100px solid #6C6; 
	position: relative;
	transform: translateX(-50%);
}
.app--hexagon-up .app--hexagon-tripart-middle { 
	border-top: 100px solid #C66;
	/* border-bottom: 100px solid #6C6; */ 
	position: relative;
}

.app--hexagon-down .app--hexagon-tripart-left { 
	border-top: 100px solid #C66;
	/* border-bottom: 100px solid #6C6; */ 
	position: relative;
	transform: translateX(50%);
}
.app--hexagon-down .app--hexagon-tripart-right { 
	border-top: 100px solid #C66;
	/* border-bottom: 100px solid #6C6; */ 
	position: relative;
	transform: translateX(-50%);
}
.app--hexagon-down .app--hexagon-tripart-middle { 
	/* border-top: 100px solid #C66; */
	border-bottom: 100px solid #6C6;
	position: relative;
}

.app--hexagon-number {
	position: absolute;
	left: -4px;
}
.app--hexagon-number-selected {
	color: white;
	font-weight: 800;
	font-size: 120%;
	transform: translateX(-25%);
}

.app--hexagon-up .app--hexagon-number {
	top: 50px;
}
.app--hexagon-down .app--hexagon-number {
	top: -75px;
}
.app--hexagon-down .app--hexagon-tripart-middle .app--hexagon-number {
	top: 45px;
}
.app--hexagon-up .app--hexagon-tripart-middle .app--hexagon-number {
	top: -75px;
}

@media only screen and (max-width: 992px) {
	.app--hexagon {
		transform: translateX(-50%); 
	}
}
@media only screen and (max-width: 768px) {
	.app--hexagon {
		transform: translateX(10%); 
	}
}
@media only screen and (max-width: 425px) {
	.app--hexagon {
		transform: translateX(-20%); 
	}
} 
</style>
