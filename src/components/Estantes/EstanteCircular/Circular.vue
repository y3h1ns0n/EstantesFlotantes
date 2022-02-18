<template>
  <div class="content">
    <div class="sub-content">
      <div class="head-content">
        <img class="head" src="@/assets/img/Circular.png" alt="">
      </div>
      <h1>Estantes flotantes circulares.</h1>
      <p>
        Vamos a darle a tu hogar un toque cálido y fraternal, convirtiendo algunos de los espacios de tu casa en una galería de diseño, para esto solo necesitaremos contar con este tipo de estante circular, pues al tener una forma que no es muy comun sera el atractivo que tu pared necesita. Además podrás organizar tus objetos manteniendo ese balance entre decoración y orden en un solo lugar.
      </p>
      <p>
        Las repisas o estantes flotantes circulares, poseen una gran variedad de modelos y son fabricadas en diferentes tipos de materiales, en diferentes tamaños y colores que sin duda se adaptan a las diferentes necesidades de cada usuario y espacio a ocupar. En ESTANTES FLOTANTES te contamos todo lo relacionado con este tipo de repisa circular para que tengas la información clara y tomes la mejor decisión al momento de comprar.
      </p>

      <separator/>

      <h2>A tener en cuenta antes de comprar estantes flotantes circulares.</h2>
      <p class="list">
        ▪️ Antes de comprar es importante que  tengas claro, el tipo de uso que le vas a dar a esta repisa, puesto que hay gran variedad de estilos que van desde decorativos, hasta algunos que son más funcionales.
      </p>
      <p class="list">
        ▪️ Tener en cuenta el espacio y el ambiente donde quieres tener tu estante flotante circular.
      </p>
      <p class="list">
        ▪️ Tener claras las medidas con que dispones antes de realizar la compra.
      </p>
      <p class="list">
        ▪️ Elegir el tipo de material que sea acorde al uso que le quieres dar, recuerda que hay materiales que son sensibles a la intemperie y ambientes con mucha humedad.
      </p>
      <p class="list">
        ▪️ Contar con un lugar de superficie firme para la instalación segura y duradera.
      </p>

      <separator />

      <material />

      <separator />

      <mejores-circulares/>

      <separator />

      <ventajas :estanteVentaja="estanteVentaja"/>

      <separator />

      <h2>Recomendaciones a tener en cuenta con un estante flotante circular</h2>
      <p>
        Se recomienda hacer una instalación siguiendo las instrucciones de fábrica, utiliza todos los accesorios de soporte necesarios al momento de la instalación, así logrará que el estante de pared sea un mueble seguro al momento de poner tus objetos decorativos sobre ella, instala en el lugar adecuado evitando así accidentes como golpes, recuerda que la altura es muy importante para tener un 100% de acceso a ella.
      </p>
      <div class="sprite"></div>
      <p>
        Los objetos colocados en el estante flotante, deberán quedar estables sobre su base para que no resbalen y caigan, evitar poner objetos circulares que puedan rodar sobre su superficie, no exceder la carga que soporta la repisa según recomendaciones del fabricante, no apoyarse ni sujetarse por ningún motivo de la misma. Al seguir estas y otras recomendaciones, evitará al máximo inconvenientes y aumentará la durabilidad de tu estante circular.
      </p>

      <separator />

      <instalacion />
      <div class="bot-content">
        <img class="bot" src="@/assets/img/circularFooter.jpg" alt="Estante de pared">
      </div>
    </div>
  </div>
</template>

<script>
import MejoresCirculares from './MejoresCirculares.vue'
import Ventajas from '../Ventajas/Ventaja.vue'
import Instalacion from '@/components/Instalacion.vue'
import Separator from '@/components/Separator/Separator.vue'
import Material from '../Materiales/Materiales.vue'
export default {
  name: 'EstantesCirculares',

  components: { MejoresCirculares, Ventajas, Instalacion, Separator, Material },

  data () {
    return {
      estanteVentaja: {

        title: 'Algunas ventajas y desventajas de los estantes flotantes circulares',

        body: 'Ya cuentas con información valiosa anteriormente mencionada en este artículo,  si aun no estás del todo seguro en que este tipo de repisas son las indicadas, te daremos a conocer las principales ventajas y desventajas  que estas tienen, para que así con la información completa, te animes a comprar tu estante flotante circular.',

        ventajas: {
          name: 'Ventajas',
          list: [
            '▪️ Decora y ordena al mismo tiempo',
            '▪️ Variedad de modelos',
            '▪️ Van bien en los diferentes escenarios de tu casa',
            '▪️ Hay opciones de estantes para pared económicas'
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
  background-image url("../../../assets/img/estanteIluminado.png")
  background-size 100%
  height 200px
  background-position 50% 45%
</style>
