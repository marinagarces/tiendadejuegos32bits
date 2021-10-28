<template>
  <div id="Totales">
    <h1 v-text="titulototales"></h1>
    <h2 v-text="ventastotalizadas" v-bind:style="{backgroundColor: 'orange'}"></h2>
  </div>
</template>
<script>
export default {
  name: 'Totales',
  data(){
    return {
      titulototales: 'Totales',
    }
  }, //fin data
  computed:{
    ventastotalizadas(){
      return this.$store.state.totalventas;
    }
  }, //fin computed

}
</script>
<style scoped>
</style>
