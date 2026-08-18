import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Member } from "../types/types";

const  initialState : Member[] =[]

const membersSlice = createSlice({
    name:"members",
    initialState,
    reducers: {
        addMember : (state,action: PayloadAction<Member>)=>{
            state.push(action.payload)
        }
    },
}
)


export const {addMember} = membersSlice.actions
export default membersSlice.reducer;