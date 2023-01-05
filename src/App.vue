<template>
  <v-app>
    <v-row>
      <v-col cols="2" class="header">
        <div>
          <h1 >Titulo</h1>
        </div>
        <v-btn
            class="mt-2"
            block
            elevation="3"
            @click="irAYosoy"
        >1</v-btn>

        <v-btn
            class="mt-2"
            block
            elevation="3"
            @click="irAMiInfo"
        >2</v-btn>
      </v-col>
      <v-col cols="10">
        <v-main>
          <router-view/>
        </v-main>
      </v-col>
    </v-row>

    <v-footer padless >
      <v-col
          class="text-center footer"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>DeproOs®</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    nombre:"",
    edad:0,
    texto:""
  }),

  methods:{
    irAYosoy(){
      this.$router.push('yo-soy')
    },
    irAMiInfo(){
      this.$router.push('mi-info')
    }
  }
};
</script>

<style scoped>
h1{
  background-color: #2196F3;
  color: cornsilk;
  text-align: center;
  padding-top: 5px;
}

.header{
  border: 1px solid grey;
  padding: 0;
}

.footer{
  background-color: #2196F3;
}
</style>