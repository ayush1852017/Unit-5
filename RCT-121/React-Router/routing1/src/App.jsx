import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { ProductPage } from "./Components/ProductPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:user_id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
