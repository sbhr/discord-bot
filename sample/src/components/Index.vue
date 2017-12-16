<template>
  <div class="container">
    <chat-form/>
  </div>
</template>

<script>
import ChatForm from './ChatForm.vue'

export default {
  components: { ChatForm },
  data () {
    return {
      title: 'Enquete'
    }
  }
}
</script>
