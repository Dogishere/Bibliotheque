import { createSlice ,type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types/types";

const initialState: Book[] = [];

const booksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        addBook:(state,action : PayloadAction<Book>) => {
            state.push(action.payload)
        }
    },
});


export const {addBook} = booksSlice.actions;
export default booksSlice.reducer;