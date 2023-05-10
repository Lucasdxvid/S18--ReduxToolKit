import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

//! Slice que define nuestra serie de reducers, intitial state y nombre al lugar donde se disparan acciones
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 10,
    times: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1; // El state es el "estado inicial" y counter, el objeto o estado a modificar (counter aqui)
    },
    incrementBy: (state, action) => {
      // Usamos payload porque se refiere a la accion adicional
      state.counter += action.payload; //* Recibe 2 argumentos, el q modifica al state y el q nos permite pasar como property el valor q queremos aumentar
    },
  },
});

//? Ahora simplemente tomamos la acción que a diferencia del reducer no tenemos que pensar en el tipo de acción y  que payload tiene / Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions; //* De aqui vienen nuestras acciones / payloads
