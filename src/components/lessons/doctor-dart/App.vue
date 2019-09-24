<template>
    <div>
        <div v-if="selectedOption === -1">
            <app-title-static>Doctor Dart</app-title-static>
            <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
                <app-options :options="options" @selectOption="selectedOption=$event"></app-options>
            </transition>
        </div>

        <div class="container-fluid" v-else>
            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-top-nav @backToMenu="selectedOption = $event">Doctor Dart</app-top-nav>
            </transition>

            <transition appear appear-class="lesson-appear" appear-active-class="lesson-appear-active">
                <app-play-doctor-dart v-if="selectedOption === 1"></app-play-doctor-dart>
                <app-design-your-own-doctor-dart v-else-if="selectedOption === 2"></app-design-your-own-doctor-dart>
            </transition>
        </div>
        <!-- <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
            <app-bottom-nav></app-bottom-nav>
        </transition> -->
    </div>
</template>

<script>
    // import Title from '../../layout/Title.vue';
    import TitleStatic from '../../layout/TitleStatic.vue';
    import TopNav from '../../layout/TopNav.vue';
    import Options from '../../layout/Options.vue';
    import PlayDoctorDart from "./PlayDoctorDart.vue"
    import DesignYourOwnDoctorDart from './DesignYourOwnDoctorDart.vue';
    
    export default {
        components: {
            // appTitle: Title,
            appTitleStatic: TitleStatic,
            appTopNav: TopNav,
            appOptions: Options,
            // appBottomNav: BottomNav,
            appPlayDoctorDart: PlayDoctorDart,
            appDesignYourOwnDoctorDart: DesignYourOwnDoctorDart,
        },
        data: function() {
            return {
                options: [
                    { id: 1, title: 'Play Doctor Dart' },
                    { id: 2, title: 'Design Your Own Doctor Dart' },
                ],
                selectedOption: -1,
                tiles: [9, 11, 8, 11, 8, 10, 8, 10, 9]
            }
        }
    }
</script>

<style>
</style>
