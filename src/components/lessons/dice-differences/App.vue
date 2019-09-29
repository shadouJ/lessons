<template>
    <div>
        <div v-if="selectedOption===-1">
            <app-title-static>Dice Differences (Prisoners)</app-title-static>
            <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
                <app-options :options="options" @selectOption="selectedOption=$event"></app-options>
            </transition>
        </div>
        <div class="container-fluid" v-else>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-top-nav @backToMenu="selectedOption = $event">Dice Differences (Prisoners)</app-top-nav>
            </transition>

            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-simulate-game v-if="selectedOption === 1"></app-simulate-game>
            </transition>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-play-games v-if="selectedOption === 2"></app-play-games>
            </transition>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-comparing-two v-if="selectedOption === 3"></app-comparing-two>
            </transition>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-experimental v-if="selectedOption === 4"></app-experimental>
            </transition>
        </div>

    </div>
</template>

<script>
    import TitleStatic from '../../layout/TitleStatic.vue';
    import TopNav from '../../layout/TopNav.vue';
    import Options from '../../layout/Options.vue';
    import SimulateGame from './SimulateGame';
    import PlayGames from './PlayGames';
    import ComparingTwo from './ComparingTwo';
    import Experimental from './Experimental';
    import 'bootstrap/dist/css/bootstrap.min.css';

    export default {
        components: {
            appTitleStatic: TitleStatic,
            appTopNav: TopNav,
            appOptions: Options,
            // appBottomNav: BottomNav,
            appSimulateGame: SimulateGame,
            appPlayGames: PlayGames,
            appComparingTwo: ComparingTwo,
            appExperimental:Experimental,

        },
        data: function() {
            return {
                options: [
                    {id: 1, title: 'Simulate game'},
                    {id: 2, title: 'Play many games'},
                    {id: 3, title: 'Comparing two strategies'},
                    {id: 4, title: 'Experimental distribution of dice differences'}
                ],
                selectedOption: -1
            }
        }
    }
</script>

<style>
</style>
