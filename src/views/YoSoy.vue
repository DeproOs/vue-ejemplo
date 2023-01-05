<template>
  <div>
    <v-col>
      <v-row>
        <h1 class="font-weight-medium">Yo Soy</h1>
      </v-row>
      <v-row>
        <v-text-field
            label="Nombre"
            placeholder="Claudio"
            outlined
            v-model="soloNombre"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
            label="Apellido"
            placeholder="Alvarez"
            outlined
            v-model="soloApellido"
        ></v-text-field>
      </v-row>
      <v-row>
        <span>
          Edad: {{ edadPersonalMostrar }}
        </span>
        <v-slider
            color="orange"
            hint="Be honest"
            min="1"
            max="110"
            thumb-label
            v-model="edadPersonal"
            v-on:change="mostrarEdad()"
        ></v-slider>
      </v-row>
      <v-row>
        <v-textarea
            label="Hablame de ti"
            counter
            maxlength="120"
            full-width
            outlined
            v-model="historiaPersonal"
        ></v-textarea>
      </v-row>
      <v-row justify="center">
        <v-btn
            color="primary"
            elevation="2"
            x-large
            v-on:click="(() =>{
              $store.state.nombre = `${soloNombre} ${soloApellido}`
              $store.state.edad = edadPersonal
              $store.state.texto = historiaPersonal
            })"
        >Enviar</v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script>


  export default {
    name: 'Home',

    data(){
      return{
        soloNombre:"",
        soloApellido:"",
        edadPersonal:0,
        edadPersonalMostrar:0,
        historiaPersonal:""
      }
    },
    components: {

    },
    methods:{
      mostrarEdad(){
        this.edadPersonalMostrar = this.edadPersonal;
      }
    }
  }
</script>
