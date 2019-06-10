import Vue from 'vue';
import VueRouter from 'vue-router';
import Trigonometry from './components/lessons/trigonometry/App.vue';
import TimesTables from './components/lessons/times-tables/App.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/trigonometry', component: Trigonometry, name: 'Trigonometry Walking'},
  {path: '/times-tables', component: TimesTables, name: 'Tackling Times Tables'},
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;