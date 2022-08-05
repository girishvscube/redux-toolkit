import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import cartReducer from '../features/cartSlice'

const store = configureStore({
    reducer : {
        counter : counterReducer,
        cart : cartReducer
    }
})

export default store