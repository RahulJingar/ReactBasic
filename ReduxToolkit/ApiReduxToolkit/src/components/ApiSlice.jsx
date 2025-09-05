import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApi(state,action){
      state.value = action.payload
    }
  }
});

export const { setApi } = apiSlice.actions;
export default apiSlice.reducer;