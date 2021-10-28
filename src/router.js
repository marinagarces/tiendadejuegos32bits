import Vue from 'vue'
import Router from 'vue-router'
import Presentacion from './components/Presentacion.vue'
import Busqueda from './components/Busqueda.vue'
import Ventas from './components/Ventas.vue'
import Totales from './components/Totales.vue'

Vue.use(Router);

export default new Router(
  {
    mode:'history',
    routes:
    [
      {
        path: '/',
        component: Presentacion
      },
      {
        path: '/busqueda',
        component: Busqueda
      },
      {
        path: '/ventas',
        component: Ventas
      },
      {
        path: '/totales',
        component: Totales
      },
    ],
  }
);
