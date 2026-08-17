import { createSlice } from "@reduxjs/toolkit";
import type { Member } from "../types/types";

const  initialState : Member[] =[]

const memberSlice = createSlice({
    name:"members",
    initialState,
    reducers: {
        
    },
}
)

export default memberSlice.reducer;