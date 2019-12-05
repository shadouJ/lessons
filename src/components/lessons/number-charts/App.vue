<template>
    <div>
        <div v-if="selectedOption === -1">
            <app-title-static>
                Number Charts
            </app-title-static>
            <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
                <app-options :options="options" @selectOption="selectedOption=$event"></app-options>
            </transition>
        </div>

        <div class="container-fluid" v-else>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-top-nav @backToMenu="selectedOption = $event">Number Charts</app-top-nav>
            </transition>

            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-whole-number-addition v-if="selectedOption === 1"></app-whole-number-addition>
                <app-fraction-addition v-else-if="selectedOption === 2"></app-fraction-addition>
            </transition>
        </div>
<!--        <transition appear appear-class="options-appear" appear-active-class="options-appear-active">-->
<!--            <app-bottom-nav></app-bottom-nav>-->
<!--        </transition>-->

    </div>
</template>

<script>
    // import Title from '../../layout/Title.vue';
    import TitleStatic from '../../layout/TitleStatic.vue';
    import TopNav from '../../layout/TopNav.vue';
    import Options from '../../layout/Options.vue';
    import WholeNumberAddition from './WholeNumberAddition.vue'
    import FractionAddition from "./FractionAddition.vue";

    export default {
        components: {
           // appTitle: Title,
            appTitleStatic: TitleStatic,
            appTopNav: TopNav,
            appOptions: Options,
           // appBottomNav: BottomNav,
            appWholeNumberAddition: WholeNumberAddition,
            appFractionAddition: FractionAddition,
        },
        data: function() {
            return {
                options: [
                    { id: 1, title: 'Whole number addition and multiplication' },
                    { id: 2, title: 'Fraction addition' },
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
