<template>
  <div id="Ventas">
    <h1 v-text="tituloventas"  v-bind:style="colordefondo"></h1>
    <ul>
      <li v-for="(juego, clave) in juegosconstocklocal" v-bind:key="clave" >
            <p>{{ juego.codigo }} | {{ juego.nombre}} | {{ juego.stock}} | {{ juego.precio}}
            <input type="button" value="Vender" v-on:click="venderlocal(juego)">
            </p>

      </li>
    </ul>
    <h2 v-text="ventastotalizadas" v-bind:style="colordefondo"></h2>
  </div>
</template>
<script>
export default {
  name: 'Ventas',
  data(){
    return {
      tituloventas: 'Ventas de Juegos',
      colordefondo: {
        backgroundColor: 'yellow',
      },
    }
  }, //fin data
  computed:{
    juegosconstocklocal(){
        return this.$store.getters.juegosConStock;
    },//fin juegosconstocklocal
    ventastotalizadas(){
      return this.$store.state.totalventas;
    }
  }, //fin computed
  methods:{
    venderlocal(juego){
      this.$store.dispatch('vender', juego);
  },//fin venderlocal
  },//fin methods

}
</script>
<style scoped>
</style>
