<template>
  <div class="footer-nav">
    <ul>
      <li>
        <router-link to="/privacidad">Política de Privacidad</router-link>
        <router-link to="/cookies">Política de Cookies</router-link>
        <router-link to="/aviso-legal">Aviso Legal</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style escoped lang="stylus">
.footer-nav
  display flex
  justify-content center
  background-color #460030
  width 100%
  border-top 1px solid gray

li
  display flex
  padding 10px

ul
  padding 0

a
  text-decoration none
  font-size 16px
  margin 20px
  color white
</style>
