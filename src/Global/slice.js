import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    token:""
}

export const recordApp=createSlice({
    name:"recordApp",
    initialState,
    reducers:{
        appUser:(state,action)=>{
            state.user=action.payload
        },
        setToken:(state,action)=>{
            state.token=action.payload
        },
        setMedicalRecords:(state,action)=>{
            state.user.medicalRecords=action.payload
        }
    }
})

export const {appUser,setToken,setMedicalRecords}=recordApp.actions;

export default recordApp.reducer