import { createSlice, configureStore } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = productSlice.actions

const store = configureStore({
  reducer: productSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())
store.dispatch(decremented())