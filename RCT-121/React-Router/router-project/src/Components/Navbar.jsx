import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/apple-32.png";
import search from "../Assets/search.png";
import cart from "../Assets/cart.png";
import style from "./navbar.module.css";
export const Navbar = () => {
  return (
    <div className={`${style.navbar} ${style.navbar2}`}>
      <ul className={style.navLinks}>
        <Link to="/" className={style.navLink}>
          <li>
            <img src={logo} alt="" width="20" height="20" />
          </li>
        </Link>

        <Link to="/store" className={style.navLink}>
          <li>Store</li>
        </Link>

        <Link to="/mac" className={style.navLink}>
          <li>Mac</li>
        </Link>

        <Link to="/iPad" className={style.navLink}>
          <li>iPad</li>
        </Link>

        <Link to="/iPhone" className={style.navLink}>
          <li>iPhone</li>
        </Link>

        <Link to="/watch" className={style.navLink}>
          <li>Watch</li>
        </Link>

        <Link to="/airpods" className={style.navLink}>
          <li>AirPods</li>
        </Link>

        <Link to="/tvhome" className={style.navLink}>
          <li>Tv & Home</li>
        </Link>

        <Link to="/onlyapple" className={style.navLink}>
          <li>Only On Apple</li>
        </Link>

        <Link to="/accessories" className={style.navLink}>
          <li>Accessories</li>
        </Link>

        <Link to="/support" className={style.navLink}>
          <li>Supoort</li>
        </Link>

        <img src={search} alt="" width="17" height="17" />

        <Link to="/cart" className={style.navLink}>
          <img src={cart} alt="" width="20" height="20" />
        </Link>
      </ul>
    </div>
  );
};
