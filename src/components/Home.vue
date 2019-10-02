<template>
  <transition appear appear-class="options-appear" appear-active-class="options-appear-active">
    <div class="container app--link-list"> 
      <div class="app--link-item" v-for="lesson in sortedLessons" :key="lesson.name">
        <router-link :to="lesson.link" class="btn btn-outline-success">
          {{lesson.name}}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {    // Add a lesson object with name and link properties whenever a new lesson is created
      lessons: [  
        {name: 'Garden Beds', link: '/garden-beds'},
        {name: 'Tackling Times Tables', link: '/times-tables'},
        {name: 'Trigonometry Walking', link: '/trigonometry'},
        {name:'Truth Tiles 1',link:'/truth-tiles-1'},
        {name:'Truth Tiles 2',link:'/truth-tiles-2'},
        {name:'Take Away Tiles',link:'/take-away-tiles'},
        {name:'Steps',link:'/steps'},
        {name:'Number Tiles',link:'/number-tiles'},
        {name:'Chess Queens',link:'/chess-queens'},
        {name:'Eight Queens',link:'/eight-queens'},
        {name:'Crosses',link:'/crosses'},
        {name:'Angle Estimation',link:'/angle-estimation'},
        {name:'Area Of Triangle',link:'/area-of-triangle'},
        {name:'Biggest Volume',link:'/biggest-volume'},
        {name: 'Ice Cream Flavours', link: '/ice-cream-flavours'},
        {name:'Chances With Crosses',link:'/chances-with-crosses'},
        {name:"Fays' Nines",link:'/fays-nines'},
        {name:"Magic Squares",link:'/magic-squares'},
        {name:"Make A Million", link: '/make-a-million'},
        {name:'Sporting Finals(NRL)',link:'/sporting-finals-NRL'},
        {name:'Sporting Finals(AFL)',link:'/sporting-finals-AFL'},
        {name: 'Dice Basketball', link: '/dice-basketball'},
        {name: 'Dice Footy', link: '/dice-footy'},
        {name: 'Counter Escape', link: '/counter-escape'},
        {name: 'Building Views', link: '/building-views'},
        {name: 'Problem Dice', link: '/problem-dice'},
        {name: 'Crazy Animals', link: '/crazy-animals'},
        {name: 'Cat and mouse', link: '/cat-and-mouse'},
        {name: 'Dice Cricket', link: '/dice-cricket'},
        {name: 'Have A Hexagon', link: '/have-a-hexagon'},
        {name: 'Walk The Plank', link: '/walk-the-plank'},
        {name: 'Nine And Over', link: '/nine-and-over'},
        {name: 'What\'s It Worth', link: '/whats-it-worth'},
        {name: 'Doctor Dart', link: '/doctor-dart'},
        {name:'Dice Differences', link:'/dice-differences'},
      ]
    }
  }, 
  computed: {
    sortedLessons: function() { // Sort lessons on alphabetical order
      const sorted = this.lessons.slice().sort(function(l1, l2) {
        if(l1.name <= l2.name) return -1;
        else return 1;
      });
      return sorted;
    }
  }
}
</script>

<style scoped>
  .app--link-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 1.5rem;
  }
  .app--link-item a {
    display: block;
  }
  
  .options-appear {
    opacity: 0;
  }
  .options-appear-active {
    transition: all 1s;
    transition-delay: .7s;
  }
</style>
