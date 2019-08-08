export const state = () => ({
  navigationToggle: false,
});

export const mutations = {
  updateNavigationToggle(state) {
    state.navigationToggle = !state.navigationToggle;
  },
};

export const getters = {
  getNavigationToggle: state => {
    return state.navigationToggle;
  },
};
