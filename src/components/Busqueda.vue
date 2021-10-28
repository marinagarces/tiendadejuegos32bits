<template>
  <div id="Busqueda">
    <h1 v-text="titulobusqueda"></h1>
    <input type="text" v-model="busquedaPorId">
    <ul v-if="juegoDisponiblePorIdLocal.length > 0">
      <li v-for="(eljuego, clave) in juegoDisponiblePorIdLocal" v-bind:key="clave">
            <label v-text="eljuego.nombre"></label>
      </li>
    </ul>
    <ul v-else>
        <li> ...  </li>
    </ul>

    <hr>
    <h1 v-text="titulocantidad"></h1>
    <!-- Activar si quiere conteo automatico
    <h1 v-text="cantidadtotaljuegos"></h1>
    -->
    <p id="cantidadjuegos" v-text="totaljuegos"></p> <input type="button" value="Ver Cantidad Total de Juegos" v-on:click="vercantidadjuegos()"><br>
    <p id="cantidadstock" v-text="totalstock"></p><input type="button" value="Ver Cantidad Stock Total de Juegos" v-on:click="vercantidadstock()"><br>

    <hr>
    <h1 v-text="titulojuegos" v-bind:style="colordefondo"></h1>
    <ul>
      <li v-for="(juego, clave) in juegosconstocklocal" v-bind:key="clave" >
            <p v-bind:style="{backgroundColor: juego.color}" >{{ juego.codigo }} | {{ juego.nombre}} | {{ juego.stock}} | {{ juego.precio}}</p>
      </li>
    </ul>

  </div>
</template>
<script>
/* Activar si quiere conteo automatico
import {mapState} from 'vuex'
*/
export default {
  name: 'Busqueda',
  data(){
    return {
      titulobusqueda: 'Busqueda de Juego por ID ',
      busquedaPorId: '',
      titulocantidad:'Cantidad Total de Juegos' ,
      totaljuegos: '',
      totalstock: '',
      titulojuegos: 'Los juegos son:',
      color: '',

    }//fin return
  }, //fin data
  computed:{
  /*Activar si quiere el conteo automatico en vez de boton
  ...mapState({
   cantidadtotaljuegos: (state)=>{
        let lacantidad =  0;
        state.juegos.forEach( (eljuego)=>{
        console.log(eljuego.nombre);
        lacantidad++;
    } );
     return `Total Juegos: ${lacantidad}`;
   },//fin cantidadtotaljuegos

}),//fin mapState
*/
    juegoDisponiblePorIdLocal(){
      return this.$store.getters.juegoDisponiblePorId(this.busquedaPorId);
    },
    juegosconstocklocal(){
        return this.$store.getters.juegosConStock;
    },//fin juegosconstocklocal
  }, //fin computed
  methods:{
    vercantidadjuegos(){
      this.$store.commit('contarcantidadjuegos');
      this.totaljuegos =`Cantidad Total de Juegos: ${this.$store.state.cantidadjuegos} ` ;
    }, //fin vercantidadjuegos
    vercantidadstock(){
      this.$store.commit('contarstockjuegos');
      this.totalstock =`Cantidad Total Stock Juegos: ${this.$store.state.stockjuegos} ` ;
    }, //fin vercantidadjuegos

  },//Fin methods

}
</script>
<style scoped>
li{
  color: gray;
}
#cantidadjuegos{
  color: gray;
  font-size: 30px;
}

#cantidadstock{
  color: gray;
  font-size: 30px;
}
</style>
