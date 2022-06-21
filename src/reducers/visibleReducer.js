import { createSlice } from '@reduxjs/toolkit'

const  initialState=false

const visibleSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setVisible() {
      return true
    },
    setInvisible() {
      return false
    }
  }
})

export const {setVisible, setInvisible} = visibleSlice.actions
export default visibleSlice.reducer