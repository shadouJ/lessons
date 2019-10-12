<template>
  <div
    v-if="number!== undefined && !hasCheck"
    class="app--number-block app--number-draggable hidden"
    :class="'app--number-block' + number"
    :data-solid="solid"
    @mouseover="handleShowHidden"
    @mouseleave="handleHide"
  >
    <span v-if="hidden===true" class="app--hidden-number">{{ number }}</span>
    <span v-else>{{number}}</span>
  </div>
  <div v-else-if="hasCheck===true" class="app--number-block app--number-fill">
    <i v-if="number===-1" class="fas fa-times text-danger"></i>
    <div v-else class="app--number-block" :class="'app--number-block' + number">{{ number }}</div>
  </div>
  <div v-else class="app--number-block app--number-dropzone app--number-fill"></div>
</template>

<script>
export default {
  props: ["number", "hasCheck", "hidden", "solid", "hasXRay"],
  data: function() {
    return {
      showHidden: false
    };
  },
  methods: {
    handleShowHidden() {
      // console.log("show hidden");
      const isSolid = this.$el.getAttribute("data-solid");
      // console.log(this.$el.getAttribute("data-solid"));
      if (this.hasXRay && !isSolid) {
        this.$el.classList.remove("hidden");
        this.$el.classList.add("hover-effect");
      }
      // console.log(this.$el.classList);
    },
    handleHide() {
      // console.log("hide");
      if (this.hasXRay) {
        this.$el.classList.add("hidden");
        this.$el.classList.remove("hover-effect");
      }
      // console.log(this.$el.classList);
    }
  }
};
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
  color: #f8ef00;
  /* background-color: #54BFBE; */
}
.app--number-block2 {
  color: #00aae9;
  /* background-color: #F19C19;	 */
}
.app--number-block3 {
  color: #e993ab;
  /* background-color: #AADAE7; */
}
.app--number-block4 {
  color: #d4211a;
  /* background-color: #F3E75D;	 */
}
.app--number-block5 {
  color: #007cc2;
  /* background-color: #CFBED7;	 */
}
.app--number-block6 {
  color: #35b247;
  /* background-color: #F3A094;	 */
}
.app--number-block7 {
  color: #e8008b;
  /* background-color: #B2D8BE;	 */
}
.app--number-block8 {
  color: #ef9f92;
  /* background-color: #59C6EA;	 */
}
.app--number-block9 {
  color: #70c4cb;
  /* background-color:#E66BA8; */
}
.app--hidden-number {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.hidden .app--hidden-number {
  display: none;
}
.hover-effect {
  background-color: #fff;
}
</style>
