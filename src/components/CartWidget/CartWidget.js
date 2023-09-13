import { NavLink, useLocation } from "react-router-dom";
import cart from "./assets/cart2.svg";
import { useContext } from "react";
import { ContextCart } from "../Context/MyContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(ContextCart);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  return (
    <div className="relative flex gap-2">
      {isCartPage ? (
        <div style={{ visibility: "hidden" }}>
          <img className="w-7" src={cart} alt="cart-widget" />
        </div>
      ) : (
        <NavLink to="/cart">
          <img className="w-7" src={cart} alt="cart-widget" />
          {totalQuantity() > 0 && (
            <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center absolute -top-2 -right-2">
              {totalQuantity()}
            </span>
          )}
        </NavLink>
      )}
    </div>
  );
};

export default CartWidget;
