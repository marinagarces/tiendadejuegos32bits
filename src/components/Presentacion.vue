<template>
  <div id="Presentacion">
    <h1 v-text="titulopresentacion"></h1>
    <img alt="Vue logo" src="../assets/fatalfury.jpg">
  </div>
</template>
<script>
export default {
  name: 'Presentacion',
  data(){
    return {
      titulopresentacion: 'King of Fighter',
    }
  }, //fin data

}
</script>
<style scoped>
</style>
