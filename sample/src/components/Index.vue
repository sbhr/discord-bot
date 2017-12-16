<template>
  <div class="container">
    <chat-form/>
    <words/>
  </div>
</template>

<script>
import ChatForm from './ChatForm.vue'
import Words from './Words'

export default {
  components: {
    ChatForm,
    Words
  }
}
</script>
