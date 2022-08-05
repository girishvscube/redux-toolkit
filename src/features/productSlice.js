import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
let STATUSES = {
    IDLE : 'idle',
    LOADING: 'loading',
    ERROR : 'error'
}
const productSlice = createSlice({
  name: "products",
  initialState: {
    data : [],
    status : STATUSES.IDLE
  },
  reducers: {
    setProducts(state,action){
        state.data = action.payload
    },
  },
});

export const { setProducts,decrement } = productSlice.actions;
export default productSlice.reducer;



export const fetchProducts = () =>{

    return async function fetchProductThunk(dispatch,getState){

        try{

            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data,"store")
            dispatch(setProducts(res.data));

        }catch(err){

        }

    }

}