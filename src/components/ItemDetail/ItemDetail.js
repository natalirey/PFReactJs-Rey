import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, nombre, imagen, descripcion, precio, marca, stock}) =>{
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Marca: {marca}</p>
                <p className="Info">{descripcion}</p>
                <p className="Info">U$D: {precio}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd= {(quantity) => console.log('cantidad agregada ')}/>
            </footer>
        </article>
    )
}

export default ItemDetail