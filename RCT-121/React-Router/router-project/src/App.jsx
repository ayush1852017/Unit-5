import { Route, Routes } from "react-router";
import "./App.css";
import { Airpod } from "./Components/Airpod";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Ipad } from "./Components/Ipad";
import { Iphone } from "./Components/Iphone";
import { Login } from "./Components/Login";
import { Mac } from "./Components/Mac";
import { Navbar } from "./Components/Navbar";
import { Onlyonapple } from "./Components/Onlyonapple";
import { ProductPage } from "./Components/ProductPage";
import { Store } from "./Components/Store";
import { Support } from "./Components/Support";
import { TvAndHome } from "./Components/TvAndHome";
import { Watch } from "./Components/Watch";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airpods" element={<Airpod />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/onlyapple" element={<Onlyonapple />} />
        <Route
          path="/store"
          element={
            <PrivateRoute to="/login">
              <Store />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tvandhome" element={<TvAndHome />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/product/:user_id" element={<ProductPage />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
