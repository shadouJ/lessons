<template>
	<div class="app--triangle-container" 
		:data-type="'down'"
		:style="{transform: 'translateX(' + offset + '%)'}">
		<div class="app--triangle" 
			:class="!hasStyle ? 'app--triangle-yellow' : 'app--triangle-blue' "
		></div>
		<!-- 三角形通过hasStyle属性来控制颜色，如果无此属性，则为默认黄色 若有则为蓝色 -->
		<!--:data-type="down" 表示是倒置三角形-->
	</div>
</template>

<script>
export default {
	props: ['id', 'posId', 'hasStyle'],
	computed: {
		offset() {
			if(!this.id) {
				return 0;
			}
			return -50*(Number(this.posId) - 1);
		}
	}
}
</script>

<style scoped>
.app--triangle {
	width: 0;
	height: 0;
	border-top: 50px solid blue;
	/* border-bottom: 45px solid red; */
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
}
.app--triangle-blue {
	border-top: 50px solid blue;
}
.app--triangle-yellow {
	border-top: 50px solid #EFEF34;
}
</style>
