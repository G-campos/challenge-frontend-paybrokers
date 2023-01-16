import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    incremented: state => {
      state.name += 1
    },
    decremented: state => {
      state.name -= 1
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