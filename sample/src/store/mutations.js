export const state = {
  words: []
}

export const actions = {
  addWord ({ commit }, word) {
    commit('addWord', { word })
  }
}

export const mutations = {
  addWord (state, { word }) {
    state.words.push(word)
  }
}
