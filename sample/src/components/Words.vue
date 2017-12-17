<template>
  <div class="section">
    <table class="bordered highlight" v-show="words.length > 0">
      <thead>
        <tr>
          <th>keyword</th>
          <th>response</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in words">
          <td>{{ word.keyword }}</td>
          <td>{{ word.response }}</td>
        </tr>
      </tbody>
    </table>
    <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['words'])
  }
}
</script>