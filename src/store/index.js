import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },

    REMOVE_TOKEN(state) {
      localStorage.removeItem('token');
      state.token = '';
    },
  },

  actions: {
    Login({ commit }, authData) {
      return new Promise((resolve, reject) => {
        axios
          .post('login', authData)
          .then((res) => {
            commit('SET_TOKEN', res.data.token);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    Logout({ commit }) {
      commit('REMOVE_TOKEN');
    },
  },
  getters: {
    loggedIn: state => !!state.token,
    token: state => state.token,
  },
});
