<template>
  <div class="section">
    <h4 class="header">登録</h4>
    <div class="row">
        <div class="input-field">
          <input id="keyword" type="text" v-model="word.keyword" class="validate">
          <label for="keyword">Keyword</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field">
          <input id="response" type="text" v-model="word.response" class="validate">
          <label for="response">Response</label>
        </div>
    </div>
    <a class="btn waves-effect waves-light" @click="submit">Submit<i class="material-icons right">send</i></a>
  </div>
</template>

<script>
const wordTemplate = {
  keyword: '',
  response: ''
}

export default {
  data () {
    return {
      word: {}
    }
  },
  created () {
    this.word = Object.assign({}, wordTemplate)
  },
  methods: {
    submit () {
      this.$store.dispatch('addWord', this.word)
    }
  }
}
</script>
