<template>
  <div class="nav" v-show="showMenu">
    <router-link to="/" @click="scrollToTop">Home</router-link>
    <router-link to="/estantes-circulares" @click="scrollToTop">Estantes Circulares</router-link>
    <router-link to="/estantes-cubos" @click="scrollToTop">Estantes Cubo</router-link>
    <router-link to="/about" @click="scrollToTop">About</router-link>
    <router-link to="/privacidad" @click="scrollToTop">Política de Privacidad</router-link>
    <router-link to="/cookies" @click="scrollToTop">Política de Cookies</router-link>
    <router-link to="/aviso-legal" @click="scrollToTop">Aviso Legal</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  props: ['showMenu'],

  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav
  display flex
  flex-direction column
  text-align center
  margin 10px 20px
  width 200px

.nav a
  border solid 1px gray
  background-color #460030
  margin 0
  padding 10px

.nav a:hover
  border solid 1px black
  background-color rgba(255, 262, 255, 0.9)
  color black
  transform scale(1.02)

</style>
