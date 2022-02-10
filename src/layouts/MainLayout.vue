<template>
  <div class="container">
    <HeaderBar/>

    <transition name="fade">
      <router-view/>
    </transition>
    <BottomFloat/>
    <FooterBar/>

  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/HeaderBar'
import FooterBar from '@/components/FooterBar/FooterBar'
import BottomFloat from '@/components/Menu/BottomFloat.vue'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar,
    BottomFloat
  }
}
</script>

<style lang="stylus">
.container
  display grid
  justify-items center
  width 100%

  .fade-enter-active {
    transition: transform 1s, opacity 2s
  }
  .fade-enter {
    opacity 0
    transform: translateY(-40px)
  }
</style>
