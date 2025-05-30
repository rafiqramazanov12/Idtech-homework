import { createSlice } from '@reduxjs/toolkit';

const initialFruits = ['Alma', 'Banan', 'Portağal', 'Armud', 'Ananas'];

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState: {
    allFruits: initialFruits,
    selectedFruits: [],
  },
  reducers: {
    toggleFruit: (state, action) => {
      const fruit = action.payload;
      if (state.selectedFruits.includes(fruit)) {
        state.selectedFruits = state.selectedFruits.filter(f => f !== fruit);
      } else {
        state.selectedFruits.push(fruit);
      }
    },
    selectAll: (state) => {
      state.selectedFruits = [...state.allFruits];
    },
    deleteAll: (state) => {
      state.selectedFruits = [];
    },
  },
});

export const { toggleFruit, selectAll, deleteAll } = fruitsSlice.actions;
export default fruitsSlice.reducer;
