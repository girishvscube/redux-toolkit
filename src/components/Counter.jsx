import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="bg-red-400 text-white p-2" onClick={handleDecrement}>Decrement</button>
      <br/>
      <br/>
      <button className="bg-red-400 p-2 text-white" onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
