import CartWidget from "../CartWidget/CartWidget";
import logo from "../CartWidget/assets/logo.jpg";

function Navbar() {
    return (
        <>
        <img className="w-44" src={logo} alt="logo"/>
        <nav className="space-x-10">
            <a href="#">Ver todo</a>
            <a href="#">Nike / Jordan</a>
            <a href="#">Adidas</a>
        </nav>
        <CartWidget />
        </>
    );
}

export default Navbar;