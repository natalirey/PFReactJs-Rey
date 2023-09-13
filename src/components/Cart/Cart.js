import { useContext } from "react";
import { ContextCart } from "../Context/MyContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import emptyCart from "../CartWidget/assets/empty_cart.webp";
import trash from "../CartWidget/assets/trash3.svg";
import back from "../CartWidget/assets/back.svg";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(ContextCart);

  console.log("totalQuantity:", totalQuantity);

  if (totalQuantity() === 0) {
    return (
      <div className="text-center mb-20">
        <img className="mx-auto w-32 m-6" src={emptyCart} alt="carrito vacio" />
        <Link to="/" className="btnVerDetalle">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center gap-5">
        <Link to="/">
          <img
            src={back}
            title="Volver atras"
            alt="volver"
            className="w-8 cursor-pointer "
          />
        </Link>
        <img
          onClick={() => clearCart()}
          src={trash}
          alt="vaciar carrito"
          title="Limpiar carrito"
          className=" w-8 cursor-pointer"
        />
      </div>
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
        <h3 className="m-5 p-4 bg-gray-200 shadow-md rounded-lg w-48 text-center mx-auto ">
          Total: U$D {total()}
        </h3>
        <Link to="/checkout" className="btnVerDetalle">
          Realizar pedido
        </Link>
      </div>
    </div>
  );
};

export default Cart;
