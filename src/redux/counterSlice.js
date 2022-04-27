import { createSlice } from '@reduxjs/toolkit';


// Part1: Define Slice (including reducers and actions)
const initialState = { counterValue: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseOne:(state1,action_add)=>{
      state1.counterValue = action_add.payload;
    },
    decreaseOne:(state2,action_minus)=>{
      state2.counterValue = action_minus.payload;
    },
  },
});

// export state to global
export const selectCounter = (state) => state.counter.counterValue;

// export actions to global
export const { increaseOne } = counterSlice.actions;
export const { decreaseOne } = counterSlice.actions;

// export reducer to global
export default counterSlice.reducer;