import { useContext, useState } from "react";
import { ContextCart } from "../Context/MyContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../db/Firebase";
import CheckoutForm from "./CheckoutForm";
import Loader from "../Loader/Loader";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [saleId, setSaleId] = useState("");
  const { cart, clearCart } = useContext(ContextCart);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart.map((item) => ({
          id: item.id,
          precio: item.precio,
        })),
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = await addDoc(collection(db, "orders"), order);

      setSaleId(orderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (saleId) {
    return (
      <div className="text-center mb-50">
        <h1>¡Gracias por su compra! :)</h1>
        <br />
        <h1>Código de orden: {saleId}</h1>
      </div>
    );
  }

  return (
    <div>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
