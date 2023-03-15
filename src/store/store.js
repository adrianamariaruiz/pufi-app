import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './slices/counter/counterSlice'
// import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { pufiSlice } from './slices/pufi/pufiSlice'
// src\store\slices\counter\counterSlice.js

export const store = configureStore({
  reducer: {
        pufi: pufiSlice.reducer
  },
})

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     pokemons: pokemonSlice.reducer
//   },
// })