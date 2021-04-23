import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barTitle : '사이콘', 
    showDlg : false, 
    userData: null,
    s_dialog: false, 
    s_img_url: null,
    s_file: null,
    s_cur_comp: 'sms',
    s_dialog_gifty: false, 
    s_gifty_data: null, 

  },

  mutations: {
    changeTitle (state, newMsg) {
      state.barTitle = newMsg
    },
    changeDlg (state, newMsg) {
      state.showDlg = newMsg
    },
    saveUserData (state, newMsg) {
      state.userData = newMsg
    },
    changeDialog (state, newMsg) {
      state.s_dialog = newMsg
    },
    setImageUrl (state, newMsg) {
      state.s_img_url = newMsg
    },
    setStoreFile (state, newMsg) {
      state.s_file = newMsg
    },
    changeComp (state, newMsg) {
      state.s_cur_comp = newMsg
    },
    changeDlgGifty (state, newMsg) {
      state.s_dialog_gifty = newMsg
    },
    changeGiftyData (state, newMsg) {
      state.s_gifty_data = newMsg
    },

  }, // mutations

  actions: {
    changeTitle ({ state, commit }, { newMsg }) {
      commit('changeTitle', newMsg)
    },
    changeDlg ({ state, commit }, { newMsg }) {
      commit('changeDlg', newMsg)
    },
    saveUserData ({ state, commit }, { newMsg }) {
      commit('saveUserData', newMsg)
    },
    changeDialog ({ state, commit }, { newMsg }) {
      commit('changeDialog', newMsg)
    },
    setImageUrl ({ state, commit }, { newMsg }) {
      commit('setImageUrl', newMsg)
    },
    setStoreFile ({ state, commit }, { newMsg }) {
      commit('setStoreFile', newMsg)
    },
    changeComp ({ state, commit }, { newMsg }) {
      commit('changeComp', newMsg)
    },
    changeDlgGifty ({ state, commit }, { newMsg }) {
      commit('changeDlgGifty', newMsg)
    },
    changeGiftyData ({ state, commit }, { newMsg }) {
      commit('changeGiftyData', newMsg)
    },

  }, // actions

  modules: {
  },

  getters: {
    getMsg (state) {
      // return `${state.barTitle} => Length : ${state.barTitle.length}`
      return state.barTitle
    },
    getDlgState(state) {
      return state.showDlg
    },
    getUserData(state) {
      return state.userData
    },
    getDialogState(state) {
      return state.s_dialog
    },
    getImageUrl(state) {
      return state.s_img_url
    },
    getStoreFile(state) {
      return state.s_file
    },
    getCurComp(state) {
      return state.s_cur_comp
    },
    getDlgGifty(state) {
      return state.s_dialog_gifty
    },
    getGiftyData(state) {
      return state.s_gifty_data
    },

  } // getters 
})
