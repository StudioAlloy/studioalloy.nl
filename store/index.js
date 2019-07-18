import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      errors: [],
      title: "studioalloy",
      author: "Mitchel van Eijgen <mvaneijgen@gmail.com>",
      description: "WIJ MAKEN IMPACT MET PIXELS",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
      },
      error(state, payload) {},
    },
  });
};

export default createStore;
