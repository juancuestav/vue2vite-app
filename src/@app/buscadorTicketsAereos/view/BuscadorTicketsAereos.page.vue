<template>
  <b-container class="pt-4">
    <b-form @submit.prevent>
      <h4 class="pb-4">Buscador de tickets aéreos</h4>
      <b-card class="p-4">
        <b-row>
          <!-- Ciudad de origen -->
          <b-col lg="3" md="4" class="mb-4">
            <b-form-group label="Ciudad de origen" label-for="ciudad_origen">
              <b-form-input
                id="ciudad_origen"
                v-model="entidad.ciudad_origen"
                placeholder="Ciudad de origen"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <!-- Ciudad de destino -->
          <b-col lg="3" md="4" class="mb-4">
            <b-form-group label="Ciudad de destino" label-for="ciudad_destino">
              <b-form-input
                id="ciudad_destino"
                v-model="entidad.ciudad_destino"
                placeholder="Ciudad de destino"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <!-- Fecha de salida -->
          <b-col lg="3" md="4" class="mb-4">
            <b-form-group label="Fecha de salida" label-for="fecha_salida">
              <b-form-datepicker
                id="fecha_salida"
                v-model="entidad.fecha_salida"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>

          <!-- Fecha de retorno -->
          <b-col lg="3" md="4" class="mb-4">
            <b-form-group label="Fecha de retorno" label-for="fecha_retorno">
              <b-form-datepicker
                id="fecha_retorno"
                v-model="entidad.fecha_retorno"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Botones -->
        <b-row>
          <b-col class="d-grid gap-2 d-md-flex justify-content-md-end">
            <router-link
              :to="{ name: 'resultadoBusquedaTickets' }"
              class="btn btn-primary"
              ><b-icon icon="search" class="me-2"></b-icon>Buscar</router-link
            >
          </b-col>
        </b-row>
      </b-card>
    </b-form>
  </b-container>
</template>

<script src="./BuscadorTicketsAereos.page.js" type="module"></script>
