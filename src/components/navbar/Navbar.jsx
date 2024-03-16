import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logotipo" />
      </Link>

      {props.showMenu ? (
        <div className="menu">
          <Link to="/historico">Histórico</Link>
          <button onClick={openSidebar} className="btn btn-red">
            {" "}
            <img src={bag} alt="bag" className="icon" />
            Sacola
          </button>
        </div>
      ) : null}
      <Cart />
    </div>
  );
};

export default Navbar;
