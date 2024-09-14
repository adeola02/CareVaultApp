import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

export const recordApp=createSlice({
    name:"recordApp",
    initialState,
    reducers:{
        appUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {appUser}=recordApp.actions;

export default recordApp.reducer