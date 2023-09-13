import { Link, NavLink, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../CartWidget/assets/logo.jpg";

function Navbar() {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      <Link to="/">
        <img className="w-52" src={logo} alt="logo" />
      </Link>
      <div className="space-x-10">
        {!isCartPage && !isCheckoutPage && (
          <>
            <NavLink to={`/category/nike`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Nike</NavLink>
            <NavLink to={`/category/jordan`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Air Jordan</NavLink>
            <NavLink to={`/category/adidas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Adidas</NavLink>
          </>
        )}
      </div>
      {!isCheckoutPage && <CartWidget />}
    </>
  );
}

export default Navbar;


