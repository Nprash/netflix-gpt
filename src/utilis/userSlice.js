import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        addUser:(state, action)=>{
            return action.payload // initial state is null, but if this add user return action.payload then this state will become action.payload(stores userdata)
        },
        removeUser: (state, action) =>{
            return null // removeing the userdata from adduser
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;