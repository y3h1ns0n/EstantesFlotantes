<template>
  <div class="float">
    <Menu @mouseout="toggleViewMenu" v-bind:showMenu="showMenu"/>
    <menu-bottom @click="toggleViewMenu"/>
  </div>
</template>

<script>
import MenuBottom from './Bottom.vue'
import Menu from './Menu.vue'

export default {
  name: 'BottomFloat',

  components: { MenuBottom, Menu },

  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    toggleViewMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="stylus" scoped>
.float
  position fixed
  right 20px
  bottom 40px
  width 200px
  height 310px
  border-radius 10px

.menu
  position absolute
  background-color #400030
  right 0
  bottom 0

.nav
  position absolute
  right 0
  top -40px

</style>
