import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    page: '/',
    handCommands: 0,
    computer: {
      position: [0, -1.5, -1.8],
      rotation: [0.3, -0.3, 0],
    },
  },
  reducers: {
    handCommand: (state) => {
      state.handCommands = state.handCommands + 1
    },
    showInformationOnComputer: (state) => {
      state.computer.position = [-4.6, -2.8, 17]
      state.computer.rotation = [0.4, 0, 0]
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { changeCanvas, showInformationOnComputer, incrementByAmount } =
  homeSlice.actions

export default homeSlice.reducer
