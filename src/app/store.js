import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import cartReducer from '../features/cartSlice'
import productReducer from '../features/productSlice'

const store = configureStore({
    reducer : {
        counter : counterReducer,
        cart : cartReducer,
        product : productReducer
    }
})

export default store