import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";
import orderSlice from "./slices/orderSlice";
 
export const store = configureStore({
    reducer: {
        personState: personSlice,
        orderSlice: orderSlice
    },
});