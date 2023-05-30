import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'slice',
  initialState: {
    page: 0,
  },
  reducers: {
    changePageNumber: (state, delay) => {
      state.page += 1
    },
  },
})

export const { changePageNumber } = slice.actions

export default slice.reducer
