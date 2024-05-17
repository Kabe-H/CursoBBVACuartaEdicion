import { createSlice } from "@reduxjs/toolkit";

// CONFIGURACIÓN POR DEFECTO DE REDUX
const initialState = 0

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Exportar las acciones generadas automáticamente
export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
