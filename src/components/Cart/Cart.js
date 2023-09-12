import { useContext } from "react";
import { ContextCart } from "../Context/MyContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"; 
import emptyCart from "../CartWidget/assets/empty_cart.webp"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(ContextCart);
    
    console.log("totalQuantity:", totalQuantity);

    if (totalQuantity() === 0) { 
        return (
          <div className="text-center">
            <img className="mx-auto w-32 m-6" src={emptyCart} alt="carrito vacio" />
            <Link to="/" className="btnVerDetalle">Ver productos</Link>
            <br />
            <br />
            <br />
            <br />
          </div>
        );
    }

    return (
        <div>
          <section className="flex justify-center m-5">
            <table className="table-auto w-2/3 border shadow-md">
              <thead>
                <tr>
                  <th className="px-4 py-2">Producto</th>
                  <th className="px-4 py-2">Cantidad</th>
                  <th className="px-4 py-2">Subtotal</th>
                  <th className="px-4 py-2">Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((producto) => (
                  <CartItem
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    precio={producto.precio}
                    quantity={producto.quantity}
                  />
                ))}
              </tbody>
            </table>
          </section>
          <div className="text-center">
            <h3 className="m-5 p-4 bg-gray-200 shadow-md rounded-lg text-center w-48 mx-auto">Total: U$D {total()}</h3>
            <button onClick={() => clearCart()} className="btnVerDetalle m-5">Limpiar carrito</button>
          </div>
        </div>
    );
};

export default Cart;


