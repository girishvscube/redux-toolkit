import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
function App() {
 

  return (
    <div className="App">
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
