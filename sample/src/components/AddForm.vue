<template>
  <div class="container">
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
      if (this.word.keyword && this.word.response) {
        this.$store.dispatch('addWord', this.word)
        this.word = Object.assign({}, wordTemplate)
        this.$router.push('/')
        Materialize.toast('Registration succeeded', 2000)
      } else {
        Materialize.toast('Registration failed', 2000)
      }
    }
  }
}
</script>
