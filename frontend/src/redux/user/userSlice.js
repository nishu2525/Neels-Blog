import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currenUser:null,
    error:null,
    loading:false
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
          },
          signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
          },
          signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          signoutSuccess:(state)=>{
            state.currenUser=null;
            state.error=null;
            state.loading=false;
          },
    },
});

export const {signInStart,signInFailure,signInSuccess,signoutSuccess} =userSlice.actions;

export default userSlice.reducer