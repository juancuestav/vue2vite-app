import { mapState } from "vuex";

export default {
  name: "ResultadosBuscadorTicketsAereo",
  computed: {
    ...mapState({
      datos: (state) => state.ticketsAereos.datos,
    }),
  },
};
