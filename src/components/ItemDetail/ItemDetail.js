import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const ItemDetail = ({nombre, imagen, descripcion, precio, marca, stock}) =>{
    const [value, setValue] = useState(0)

    const handleOnAdd = (quantity) => {
        setValue(quantity)
    }

    return (
        <article className="CardItem2 flex">
            <img src={imagen} alt={nombre} className="ItemImg2" />
            <section className='CardInfo'>
                <h1>{nombre}</h1>
                <p>{marca}</p>
                <br />
                <br />
                <p>{descripcion}</p>
                <br />
                <br />
                <p className='font-bold'>U$D: {precio}</p>
                {value > 0 ? (
                    <Link to='/cart' className='btnVerDetalle'>Ir al carrito</Link>
                ):(
                    <ItemCount initial={1} stock={stock} onAdd= {handleOnAdd}/>
                )
                }
            </section>
        </article>
    )
}

export default ItemDetail