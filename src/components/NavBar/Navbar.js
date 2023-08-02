import CartWidget from "../CartWidget/CartWidget";


function Navbar() {
    return (
        <>
        <nav>
            <a href="#">Productos</a>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Contacto</a>
        </nav>
        <CartWidget />
        </>
    );
}

export default Navbar;