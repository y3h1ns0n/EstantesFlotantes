<template>
  <div class="menu">
    <img src="@/assets/img/Menu.svg" alt="menu-bottom">
  </div>
</template>

<script>
export default {
  name: 'MenuBottom'
}
</script>

<style scoped lang="stylus">
.menu
  align-self center
  width 55px
  height 55px
  margin-right 20px
  border solid 2px gray
  border-radius 30px
  cursor pointer
  opacity 0.6

.menu:hover
  transform scale(1.05)
  background-color #460030
  opacity 1

.menu img
  width 100%
  height 100%
  margin 0
  padding 0
</style>
