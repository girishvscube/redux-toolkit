import React from "react";
import { useSelector } from "react-redux";
import { remove } from "../features/cartSlice";
import { useDispatch } from "react-redux";
function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (data) => {
    dispatch(remove(data));
  };
  return (
    <div className="w-full h-full p-4">
      Cart({products.length})<h2 className="text-red-600">Products</h2>
      <div className="flex flex-col w-full h-full borde gap-10">
        {products.map((data) => (
          <div className="border border-yellow-200 p-4 shadow-md hover:shadow-2xl">
            <div className="flex flex-row justify-between">
              <img
                src={data.image}
                alt=""
                className="w-20 h-20"
              />
              <p className="w-60">{data.title}</p>
              <p>Rs.{data.price}</p>
              <br />
              <button
                className="bg-red-400 text-white w-24 rounded-full p-2 self-center"
                onClick={() => removeFromCart(data)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
