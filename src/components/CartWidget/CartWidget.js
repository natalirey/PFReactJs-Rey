import { NavLink } from "react-router-dom"
import cart from "./assets/cart2.svg"

const CartWidget = () =>{
    return(
        <NavLink to="/carrito">
            <img src={cart} alt="cart-widget"/>
            0
        </NavLink>
    )
}

export default CartWidget;