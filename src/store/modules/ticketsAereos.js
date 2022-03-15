const state = {
  datos: [
    { precio: 150.5, aerolinea: "Macarena", escalas: 4, duracion: "02:50:00" },
    { precio: 240.0, aerolinea: "Fallain", escalas: 3, duracion: "03:15:10" },
    { precio: 300.5, aerolinea: "Jancy", escalas: 2, duracion: "01:20:00" },
    { precio: 120.0, aerolinea: "Grumpy", escalas: 5, duracion: "00:50:30" },
  ],
};

const getters = {
  datos: (state) => state.datos,
};

export default {
  state,
  getters,
};
