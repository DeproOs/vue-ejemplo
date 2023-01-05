<template>
  <div>
    <v-card >
      <v-row justify="center" class="pt-2">
        <h1 class="font-weight-medium">Mi Información</h1>
      </v-row>

      <v-row >
        <v-col cols="6">
          <span>
          Hola mi nombre es {{ $store.state.nombre }}, tengo la edad de {{ $store.state.edad }} y mis gustos e información son la siguiente: {{ $store.state.texto }}
        </span>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <v-img
              max-width="450"
              src="https://www.moneyunder30.com/wp-content/uploads/2016/10/56_how-to-read-a-stock-chart-648x364-c-default.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>

<script>
export default {

  data() {
    return {
     //
    }
  },
}

</script>