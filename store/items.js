export const state = () => ({
  faseOne: {
    played: false,
  },
  faseTwo: {
    played: false,
  },
  faseThree: {
    played: false,
  },
});

export const getters = {
  getFasePlayed: state => fase => {
    // return 'works!';
    return state[fase].played;
  },
};

export const mutations = {
  setFasePlayed(state, payload) {
    state[payload.fase].played = payload.bool;
  },
};

