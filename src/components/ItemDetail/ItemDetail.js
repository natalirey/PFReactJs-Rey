import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({nombre, imagen, descripcion, precio, marca, stock}) =>{
    return (
        <article className="CardItem2 flex">
            <img src={imagen} alt={nombre} className="ItemImg2" />
            <section className='CardInfo items-start'>
                <h1>{nombre}</h1>
                <p>{marca}</p>
                <br />
                <br />
                <p>{descripcion}</p>
                <br />
                <br />
                <p className='font-bold'>U$D: {precio}</p>
                <ItemCount initial={1} stock={stock} onAdd= {(quantity) => console.log('cantidad agregada ')}/>
            </section>
        </article>
    )
}

export default ItemDetail