import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice"
import membersReducer from "../features/membersSlice"

export const store = configureStore({
    reducer: {
        books :booksReducer,
        members:membersReducer
    },
});
 
export type RootState = ReturnType<typeof store.getState>
