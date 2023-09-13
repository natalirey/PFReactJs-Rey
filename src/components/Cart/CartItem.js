import { useContext } from "react";
import { ContextCart } from "../Context/MyContext";

const CartItem = ({ id, nombre, precio, quantity }) => {
  const { removeProduct } = useContext(ContextCart);

  return (
    <tr key={id}>
      <td className="px-4 py-2 text-center">{nombre}</td>
      <td className="px-4 py-2 text-center">x{quantity}</td>
      <td className="px-4 py-2 text-center">U$D {precio * quantity}</td>
      <td className="px-4 py-2 text-center">
        <button
          onClick={() => {
            removeProduct(id);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;


