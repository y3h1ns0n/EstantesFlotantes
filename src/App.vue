<template>
  <div id="nav">
    <main-layout/>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'app',
  components: { MainLayout }
}
</script>

<style lang="stylus">
#app
  font-family sans-serif, Helvetica, Avenir, Arial
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 1.125rem
  color #2c3e50
  margin 0
  padding 0

</style>
