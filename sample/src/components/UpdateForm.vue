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
          <textarea id="response" v-model="word.response" class="materialize-textarea"></textarea>
          <label for="response">Response</label>
        </div>
    </div>
    <a class="btn waves-effect waves-light" @click="update">Update<i class="material-icons right">update</i></a>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      word: {}
    }
  },
  computed: {
    ...mapGetters(['words'])
  },
  created () {
    this.word = _.filter(this.words, { id: this.$route.params.id })[0]
  },
  mounted () {
    Materialize.updateTextFields()
  },
  methods: {
    update () {
      if (this.word.keyword && this.word.response) {
        this.$store.dispatch('updateWord', this.word)
        this.$router.push('/')
        Materialize.toast('Update succeeded', 2000)
      } else {
        Materialize.toast('Update failed', 2000)
      }
    }
  }
}
</script>