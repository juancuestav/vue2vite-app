import BuscadorTicketsAereos from "../domain/BuscadorTicketsAereos";

export default {
  name: "BuscadorTicketsAereos",
  data: () => ({
    entidad: new BuscadorTicketsAereos(),
  }),
};
