<template>
  <section class="container hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="@/assets/estantesFlotantes.svg" alt="logo">
            </figure>
          </div>
          <div class="navbar-end">
            <router-link class="navbar-item" to="/">Buscar</router-link>
            <router-link class="navbar-item" to="about">Nosotros</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Music Play</h1>
        <h2 class="subtitle">Mejores Canciones</h2>
        <pm-player />
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: { PmPlayer }
}
</script>

<style lang="scss" scoped>

.container.hero.is-success {
  margin: 0px;
}

</style>
