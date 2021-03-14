<template lang="pug">

.section
  .tile.is-12.is-size-2
    p.has-text-centered CONTROL DE GESTION DE CLIENTES PARA EL SECTOR AUTOMOTRIZ
  section
    b-navbar
      template(#brand='')
        b-navbar-item(tag='router-link' :to="{ path: '/' }")
          img(src='./assets/logo.png' alt='teo')
      template(#start='')
        b-navbar-item( @click='inicio()' )
          | Inicio
        b-navbar-item( @click='indicadores()' )
          | Indicadores
        b-navbar-item( @click='accion(controlCliente)' )
          | Control del cliente
        
        b-navbar-dropdown(label='Gestión')
          b-navbar-item( @click='cliente()' )
            | Gestionar Cliente 
          b-navbar-item( @click='vehiculo()' )
            | Gestionar Vehiculo 
          b-navbar-item( @click='sucursal()' )
            | Gestionar Sucursal 

        b-navbar-dropdown(label='Info')
          b-navbar-item( @click='nosotros()' )
            | Acerca de nosotros
          b-navbar-item( @click='contactanos()' )
            | Contactanos

      template(#end='')
        b-navbar-item(tag='div')
          .buttons
            a.button.is-primary
              strong Sign up
            a.button.is-light
              | Log in  
  .section(v-if="showInicio")
    Vehiculos
  .section(v-if="showContactanos")
    contactanos
  .section(v-if="showNosotros")
    nosotros
  .section(v-if="showIndicadores")
    indicadores



</template>


<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import contactanos from './components/contactanos.vue'
import nosotros from './components/nosotros2.vue'
import indicadores from './components/indicadores.vue'
import Vehiculos from './components/Vehiculos.vue'
import axios from 'axios'
import retorno from './retorno.json'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);
export default {
  name: 'App',
  components: {
    HelloWorld,
    Vehiculos,
    contactanos,
    nosotros,
    indicadores,
  },
  data() {
    return {
      showInicio:true,
      showContactanos:false,
      showNosotros:false,
      showIndicadores:false,
      retorno: retorno,
      info:'',
      checkboxGroup: ['Flint']
    }
  },
  created() {
    // this.accion()
  },
  mounted() {
    this.accion2()
  },
  methods: {
    inicio(){
      this.showInicio=!this.showInicio;
      this.showContactanos=false;
      this.showNosotros=false;
      this.showIndicadores=false;
    },
    contactanos(){
      this.showContactanos=!this.showContactanos;
      this.showInicio=false;
      this.showNosotros=false;
      this.showIndicadores=false;
    },
    nosotros(){
      this.showNosotros=!this.showNosotros;
      this.showInicio=false;
      this.showContactanos=false;
      this.showIndicadores=false;
    },
    indicadores(){
      this.showIndicadores=!this.showIndicadores;
      this.showNosotros=!this.showNosotros;
      this.showInicio=false;
      this.showContactanos=false;
    },
    // accion2: function() {
    //   axios
    //     .get('http://local.backend/varios', {
    //       params: {
    //         'mes': 'this.mes',
    //         'idAuto': 'this.id'
    //       }
    //     })
    //     .then(response => (this.info = response.data))
    // },
    accion2: function() {
      console.log('local')
      axios
        .get('http://127.0.0.1:8000/prueba/public/colores')
        .then(response => (this.info = response.data))
    },
    // accion3: function() {
    //   axios
    //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //     .then(response => (this.info = response))
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
