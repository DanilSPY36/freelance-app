import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";
import orderSlice from "./slices/orderSlice";
 
const store = configureStore({
    reducer: {
        personState: personSlice,
        orderSlice: orderSlice
    },
});

export default store;