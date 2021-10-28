import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      cantidadjuegos: 0,
      stockjuegos: 0,
      totalventas: 0,
      juegos:
      [
        {codigo: '001', nombre: 'Sekiro', stock: 100, precio: 30000, color:'', destacado: true },
        {codigo: '002', nombre: 'Fifa 21', stock: 100, precio: 25000, color:'', destacado: false },
        {codigo: '003', nombre: 'Gears of War 4', stock: 100, precio: 15000, color:'', destacado: true },
        {codigo: '004', nombre: 'Mario Tenis Aces', stock: 100, precio: 35000, color:'', destacado: false },
        {codigo: '005', nombre: 'Bloodborne', stock: 100, precio: 10000, color:'', destacado: false },
        {codigo: '006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000, color:'', destacado: true },
      ],// fin juegos
    }, //fin state
    getters:{
      juegosConStock: state =>{
        return state.juegos.filter((juego)=>{ return juego.stock > 0 });
      },
      juegosBaratosDisponibles: (state,getters)=>{
        return getters.juegosConStock.filter( (juego) =>{
           return juego.precio < 16000;
        });
      },
      juegoDisponiblePorId: (state,getters)=> (id)=>{
        return getters.juegosConStock.filter( (juego) =>{
           return juego.codigo== id;
        });
      },
},//fin getters
    mutations:{
      contarcantidadjuegos:  (state)=>{
        /* FORMA 1 DE CONTEO
        let totaljuegos = 0;
        state.juegos.forEach( (juego)=>{
          console.log(juego.nombre);
          totaljuegos++;
        });
        console.log(totaljuegos);
        state.cantidadjuegos =  totaljuegos;
        */

        /* FORMA 2 DE CONTEO */
        state.cantidadjuegos = 0;
        state.juegos.forEach( ()=>{
          state.cantidadjuegos++;
        });
      },
      contarstockjuegos:  (state)=>{
        state.stockjuegos=0;
        state.juegos.forEach( (juego)=>{
          state.stockjuegos += juego.stock;
        });
      },//fin contarstockjuegos

      venderjuego(state, juego){
        state.juegos.forEach( (juegoextraido) =>{
          if( (juegoextraido.codigo == juego.codigo) && (juegoextraido.stock > 0) ){
            juegoextraido.stock--;
          }//fin if
        });//cierre forEach
      }, //fin venderproducto
      actualizartotal(state, juego){
        state.totalventas += juego.precio;
      }, //fin actualizartotal
    }, //fin mutations
    actions:{
      vender(context, juego){
        context.dispatch('procesarventa', juego)
        .then(()=>{
            alert('Venta de Juego procesada Exitosamente');
        })
        .catch( ()=>{
          alert('Venta de Juego Rechazada. No hay stock o el Juego no existe');
        });
        context.dispatch('actionactualizartotal',juego);
      },//fin vender
      procesarventa(context, juego){
        return new Promise( (resolve, reject) =>{
          let tiempoejecucion = Math.floor((Math.random()*2000)+1);
          setTimeout( ()=>{
            let resultado = false;
            context.state.juegos.forEach( (eljuego)=>{
              if( (eljuego.codigo == juego.codigo) && (eljuego.stock>0)){
                context.commit('venderjuego', juego);
                resultado = true;
              }
            });
            if(resultado){
              resolve();
            }
            else{
              reject();
            }
          },tiempoejecucion);//Fin setTimeout
        });//fin promesa
      }, //fin procesarventa
      actionactualizartotal(context, juego){
        return new Promise((resolve, reject)=>{
          let tiempoejecucion = Math.floor((Math.random()*1000)+1);
          setTimeout(()=>{
            let resultado = true;
            context.commit('actualizartotal', juego);
            if(resultado){
              resolve();
            }
            else{
              reject();
            }
          },tiempoejecucion);
        });
      },//fin actionactualizartotal


    },//fin actions

  }//fin objeto Store
);
export default store;
