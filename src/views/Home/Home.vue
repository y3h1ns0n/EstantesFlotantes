<template>
  <div class="home">
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content/Content.vue'

export default {
  name: 'Home',
  components: {
    Content
  }
}
</script>

<style scoped lang="stylus">
.home
  display grid
  justify-content center
  padding 0
</style>
