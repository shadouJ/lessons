<template>
  <div>
    <div v-if="selectedOption === -1">
      <app-title-static>Multo</app-title-static>
      <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
        <app-options :options="options" @selectOption="selectedOption = $event"></app-options>
      </transition>
    </div>
    <div class="container-fluid" v-else>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-top-nav @backToMenu="selectedOption = $event">Multo</app-top-nav>
      </transition>

      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-one-game v-if="selectedOption === 1" :strategies="strategies"></app-one-game>
      </transition>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-many-games v-if="selectedOption === 2" :strategies="strategies"></app-many-games>
      </transition>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-build-table v-if="selectedOption === 3"></app-build-table>
      </transition>
      <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
        <app-how-often v-if="selectedOption === 4"></app-how-often>
      </transition>
    </div>
  </div>
</template>

<script>
import TitleStatic from "../../layout/TitleStatic.vue";
import TopNav from "../../layout/TopNav.vue";
import BottomNav from "../../layout/BottomNav.vue";
import Options from "../../layout/Options.vue";
import OneGame from "./OneGame.vue";
import ManyGames from "./ManyGames.vue";
import BuildTable from "./BuildTable.vue";
import HowOften from "./HowOften.vue";
import { DEFAULT_STRATEGIES_LIST } from "./utils/settings";

export default {
  components: {
    appTitleStatic: TitleStatic,
    appTopNav: TopNav,
    appOptions: Options,
    appBottomNav: BottomNav,
    appOneGame: OneGame,
    appManyGames: ManyGames,
    appBuildTable: BuildTable,
    appHowOften: HowOften
  },
  data: function() {
    return {
      options: [
        { id: 1, title: "Play a game of Multo" },
        { id: 2, title: "Comparing grids: Many games" },
        { id: 3, title: "Build a multiplication table" },
        { id: 4, title: "How often does each total occur?" }
      ],
      selectedOption: -1,
      strategies: [...DEFAULT_STRATEGIES_LIST]
    };
  }
};
</script>

<style>
</style>
