<template>
  <div>
    <div v-if="selectedOption === -1">
      <app-title-static>Palindromes</app-title-static>
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
          >Palindromes</app-top-nav
        >
      </transition>

      <transition
        appear
        appear-class="lesson-appear"
        appear-active-class="lesson-appear-active"
      >
        <app-enter-number v-if="selectedOption === 1"></app-enter-number>
        <app-enter-search-range
          v-if="selectedOption === 2"
        ></app-enter-search-range>
      </transition>
    </div>
  </div>
</template>

<script>
import TitleStatic from "../../layout/TitleStatic.vue";
import TopNav from "../../layout/TopNav.vue";
import Options from "../../layout/Options.vue";
import EnterNumber from "./EnterNumber.vue";
import EnterSearchRange from "./EnterSearchRange.vue";
export default {
  components: {
    appTitleStatic: TitleStatic,
    appTopNav: TopNav,
    appOptions: Options,
    appEnterNumber: EnterNumber,
    appEnterSearchRange: EnterSearchRange
  },
  data: function() {
    return {
      options: [
        { id: 1, title: "Enter your number" },
        {
          id: 2,
          title: "Enter your number and search range"
        }
      ],
      selectedOption: -1
    };
  }
};
</script>

<style></style>
