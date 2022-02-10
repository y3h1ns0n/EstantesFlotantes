<template>
  <div class="content-header">
    <div class="header-nav">
      <a class="img-link" href="../views/Home/Home.vue">
        <img src="@/assets/img/estantesFlotantes.svg" alt="">
      </a>
      <div>
        <div class="img-menu">
          <img src="@/assets/img/Menu.svg" alt="" @click="showNav = !showNav">
        </div>
        <div class="nav-primary" v-show="showNav" @mouseout="showNav = !showNav">
          <router-link to="/">Home</router-link>
          <router-link to="/estantes-circulares">Estantes Circulares</router-link>
          <router-link to="/estantes-cubos">Estantes Cubo</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/privacidad">Política de Privacidad</router-link>
          <router-link to="/cookies">Política de Cookies</router-link>
          <router-link to="/aviso-legal">Aviso Legal</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Title',

  data () {
    return {
      showNav: false
    }
  }

}
</script>
