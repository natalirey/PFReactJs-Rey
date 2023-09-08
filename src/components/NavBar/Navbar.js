import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../CartWidget/assets/logo.jpg";

function Navbar() {
  return (
    <>
      <Link to="/">
        <img className="w-52" src={logo} alt="logo" />
      </Link>
      <div className="space-x-10">
        <NavLink to={`/category/nike`} className={({isActive}) => isActive ? 'ActiveOption':'option'}>Nike</NavLink>
        <NavLink to={`/category/jordan`}className={({isActive}) => isActive ? 'ActiveOption':'option'}>Air Jordan</NavLink>
        <NavLink to={`/category/adidas`}className={({isActive}) => isActive ? 'ActiveOption':'option'}>Adidas</NavLink>
      </div>
      <CartWidget />
    </>
  );
}

export default Navbar;
