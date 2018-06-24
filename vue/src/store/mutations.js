import axios from 'axios'

const API_URL = 'motoo.site:3000'

export const state = {
  words: []
}

export const actions = {
  async addWord ({ commit }, word) {
    try {
      await axios.post(`http://${API_URL}/post`, word)
      const res = await axios.get(`http://${API_URL}/allWords`)
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  },
  async updateWord ({ commit }, word) {
    try {
      await axios.post(`http://${API_URL}/update`, word)
      const res = await axios.get(`http://${API_URL}/allWords`)
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  },
  async deleteWord ({ commit }, id) {
    try {
      await axios.post(`http://${API_URL}/delete`, { id })
      const res = await axios.get(`http://${API_URL}/allWords`)
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  },
  async fetchWords ({ commit }) {
    try {
      const res = await axios.get(`http://${API_URL}/allWords`)
      commit('setWords', { words: res.data })
    } catch (err) {
      console.error(err)
    }
  }
}

export const mutations = {
  setWords (state, { words }) {
    state.words = words
  }
}

export const getters = {
  words: state => state.words
}
