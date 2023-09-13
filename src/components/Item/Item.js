import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio}) => {
  return (
    <article className="w-1/5 m-1">
      <img src={imagen} alt={nombre} />
      <section className="text-center">
        <h2 >{nombre}</h2>
        <p className="m-4">U$D {precio}</p>
      </section>
      <section className="text-center">
        <Link to={`/item/${id}`} className="btnVerDetalle">Ver detalle</Link>
      </section>
    </article>
  );
};

export default Item;
