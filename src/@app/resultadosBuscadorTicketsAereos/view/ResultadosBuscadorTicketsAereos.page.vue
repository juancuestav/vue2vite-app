<template>
  <b-container class="pt-4">
    <b-row>
      <b-col>
        <h4>Resultados de búsqueda</h4>
      </b-col>
    </b-row>

    <b-row class="row-cols-1 row-cols-md-3 my-4">
      <b-col v-for="dato in datos" :key="dato.aerolinea" class="col mb-4">
        <b-card>
          <b-card-body>
            <b-card-title class="text-center pb-4"
              ><b-icon icon="cloud" class="me-2"></b-icon
              >{{ dato.aerolinea }}</b-card-title
            >
            <b-card-text>
              <p><b>Precio: </b>$ {{ dato.precio }}</p>
              <p><b>Escalas: </b>{{ dato.escalas }}</p>
              <p><b>Duración: </b>{{ dato.duracion }}</p>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <router-link
      :to="{ name: 'buscadorTicketsAereos' }"
      class="btn btn-primary pill position-fixed bottom-0 end-0 me-4 mb-4 p-2"
      ><b-icon icon="chevron-left" class="me-2"></b-icon>Realizar otra
      búsqueda</router-link
    >
  </b-container>
</template>

<script src="./ResultadosBuscadorTicketsAereos.page.js" type="module"></script>
