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
  </div>
</template>

<script>
export default {
  computed: {
    words () {
      return this.$store.state.words
    }
  }
}
</script>