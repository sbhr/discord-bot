<template>
  <div class="section">
    <table class="bordered highlight" v-show="words.length > 0">
      <thead>
        <tr>
          <th>keyword</th>
          <th>response</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, index) in words">
          <td nowrap>{{ word.keyword }}</td>
          <td @mouseover="showButton">{{ word.response }}</td>
          <td>
            <router-link :to="{ name: 'updateForm', params: { id: word.id }}" v-if="selected == index" class="btn-floating waves-effect waves-light">
              <i class="material-icons">edit</i>
            </router-link>
            <span v-else>    </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large waves-effect waves-light red">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      selected: -1
    }
  },
  computed: {
    ...mapGetters(['words'])
  },
  methods: {
    showButton (e) {
      this.selected = e.target.parentNode.rowIndex - 1
    }
  }
}
</script>