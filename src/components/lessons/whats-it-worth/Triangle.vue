<template>
	<div class="app--triangle-container" 
		:data-type="type"
		:style="{
			transform: 'translateX(' + offset + '%)',
			visibility: display ? 'visible': 'hidden'
			}">
		<div :class="{
			'app--triangle-down': type==='down',
			'app--triangle-up': type==='up',
			'app--triangle-down-blue': type==='down' && hasStyle,
			'app--triangle-up-red': type==='up' && hasStyle
			}"
		></div>
		<!-- 三角形通过hasStyle属性来控制颜色，如果无此属性，则为默认黄色 若有则为蓝色或红色 -->
		<!--:data-type="down", 表示是倒置三角形   :data-type="up" 表示正放三角形-->
	</div>
</template>

<script>
export default {
	props: ['id', 'posId', 'hasStyle', 'type', 'display'],
	// type - 'down' or 'up', 
	// posId - 数字控制三角形的偏移量以达到多个三角形紧靠的效果。
	// display - 控制这个区域的三角形是否显示
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
.app--triangle-down {
	width: 0;
	height: 0;
	border-top: 50px solid #EFEF34; 
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
}
.app--triangle-up {
	width: 0;
	height: 0; 
	border-bottom: 50px solid #EFEF34;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
}
.app--triangle-down-blue {
	border-top: 50px solid blue;
}
.app--triangle-up-red {	
	border-bottom: 50px solid red;
} 
</style>
