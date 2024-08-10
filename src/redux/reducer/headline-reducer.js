import {createSlice} from '@reduxjs/toolkit';

const initialState={
  data:null
}

const headlineSlice = createSlice({
  name: 'headline',
  initialState,
  reducers:{
    setHeadlines: (state, action)=>{
      state.data=action.payload
    }
  }
})


export const {setHeadlines} = headlineSlice.actions;

export default headlineSlice.reducer;


