import Vue from "vue";
import Vuex from "vuex";

import test from "@/test.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: test.posts,
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
    getPost: (state, id) => {
      return state.posts.find((item) => item.id === id);
    },
  },
  mutations: {
    addPost: (state, payload) => {
      state.posts.push(payload);
    },
    deletePost: (state, id) => {
      state.posts.splice(id, 1);
    },
    updatePost: (state, payload) => {
      state.posts.splice(payload.id, 1, payload.text);
    },
  },
  actions: {},
  modules: {},
});
