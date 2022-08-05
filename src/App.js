import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  // const value = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div className="App">
      {/* <h1>{value}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
