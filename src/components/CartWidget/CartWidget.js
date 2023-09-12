import { NavLink } from "react-router-dom";
import cart from "./assets/cart2.svg";
// import { contextCart } from "../Context/MyContext";
import { useContext } from "react";

const CartWidget = () => {

  // const valueContext = useContext (contextCart)

  return (
    <NavLink  className="flex gap-2" to="/cart">
      <img className="w-7" src={cart} alt="cart-widget" />
      {/* <span>{valueContext.cantidadTotal}</span> */}
    </NavLink>
  );
};

export default CartWidget;
