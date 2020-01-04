const state = {
  snackbars: []
};

const mutations = {
  setSnackbar(statePassThrough, snackbar) {
    if (!snackbar) {
      return;
    }
    statePassThrough.snackbars = state.snackbars.concat(snackbar);
  }
};

const actions = {
  setSnackbar({ commit }, snackbar) {
    snackbar.showing = true;
    snackbar.color = snackbar.color || "success";
    commit("setSnackbar", snackbar);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
