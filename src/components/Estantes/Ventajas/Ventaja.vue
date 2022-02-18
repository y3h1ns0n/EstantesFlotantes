<template>
  <div>
    <h2>{{ this.estanteVentaja.title }}</h2>
    <p>{{ this.estanteVentaja.body }}</p>

    <div class="table">
      <table class="positive">
        <tr>
          <th>{{ this.estanteVentaja.ventajas.name }}</th>
        </tr>
        <tr v-for=" l in estanteVentaja.ventajas.list" :key="l">
          <td>{{ l }}</td>
        </tr>
      </table>
      <table class="negative">
        <tr>
          <th>{{ this.estanteVentaja.desventajas.name }}</th>
        </tr>
        <tr v-for=" l in estanteVentaja.desventajas.list" :key="l">
          <td>{{ l }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ventajas',

  props: ['estanteVentaja']
}
</script>

<style lang="stylus" scoped>
td
  padding 5px 20px
  color black

th
  color white
</style>
