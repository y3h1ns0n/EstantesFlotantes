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
