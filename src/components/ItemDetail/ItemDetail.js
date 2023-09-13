import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ContextCart } from "../Context/MyContext";

const ItemDetail = ({
  id,
  nombre,
  imagen,
  descripcion,
  precio,
  marca,
  stock,
}) => {
  const [value, setValue] = useState(0);

  const { addProduct } = useContext(ContextCart);

  const handleOnAdd = (quantity) => {
    setValue(quantity);

    const item = {
      id,
      nombre,
      precio,
    };

    addProduct(item, quantity);
  };

  return (
    <article className="flex justify-center items-center gap-35">
      <img src={imagen} alt={nombre} className="ItemImg2" />
      <section className="CardInfo">
        <h1 className="font-bold ">{nombre}</h1>
        <p>{marca}</p>
        <br />
        <br />
        <p>{descripcion}</p>
        <br />
        <br />
        <p className="font-bold ">U$D: {precio}</p>
        {value > 0 ? (
          <div className="flex mt-5">
            <Link to="/cart" className="btnVerDetalle mr-4">
              Ir al carrito
            </Link>
            <Link to="/" className="btnVerDetalle">
              Seguir comprando
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </section>
    </article>
  );
};

export default ItemDetail;
