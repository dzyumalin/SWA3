import Vue from 'vue';
import Vuex from 'vuex';
import "firebase/auth";
import 'firebase/database';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    lists: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
