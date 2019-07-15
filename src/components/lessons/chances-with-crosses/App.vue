<template>
    <div>
        <div v-if="selectedOption === -1">
            <app-title-static>
                Chances with Crosses
            </app-title-static>
            <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
                <app-options :options="options" @selectOption="selectedOption=$event"></app-options>
            </transition>
        </div>

        <div class="container-fluid" v-else>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-top-nav @backToMenu="selectedOption = $event">Chances with Crosses</app-top-nav>
            </transition>

            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-puzzle v-if="selectedOption === 1"></app-puzzle>
                <app-random-pick v-else-if="selectedOption === 2"></app-random-pick>
                <app-testing-middle v-else-if="selectedOption === 3"></app-testing-middle>
            </transition>
        </div>
        <!-- <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
            <app-bottom-nav></app-bottom-nav>
        </transition>
    -->
    </div>
</template>

<script>
    // import Title from '../../layout/Title.vue';
    import TitleStatic from '../../layout/TitleStatic.vue';
    import TopNav from '../../layout/TopNav.vue';
    import Options from '../../layout/Options.vue';
    import Puzzle from "./Puzzle"
    import RandomPick from './RandomPick';
    import TestingMiddle from "./TestingMiddle";

    export default {
        components: {
            // appTitle: Title,
            appTitleStatic: TitleStatic,
            appTopNav: TopNav,
            appOptions: Options,
            // appBottomNav: BottomNav,
            appPuzzle: Puzzle,
            appRandomPick: RandomPick,
            appTestingMiddle: TestingMiddle
        },
        data: function() {
            return {
                options: [
                    { id: 1, title: 'Crosses puzzle' },
                    { id: 2, title: 'Chances of a random pick' },
                    { id: 3, title: 'Chances of a random pick given a middle number'}
                ],
                selectedOption: -1,
            }
        }
    }
</script>

<style>
    .tt--right-box {
        margin-bottom: 3rem;
    }
    .tt--right-row {
        display: flex;
    }


</style>
