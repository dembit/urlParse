import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../redux'

interface list {
  userId: number,
  id: number,
  title: string,
  body:  string
}
// Define the initial state using that type
const initialState = {
  result: null as null | string
}



// Define a type for the slice state
export type BitcoinStateType = typeof initialState

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     getResult: (state, action: PayloadAction<string>) => {
       state.result = action.payload
     },
   
    
  },
  
})

export const {getResult} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counterSlice.value

export default counterSlice.reducer