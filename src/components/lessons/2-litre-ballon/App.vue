<template>
  <div>
    <div v-if="selectedOption===-1">
      <app-title>2 Litre Ballon</app-title>
      <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
        <app-options :options="options" @selectOption="selectedOption=$event"></app-options>
      </transition>
    </div>
    <div class="container-fluid" v-else>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-top-nav @backToMenu="selectedOption = $event">2 Litre Ballon</app-top-nav>
      </transition>

      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-enter-data v-if="selectedOption === 1"></app-enter-data>
      </transition>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-display-data v-if="selectedOption === 2"></app-display-data>
      </transition>
    </div>
    <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
      <app-bottom-nav></app-bottom-nav>
    </transition>
  </div>
</template>

<script>
import Title from "../../layout/Title.vue";
import TopNav from "../../layout/TopNav.vue";
import BottomNav from "../../layout/BottomNav.vue";
import Options from "../../layout/Options.vue";
import EnterData from "./EnterData.vue";
import DisplayData from "./DisplayData.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  components: {
    appTitle: Title,
    appTopNav: TopNav,
    appOptions: Options,
    appBottomNav: BottomNav,
    appEnterData: EnterData,
    appDisplayData: DisplayData
  },
  data: function() {
    return {
      options: [
        { id: 1, title: "Enter Diameter, Radius, Circumference or Volume" },
        { id: 2, title: "Gathering and displaying ballon data" }
      ],
      selectedOption: -1
    };
  }
};
</script>

<style>
.container-fluid {
  padding: 0;
  margin-bottom: 8rem;
}
.lesson-appear {
  opacity: 0;
}
.lesson-appear-active {
  transition: all 0.5s;
}
.options-appear {
  opacity: 0;
}
.options-appear-active {
  transition: all 1s;
  transition-delay: 0.7s;
}
.app--lesson-action {
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 1rem;
}

#app-canvas {
  width: 100%;
  border: 1px solid #eee;
}
@media only screen and (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
  .tt--left form {
    width: 100%;
  }
}
@media only screen and (max-width: 576px) {
  .display-4 {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 425px) {
  .display-4 {
    font-size: 1.8rem;
  }
}
</style>
