<template>
	<div v-if="number!== undefined && !hasCheck" class="app--number-block app--number-draggable" :class="'app--number-block' + number">
		{{ number }}	
	</div>
	<div v-else-if="hasCheck===true" class="app--number-block app--number-fill">
		<i v-if="number===-1" class="fas fa-times text-danger"></i>
		<div v-else class="app--number-block" :class="'app--number-block' + number">{{ number }} </div>
	</div>
	<div v-else class="app--number-block app--number-dropzone app--number-fill">

	</div>
</template>

<script>
export default {
	props: ['number', 'hasCheck']
}
</script>

<style>
.app--number-block {
	font-size: 28px;
	font-weight: 800;
	border: 1px solid #ccc;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center; 
	background-color: #ededed;
}
.app--number-fill {
	width: 42px;
	height: 42px;
	background-color: #fff;
	border: 1px solid #555; 
	margin: 1px;
}
.app--number-draggable {
	touch-action: none;
}
/* .app--number-dropzone {
	border: 1px solid #000; 

} */
.app--number-draggable-positioned {
	touch-action: none;
}

.app--number-block0 {
	color: #763898;
	/* background-color: #F1BBCC; */
}
.app--number-block1 {
	color:#F8EF00;
	/* background-color: #54BFBE; */
}
.app--number-block2 {
	color:#00AAE9;
	/* background-color: #F19C19;	 */
}
.app--number-block3 {
	color: #E993AB;
	/* background-color: #AADAE7; */
}
.app--number-block4 {
	color:#D4211A;
	/* background-color: #F3E75D;	 */
}
.app--number-block5 {
	color: #007CC2;
	/* background-color: #CFBED7;	 */
}
.app--number-block6 {
	color:#35B247;
	/* background-color: #F3A094;	 */
}
.app--number-block7 {
	color:#E8008B;
	/* background-color: #B2D8BE;	 */
}
.app--number-block8 {
	color:#EF9F92;
	/* background-color: #59C6EA;	 */
}
.app--number-block9 {
	color: #70C4CB;
	/* background-color:#E66BA8; */
}
</style>
