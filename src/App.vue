<template>
  <div id="app">
  <br>
    <HelloWorld msg="Street Fighter"/>
    <img alt="Vue logo" src="./assets/sf2.jpg">


    <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">Tienda 32 Bits</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <!-- MENU DE NAVEGACION -->
                <ul class="nav navbar-nav ml-auto" id="tienda">
                    <li class="nav-item" role="presentation">
                      <router-link to="/">Presentacion</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/busqueda">Busqueda</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/ventas">Ventas</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/totales">Totales</router-link>
                    </li>

                </ul>
        </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
#tienda a{
  text-shadow: 1px 1px #000;
}

</style>
