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
        {name: 'Ice Cream Flavours', link: '/ice-cream-flavours'}
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
