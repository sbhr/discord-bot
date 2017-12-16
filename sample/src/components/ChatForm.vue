<template>
  <form>
    <h4 class="header">登録</h4>
    <div class="row">
        <div class="input-field">
          <input id="keyword" type="text" class="validate">
          <label for="keyword">Keyword</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field">
          <input id="response" type="text" class="validate">
          <label for="response">Response</label>
        </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: 'Enquete'
    }
  }
}
</script>
