import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { add } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const addtoCart = (data) => {
    dispatch(add(data));
  };
  return (
    <div className="p-10">
      <Link to="/cart" className="w-full flex items-end ">
        <h1 className="underline"> Cart : ({value.length}) items</h1>
      </Link>
      <h2 className="text-red-600">Products</h2>
      <div className="relative w-full h-full grid grid-rows-4 grid-flow-col gap-10">
        {products.map((data) => (
          <div className="border border-red-100 p-4 shadow-md hover:shadow-2xl">
            <div className="flex flex-col items-center ">
              <div className="h-40 my-4 flex flex-col items-center">
                <img src={data.image} alt="" className="w-20 h-20" />
                <p>{data.title}</p>
                <p className="font-bold">Rs.{data.price}</p>
                <br />
              </div>
              <button
                className="bg-sky-400 p-2 rounded-lg text-white w-30 self-center"
                onClick={() => addtoCart(data)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
