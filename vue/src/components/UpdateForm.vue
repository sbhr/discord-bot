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
    <div class="row">
      <div class="col s6">
        <a class="btn waves-effect waves-light" @click="update">Update<i class="material-icons right">update</i></a>
      </div>
      <div class="col s6 right-align">
        <a class="waves-effect waves-light red btn modal-trigger" href="#checkModal">Delete<i class="material-icons right">delete</i></a>
      </div>
    </div>
    <div id="checkModal" class="modal">
      <div class="modal-content center-align">
        <p class="flow-text">Are you sure you want to delete this word?</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Disagree</a>
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" @click="deleteWord">Agree</a>
      </div>
    </div>
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
    $(document).ready(function () {
      $('.modal').modal()
    })
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
    },
    deleteWord () {
      this.$store.dispatch('deleteWord', this.word.id)
      this.$router.push('/')
      Materialize.toast('Delete succeeded', 2000)
    }
  }
}
</script>