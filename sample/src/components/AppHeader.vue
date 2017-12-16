<template>
  <nav class="top-nav">
    <div class="container">
      <div class="nav-wrapper">
        <span class="brand-logo"><router-link to="/">{{ title }}</router-link></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      title: 'Motoo bot'
    }
  }
}
</script>
