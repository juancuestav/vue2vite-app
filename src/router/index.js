import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "buscadorTicketsAereos",
        component: () =>
          import(
            "src/@app/buscadorTicketsAereos/view/BuscadorTicketsAereos.page.vue"
          ),
      },
      {
        path: "/resultado-busqueda-tickets",
        name: "resultadoBusquedaTickets",
        component: () =>
          import(
            "src/@app/resultadosBuscadorTicketsAereos/view/ResultadosBuscadorTicketsAereos.page.vue"
          ),
      },
    ],
  });

const router = createRouter();
export default router;
