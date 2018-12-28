import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 12,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      { description: 'Random event 1', date: moment('2018-12-06', 'YYYY-MM-DD') },
      { description: 'Random event 2', date: moment('2018-12-15', 'YYYY-MM-DD') },
      { description: 'Random event 3', date: moment('2018-12-28', 'YYYY-MM-DD') }
    ]
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    }
  }
});
