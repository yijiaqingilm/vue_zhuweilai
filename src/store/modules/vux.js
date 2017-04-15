/**
 * Created by admin on 2017/4/15.
 */
var vuxModule = {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection (state, payload) {
      state.direction = payload.direction;
    }
  }
}
export default vuxModule;
