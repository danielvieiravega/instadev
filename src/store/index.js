import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import posts from './posts';
import user from './user';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      posts,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
