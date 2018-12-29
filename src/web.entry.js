import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = [
  { description: 'Random event 1', date: moment('2018-12-06', 'YYYY-MM-DD') },
  { description: 'Random event 2', date: moment('2018-12-15', 'YYYY-MM-DD') },
  { description: 'Random event 3', date: moment('2018-12-28', 'YYYY-MM-DD') }
];
let initialState = Object.assign({}, store.state, { events });
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
