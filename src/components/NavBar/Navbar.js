import { Link , NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../CartWidget/assets/logo.jpg";

function Navbar() {
    return (
        <>
        <Link to="/"> <img className="w-44" src={logo} alt="logo"/></Link>
        <nav className="space-x-10">
            <NavLink to="/nike">Nike</NavLink>
            <NavLink to="/jordan">Air Jordan</NavLink>
            <NavLink to="/adidas">Adidas</NavLink>
        </nav>
        <CartWidget />
        </>
    );
}

export default Navbar;