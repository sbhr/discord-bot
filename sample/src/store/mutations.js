import axios from 'axios'

export const state = {
  words: []
}

export const actions = {
  addWord ({ commit }, word) {
    commit('addWord', { word })
  },
  async fetchWords ({ commit }) {
    try {
      const res = await axios.get('http://localhost:3001/allWords')
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
