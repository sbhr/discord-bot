import axios from 'axios'

export const state = {
  words: []
}

export const actions = {
  async addWord ({ commit }, word) {
    try {
      await axios.post('http://motoo.site:3001/post', word)
      const res = await axios.get('http://motoo.site:3001/allWords')
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  },
  async fetchWords ({ commit }) {
    try {
      const res = await axios.get('http://motoo.site:3001/allWords')
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  }
}

export const mutations = {
  addWord (state, { word }) {
    state.words.push(word)
  },
  setWords (state, { words }) {
    state.words = words
  }
}

export const getters = {
  words: state => state.words
}
