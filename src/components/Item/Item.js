import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, imagen, precio, marca}) => {
    
    return(
        
        <article className="CardItem">
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <h2 className="ItemHeader text-center">{nombre}</h2>
                <p className="Info text-center">U$D{precio}</p>
            </section>
            <footer className="ItemFooter text-center">
            <Link to="item/:id"><button className="btnVerDetalle">Ver detalle</button></Link>
            </footer>
        </article>
    )
}

export default Item