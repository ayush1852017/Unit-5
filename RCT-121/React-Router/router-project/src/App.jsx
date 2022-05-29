import { Route, Routes } from "react-router";
import "./App.css";
import { Airpod } from "./Components/Airpod";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Ipad } from "./Components/Ipad";
import { Iphone } from "./Components/Iphone";
import { Mac } from "./Components/Mac";
import { Navbar } from "./Components/Navbar";
import { Onlyonapple } from "./Components/Onlyonapple";
import { Store } from "./Components/Store";
import { Support } from "./Components/Support";
import { TvAndHome } from "./Components/TvAndHome";
import { Watch } from "./Components/Watch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airpods" element={<Airpod />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/onlyapple" element={<Onlyonapple />} />
        <Route path="/store" element={<Store />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tvandhome" element={<TvAndHome />} />
        <Route path="/watch" element={<Watch />} />
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
