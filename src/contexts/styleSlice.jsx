import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'style',
  initialState: {
    activeCanvas: true,
    computer: {
      position: [0, -1.5, -1.8],
      rotation: [0.3, -0.3, 0]
    }
  },
  reducers: {
    changeCanvas: (state) => {
      state.activeCanvas = false
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

export const { changeCanvas, showInformationOnComputer, incrementByAmount } = styleSlice.actions

export default styleSlice.reducer