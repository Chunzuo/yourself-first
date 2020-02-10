export default {
  state: {
    currentItem: "Home"
  },
  mutations: {
    setCurrentHeaderItem(state, value) {
      state.currentItem = value;
    }
  }
};
