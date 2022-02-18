<template>
  <div class="content">
    <div class="sub-content">
      <div class="head-content">
        <img class="head" src="@/assets/img/Oficina.jpg" alt="">
      </div>
      <h1>Estantes de pared flotantes en forma de cubo.</h1>
      <p>
        Si estás buscando la mejor opción para decorar y organizar parte de tus objetos preferidos en un lugar que esté a la vista, has llegado al sitio correcto ya que las repisas o estantes flotantes en forma de cubo, darán a tu hogar esa versatilidad que tanto quieres ya que existe una gran variedad de modelos que sin duda llenarán tus expectativas pues son fabricadas en diferentes materiales como son: madera, MDF, metal y plástico y cuentan con gran variedad de colores y tamaños que se adaptan a los lugares que quieres resaltar dentro de tu hogar.
      </p>

       <p>
        En ESTANTESFLOTANTES te contamos todo lo relacionado con este tipo de repisa en forma de cubo para que tengas la información clara y tomes la mejor decisión al momento de comprar.
      </p>

      <h2>A tener en cuenta antes de comprar repisas flotantes en forma de cubo.</h2>
      <p class="list">
        ▪️ Antes de comprar es importante que  tengas claro, el tipo de uso que le vas a dar a esta repisa, puesto que hay gran variedad de estilos que van desde decorativos, hasta algunos que son más funcionales.
      </p>
      <p class="list">
        ▪️ Tener claras las medidas con que dispones antes de realizar la compra.
      </p>
      <p class="list">
        ▪️ Tener en cuenta el espacio y el ambiente donde quieres tener tu repisa flotante en forma de cubo.
      </p>
      <p class="list">
        ▪️ Contar con un lugar de superficie firme para la instalación segura y duradera.
      </p>
      <p class="list">
        ▪️ Elegir el tipo de material que sea acorde al uso que le quieres dar, recuerda que hay materiales que son sensibles a la intemperie y ambientes con mucha humedad.
      </p>

      <h2>¿De qué tipo de material son las repisas flotantes en forma de cubo?</h2>
      <p>
        Estas repisas son fabricadas en diferentes materiales, así que no te preocupes, pues estas se adaptan a la necesidad de uso que le quieras dar, podrás escoger la mejor opción que se adapte a tus necesidades y a tu hogar.  entre algunos de los materiales en que están fabricadas estas repisas están:
      </p>
      <p class="list">
        <strong>▪️ METÁLICAS</strong>
      </p>
      <div class="material">
        <img src="@/assets/img/Metal.jpg" alt="Material Metal">
        <p>Presentan una mayor resistencia a golpes, y soportan un poco más de peso.</p>
      </div>
      <p class="list">
        <strong>▪️ MADERA</strong>
      </p>
      <div class="material">
      <img src="@/assets/img/Madera.jpg" alt="Material Madera">
      <p>Son las más utilizadas por su presentación y variedad.</p>
      </div>
      <p class="list">
        <strong>▪️ MDF</strong>
      </p>
      <div class="material">
        <img src="@/assets/img/Mdf.jpg" alt="Material Mdf">
        <p>Es un tipo de material derivado de la madera, por tal razón es más económico.</p>
      </div>
      <p>
        Con esta variedad de materiales, ya puedes hacerte una idea de cual es el estante que quieres para tu casa.
      </p>
      <mejores-cubos/>

      <h2>Te dejamos algunas recomendaciones para que disfrutes al máximo tu estante de pared en forma de cubo</h2>
      <p>
        Se recomienda hacer una instalación siguiendo las instrucciones de fábrica, utiliza todos los accesorios de soporte necesarios al momento de la instalación, logrando así que tu estante flotante sea un mueble seguro al momento de poner tus objetos decorativos sobre ella, escoger muy bien el lugar adecuado para así evitar accidentes como golpes, recuerda que la altura es muy importante teniendo en cuenta un fácil  acceso a los objetos que reposan en ella.
      </p>
      <p>
        Los objetos colocados en la repisa de pared, deberán quedar estables sobre su base para que no resbalen y caigan, evitar poner objetos circulares que puedan rodar sobre su superficie, no exceder la carga que soporta la repisa según recomendaciones del fabricante, no apoyarse ni sujetarse por ningún motivo de la repisa flotante. Al seguir estas y otras recomendaciones, evitará al máximo inconvenientes y aumentará la durabilidad de la repisa.
      </p>

      <instalacion/>

      <ventajas :estanteVentaja="estanteVentaja"/>
      <div class="bot-content">
        <img class="bot" src="@/assets/img/Librero.jpg" alt="Estante para libros">
      </div>
    </div>
  </div>
</template>

<script>
import MejoresCubos from './MejoresCubos.vue'
import Ventajas from '../Ventajas/Ventaja.vue'
import Instalacion from '@/components/Instalacion.vue'
export default {
  name: 'EstantesCubos',

  components: { MejoresCubos, Ventajas, Instalacion },

  data () {
    return {
      estanteVentaja: {

        title: 'Algunas ventajas y desventajas de los estantes de pared con forma de cubo.',

        body: 'Ya cuentas con información valiosa anteriormente mencionada en este artículo,  si aun no estás del todo seguro en que este tipo de repisas son las indicadas, te daremos a conocer las principales ventajas y desventajas  que estas tienen, para que así con la información completa, te animes a comprar tu estante flotante con forma de cubo.',

        ventajas: {
          name: 'Ventajas',
          list: [
            '▪️ Variedad de modelos',
            '▪️ Mantienen el orden en tu hogar',
            '▪️ Hay opciones de estantes para pared económicas',
            '▪️ Van bien en los diferentes escenarios de tu casa'
          ]
        },

        desventajas: {
          name: 'Desventajas',
          list: [
            '▪️ El peso que soportan es limitado',
            '▪️ Para cambiarlas de lugar se debe hacer la instalación de nuevo'
          ]
        }
      }
    }
  }

}
</script>

<style lang="stylus" scoped>

.sprite
  background-image url("../../../assets/img/Cubos.jpg")
  background-size 100%
  height 150px
  background-position 0% 0%
</style>
