import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
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

export const { incremented, decremented } = userSlice.actions

const store = configureStore({
  reducer: userSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())
store.dispatch(decremented())