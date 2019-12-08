<template>
  <div>
    <div v-if="selectedOption === -1">
      <app-title-static>Chocolate Chip Cookies</app-title-static>
      <transition
        appear
        appear-class="options-appear"
        appear-active-class="options-appear-active"
      >
        <app-options
          :options="options"
          @selectOption="selectedOption = $event"
        ></app-options>
      </transition>
    </div>
    <div class="container-fluid" v-else>
      <transition
        appear
        appear-class="lesson-appear"
        appear-active-class="lesson-appear-active"
      >
        <app-top-nav @backToMenu="selectedOption = $event"
          >Chocolate Chip Cookies</app-top-nav
        >
      </transition>

      <transition
        appear
        appear-class="lesson-appear"
        appear-active-class="lesson-appear-active"
      >
        <app-fill-cookies
          v-if="selectedOption === 1"
        ></app-fill-cookies>
        <app-trials100 v-if="selectedOption === 2"></app-trials100>
      </transition>
    </div> 
  </div>
</template>

<script>
import TitleStatic from "../../layout/TitleStatic.vue";
import TopNav from "../../layout/TopNav.vue"; 
import Options from "../../layout/Options.vue";
import FillCookies from "./FillCookies.vue";
import Trials100 from "./Trials100.vue"; 
export default {
  components: {
    appTitleStatic: TitleStatic,
    appTopNav: TopNav,
    appOptions: Options,
    appFillCookies: FillCookies,
    appTrials100: Trials100
  },
  data: function() {
    return {
      options: [
        {
          id: 1,
          title: "Fill the cookies"
        },
        {
          id: 2,
          title: "Stem and leaf plot of 100 trial batches"
        }
      ],
      selectedOption: -1
    };
  }
};
</script>

<style> 
</style>
